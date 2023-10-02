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
      {/* <div className="register_page">
        <div className="register_form">
         
          <div className="logo">
          
            <span>Uniqlo Register</span>
          </div>
        
          <form onSubmit={(e) => {
            handleRegister(e)
          }} className="form_content">
           
            <div className="form_input">
              <input name="user_name" type="text" />
              <span>User name: </span>
            </div>
         
            <div className="form_input">
              <input name="email" type="email" />
              <span>Email: </span>
            </div>
           
            <div className="form_input">
              <input name="firstName" type="text" />
              <span>First Name: </span>
            </div>
          
            <div className="form_input">
              <input name="lastName" type="text" />
              <span>Last Name: </span>
            </div>
         
            <div className="form_input">
              <input name="password" type="password" />
              <span>Password: </span>
            </div>
          
            <div className="form_submit">
              <button type="submit" className="form_submit_btn btn btn-success">Register</button>
            </div>
          </form>
       
          <div className="redirect">
            <a href="/login">Bạn đã có tài khoản ? <span style={{ textDecoration: "underline", color: "#16bbf7" }}>Login now!</span></a>
          </div>
        </div>
      </div> */}
      <div id="login">
        <h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form onSubmit={(e) => {
                  handleRegister(e)
                }} id="login-form" className="form" action="" method="post">
                  <h3 className="text-center text-info">Login</h3>
                  <div className="form-group">
                    <label htmlFor="username" className="text-info">
                      Username:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="userName"
                      id="username"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username" className="text-info">
                      Email:
                    </label>
                    <br />
                    <input
                      name="email"
                      type="email"
                      id="username"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username" className="text-info">
                      FirstName:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="firstName"
                      id="username"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username" className="text-info">
                      LastName:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="lastName"
                      id="username"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-info">
                      Password:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="password"
                      id="password"
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="remember-me" className="text-info">
                      <span>Remember me</span>&nbsp;
                      <span>
                        <input id="remember-me" name="remember-me" type="checkbox" />
                      </span>
                    </label>
                    <br />
                    <input
                      type="submit"
                      name="submit"
                      className="btn btn-info btn-md"
                      defaultValue="submit"
                    />
                  </div>
                  <div id="register-link" className="text-right">
                    <a href="/login" className="text-info">
                      Login now
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
