
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { authActions } from "./store/auth";

function App() {
  const {isLogging} = useSelector(state => state.auth)
  const location = useLocation();
  const dispatch = useDispatch()

  onAuthStateChanged(auth, (user)=> {
    if(user){
      dispatch(authActions.login({userName : user.displayName, profileUrl: user.photoURL, uuid : user.uid}))

    }else{
      dispatch(authActions.logout())
    }
  })


  return (
    <>
      <Routes>
        <Route path="/login" element={<Login  />} />
        <Route path="/signup" element={<Signup />}
        />
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