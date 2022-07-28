import { useEffect } from "react"


function Exciting() {

 useEffect(() => {
   
   getExciting();
 },[]); 
 
 // fetching data from a public API
const getExciting = async () => {
  const api= await fetch(`https://api.spoonacular.com/recipes/random?apikey=${process.env.MY_API_KEY}&number=12`);
  const data = await api.json();
}


    return (
      <div>Exciting</div>
    )
  }


export default Exciting