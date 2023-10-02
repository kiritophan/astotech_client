
// import './cart.scss'
// import { message, Modal } from "antd";
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import { useDispatch, useSelector } from 'react-redux';
// import { StoreType } from '@/stores';

// message.config({
//     top: 200,
//     duration: 1,
//     maxCount: 1,
//     rtl: true,
//     prefixCls: "my-message",
// });

// interface Product {
//     id: string;
//     name: string;
//     avatar: string;
//     price: number;
//     des: string;
//     categoryId: string;
//     productPictures: {
//         id: string;
//         path: string;
//     }[]
// }

// interface CartItem {
//     productId: string;
//     quantity: number;
//     price: number;
// }

// interface CartItemDetail extends CartItem {
//     productDetail: Product
// }

// interface newGuestReceipt {
//     email: string;
//     phoneNumber: string;
//     total: number;
//     payMode: string;
// }


// export default function Cart() {
//     const { t } = useTranslation();
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const [isLoading, setIsLoading] = useState(false);

//     const [cart, setCart] = useState<CartItemDetail[]>([]);

//     const handleIncreaseQuantity = (index: number) => {
//         const updatedCart = [...cart];
//         updatedCart[index].quantity += 1;
//         localStorage.setItem("carts", JSON.stringify(updatedCart));
//         setCart(updatedCart);
//     };
//     const handleDecreaseQuantity = (index: number) => {
//         const updatedCart = [...cart];
//         if (updatedCart[index].quantity > 1) {
//             updatedCart[index].quantity -= 1;
//             localStorage.setItem("carts", JSON.stringify(updatedCart));
//             setCart(updatedCart);
//         }
//     };

//     const handleDeleteProduct = (productId: string) => {
//         let updatedCart = cart.filter((item) => item.productId != productId);
//         localStorage.setItem("carts", JSON.stringify(updatedCart));
//         setCart(updatedCart);
//         // console.log("productId", productId)
//     }

//     const subTotal = cart.reduce((total, item) => {
//         return total + item.quantity * item.productDetail.price
//     }, 0)

//     const cartQuantity = cart.reduce((total, item) => {
//         return total + item.quantity
//     }, 0)

//     const userStore = useSelector((store: StoreType) => {
//         return store.userStore
//     })
//     console.log("🚀 ~ file: Cart.tsx:90 ~ userStore ~ userStore:", userStore)

//     console.log("cart", cart);


//     return (
//         <>

//             <div className='cart_container'>
//                 <span className="material-symbols-outlined">
//                     shopping_bag
//                 </span>
//                 <span>{userStore.cart?.detail.reduce((value, cur) => {
//                     return value += cur.quantity
//                 }, 0)}</span>
//                 <div className='cart_shipping'>
//                     <h1>Shopping Cart</h1>
//                 </div>
//                 <div className="cart_content_container" >

//                     <div className="cart_content">
//                         <div className="cart_image">Name: </div>
//                         <div className="cart_item">
//                             <p>
//                                 <img style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
//                             </p>
//                             <div className="cart_price">Price: </div>
//                             <div className="cart_count">
//                                 <button >
//                                     -
//                                 </button>
//                                 <span className="quantity" style={{ margin: "20px" }}></span>
//                                 <button >
//                                     +
//                                 </button>
//                             </div>

//                             <div>

//                                 <i style={{
//                                     fontSize: "20px",
//                                 }}
//                                     className="fa-solid fa-trash"


//                                 ></i>
//                             </div>
//                         </div>

//                     </div>


//                 </div>
//                 <div>
//                     <div className='total-cart'>
//                         <span>Total Cart</span>
//                         <p>
//                             VND
//                         </p>

//                     </div>

//                     <button
//                         onClick={() => {
//                             window.location.href = '/payment'
//                         }}
//                         type="button" className="btn btn-bgr btn-summary btn-block btn-lg focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">
//                         Check Out
//                     </button>
//                 </div>
//             </div>

//         </>

//     )
// }





import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./cart.scss"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import api from '@/services/apis';
import { useDispatch } from 'react-redux';
import { Modal } from 'antd';
import { message, Popconfirm } from 'antd';
const text = 'Are you sure to delete this task?';
const description = 'Delete product';
import { useSelector } from 'react-redux';
import { StoreType } from '@/stores';
// Define a union type for the allowed placement values
type OffcanvasPlacement = 'top' | 'bottom' | 'start' | 'end';

interface OffCanvasExampleProps {
    name: string;
    placement: OffcanvasPlacement | undefined; // Use the defined union type
}

interface Product {
    id: string;
    name: string;
    avatar: string;
    price: number;
    des: string;
    categoryId: string;
    productPictures: {
        id: string;
        path: string;
    }[]
}

interface CartItem {
    productId: string;
    quantity: number;
    price: number;
}

interface CartItemDetail extends CartItem {
    productDetail: Product
}

interface newGuestReceipt {
    email: string;
    phoneNumber: string;
    total: number;
    payMode: string;
}

export default function cart() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [cart, setCart] = useState<CartItemDetail[]>([]);

    const handleIncreaseQuantity = (index: number) => {
        const updatedCart = [...cart];
        updatedCart[index].quantity += 1;
        localStorage.setItem("carts", JSON.stringify(updatedCart));
        setCart(updatedCart);
    };

    const handleDecreaseQuantity = (index: number) => {
        const updatedCart = [...cart];
        if (updatedCart[index].quantity > 1) {
            updatedCart[index].quantity -= 1;
            localStorage.setItem("carts", JSON.stringify(updatedCart));
            setCart(updatedCart);
        }
    };

    const handleDeleteProduct = (productId: string) => {
        let updatedCart = cart.filter((item) => item.productId != productId);
        localStorage.setItem("carts", JSON.stringify(updatedCart));
        setCart(updatedCart);
        // console.log("productId", productId)
    }
    

    const subTotal = cart.reduce((total, item) => {
        return total + item.quantity * item.productDetail.price
    }, 0)

    const cartQuantity = cart.reduce((total, item) => {
        return total + item.quantity
    }, 0)

    const userStore = useSelector((store: StoreType) => {
        return store.userStore
    })
    return (
        <>
            <button onClick={() => navigate("/cart")} className='cart__button'>
                <span className="material-symbols-outlined">
                    shopping_cart
                </span>
                <span>{userStore.cart?.detail.reduce((value, cur) => {
                    return value += cur.quantity
                }, 0)}</span>
            </button>

        </>
    );
}
