

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getDatabase,  ref, set ,remove} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCovmQHJ85cYhRkPJjIZ1cqHK8Q6fHvZDM",
  authDomain: "groupchat-9a58b.firebaseapp.com",
  databaseURL: "https://groupchat-9a58b-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "groupchat-9a58b",
  storageBucket: "groupchat-9a58b.appspot.com",
  messagingSenderId: "755663107889",
  appId: "1:755663107889:web:8453249898c0b7e2576210",
  measurementId: "G-EJTF3M8787"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  'login_hint': 'user@example.com'
});




const database = getDatabase(app);



export function writeUserData(userId, name, email, imageUrl) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

export function deletUser(userId){
  const db = getDatabase();

  remove(ref(db,"users/" + userId)).then(()=> {
  })



}






