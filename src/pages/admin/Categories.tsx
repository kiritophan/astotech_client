import { useEffect, useRef, useState } from 'react'
import api from '@services/apis'

interface Subcategory {
    title: string,
    id: number
}

export default function AddCategory() {
    const imgPreviewRef = useRef();
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

    function addNewCategory(e: FormDataEvent) {
        e.preventDefault();
        let formData = new FormData();
        formData.append("category", JSON.stringify({
            title: (e.target as any).title.value,
        }))
        formData.append("imgs", avatarFile!)

        api.categoryApi.create(formData)
            .then(res => {
                console.log("res", res)
            })
            .catch(err => {

            })

        window.alert("Thêm caterogies thành công")
    }
    return (
        <form className='admin_container' onSubmit={(e) => {
            addNewCategory(e);
        }}>
            <h2>Add Categories</h2>
            <div className='admin_content'>
                <div className='product_infor'>
                    <div className="form_group">
                        <label htmlFor="">Categories Title</label><br />
                        <input style={{ color: 'black' }} name='price' type="text" />
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
            </div>

            <button className='addProduct_btn' type='submit'>Add Categories</button>
        </form>
    )
}
