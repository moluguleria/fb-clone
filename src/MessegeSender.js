import React, { useState } from 'react'
import "./MessegeSender.css";
import { Avatar } from '@mui/material';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useStateValue } from "./StateProvider";
import db from './firebase';
import { collection, addDoc } from 'firebase/firestore';

function MessegeSender() {
    const [{user}, dispatch] = useStateValue();
    const[input , setInput] = useState("");
    const[imageUrl , setImageUrl] = useState("");
    const handleSubmit = (e) =>{
    e.preventDefault();
    const postsRef = collection(db, 'posts');
    addDoc(postsRef, {
        messege: input,
        timestamp: new Date(),
        profilePic : user.photoURL,
        username: user.displayName,
        image: imageUrl,
    })
    setInput("");
    setImageUrl("");
};

  return (
    <div className="messegeSender">
        <div className="messegeSender__top">
            <Avatar src ={user.photoURL} />
            <form>
                <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="messegeSender__input" placeholder={`What's on your mind,${user.displayName}?`}/>
                <input
                value={imageUrl}
                onChange={e=>setImageUrl(e.target.value)}
                placeholder="image URL (Optional)"/>
                <button onClick={handleSubmit} >Hidden submit</button>
            </form>


        </div>
        <div className="messegeSender__bottom">
            <div className="messegeSender__option">
                <VideocamIcon style={{color:"red"}} />
                <h3>Live Video</h3>
            </div>
            <div className="messegeSender__option">
                <PhotoLibraryIcon style={{color:"green"}} />
                <h3>Photo/Video</h3>
            </div>
            <div className="messegeSender__option">
                <InsertEmoticonIcon style={{color:"orange"}} />
                <h3>Feeling/Activity</h3>
            </div>

        </div>

    </div>
  )
}

export default MessegeSender;