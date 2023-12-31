import Home from '@/pages/homes/Home'
import HomeLayout from '@/pages/homes/components/HomeLayouts/HomeLayout'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RouteUser from './RouteUser'
import AdminRoute from '@pages/admin/Route'
import RouteProduct from './RouteProduct'
import Lazy from '@/lazies/Lazy'

export default function RouteSetup() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route index element={<HomeLayout />}></Route>
          {RouteUser}
          {RouteProduct}
        </Route>
        <Route path="/checkout" element={Lazy(() => import("@pages/checkouts/Checkout"))()}></Route>
        <Route path="/thanks" element={Lazy(() => import("@pages/checkouts/Thanks"))()}></Route>
        {AdminRoute}
      </Routes>
    </BrowserRouter>
  )
}
