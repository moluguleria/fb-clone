import React, { useEffect, useState } from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import MessegeSender from './MessegeSender';  
import Post from './Post';
import db from "./firebase";  
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'; 

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
   
    const postsRef = collection(db, 'posts'); 
    const q = query(postsRef, orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, snapshot => {
      setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})));
    });

    return () => unsubscribe();  
  }, []);

  return (
    <div className='feed'>
        <StoryReel />
        <MessegeSender />

        {posts.map((post) => (
          <Post
            key={post.id}
            profilePic={post.data.profilePic}
            messege={post.data.messege}  
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          />
        ))}
    </div>
  );
}

export default Feed;
