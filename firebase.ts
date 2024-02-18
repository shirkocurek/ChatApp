import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNXqb-L019sE3JEBYN2aBnnMBESn3s3Ng",
    authDomain: "saas-global-chat.firebaseapp.com",
    projectId: "saas-global-chat",
    storageBucket: "saas-global-chat.appspot.com",
    messagingSenderId: "250917067567",
    appId: "1:250917067567:web:06b0898a4f9bc869795fda",
    measurementId: "G-CVC65YB67P"
  };

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth =getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };