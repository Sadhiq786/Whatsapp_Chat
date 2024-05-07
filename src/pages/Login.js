
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
            <img src="https://static.whatsapp.net/rsrc.php/v3/y7/r/DSxOAUB0raA.png" width={120} className="whatsapp"/><br/><br/>
                <span className="title">Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" value={"sadhiq@gmail.com"}></input>
                    <input type="password" placeholder="Password" value={"789456"}></input>

                    <button class="bn632-hover bn22">Login</button><br/>
                    {
                        err && <span className="validation">Something went wrong</span>
                    }
                </form>
                <p>You don't have an account?<Link to="/register">Register</Link></p>

                <div className="defaultlogin">
                        <h6>Default login details</h6>

                    <table>
                        <tr>
                            <th>Email</th>
                            <td>:</td>
                            <td>&nbsp;sadhiq@gmail.com</td>
                        </tr>
                        <tr>
                            <th>Password</th>
                            <td>:</td>
                            <td>&nbsp; 789456</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Loginform;