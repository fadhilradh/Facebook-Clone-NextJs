import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBDWfJKji1Ghg7XN21qfrNuDgc-owRGfUc",
  authDomain: "facebook-clone-47b91.firebaseapp.com",
  projectId: "facebook-clone-47b91",
  storageBucket: "facebook-clone-47b91.appspot.com",
  messagingSenderId: "536304597647",
  appId: "1:536304597647:web:5ee8bfbe68a76037584efa",
};

const app = !firebase.app.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore;

const storage = firebase.storage();

export { db, storage };
