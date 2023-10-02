import React from 'react'
import { useSelector } from 'react-redux'
import { StoreType } from '@/stores'
import { useNavigate } from 'react-router-dom'
export default function CartCom() {
    const navigate = useNavigate();
    const userStore = useSelector((store: StoreType) => {
        return store.userStore
    })
    console.log("userstore", userStore)

    const cart = userStore.cart?.detail;
    const subTotal = cart?.reduce((total: number, item: any) => {
        return total += item.quantity * item.option.price
    }, 0)
    console.log("subTotal", subTotal)


    return (
        <div>



            <div className="card">
                <div className="card-body">
                    <div className="container mb-5 mt-3">
                        <div className="row d-flex align-items-baseline">
                            <div className="col-xl-9">
                                <p style={{ color: "#7e8d9f", fontSize: 20 }}>
                                    Invoice &gt;&gt; <strong>ID: #123-123</strong>
                                </p>
                            </div>
                            <div className="col-xl-3 float-end">
                                <a
                                    className="btn btn-light text-capitalize border-0"
                                    data-mdb-ripple-color="dark"
                                >
                                    <i className="fas fa-print text-primary" /> Print
                                </a>
                                <a
                                    className="btn btn-light text-capitalize"
                                    data-mdb-ripple-color="dark"
                                >
                                    <i className="far fa-file-pdf text-danger" /> Export
                                </a>
                            </div>
                            <hr />
                        </div>
                        <div className="container">
                            <div className="col-md-12">
                                <div className="text-center">
                                    <i className="fab fa-mdb fa-4x ms-0" style={{ color: "#5d9fc5" }} />
                                    <p className="pt-0">MDBootstrap.com</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-8">
                                    <ul className="list-unstyled">
                                        <li className="text-muted">
                                            To: <span style={{ color: "#5d9fc5" }}>John Lorem</span>
                                        </li>
                                        <li className="text-muted">Street, City</li>
                                        <li className="text-muted">State, Country</li>
                                        <li className="text-muted">
                                            <i className="fas fa-phone" /> 123-456-789
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-xl-4">
                                    <p className="text-muted">Invoice</p>
                                    <ul className="list-unstyled">
                                        <li className="text-muted">
                                            <i className="fas fa-circle" style={{ color: "#84B0CA" }} />{" "}
                                            <span className="fw-bold">ID:</span>#123-456
                                        </li>
                                        <li className="text-muted">
                                            <i className="fas fa-circle" style={{ color: "#84B0CA" }} />{" "}
                                            <span className="fw-bold">Creation Date: </span>Jun 23,2021
                                        </li>
                                        <li className="text-muted">
                                            <i className="fas fa-circle" style={{ color: "#84B0CA" }} />{" "}
                                            <span className="me-1 fw-bold">Status:</span>
                                            <span className="badge bg-warning text-black fw-bold">
                                                Unpaid
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row my-2 mx-1 justify-content-center">
                                <table className="table table-striped table-borderless">
                                    <thead
                                        style={{ backgroundColor: "#84B0CA" }}
                                        className="text-white"
                                    >
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Qty</th>
                                            <th scope="col">Unit Price</th>
                                            <th scope="col">Amount</th>
                                        </tr>

                                    </thead>
                                    <tbody>

                                        {
                                            userStore.cart?.detail.map((item: any, index) => {
                                                return <tr key={Date.now() * Math.random()}>
                                                    <th scope="row"> {index + 1}</th>
                                                    <td>{item.option.product.name + `[${item.option.title}]`}</td>
                                                    <td><input type="number" defaultValue={item.quantity} onChange={(e) => {
                                                        userStore.socket?.emit("addToCart", {
                                                            receiptId: item.receiptId,
                                                            optionId: item.optionId,
                                                            quantity: Number(e.target.value)
                                                        })
                                                    }} /></td>

                                                    <td>{item.option.price}</td>
                                                    <td>{item.quantity * item.option.price}</td>

                                                </tr>
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                            <div className="row">
                                <div className="col-xl-8">
                                    <p className="ms-3">Add additional notes and payment information</p>
                                </div>
                                <div className="col-xl-3">
                                    <ul className="list-unstyled">
                                        <li className="text-muted ms-3">
                                            <span className="text-black me-4">Sub Total</span>${subTotal}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <hr />
                            <form onSubmit={(e: React.FormEvent) => {
                                e.preventDefault();
                                let payMode = (e.target as any).payMode.value;
                                console.log("payMode", payMode)
                                userStore.socket?.emit("payCash", {
                                    receiptId: userStore.cart?.id,
                                    userId: userStore.data?.id
                                })

                            }}>
                                <input name='payMode' type="radio" value={"CASH"} defaultChecked />Cash
                                <input name='payMode' type="radio" value={"ZALO"} />Zalo
                                <button type='submit'
                                    className="btn btn-primary text-capitalize" onClick={() => navigate("/checkout")}>Thanh Toán</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
