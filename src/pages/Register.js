import React, { useState } from "react";
import Add from "../img/addAvatar.png"
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth, db, storage } from "../firebase";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        setLoading(true);
        event.preventDefault();
    
        const displayName = event.target[0].value;
        const email = event.target[1].value;
        const password = event.target[2].value;
        const file = event.target[3].files[0];
    
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
    
            // Create a unique image name
            const date = new Date().getTime();
            const storageRef = ref(storage, `${displayName + date}`);
    
            await uploadBytesResumable(storageRef, file).then(() => {
                getDownloadURL(storageRef).then(async (downloadURL) => {
                    try {
                        // Update profile
                        await updateProfile(res.user, {
                            displayName,
                            photoURL: downloadURL,
                        });
                        // Create user on firestore
                        await setDoc(doc(db, "users", res.user.uid), {
                            uid: res.user.uid,
                            displayName,
                            email,
                            photoURL: downloadURL,
                        });
    
                        // Create empty user chats on firestore
                        await setDoc(doc(db, "userChats", res.user.uid), {});
                    } catch (err) {
                        console.log(err);
                        setErr(true);
                        setLoading(false);
                    }
                });
            });
        } catch (err) {
            setErr(true);
            setLoading(false);
        }
    };
    

    return (
        <div className="formContainer">
        <div className="formWrapper">
            <img src="https://static.whatsapp.net/rsrc.php/v3/y7/r/DSxOAUB0raA.png" width={120} className="whatsapp"/><br/><br/>
            <span className="title">Register</span><br/>
            <form onSubmit={handleSubmit} className=".regform">
                <input required type="text" placeholder="Name"></input><br/>
                <input required type="email" placeholder="Email"></input><br/>
                <input required type="password" placeholder="Password"></input><br/>
               
                <input required style={{display:"none"}} type="file" id="file" ></input> 
                <label htmlFor="file"><br/>
                    <img src={Add} width={30}/>
                    &nbsp; &nbsp;
                    <span style={{color:"yellow"}}><b>Add profile picture</b></span>
                </label><br/>

                <button class="bn632-hover bn22">Register</button>
                {loading && "Registration successfull"}
                {
                    err && <span>Something went wrong</span>
                }
            </form>
            <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>

    </div>

    
    );
};

export default Register;
