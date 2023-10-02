import data from "@/i18n/translation/en";
import axios from "axios";

export default {
    register: async (newUser: any) => {
        return await axios.post(
            import.meta.env.VITE_APP_SERVER_HOST_API + "users/register",
            newUser,
        )
            .then(res => res)
            .catch(err => err)
    },
    login: async (data: any) => {
        return await axios.post(
            import.meta.env.VITE_APP_SERVER_HOST_API + "users/login",
            data,
        )
    },
    authentication: async () => {
        return await axios.get(
            import.meta.env.VITE_APP_SERVER_HOST_API + "auth"
        )
    },
    changeAvatar: async (formData: FormData) => {
        return await axios.post(import.meta.env.VITE_APP_SERVER_HOST_API + "users/change-avatar", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
    },
    changePassword: async (data: any) => {
        return await axios.post(import.meta.env.VITE_APP_SERVER_HOST_API + "users/change-password", data)
    },
    resetPassword: async (data: any) => {
        return await axios.post(import.meta.env.VITE_APP_SERVER_HOST_API + "users/reset-password", data)
    },
    resendEmail: async () => {
        return await axios.get(import.meta.env.VITE_APP_SERVER_HOST_API + "users/resend-email")
    },
}