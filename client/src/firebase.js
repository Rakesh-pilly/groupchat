

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCovmQHJ85cYhRkPJjIZ1cqHK8Q6fHvZDM",
  authDomain: "groupchat-9a58b.firebaseapp.com",
  projectId: "groupchat-9a58b",
  storageBucket: "groupchat-9a58b.appspot.com",
  messagingSenderId: "755663107889",
  appId: "1:755663107889:web:8453249898c0b7e2576210",
  measurementId: "G-EJTF3M8787"
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth();




