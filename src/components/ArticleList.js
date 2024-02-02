import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    if(!Array.isArray(posts)){
        console.log("Invalid");
        return null;
    }
    return(
        <main>
            {posts.map((article) =>{return <Article key={article.id} title={article.title} date={article.date} preview={article.preview} minutes={article.minutes}/>})} 
        </main>
    );
}
export default ArticleList;