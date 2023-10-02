import axios from 'axios'
import React, { useState } from 'react'
import api from '@/services/apis';
import { message } from 'antd';


export default function ChangePassword() {
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const [currentPassword, setCurrentPassword] = useState("");

    function handleChangePassword(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        let data = {
            oldPassword: currentPassword,
            newPassword: newPassword
        }
        api.userApi.changePassword(data)
            .then(res => {
                console.log("res", res)
                if (res.status == 200) {
                    setLoading(false);
                    message.success("Please check email");
                }
                if (res.status == 213) {
                    setLoading(false);
                    message.warning(res.data.message);
                }
            })
            .catch(err => {
                console.log("err", err);

                setLoading(false);
                for (let i in err.response.data.message) {
                    message.warning(err.response.data.message[i])
                }
            })
    }
    return (
        <div>
            <h2 className='d-flex justify-content-center mt-3 mb-3'>Change Password</h2>
            <input style={{ border: '1px solid black', margin: '0 auto', width: '50%' }} onChange={(e) => setCurrentPassword(e.target.value)} type="password" placeholder='Mật khẩu cũ' />
            <input style={{ border: '1px solid black', margin: '10px auto', width: '50%' }} onChange={(e) => setNewPassword(e.target.value)} type="password" placeholder='Mật khẩu mới' />
            <div className='d-flex justify-content-center mt-3 mb-3'>
                <button type="submit" className="btn btn-primary" onClick={(e) => handleChangePassword(e)}>Đổi mật khẩu</button>
            </div>
        </div>
    )
}
function setLoading(arg0: boolean) {
    throw new Error('Function not implemented.');
}

