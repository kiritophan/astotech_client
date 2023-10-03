import { useSelector, useDispatch } from 'react-redux'
import { StoreType } from './stores/index'
import { useEffect, createContext, useState } from 'react'
import axios from 'axios'
import { Receipt, User, userAction } from './stores/slices/user.slice'
import './main.scss'
import ChatBox from './components/chatbox/ChatBox'
import { Modal } from 'antd'
import RouteSetup from './routes/RouteSetup'
import { Socket, io } from 'socket.io-client'
import { receiptAction } from './stores/slices/receipt.slice'
import MessageButton from './components/MessageButton/MessageButton'
import api from './services/apis'
/* Context Config */
export const RootContext = createContext(0);

function App() {
  const dispatch = useDispatch();
  const [openChat, setOpenChat] = useState(false);
  const userStore = useSelector((store: StoreType) => store.userStore);

  const receiptStore = useSelector((store: StoreType) => {
    return store.receiptStore
  })

  /* Check Token */
  // useEffect(() => {
  //   axios.post("http://127.0.0.1:3000/api/v1/authentication", {
  //     token: localStorage.getItem("token")
  //   })
  //     .then(res => {
  //       if (res.status == 200) {
  //         dispatch(userAction.setData(res.data.data))
  //       } else {
  //         localStorage.removeItem("token")
  //       }
  //     }).catch(err => {
  //       console.log("vào r")
  //       // localStorage.removeItem("token")
  //     })
  // }, [])

  useEffect(() => {
    api.userApi.authentication()
      .then(res => {
        if (res.status == 200) {
          dispatch(userAction.setData(res.data.data))
        }
        if (res.status == 213) {
          localStorage.removeItem("token")
        }
      })
      .catch(err => {
        console.log("err", err);
      })
  }, [])

  useEffect(() => {
    if (userStore) {
      if (!receiptStore.socket) {
        let socket: Socket = io("http://localhost:3001", {
          query: {
            token: localStorage.getItem("token")
          }
        })
        dispatch(receiptAction.connectSocket(
          socket
        ))
      } else {
        receiptStore.socket.on("onCart", (cart: any) => {
          dispatch(receiptAction.setCart(cart))
        })

        receiptStore.socket.on("onReceipt", () => {

        })
      }
    }
  }, [userStore, receiptStore])




  useEffect(() => {
    if (!userStore.data) {
      let token = localStorage.getItem("token");
      if (token) {
        let socket: Socket = io("http://localhost:3001", {
          query: {
            token
          }
        })
        socket.on("connectStatus", (data: { status: boolean, message: string }) => {
          if (data.status) {
            console.log(data.message)
          } else {
            console.log(data.message)
          }
        })
        socket.on("disconnect", () => {
          dispatch(userAction.setData(null))
          console.log("đã out")
        })

        socket.on("receiveUserData", (user: User) => {
          dispatch(userAction.setData(user))
        })

        socket.on("receiveReceipt", (receipts: Receipt[]) => {
          dispatch(userAction.setReceipt(receipts))
        })

        socket.on("receiveCart", (cart: Receipt) => {
          dispatch(userAction.setCart(cart))
        })

        socket.on("cash-status", (status: boolean) => {
          if (status) {
            Modal.success({
              title: "Đã thanh toán thành công",
              content: "Cảm ơn bạn đã mua hàng",
              onOk: () => {
                // console.log("đã vào!")
                window.location.href = "/thanks"
              }
            })
          }
        })

        socket.on("payQr", (url: string | null) => {
          dispatch(userAction.setCartPayQr(url))
          if (!url) {
            Modal.confirm({
              title: "Thanh toán thất bại",
              content: "Bạn có muốn thanh toán lại không?",
              onOk: () => {
                socket.emit("payZalo", {
                  receiptId: userStore.cart?.id,
                  userId: userStore.data?.id
                })
              }
            })
          }
        })


        dispatch(userAction.setSocket(socket))
      }
    }
  }, [userStore.reLoad])

  // useEffect(() => {
  //   console.log("userStore.cart", userStore.cart)
  // }, [userStore.cart])

  // useEffect(() => {
  //   console.log("userStore.receipt", userStore.receipts)
  // }, [userStore.receipts])

  return (
    <div>
      {openChat == false ? <MessageButton setOpenChat={setOpenChat}></MessageButton> : <div style={{ width: "400px", position: "fixed", right: 0, bottom: 0, zIndex: 999 }}>
        <ChatBox open={openChat} setOpenChat={setOpenChat} />
      </div>}
      <RootContext.Provider value={1}>
        <RouteSetup />
      </RootContext.Provider>
    </div>
  )
}

export default App