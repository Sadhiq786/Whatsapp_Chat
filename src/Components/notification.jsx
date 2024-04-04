import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import your notification sound file
import notificationSound from './web_whatsapp.mp3';

function GetNotification() {
  // Define a function to play the notification sound
  const playNotificationSound = () => {
    const audio = new Audio(notificationSound);
    audio.play();
  };

 const notify = () => {
    // Play the notification sound before showing the toast
    playNotificationSound();
    toast("Wow so easy!");
  };

  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}

export default GetNotification;
