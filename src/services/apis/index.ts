import categoryModule from "./modules/category.module";
import productModule from "./modules/product.module";
import "./axios.instance";

export default {
    categoryApi: categoryModule,
    productApi: productModule,
}