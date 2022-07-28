import { useEffect } from "react"


function Exciting() {

 useEffect(() => {
   
   getExciting();
 },[]); 
 
 // fetching data from a public API
const getExciting = async () => {
  const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.ENV.MY_API_KEY}&number=12`);
  const data = await api.json();
  console.log(data);
}


    return (
      <div>Exciting</div>
    )
  }


export default Exciting