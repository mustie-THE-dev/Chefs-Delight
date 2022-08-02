import React from "react";
import pic from "/home/moringa/Development/code/phase-2/chefs-delight/src/images/beefpizza.jpg"
import pic2 from "/home/moringa/Development/code/phase-2/chefs-delight/src/images/chickenvegsoup.jpg"



function About() {
  return<div>
    <div>
    <p
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60vh',
    fontSize:'25px',
    background:'pink',
    
  }}
  >Chef Delights is here to help you cook delicious meals with less stress and more joy. We offer recipes and cooking advice for home cooks, by home cooks. Helping create “kitchen wins” is what we are all about. </p>
    </div>
  
  <img 
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width:'500px'
    
    
    
  }}
  
  src={pic} alt=''/>
  <div
   style={{
    float:'right',
    width:'500px'
    
    
    
  }}>
   <div>
     <p
      style={{
       //marginLeft:'10',
        fontSize:'45px'
        
        
        
      }} 
     
     >Food means love</p>
   <img
   style={{
    float:'right',
    width:'500px'
    
    
    
  }} 
 
  
  src={pic2} alt=''/>
     </div> 
  
  </div>
  </div> 
}

export default About;