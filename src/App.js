import { useState } from 'react';
import './App.css';
import Main from './component/Main';
import Navbar from './component/Navbar';
import SideBar from './component/SideBar';
import movies from "./data.json";


function App() {
let users = [{id: 0,username: "Admin", password: "123456", isAdmin: true} , {id:1, username: "user" , password: "000", isAdmin: false}]
localStorage.setItem("movies", JSON.stringify(movies))
localStorage.setItem("users", JSON.stringify(users))


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