import Search from "./Search";
import { useState, useEffect } from "react";
import "../css/meals.css";

function Meals() {
  // const [data] = useFetch("http://localhost:3000/dishes");
  const [meals, setMeals] = useState([]);
  const [searchData, setSearchData] = useState("");
  console.log(searchData);

  useEffect(() => {
    fetch("https://chefs--delight.herokuapp.com/dishes")
      .then((r) => r.json())
      .then((data) => {
        setMeals(data);
      });
  }, []);

  const filteredMeals = meals.filter((meal) => {
    if (searchData === "") {
      return true;
    } else {
      return meal.name.toLowerCase().includes(searchData);
    }
  });

  return (
    <div>
      <div className="search">
        <Search setSearchData={setSearchData} searchData={searchData} />
      </div>

      <div className="compo">
        {filteredMeals.map((item) => {
          return (
            <center
            key={item.id}
            
            >
              <div className="card"
                


                style={{
                  
                }}
              >
                <img
               
                  style={{
                    height: "45vh",
                    width: "100%",
                  }}
                
                  src={item.image}
                  alt="img"
                />

                <div 
              
                  style={{
                    padding: "5px",
                  }}  
                  
                  >
                
                  
                
                  <span><h1>{item.name}</h1></span>
                  <span><p>{item.description}</p></span>
                  <button><span> Price ${item.price}</span></button>
                </div>
              </div>
            </center>
          );
        })}
      </div>
    </div>
  );
}

export default Meals;
