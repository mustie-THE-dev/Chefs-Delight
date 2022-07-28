import React from "react";
import { useEffect, useState } from "react";

function Exciting() {
  const [Exciting, setExciting] = useState([]);

  useEffect(() => {
    getExciting();
  }, []);

  // fetching data from a public API
  const APP_ID = "112046c8";
  const APP_KEY = "1f296129c2a0d3314528cee815e5d631";
 // const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getExciting = async () => {
    const api = await fetch(`
 https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);

    const data = await api.json();
    setExciting(data.recipes)
  };

  return <div>

    {Exciting.map}
  </div>;
}

export default Exciting;
