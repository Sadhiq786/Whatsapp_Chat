
import React, { useState } from "react";
import Add from "../img/addAvatar.png"
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


const Loginform = ()=>{

    const[err, setErr]=useState(false);
    const navigate = useNavigate();

    const handleSubmit= async (event)=>{
        event.preventDefault();

        const email = event.target[0].value;
        const password = event.target[1].value;
        try{
            await signInWithEmailAndPassword(auth, email, password)
            navigate("/")
        }
        catch(error){
            setErr(true)
        }
    };
    
    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Whatsapp Chat</span>
                <span className="title">Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>

                    <button class="bn632-hover bn24">Login</button>
                    {
                        err && <span><h5>Something went wrong</h5></span>
                    }
                </form>
                <p>You don't have an account?<Link to="/register">Register</Link></p>

                <div className="defaultlogin">
                    <h4>Default  Login Details</h4>
                    <b><span>Email:</span></b>
                    <span>&nbsp;&nbsp;&nbsp; sadhiq@gmail.com</span><br/>
                    <b><span>Password:</span></b>
                    <span>&nbsp;&nbsp;&nbsp; 789456</span>
                </div>
            </div>
        </div>
    )
}
export default Loginform;