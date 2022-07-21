
import Article from "./Article";



function Home({blogs, searchData}){


   const itemTo = blogs.filter((blog)=>{
       if (searchData=== ""){
           
           return true;
       }
       else{
        //    return  blog.title.includes(searchData)
        //    blog.name.toLowerCase().includes(searchData.toLowerCase())
        return blog.title.toLowerCase().includes(searchData)
       }
   });


    const allArticles = itemTo.map((blog) => {
        return <Article 
            key={blog.id}
            content={blog.content}
            title={blog.title}

        />
    })

    
    return(
       
        <div className="container">
            
            {allArticles}
            
        </div>
        
    )
    
}

export default Home