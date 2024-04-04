import React, { useContext, useState } from 'react'
import { collection, query, where, getDocs, setDoc, updateDoc, serverTimestamp, getDoc, doc } from "firebase/firestore";
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';
import * as Icon from 'react-bootstrap-icons';

const Search = () => {

  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false); // State to track input focus

  const { currentUser } = useContext(AuthContext);

  // handleSearch
  const handleSearch = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username));

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });
    }
    catch (err) {
      setErr(true)
    }

  };

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  }

  const handleSelect = async () => {
    // check whether the group(chats in firestore) exists

    const combinedId = currentUser.uid > user.uid
      ? currentUser.uid + user.uid
      : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        // create a chat in chats collection
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        // create user chats
        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL
          },
          [combinedId + ".date"]: serverTimestamp()
        });


        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL
          },
          [combinedId + ".date"]: serverTimestamp()
        })
      }
    }
    catch (err) {

    }
    setUser(null);
    setUsername("");
    // create user chats
  }

  return (
    <div className='search'>
      <div className='searchForm'>
        <input
          type='text'
          placeholder='Search or start a new chat'
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={handleKey}
          onFocus={() => setIsInputFocused(true)} // Set isInputFocused to true when input is focused
          onBlur={() => setIsInputFocused(false)} // Set isInputFocused to false when input is blurred
          value={username}
        />
        {!isInputFocused && <span><Icon.Search /></span>} {/* Render the search icon only when input is not focused */}
      </div>
      {err && <span>User not found</span>}
      {
        user &&
        <div className='userChat' onClick={handleSelect}>
          <img src={user.photoURL} alt='' />

          <div className='userChatInfo'>
            <span>{user.displayName}</span>
          </div>
        </div>}
    </div>
  )
}

export default Search;
