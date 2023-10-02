import Product from '@/pages/admin/Product'
import Lazy from '@/utils/lazies/Lazy'
import { Route } from 'react-router-dom'
// import Payment from "@/pages/carts/Payment";
// import Receipts from "@/pages/carts/Receipts";

export default
    <>
        <Route path="product-detail/:id" element={Lazy(() => import("@pages/products/productDetails/ProductDetail"))()}></Route>
        <Route path="allproduct" element={Lazy(() => import("@pages/products/productOptions/ProductOption"))()}></Route>
        <Route path="category/:id" element={Lazy(() => import("@pages/products/productCategory/ProductCategory"))()}></Route>

        <Route path="cart" element={Lazy(() => import("@pages/carts/Cart"))()}></Route>
        {/* <Route path="/payment" element={<Payment />}></Route> */}
        {/* <Route path="/receipt" element={<Receipts />}></Route> */}
        <Route path='products' element={<Product />}></Route>

    </>