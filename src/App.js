import './App.css';
import Checkout from './Checkout';
import Home from './Home';
import Header from './Header';
import Login from './Login';
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {

  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // once app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);
      if (authUser) {
        // the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });
  }, []);






  return (

    <BrowserRouter>
      <Header />
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}  />

        <Route path="/checkout" element={<Checkout />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
