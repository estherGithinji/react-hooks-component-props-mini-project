import React from "react";
import Article from "./Article"

 
function ArticleList (){
    return (
        <main>
             
            <Article
            title="The WET Codebase"
            date = "July 13, 2020"
            text="Come waste your time with me."
            />
            <Article
            title="Goodbye, Clean Code"
            date = "January 11, 2020"
            text="Let clean code guide you. Then let it go."
            />
            <Article
            title="My Decade in Review"
            date = "January 1, 2020"
            text="A peersonal reflection"
            />
        </main>
    )
}

export default ArticleList
