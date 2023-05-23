import { useState } from 'react';
import './App.css';
import Main from './component/Main';
import Navbar from './component/Navbar';
import SideBar from './component/SideBar';
import movies from "./data.json";


function App() {
let users = localStorage.getItem("users") 
let downloads = [{id: 0, movie: "Black Widow",user: "Admin", email: "admin@admin.com", downloadAt: "Tue, 23 May 2023 23:27:51 GMT"}]
let date = new Date();
date.setTime(date.getTime() + 60 * 10000);
  
let ttl = date.toUTCString();
localStorage.setItem("downloads",JSON.stringify({ downloads : downloads, ttl}))


if(!users) {
  console.log(movies);
    
    let users = [{id: 0,username: "Admin", email: "admin@admin.com", password: "123456", isAdmin: true} , {id:1, username: "user" ,email: "user@user.com", password: "000", isAdmin: false}]
    localStorage.setItem("movies", JSON.stringify({movies: movies, ttl}))
    localStorage.setItem("users",JSON.stringify({ users : users, ttl}))
  }

getProfile()


  return (
    <div className="App">
      
      <Navbar />
      <div className='mainApp'>
     <SideBar/>
      <Main/>
      </div>
    </div>
  );
}

export default App;



function getProfile() {
  
let loggedData = localStorage.getItem("logged");

if (loggedData) {
  let { value, expiry } = JSON.parse(loggedData);
  let expiryTime = new Date(expiry).getTime();
  let currentTime = new Date().getTime();
  if (currentTime > expiryTime) {
    console.log("expired");
    localStorage.removeItem("logged");
  } else {
    console.log("not yet");
  }
}
}