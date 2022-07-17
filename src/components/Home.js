
import Article from "./Article"
function Home({blogs, searchData}){

   const itemTo = blogs.filter((blog)=>{
       if (searchData===""){
           
           return true
       }
       else{
           return  blog.title.includes(searchData)
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

        <div className="Home">
            {allArticles}
            
          
            
        </div>
        
    )
    
}

export default Home