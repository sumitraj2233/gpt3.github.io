import React from 'react'
import "./blog.css";
import Article from '../../components/article/Article';
import blog1 from "../../assets/blog01.png";
import blog2 from "../../assets/blog02.png";
import blog3 from "../../assets/blog03.png";
import blog4 from "../../assets/blog04.png";
import blog5 from "../../assets/blog05.png";

const Blog = () => {
  const dataItems = [
    {
      img: blog1,
    },
    {
      img: blog2,
    },
    {
      img: blog3,
    },
    {
      img: blog4
    },
    {
      img: blog5
    }
  ];
  return (
    <div className='gpt3__blog section__padding' id="blog">
      <div className='gpt3__heading'>
        <h1 className='graident__text '>A lot is happening,
          We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-content">
        {dataItems.map((item, index) => <Article key={index} img={item.img} />)}
      </div>
    </div>
  )
}

export default Blog