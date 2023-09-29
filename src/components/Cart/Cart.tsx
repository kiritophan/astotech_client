
import './cart.scss'
import { message, Modal } from "antd";



message.config({
    top: 200,
    duration: 1,
    maxCount: 1,
    rtl: true,
    prefixCls: "my-message",
});

export default function Cart() {



    return (
        <>

            <div className='cart_container'>
                <div className='cart_shipping'>
                    <h1>Shopping Cart</h1>
                </div>
                <div className="cart_content_container" >

                    <div className="cart_content">
                        <div className="cart_image">Name: </div>
                        <div className="cart_item">
                            <p>
                                <img style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                            </p>
                            <div className="cart_price">Price: </div>
                            <div className="cart_count">
                                <button >
                                    -
                                </button>
                                <span className="quantity" style={{ margin: "20px" }}></span>
                                <button >
                                    +
                                </button>
                            </div>

                            <div>

                                <i style={{
                                    fontSize: "20px",
                                }}
                                    className="fa-solid fa-trash"


                                ></i>
                            </div>
                        </div>

                    </div>


                </div>
                <div>
                    <div className='total-cart'>
                        <span>Total Cart</span>
                        <p>
                            VND
                        </p>

                    </div>

                    <button
                        onClick={() => {
                            window.location.href = '/payment'
                        }}
                        type="button" className="btn btn-bgr btn-summary btn-block btn-lg focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">
                        Check Out
                    </button>
                </div>
            </div>

        </>

    )
}
