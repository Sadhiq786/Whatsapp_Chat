import React from "react";
import Sidebar from "../Components/sidebar";
import Chat from "../Components/chat";


const Homebar=()=>{

    return(
        <div className="home">
            <div className="container">
                <Sidebar/>
                <Chat/>
            </div>
        </div>
    )
}
export default Homebar;