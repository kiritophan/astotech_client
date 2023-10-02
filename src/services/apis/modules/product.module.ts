import axios from "axios";

export default {
    create: async function (newProduct: any) {
        return await axios.post(import.meta.env.VITE_APP_SERVER_HOST_API + "products", newProduct)
    },
    findAll: async function () {
        return await axios.get(import.meta.env.VITE_APP_SERVER_HOST_API + 'products');
    },
    search: async function (search: string) {
        return await axios.get(`${import.meta.env.VITE_APP_SERVER_HOST_API}products/search?q=${search}`)
    },
    findById: async (id: string) => {
        return await axios.get(import.meta.env.VITE_APP_SERVER_HOST_API + `products/${id}`)
    },
    findByCategory: async (id: string) => {
        return await axios.get(import.meta.env.VITE_APP_SERVER_HOST_API + `products/category/${id}`)
    }
}