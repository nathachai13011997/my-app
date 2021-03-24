import React, { useState } from 'react';
import './App.css';

import Narbar from './Navbar';
import Input from './Input';
import Post from './Post';

let id = 1;

function App() {
  const [posts, setPosts] = useState([]);

  function addPost(title) {
    // id:id, title:title ถ้ามันเหมือนกันสามารถย่อได้
    const newPost = { id, title }
    // เหมือนกับข้างล่าง
    // const newPost = {id:id, title:title}

    // เรียกใช้ฟังชั้น newPost คือ ตัวใหม่ | ...posts คือ การเอาค่าใน posts มาทั้งหมด 
    setPosts([newPost, ...posts]);
    id += 1;
  }

  function deletePost(id){
    const updatedPosts = posts.filter((post)=> post.id !== id);
    setPosts(updatedPosts);
  }

  return (
    <div className="App">
      <Narbar />
      <Input addPost={addPost} />
      {posts.map((post) => {
      return  <Post key={post.id} id={post.id} title={post.title} deletePost={deletePost} />
      })}
    </div>
  );
}

export default App;
