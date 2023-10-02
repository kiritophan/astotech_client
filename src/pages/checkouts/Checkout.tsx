import { useEffect, useState } from 'react';
import './checkout.scss';
import api from '@/services/apis';
import { message } from 'antd';
import { StoreType } from '@/stores';
import { useSelector } from 'react-redux';
import { QRCode } from 'antd'

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

interface newUserReceipt {
    total: number;
    payMode: string;
}

export default function Checkout() {
    // const [cart, setCart] = useState<CartItemDetail[]>([]);
    const [loading, setLoading] = useState(false);
    const [isLogin, checkIsLogin] = useState(localStorage.getItem("token"));
    const userStore = useSelector((store: StoreType) => store.userStore);


    let cart = userStore.cart?.detail

    console.log("cart", cart);

    function handleCheckOut(e: React.FormEvent) {
        e.preventDefault();
        let payMode = (e.target as any).payMode.value;
        console.log("payMode", payMode)
        if (payMode == "CASH") {
            userStore.socket?.emit("payCash", {
                receiptId: userStore.cart?.id,
                userId: userStore.data?.id
            })
        }

        if (payMode == "ZALO") {
            userStore.socket?.emit("payZalo", {
                receiptId: userStore.cart?.id,
                userId: userStore.data?.id
            })
        }
    }

    const subTotal = cart?.reduce((total: number, item: any) => {
        return total += item.quantity * item.option.price
    }, 0)

    console.log('subTotal', subTotal);

    return (
        <div className='checkout-container'>
            <div className='main'>
                <header className='checkout-header'>
                    <a href="/">
                        <span>Home</span>
                    </a>
                </header>
                <nav className='checkout-nav'>
                    <ol>
                        <li>
                            Cart
                            <span className="material-symbols-outlined">
                                chevron_right
                            </span>
                        </li>
                        <li>
                            Information
                            <span className="material-symbols-outlined">
                                chevron_right
                            </span>
                        </li>
                        <li>
                            Shipping
                            <span className="material-symbols-outlined">
                                chevron_right
                            </span>
                        </li>
                        <li>Payment</li>
                    </ol>
                </nav>
                <form action="" onSubmit={(e) => handleCheckOut(e)}>
                    <div className="form-group">
                        <input type="text" placeholder='First name' required className='firstName' />
                        <input type="text" placeholder='Last name' required className='lastName' />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder='Email' required className='email' name='email' />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder='Address' required className='address' />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder='Apartment, suite, etc. (optional)' required className='apartment' />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder='city' required className='city' />
                        <select placeholder='Province' required>
                            <option disabled selected hidden>Province</option>
                            <option value="">A</option>
                            <option value="">B</option>
                        </select>
                        <input type="text" placeholder='Postal code' required className='postalCode' />
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder='Phone (optional)' required className='phone' name='phone' />
                    </div>
                    <div className='payMode'>
                        <div className='cash'>
                            <input type="radio" name='payMode' value="CASH" /> <span>CASH</span> <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/images%2Flogo%2Fdollar.png?alt=media&token=1c7122a8-d844-4a4a-bf3b-10da944e1f71" alt="" />
                        </div>
                        <div className='zalo'>
                            <input type="radio" name='payMode' value="ZALO" /> <span>ZALO</span> <img src="https://firebasestorage.googleapis.com/v0/b/coffee-app-bbb51.appspot.com/o/images%2Flogo%2Fzalo.webp?alt=media&token=a125c1dc-0788-48da-a0ea-24ba4b45d406" alt="" />
                        </div>
                    </div>
                    <button className='continue-button' type='submit'>
                        {loading ? <span className='loading-spinner'></span> : "Continue to shipping"}
                    </button>
                </form>
                <div className='checkout-content'></div>
                {
                    userStore.cartPayQr && <QRCode value={userStore.cartPayQr} icon='https://cdn.haitrieu.com/wp-content/uploads/2022/10/Logo-ZaloPay-Square.png' />
                }
            </div>
            <aside className='sidebar'>
                <div className="sidebar-content">
                    <div className="order-products">
                        {cart && cart.length > 0 ?
                            cart?.map((product, index) => (
                                <div className="order-product" key={(product as any).id}>
                                    <div className='order-product-left'>
                                        <img src={(product as any).option.pictures[0].icon} alt="" />
                                        <h5>{product.option.product.name}</h5>
                                        <p className='order-product-quantity'>{product.quantity}</p>
                                    </div>
                                    <div className='order-product-infor'>
                                        <p>${(product as any).option.price}</p>
                                    </div>
                                </div>
                            ))
                            : <div>Your Order is empty</div>}
                    </div>
                    <div className="order-total">
                        <div className=''>
                            <p className='subtotal-name'>Subtotal</p>
                            <p className=''>${subTotal}</p>
                        </div>
                    </div>
                    <div className=''>
                        <p className=''>Total</p>
                        <p className=''>${subTotal}</p>
                    </div>
                </div>
            </aside>
        </div>
    )
}
