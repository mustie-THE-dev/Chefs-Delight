import React from "react";
import { useEffect, useState } from "react";

function Exciting() {
  const [Exciting, setExciting] = useState([]);

  useEffect(() => {
   fetch("http://localhost:8000/recipes")
   .then((res)=> {
     res.json()

   })
   .then((data)=> {
  setExciting(data)
  console.log(Exciting);
   })
  }, []);
}
  
export default Exciting
