import React from "react"

function Article ({title, date="January 1, 1970", time, text}){
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}{time}</small>
            <p>{text}</p>
        </article>
    )
}

export default Article