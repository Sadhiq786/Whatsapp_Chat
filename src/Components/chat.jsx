import React, { useContext } from 'react'
import Cam from "../img/cam.png"
import Add from "../img/add.png"
import More from "../img/more.png"
import Messages from './messages'
import Inputpanel from './inputPanel'
import { ChatContext } from '../context/ChatContext'
import * as Icon from 'react-bootstrap-icons';


const Chat=()=>{

  const { data } = useContext(ChatContext);

  const openCamera = () => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        console.log('Camera opened');
        // Here you can handle the camera stream, such as displaying it in a video element
      })
      .catch((error) => {
        console.error('Error accessing camera:', error);
      });
  };

  return (
    <div className='chat'>
      <div className='chatInfo'>
      {data.user.photoURL && <img src={data.user.photoURL} alt="User" className="userImage" />}
        <span>{data.user?.displayName}</span>
        <div className='chatIcons'>
          <span onClick={openCamera}><Icon.CameraVideoFill/></span>
          <span><Icon.TelephoneFill/></span>
          <span><Icon.ThreeDotsVertical/></span>
        </div>

      </div>
        <Messages/>
        <Inputpanel/>    
      </div>
  )
}

export default Chat;
