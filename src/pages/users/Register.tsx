import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import './scss/register.scss'
import { message } from 'antd';



export default function Register() {

  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
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
        if (res.status == 200) {
          setLoading(false);
          message.success(res.data.message);
        }
        if (res.data) {
          // navigate("/");
          window.location.href = "/login";
        }
      })

      .catch(err => {
        console.log("err", err)
        setLoading(false);
      })


  }
  return (
    <>
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
                      type="password"
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
                    <button className='button' type='submit'>
                      {isLoading ? <span className='loading-spinner'></span> : "Sign Up"}
                    </button>
                    {/* <input
                      type="submit"
                      name="submit"
                      className="btn btn-info btn-md"
                      defaultValue="submit"
                    /> */}
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
