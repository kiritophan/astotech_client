import axios from 'axios';
import React, { useState } from 'react'

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  function handleResetPassword() {
    axios.post('http://127.0.0.1:3000/api/v1/users/reset-password', {
      email
    })
      .then(res => {
        console.log("res", res)
      })
      .catch(err => {
        console.log("err", err)
      })
  }
  return (
    <div>
      <h2>ResetPassword</h2>
      <input onChange={(e) => {
        setEmail(e.target.value)
      }} type="text" value={email} placeholder='your email' />
      <button onClick={() => {
        handleResetPassword()
      }}>Reset</button>
    </div>
  )
}
