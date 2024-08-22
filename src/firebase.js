// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';



const firebaseConfig = {
  apiKey: "AIzaSyBDARf7jqf_aQsfGuTKBpP2edp7BkEjTDg",
  authDomain: "facebook-clone-362f1.firebaseapp.com",
  databaseURL: 'https://362f1.firebaseio.com',
  projectId: "facebook-clone-362f1",
  storageBucket: "facebook-clone-362f1.appspot.com",
  messagingSenderId: "799119789733",
  appId: "1:799119789733:web:541be07ffcc41ba305474c",
  measurementId: "G-3QY69243YF"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;