import { userReducer } from "./slices/user.slice";
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { productReducer } from "./slices/product.slice";
import { receiptReducer } from "./slices/receipt.slice";

const RootReducer = combineReducers({
    userStore: userReducer,
    productStore: productReducer,
    receiptStore: receiptReducer
})

export type StoreType = ReturnType<typeof RootReducer>;

export const store = configureStore({
    reducer: RootReducer
})