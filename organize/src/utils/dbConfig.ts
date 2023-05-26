import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBP4Gcu1eHK3BCQupOZ0ZUV6djedtLwwp8",
    authDomain: "organize-129.firebaseapp.com",
    projectId: "organize-129",
    storageBucket: "organize-129.appspot.com",
    messagingSenderId: "389322613419",
    appId: "1:389322613419:web:9666763035e06053fb0dee",
    databaseURL: 'https://organize-129-default-rtdb.europe-west1.firebasedatabase.app/'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);