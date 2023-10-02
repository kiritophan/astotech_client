import { useEffect, useRef, useState } from 'react'
import api from '@services/apis'
import { message } from 'antd';

interface Subcategory {
    title: string,
    id: number
}

export default function AddCategory() {
    const imgPreviewRef = useRef();
    const [categories, setCategories] = useState([]);
    console.log("categories", categories)

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

    function addNewCategory(e: React.FormEvent) {
        e.preventDefault();

        let data = {
            title: (e.target as any).title.value
        }

        api.categoryApi.create(data)
            .then(res => {
                console.log("res", res)
                message.success("Add category successfully")
            })
            .catch(err => {

            })


    }
    return (
        <form className='admin_container' onSubmit={(e: any) => {
            addNewCategory(e);
        }}>
            <h2>Add Categories</h2>
            <div className='admin_content'>
                <div className='product_infor'>
                    <div className="form_group">
                        <label htmlFor="">Categories Title</label><br />
                        <input style={{ color: 'black' }} name='title' type="text" />
                    </div>
                </div>
                {/* <div>
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
                </div> */}
            </div>

            <button className='addProduct_btn' type='submit'>Add Categories</button>
        </form>
    )
}
