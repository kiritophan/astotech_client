// import axios from 'axios';
// import React from 'react'
// import { Link } from 'react-router-dom';

// export default function Register() {
//   function handleRegister(e: React.FormEvent) {
//     e.preventDefault();
//     let data = {
//       email: (e.target as any).email.value,
//       firstName: (e.target as any).firstName.value,
//       lastName: (e.target as any).lastName.value,
//       userName: (e.target as any).userName.value,
//       password: (e.target as any).password.value
//     }
//    axios.post("http://127.0.0.1:3000/api/v1/users", data)
//    .then(res => {
//     console.log("res", res)
//    })
//    .catch(err => {
//     console.log("err", err)
//    })
//   }
//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={(e) => {
//         handleRegister(e)
//       }}>
//         <div>
//           Email: <input name='email' type="text" />
//         </div>
//         <div>
//           FirstName: <input name='firstName' type="text" />
//         </div>
//         <div>
//           lastName: <input name='lastName' type="text" />
//         </div>
//         <div>
//           userName: <input name='userName' type="text" />
//         </div>
//         <div>
//           Password: <input name='password' type="password" />
//         </div>
//         <div>
//           <button type='submit'>Register</button>
//         </div>
//       </form>
//     </div>
//   )
// }


import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';

import './scss/register.scss'



export default function Register() {
  function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    let data = {
      email: (e.target as any).email.value,
      firstName: (e.target as any).firstName.value,
      lastName: (e.target as any).lastName.value,
      userName: (e.target as any).userName.value,
      password: (e.target as any).password.value
    }
    axios.post("http://127.0.0.1:3000/api/v1/users", data)
      .then(res => {
        console.log("res", res)
      })
      .catch(err => {
        console.log("err", err)
      })
  }
  return (
    <>
      <div className="register_page">
        <div className="register_form">
          {/* Logo */}
          <div className="logo">
            {/* <i className="fa-solid fa-cat"></i> */}
            <span>Uniqlo Register</span>
          </div>
          {/* Form */}
          <form onSubmit={(e) => {
            handleRegister(e)
          }} className="form_content">
            {/* User Name */}
            <div className="form_input">
              <input name="user_name" type="text" />
              <span>User name: </span>
            </div>
            {/* Email */}
            <div className="form_input">
              <input name="email" type="email" />
              <span>Email: </span>
            </div>
            {/* First Name */}
            <div className="form_input">
              <input name="firstName" type="text" />
              <span>First Name: </span>
            </div>
            {/* Last Name */}
            <div className="form_input">
              <input name="lastName" type="text" />
              <span>Last Name: </span>
            </div>
            {/* Password */}
            <div className="form_input">
              <input name="password" type="password" />
              <span>Password: </span>
            </div>
            {/* Re Enter Password */}
            {/* <div className="form_input">
              <input name="password_again" type="password" />
              <span>Password Again: </span>
            </div> */}
            <div className="form_submit">
              <button type="submit" className="form_submit_btn btn btn-success">Register</button>
            </div>
          </form>
          {/* Redirect */}
          <div className="redirect">
            <a href="/login">Bạn đã có tài khoản ? <span style={{ textDecoration: "underline", color: "#16bbf7" }}>Login now!</span></a>
          </div>
        </div>
      </div>

    </>
  )
}
