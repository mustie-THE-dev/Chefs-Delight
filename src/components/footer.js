import React from "react";
import "../css/footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Contacts</h4>
          <div className="icons ">
            <i style={{padding:"1rem"}} className="fa-brands fa-instagram-square "></i>
            <i style={{padding:"1rem"}} className="fa-brands fa-facebook " id="facebook "></i>
            <i style={{padding:"1rem"}} className="fa-brands fa-twitter-square " id="twitter "></i>
            </div>
           
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Chefs-Delight | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;