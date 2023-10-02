import categoryModule from "./modules/category.module";
import productModule from "./modules/product.module";
import "./axios.instance";
import userModule from "./modules/user.module";

export default {
    userApi: userModule,
    categoryApi: categoryModule,
    productApi: productModule,
}