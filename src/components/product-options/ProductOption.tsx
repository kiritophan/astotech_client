import React, { useEffect, useState } from 'react'
import { Option } from '../../interfaces/product.interface'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../../stores/slices/product.slice';
import { StoreType } from '../../stores';
import Picture from '../Picture';

export default function ProductOption({ productId, setProductId }: {
    productId: string | null,
    setProductId: any
}) {
    const [optionData, setOptionData] = useState<Option[]>([])

    const productStore = useSelector((store: StoreType) => {
        return store.productStore
    })

    const dispatch = useDispatch()

    useEffect(() => {
        if (productId && productStore.data) {
            for (let i in productStore.data) {
                if (productStore.data[i].id == productId) {
                    setOptionData(productStore.data[i].options)
                }
            }
        }
    }, [productId, productStore.data])

    const [optionId, setOptionId] = useState<null | string>(null)
    return (
        <div style={{ width: "100%", height: "100vh", backgroundColor: "rgba(250, 137, 246, 0.7)", position: "fixed", top: 0, left: 0, display: "flex", justifyContent: "center", alignItems: 'center' }}>
            <div style={{ position: "relative", width: "800px", height: "500px", backgroundColor: "white" }}>
                <button onClick={() => {
                    setProductId(null)
                }} style={{ position: "absolute", right: 0, top: 0 }}>X</button>
                <h2>Product Options</h2>
                <button onClick={() => {
                    let newOption = {
                        productId: productId,
                        price: Number(window.prompt("Nhập giá option")),
                        title: window.prompt("Nhập title option")
                    }
                    axios.post("http://localhost:3000/api/v1/product-options", newOption)
                        .then(res => {
                            dispatch(productAction.insertOptionProduct(res.data.data))
                        })
                }}>Thêm Mới</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">title</th>
                            <th scope="col">price</th>
                            <th scope="col">status</th>
                            <th scope="col">pictures</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            optionData?.map((option, index: number) => {
                                return (
                                    <tr key={option.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{option.title}</td>
                                        <td>{option.price}</td>
                                        <td>{option.status ? "Đang bán" : "Đang Ẩn"}</td>
                                        <td>
                                            <button onClick={() => {
                                                setOptionId(option.id)
                                            }} type="button" className="btn btn-primary">Show Pictures</button>
                                        </td>
                                        <td>@mdo</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            {
                optionId && <Picture setOptionId={setOptionId} optionId={optionId} productId={productId} />
            }
        </div>
    )
}