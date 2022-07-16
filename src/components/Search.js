

function Search({setSearch, searchData, blog}){
   

    function handleData(event){
    setSearch(event.target.value)

    }

    // const dataToDisplay = searchData.filter((data)=>{

    //     if (data===blog){
    //         return true
    //     }
    //     else{
    //         return blog.content === searchData;
    //     }
      
    // })


    return (
        <div  className="Search" >
        <input placeholder="Search"  onChange={handleData}  ></input>
        <p>{searchData}</p>
        </div>
    )
}
export default Search; 