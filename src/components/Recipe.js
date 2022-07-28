import React,{useState,useEffect} from 'react';


function Recipe() {
    const [food, setFood] = useState([]);
  useEffect(() => {
    getFood();
  }, []);
  const getFood = async () => {
    const response = await fetch("http://localhost:3000/dishes");
    const data = await response.json();
    setFood(data);
  };
  console.log(getFood);
//   const [data,setData]=useState([]);
//   const getData=()=>{
//     fetch('http://localhost:3000/dishes'
//     ,{
//       headers : { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//        }
//     }
//     )
//       .then(function(response){
//         console.log(response)
//         return response.json();
//       })
//       .then(function(myJson) {
//         console.log(myJson);
//         setData(myJson)
//       });
//   }
//   useEffect(()=>{
//     getData()
//   },[])
  return (

     
     food && food.length>0 && food.map((item)=><p>{item.about}</p>)
     
    
  );
}

export default Recipe;