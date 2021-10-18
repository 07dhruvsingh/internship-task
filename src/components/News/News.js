import React from 'react'
import './News.css'

function News(props) {

    let content = props.news.split('[')[0]
    return (
        <div className="news-card">
            <div>
                <h1>{props.title}</h1>
            </div>
            <div className="img-news">
                <div>
                    <img className="img" src={props.img}/>
                </div>
                <div>
                    <h3>{content} <a href={props.url}>Read More</a> </h3>
                </div>
            </div>
        </div>
    )
}

export default News
