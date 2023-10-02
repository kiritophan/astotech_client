import axios from "axios";

export default {
    findAll: async function () {
        return await axios.get(import.meta.env.VITE_APP_SERVER_HOST_API + "categories")
    },
    create: async function (data: any) {
        return await axios.post(import.meta.env.VITE_APP_SERVER_HOST_API + "categories", data)
    }
}

