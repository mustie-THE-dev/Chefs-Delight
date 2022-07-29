import {useState} from "react";





function Search({searchData, setSearchData}){
   
    const handleChange = e => {
        setSearchData(e.target.value);
        
    }
return(
    <div>
 <input
 onChange={handleChange}
 >
  
</input>




    </div>
   
    )
}
 

export default Search;