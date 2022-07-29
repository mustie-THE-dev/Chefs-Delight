// import useFetch from "./useFetch";
import Search from "./Search"
import { useState, useEffect} from "react";



function Meals() {
  // const [data] = useFetch("http://localhost:3000/dishes");
  const [meals, setMeals] = useState ([])
  const [searchData, setSearchData] = useState("")
  console.log(searchData);

  useEffect(() => {
    fetch("http://localhost:3000/dishes")
      .then((r) => r.json())
      .then((data) => {
        setMeals(data);
      });
  }, []);
    

  const filteredMeals = meals.filter(
(meal) => {
  if (searchData === ""){
  return true}
  else{
    return meal.name.toLowerCase().includes(searchData)
  }
  
  
}


  )

  return (
    <div>
 <div
   style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "30vh",
    background: "lightgrey",
  }}

    >

     <Search setSearchData={setSearchData} searchData={searchData}/>
</div>
    

    
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "60vh",
        background: "lightgrey",
      }}
    >
  


      {
        filteredMeals.map((item) => {
          return (
            <p key={item.id}>
              {item.name}
              {item.description}
              {item.price}
            </p>
          );
        })}
    </div>
    

    </div>
   
  );
}

export default Meals;
