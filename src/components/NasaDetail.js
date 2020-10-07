import React from 'react'


export default function NasaDetails(props) {
    const {url, title, author, date, explanation} = props
    console.log(props.url)

    if (!props.url) return <h3>Loading...</h3>

    return (
        <div className='container'>
            <img src={url}/>
            <h2>{title}</h2>
            <h3>{author}</h3>
            <p>{date}</p>
            <p>{explanation}</p>
        </div>

    )
}