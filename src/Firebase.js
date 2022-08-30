

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyBdZ3d3CEZgGxyC70Mt_sd61Q9dxhMi2es",
//   authDomain: "subjects-react-app.firebaseapp.com",
//   projectId: "subjects-react-app",
//   storageBucket: "subjects-react-app.appspot.com",
//   messagingSenderId: "346823761726",
//   appId: "1:346823761726:web:c7b33106973657c617966f",
//   measurementId: "G-LLDFVZYFT4"
// };

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCLtX8o4CgWd9CzOwWGHYcLO3X-mI5_WaU",
  authDomain: "subjects-react-app-ab7bd.firebaseapp.com",
  projectId: "subjects-react-app-ab7bd",
  storageBucket: "subjects-react-app-ab7bd.appspot.com",
  messagingSenderId: "992367616407",
  appId: "1:992367616407:web:3be527c4ef4f2815bc64d2",
  measurementId: "G-L54V7KN00Z"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)