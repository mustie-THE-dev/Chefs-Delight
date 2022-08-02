import React, { Fragment } from "react";
import Footer from "./footer";
import Myvideo from "../assets/myVideo.mp4";
import "../css/home.css";


function Home() {
  return (
    <Fragment>
    
 <div className='myvideo'>
      <video src={Myvideo} autoPlay loop muted />
      <div className="content">
      <h1>Everyone loves a goodmeal</h1>
      <p> “Food for us comes from our relatives,
        whether they have wings or fins or roots.That is how we consider food. Food has a culture. 
        It has a history. It has a story. It has relationships.”</p>
      </div>
      </div>
      
     


   <Footer />
   </Fragment>
  )

  
  
  
  
}

export default Home;