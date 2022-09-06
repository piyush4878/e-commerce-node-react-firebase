import React from 'react';
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { auth } from "./firebase";


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const signIn = (e) => {
        // preevent refreshing
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                navigate("/");
            })
            .catch((error) => alert(error.message));

    };
    const register = (e) => {
        e.preventDefault();
        // some firebase stuff
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {

                if (auth) {
                    navigate("/");
                }
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className='login'>
            <Link to="/">
                <img className='login__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} name="" id="" />
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button className='login__button' onClick={signIn}>Sign In</button>
                </form>

                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

                <button className='login__registerUser' onClick={register}>Create your amazon account</button>

            </div>

        </div>
    )
}

export default Login