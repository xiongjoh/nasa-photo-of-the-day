import React from 'react'


export default function NasaDetails(props) {
    // const {url, title, explanation, date, author} = props
    console.log(props.url)
    // if (!url) return <h3>Loading...</h3>
    if (!props.url) return <h3>Loading...</h3>

    return (
        <div className='container'>
            <img src={props.url}/>
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
            <p>{props.date}</p>
            <p>{props.explanation}</p>
        </div>
        // <div className='container'>
        //     <img src={url}/>
        //     <h2>{title}</h2>
        //     <h3>{author}</h3>
        //     <p>{date}</p>
        //     <p>{explanation}</p>
        // </div>
    )
}