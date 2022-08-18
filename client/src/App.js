import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth, writeUserData } from "./firebase";
import { authActions } from "./store/auth";
import { getDatabase, ref, child, get, onValue } from "firebase/database";
import { onlineUserAction } from "./store/onlineUsers";

function App() {
  const { isLogging } = useSelector((state) => state.auth);
  const location = useLocation();
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(
        authActions.login({
          userName: user.displayName,
          profileUrl: user.photoURL,
          uuid: user.uid,
        })
      );






      const dbRef = ref(getDatabase());
      get(child(dbRef, `users/${user.uid}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
          } else {
            writeUserData(user.uid, user.displayName, user.email, user.photoURL)
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      dispatch(authActions.logout());
    }
  });



onValue(ref(getDatabase(), 'users/'), (snapshot)=> {

  const data = Object.entries(snapshot.val())

  dispatch(onlineUserAction.update(data))
})



  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={
            isLogging ? (
              <Home />
            ) : (
              <Navigate to="/login" state={{ from: location }} replace />
            )
          }
        />
      </Routes>
    </>
  );
}

export default App;
