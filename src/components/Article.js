import React from "react"

function Article ({title, date="January 1, 1970", time, preview}){
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}{time}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article