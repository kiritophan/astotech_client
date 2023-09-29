import React, { useEffect, useState } from 'react'
import { Picture as PictureType } from '../interfaces/product.interface'
import { useDispatch, useSelector } from 'react-redux'
import { StoreType } from '../stores'
import axios from 'axios'
import { productAction } from '../stores/slices/product.slice'
export default function Picture({ optionId, productId, setOptionId }: { optionId: string | null, productId: string | null, setOptionId: any }) {
    const dispatch = useDispatch()
    const productStore = useSelector((store: StoreType) => {
        return store.productStore
    })
    const [pictures, setPictures] = useState<PictureType[]>([])
    console.log("pictures", pictures);


    useEffect(() => {
        if (productStore.data) {
            for (let i in productStore.data) {
                if (productStore.data[i].id == productId) {
                    for (let j in productStore.data[i].options) {
                        if (productStore.data[i].options[j].id == optionId) {
                            setPictures(productStore.data[i].options[j].pictures)
                        }
                    }
                }
            }
        }
    }, [optionId, productStore.data])
    return (
        <div style={{ width: "100%", height: "100vh", backgroundColor: "rgba(250, 137, 246, 0.7)", position: "fixed", top: 0, left: 0, display: "flex", justifyContent: "center", alignItems: 'center' }}>
            <div style={{ position: "relative", width: "800px", height: "500px", backgroundColor: "white" }}>
                <button onClick={() => {
                    setOptionId(null)
                }} style={{ position: "absolute", right: 0, top: 0 }}>X</button>
                <div>
                    <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        if (e.target.files?.length != 0) {
                            let formData = new FormData();
                            for (let file of e.target.files!) {
                                formData.append("pictures", file)
                            }

                            axios.post(`http://localhost:3000/api/v1/option-pictures/${optionId}`, formData, {
                                headers: {
                                    "Content-Type": "multipart/form-data"
                                }
                            })
                                .then(res => {
                                    dispatch(productAction.insertPictureOptionProduct({
                                        productId,
                                        optionId,
                                        pictures: res.data.data
                                    }))
                                })
                        }
                    }} type="file" multiple placeholder='Thêm Ảnh' />
                </div>
                <ul>
                    {
                        pictures.map((picture, index: number) => (
                            <li key={picture.id}>
                                STT: {index + 1} <img src={picture.icon} style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}