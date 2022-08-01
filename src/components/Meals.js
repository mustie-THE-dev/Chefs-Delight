
import Search from "./Search";
import { useState, useEffect } from "react";
import styles from "../"

function Meals() {
  // const [data] = useFetch("http://localhost:3000/dishes");
  const [meals, setMeals] = useState([]);
  const [searchData, setSearchData] = useState("");
  console.log(searchData);

  useEffect(() => {
    fetch("http://localhost:3000/dishes")
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30vh",
          background: "lightgrey",
        }}
      >
        <Search setSearchData={setSearchData} searchData={searchData} />
      </div>

      <div
        style={{
          justifyContent: "center",
          alignItems: "center",

          background: "lightgrey",
        }}
      >
        {filteredMeals.map((item) => {
          return (
            <center
            key={item.id}
            
            >
              <div
                


                style={{
                  backgroundColor: "white",
                  margin: "20px",
                  padding: "3px",
                  width: "50%",
                  display: "grid",
                  //: "25px",
                  margintop: "50px",
                 
                }}
              >
                <img
               // key={item.id}
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
