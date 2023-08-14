import React from 'react'
import './article.css';

const Article = ({ img }) => {
  return (
    <div className='gpt3__article'>
      <img src={img} alt={img} />
      <div className="gpt3__article-content">
        <p>Sep 26, 2021</p>
        <h2>GPT-3 and Open  AI is the future. Let us exlore how it is?</h2>
        <a href="#s">Read Full Article</a>
      </div>
    </div>
  )
}

export default Article