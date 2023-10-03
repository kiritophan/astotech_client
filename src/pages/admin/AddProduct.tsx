import { useEffect, useRef, useState } from 'react'
import api from '@services/apis'
import { message } from 'antd';

interface Category {
    id: string;
    title: string;
    avatar: string;
    aciive: boolean;
    products: Product[];
}
interface Product {
    id: string;
    desc: string;
    avatar: string;
    name: string;
    price: number;
    categoryId: string;
}
interface Picture {
    file: File;
    url: string;
}
export default function AddProduct() {
    const imgPreviewRef = useRef();
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    console.log("categories", categories)
    const [pictures, setPictures] = useState<Picture[]>([]);
    const [avatarFile, setAvatarFile] = useState<File | null>(null);
    useEffect(() => {
        api.categoryApi.findAll()
            .then(res => {
                if (res.status != 200) {
                    alert(res.data.message)
                } else {
                    setCategories(res.data.data)
                }
            })
    }, [])

    function addNewProduct(e: FormDataEvent) {
        e.preventDefault();
        let formData = new FormData();
        formData.append("product", JSON.stringify({
            categoryId: (e.target as any).categoryId.value,
            name: (e.target as any).name.value,
            des: (e.target as any).des.value,
            price: (e.target as any).price.value,
        }))
        formData.append("imgs", avatarFile!)
        for (let i in pictures) {
            formData.append("imgs", pictures[i].file)
        }

        api.productApi.create(formData)
            .then(res => {
                console.log("res add thanh cong", res)
            })
            .catch(err => {

            })

        window.alert("Thêm sản phẩm thành công")
    }
    return (
        <form className='admin_container' onSubmit={(e) => {
            addNewProduct(e);
        }}>
            <h2>Add Product</h2>
            <div className='admin_content'>
                <div className='product_infor'>
                    <div className="form_group">
                        <label htmlFor="">Category</label><br />
                        <select name='categoryId'>
                            {
                                categories.map(category => <option key={Math.random() * Date.now()} value={(category as Category).id}>{(category as Category).title}</option>)
                            }
                        </select>
                    </div>
                    <div className="form_group">
                        <label htmlFor="">Product Name</label><br />
                        <input name='name' type="text" />
                    </div>
                    <div className="form_group">
                        <label htmlFor="">Description</label><br />
                        <input name='des' type="text" />
                    </div>
                    <div className="form_group">
                        <label htmlFor="">Price</label><br />
                        <input name='price' type="text" />
                    </div>
                </div>

                <div>

                    <label htmlFor="">Avatar</label><br />
                    <input name='imgs' type="file" onChange={(e) => {
                        if (e.target.files) {
                            if (e.target.files.length > 0) {
                                (imgPreviewRef.current! as HTMLImageElement).src = URL.createObjectURL(e.target.files[0]);
                                setAvatarFile(e.target.files[0])
                            }
                        }
                    }} />
                    <img ref={imgPreviewRef} className='mt-4' style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
                </div>
                <div>

                    <label htmlFor="">Pictures</label><br />
                    <input name="imgs" type="file" multiple onChange={(e) => {
                        if (e.target.files) {
                            if (e.target.files.length > 0) {
                                let tempPictures: Picture[] = [];
                                for (let i in e.target.files) {
                                    if (i == "length") {
                                        break
                                    }
                                    tempPictures.push({
                                        file: e.target.files[i],
                                        url: URL.createObjectURL(e.target.files[i])
                                    })
                                }
                                setPictures(tempPictures)
                            }
                        }
                    }} />
                    <div className='grid grid-cols-3 gap-2 mb-4 mt-4'>
                        {
                            pictures.map(picture => <img src={picture.url} style={{ width: "100px", height: "100px", borderRadius: "50%" }} />)
                        }
                    </div>
                </div>
            </div>

            <button className='addProduct_btn' type='submit'>
                {loading ? <span className='loading-spinner'></span> : "Add Product"}
            </button>
        </form>
    )
}
