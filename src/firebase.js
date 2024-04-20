import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// const firebaseConfig = {
//   apiKey: "AIzaSyB-S7lRvT6seLbToWU_A_g0vZ9odmB2hag",
//   authDomain: "beezpaydata.firebaseapp.com",
//   projectId: "beezpaydata",
//   storageBucket: "beezpaydata.appspot.com",
//   messagingSenderId: "502531807455",
//   appId: "1:502531807455:web:761fc62dc1ddd97e75b16a"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDkrsb9kfc4RyA606W_Zywv83936rQvs7g",
  authDomain: "authbeezpay.firebaseapp.com",
  projectId: "authbeezpay",
  storageBucket: "authbeezpay.appspot.com",
  messagingSenderId: "977205446735",
  appId: "1:977205446735:web:ba3c55ce3701fb5fc1023a"
};

const app = initializeApp(firebaseConfig);
export const Authentication=getAuth(app)