
import Lazy from "@/lazies/Lazy";
import { Route } from "react-router-dom";
export default
    <>
        <Route path="/register" element={Lazy(() => import("@/pages/users/Register"))()}></Route>
        <Route path="/login" element={Lazy(() => import("@/pages/users/Login"))()}></Route>
        {/* <Route path="/receipts" element={Lazy(() => import("@/pages/users/receipts/Receipt"))()}></Route> */}
        {/* <Route path="/receipts/:orderId" element={Lazy(() => import("@/pages/users/receiptDetail/ReceiptDetail"))()}></Route> */}
        {/* <Route path="/profile" element={Lazy(() => import("@/pages/users/profile/Profile"))()}></Route> */}
        {/* <Route path="/otp-verify" element={Lazy(() => import("@/pages/users/otpVerify/OtpVerify"))()}></Route> */}
        <Route path='/reset-password' element={Lazy(() => import("@/pages/users/ResetPassword"))()}></Route>
        <Route path='/change-password' element={Lazy(() => import("@/pages/users/ChangePassword"))()}></Route>
    </>
