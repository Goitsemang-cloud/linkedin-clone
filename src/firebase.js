import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXl36qjLrHhzlPfCc30BAtn577h6xONYQ",
  authDomain: "chatbot-wcfp.firebaseapp.com",
  projectId: "chatbot-wcfp",
  storageBucket: "chatbot-wcfp.appspot.com",
  messagingSenderId: "524938646963",
  appId: "1:524938646963:web:86c726ac434d4b8cb967c6",
  measurementId: "G-39LEXMVV1E",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
