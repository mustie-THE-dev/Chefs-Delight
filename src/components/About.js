import React from "react";
import pic from "../assets/images/beefpizza.jpg";
import pic2 from "../assets/images/chickenvegsoup.jpg";
import "../css/about.css";

function About() {
  return (
    <div>
      <div>
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
            fontSize: "25px",
            background: "pink",
          }}
        >
          Chef Delights is here to help you order delicious meals with less
          stress and more joy. We offer meals and cooking advice for home
          cooks,customers and all. Helping create “kitchen wins” is what we are all
          about.{" "}
        </p>
      </div>
    <div className="tiktok">
      <img 
        style={{
          display: "flex",
          justifyContent: "left",
         width: "50%",
        }}
        src={pic}
        alt=""
      /></div>
      
      <div 
        style={{
          float: "right",
          width: "500px",
        }}
      >
        <div className="cont">
          <p
            style={{
              fontSize: "45px",
            }}
          >
            Food means love
          </p>
          <img
            style={{
              float: "right",
              width: "500px",
            }}
            src={pic2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
