import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = initializeApp ({
    apiKey: "AIzaSyDCc3oSqIsVkCDZMCNkUZygJSGXD1atQ2g",
    authDomain: "reliveo-f50d4.firebaseapp.com",
    projectId: "reliveo-f50d4",
    storageBucket: "reliveo-f50d4.appspot.com",
    messagingSenderId: "48363817579",
    appId: "1:48363817579:web:9941499d32e55a4f41ff2e",
    measurementId: "G-Y7W3HKTP7Z"
});

const storage = getStorage(firebaseConfig)

export {storage}