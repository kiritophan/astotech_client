import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { StoreType } from '@/stores';
// import { User } from '@/stores/slices/user.slice'
import { message } from 'antd';
import { googleLogin } from '../../firebase';
import { User } from 'firebase/auth';

import api from '@/services/apis';
import { userAction } from '@/stores/slices/user.slice';

interface UserGoogle extends User {
  accessToken: string
}




export default function Login() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const userStore = useSelector((store: StoreType) => {
    return store.userStore
  })

  const navigate = useNavigate();
  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    let data = {
      userNameOrEmail: (e.target as any).userNameOrEmail.value,
      password: (e.target as any).password.value
    }
    axios.post("http://127.0.0.1:3000/api/v1/users/login", data)
      .then(res => {
        console.log("res", res)
        if (res.status == 200) {
          setLoading(false);
          message.success(res.data.message);
          localStorage.setItem("token", res.data.token)
        }

        if (res.data) {
          // navigate("/");
          window.location.href = "/";
        }

      })
      .catch(err => {
        console.log("err", err)
      })
  }
  function handleResendEmail() {
    axios.get("http://127.0.0.1:3000/api/v1/users/resend-email", {
      headers: {
        "token": localStorage.getItem("token")
      }
    })
  }
  console.log("userStore", userStore);



  return (
    <div>
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
                  handleLogin(e)
                }} id="login-form" className="form" action="" method="post">
                  <h3 className="text-center text-info">Login</h3>
                  <label htmlFor="">
                    Login With Google
                  </label>
                  <a onClick={async () => {
                    try {
                      await googleLogin()
                        .then(async (res) => {
                          let data = {
                            accessToken: (res.user as UserGoogle).accessToken,
                            email: res.user.email,
                            userName: res.user.email,
                            password: res.user.uid,
                          }
                          console.log("data", data)
                          await api.userApi.googleLogin(data)
                            .then(res => {
                              if (res.status == 200) {
                                localStorage.setItem("token", res.data.token);
                                dispatch(userAction.reload())
                              }
                              if (res.data) {
                                // navigate("/");
                                window.location.href = "/";
                              }
                            })
                            .catch(err => {
                              console.log("err", err)
                              alert("Google Login Failed")
                            })
                        })
                        .catch(err => {
                          window.alert("Login Google Failed")
                        })

                    } catch (err) {
                      window.alert("Login Google Thất bại, thử lại!")
                    }
                  }} className="social">
                    <i className="fab fa-google-plus-g" style={{ fontWeight: '50px' }} />
                  </a>
                  <div className="form-group">
                    <label htmlFor="email" className="text-info">
                      Username or Email:
                    </label>
                    <br />
                    <input
                      type="text"
                      name='userNameOrEmail'
                      id="email"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-info">
                      Password:
                    </label>
                    <br />
                    <input
                      type="password"
                      name='password'
                      id="password"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="remember-me" className="text-info">
                      <span onClick={() => navigate('/reset-password')}>Forgot Password</span>&nbsp; <br />
                      <span onClick={() => navigate('/change-password')}>Change Password</span>&nbsp;
                      <span>
                        <input id="remember-me" name="remember-me" type="checkbox" />
                      </span>
                    </label>
                    <br />
                    <button className='button btn btn-info btn-md' type='submit'>
                      {isLoading ? <span className='loading-spinner'></span> : "Sign In"}
                    </button>
                    {/* <input
                      type="submit"
                      name="submit"
                      className="btn btn-info btn-md"
                      defaultValue="submit"
                    /> */}
                  </div>
                  <div id="register-link" className="text-right">
                    <a href="/register" className="text-info">
                      Register here
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
