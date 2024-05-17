'use client'
import { useState,useEffect } from "react";
import { Navbar } from "./details/navbar";
import './App.css'
import { HomeSection } from "./details/homeSection";
import { Footer } from "./details/footer";
import { auth } from "./FireBaseConfig";
export default function login() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
        setUser(user);
    });
    return () => unsubscribe();
  }, []);

  if(!user){
    return (
      <div className="home_not_user_main_container">
      <h1>Checking connected authentication!</h1>
      <h2>Don't have a linked account? <a href="/signin">Sign In</a></h2>
      </div>
    )
  };
  
  if(user){
      return (
       <div className="home_main_container">
            <Navbar/>
            <HomeSection/>
            <Footer/>
       </div>
      );
  }

}
