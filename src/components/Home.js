
import Article from "./Article"
function Home({blogs}){

    const allArticles = blogs.map((blog) => {
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