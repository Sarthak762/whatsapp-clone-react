import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJO39whLycy1gc760oeuAAjbEFpU2FT5c",
  authDomain: "whatsapp-clone-b69df.firebaseapp.com",
  projectId: "whatsapp-clone-b69df",
  storageBucket: "whatsapp-clone-b69df.appspot.com",
  messagingSenderId: "970830491131",
  appId: "1:970830491131:web:def700b0b8d53db1836f5e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
