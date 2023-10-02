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
      <h2 className='d-flex justify-content-center mt-3 mb-3'>Reset Password</h2>
      <div>
        <div>
          <input onChange={(e) => {
            setEmail(e.target.value)
          }} type="text" value={email} placeholder='your email' style={{ border: '1px solid black', margin: '0 auto', width: '50%' }} />
        </div>
        <div className='d-flex justify-content-center mt-3 mb-3'>
          <button onClick={() => {
            handleResetPassword()
          }} type="button" className="btn btn-primary">Reset</button>
        </div>

      </div>

    </div>
  )
}
