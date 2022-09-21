
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, DataSnapshot } from "firebase/database";
import { useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4Yj-b9w-6QGAuiLcrlu8TAI7pgT3HavI",
  authDomain: "ghost-1cc15.firebaseapp.com",
  databaseURL: "https://ghost-1cc15-default-rtdb.firebaseio.com",
  projectId: "ghost-1cc15",
  storageBucket: "ghost-1cc15.appspot.com",
  messagingSenderId: "720278757956",
  appId: "1:720278757956:web:2a88d45bc0c1e66155d211",
  measurementId: "G-Q3N07886DR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const dbRef = ref(getDatabase());

export const App = () => {
  get(child(dbRef, `ranking`)).then((snapshot) => {
    setScore(snapshot.val())
  }
  )

  const [score, setScore] = useState({})
  return (
    Object.keys(score).map(nome => {
      return <div className="container">
        <h1>Nome:</h1><p>{nome} <h1>Pontuação:</h1> {score[nome]}</p>
      </div>
    })
  );
};
