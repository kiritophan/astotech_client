import { initializeApp } from "firebase/app";

/* Google Auth */
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

/* thay config thành config của bạn */
const firebaseConfig = {
    apiKey: "AIzaSyBC1KAVcuX7kcqMcA567l7NCvKCS7gDsiM",
    authDomain: "astotech-87421.firebaseapp.com",
    projectId: "astotech-87421",
    storageBucket: "astotech-87421.appspot.com",
    messagingSenderId: "217948861505",
    appId: "1:217948861505:web:cb250eee3785a534b9c2c0",
    measurementId: "G-N93YR6X0LM"
};
const app = initializeApp(firebaseConfig);

/* Google Auth Import */
const googleProvider = new GoogleAuthProvider();
export async function googleLogin() {
    let auth = getAuth(app);
    return await signInWithPopup(auth, googleProvider)
}