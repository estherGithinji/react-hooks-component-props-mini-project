import React from "react";


function About ({src = "https://via.placeholder.com/215", text}){
    return (
        <aside>
        <img src={src} alt="blog logo"/>
            <p>{text}</p>
        </aside>
    )
}

export default About