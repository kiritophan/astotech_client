import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { StoreType } from '@/stores';
import { User } from '@/stores/slices/user.slice'
export default function Login() {
  const userStore = useSelector((store: StoreType) => {
    return store.userStore
  })
  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    let data = {
      userNameOrEmail: (e.target as any).userNameOrEmail.value,
      password: (e.target as any).password.value
    }
    axios.post("http://127.0.0.1:3000/api/v1/users/login", data)
      .then(res => {
        console.log("res", res)
        if (res.status == 200) {
          localStorage.setItem("token", res.data.token)
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
  return (
    <div>
      {
        userStore == null ?
          <>
            <h2>Login</h2>
            <form onSubmit={(e) => {
              handleLogin(e)
            }}>
              <div>
                User Name or Email: <input name='userNameOrEmail' type="text" />
              </div>
              <div>
                Password: <input name='password' type="password" />
              </div>
              <Link to={"/reset-password"}>Quên mật khẩu</Link>
              <div>
                <button type='submit'>Login</button>
              </div>
            </form>
          </>
          : <>
            email: {(userStore! as User).email}
            <br />
            authenEmail: {(userStore! as User).emailAuthentication ? "ok" : "chưa"}
            <br />
            <button onClick={() => {
              handleResendEmail()
            }}>resend email</button>
          </>
      }
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src=""
              alt="logo"
            />
            Flowbite
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={(e) => {
                handleLogin(e)
              }}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="text"
                    name='userNameOrEmail'
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name='password'
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <Link
                    to={"/reset-password"}
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  style={{ backgroundColor: 'red' }}
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light bg-primary-600 text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium bg-primary-600 text-primary-600 hover:underline dark:text-primary-500 "
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
