import React from "react";

function Search({ searchData, setSearchData }) {
  const handleChange = (e) => {
    setSearchData(e.target.value);
  };
  return (
    <div>
      <input
        style={{
          width: "300px",
          //fontSize: "30px",
        }}
        placeholder="    search meal..."
        onChange={handleChange}
      ></input>
    </div>
  );
}

export default Search;
