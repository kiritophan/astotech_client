import axios from 'axios'
import React, { useState } from 'react'

export default function ChangePassword() {
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")

    function handleChangePassword() {
        let data = {
            oldPassword,
            newPassword
        }
        axios.post("http://127.0.0.1:3000/api/v1/users/change-password", data, {
            headers: {
                "token": localStorage.getItem("token")
            }
        })
            .then(res => {
                console.log("res", res)
            }).catch(err => {
                console.log("err", err)
            })
    }
    return (
        <div>
            <h2>ChangePassword</h2>
            <input value={oldPassword} onChange={(e) => {
                setOldPassword(e.target.value)
            }} type="password" placeholder='mật khẩu cũ' />
            <input value={newPassword} onChange={(e) => {
                setNewPassword(e.target.value)
            }} type="password" placeholder='mật khẩu mới' />
            <button onClick={() => {
                handleChangePassword()
            }}>Đổi</button>
        </div>
    )
}
