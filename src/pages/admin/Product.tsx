import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Category } from '../../interfaces/category.interface';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../../stores/slices/product.slice';
import { StoreType } from '../../stores';
import { Option, Product as ProductType } from '../../interfaces/product.interface';
import ProductOption from '../../components/product-options/ProductOption';

export default function Product() {
    const dispatch = useDispatch()
    const productStore = useSelector((store: StoreType) => {
        return store.productStore
    })
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/categories")
            .then(res => {
                setCategories(res.data.data)
            })

        axios.get("http://localhost:3000/api/v1/products")
            .then(res => {
                dispatch(productAction.setDataApi(res.data.data))
            })
    }, [])

    const handleCreate = (e: React.FormEvent) => {
        e.preventDefault();
        let newProduct = {
            name: (e.target as any).name.value,
            des: (e.target as any).des.value,
            categoryId: (e.target as any).categoryId.value,
        }
        axios.post("http://localhost:3000/api/v1/products", newProduct)
            .then(res => {
                dispatch(productAction.insertProduct(res.data.data))
            })
    }

    const [productId, setProductId] = useState<string | null>(null);
    console.log("productStore", productStore)
    return (
        <div>
            <h1>Product</h1>
            <form onSubmit={(e: React.FormEvent) => {
                handleCreate(e)
            }} action="">
                <input name='name' type="text" placeholder='name' />
                <input name='des' type="text" placeholder='des' />
                <select name="categoryId">
                    {
                        categories.map((item: Category) => <option key={item.id} value={item.id}>{item.title}</option>)
                    }
                </select>
                <button type='submit'>Tạo</button>
            </form>
            <div>
                <h2>Product Manager</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">name</th>
                            <th scope="col">des</th>
                            <th scope="col">option</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productStore.data?.map((product: ProductType, index: number) => {
                                return (
                                    <tr key={product.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{product.name}</td>
                                        <td>{product.des}</td>
                                        <td>
                                            <button onClick={() => {
                                                setProductId(product.id)
                                            }} type="button" className="btn btn-primary">Show</button>
                                        </td>
                                        <td>
                                            <button>
                                                Edit
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            {
                productId && <ProductOption productId={productId} setProductId={setProductId} />
            }
        </div>
    )
}