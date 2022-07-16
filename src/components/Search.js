import { useState } from "react";

function Search({setSearch, searchData}){
   

    function handleData(event){
    setSearch(event.target.value)

    }
    return (
        <div  className="Search" >
        <input placeholder="Search"  onChange={handleData}  ></input>
        <p>{searchData}</p>
        </div>
    )
}
export default Search; 