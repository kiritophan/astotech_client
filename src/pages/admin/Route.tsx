import { Route } from "react-router-dom";
import Lazy from '@/utils/lazies/Lazy'
import AddProduct from './AddProduct'
import RouteProduct from "@/routes/RouteProduct";
import Categories from "./Categories";







export default (
    <>
        <Route path="/admin" element={Lazy(() => import("@pages/admin/Admin"))()}>
            <Route index></Route>
            <Route path="add-products" element={<AddProduct />}></Route>
            <Route path="category" element={<Categories />}></Route>
            {RouteProduct}
        </Route>
    </>
);
