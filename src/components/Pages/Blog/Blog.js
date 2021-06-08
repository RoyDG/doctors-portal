import React from 'react';
import ema from '../../../images/ema.png';
import roy from '../../../images/roy.png';
import ena from '../../../images/ena.png';
import BlogInfo from '../BlogInfo/BlogInfo';


const BlogData = [
    {
        img: roy,
        name:'Dr. Roy Jonson',
        date:'23 April 2021',
        title:'2 times of brush can keep you heathy',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptate esse! Nostrum porro neque.'    
    },
    {
        img: ema,
        name:'Dr. Ema Watson',
        date:'5 May 2021',
        title:'Fresh mouth can make your day alive',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptate esse! Nostrum porro neque.'
    },
    {
        img: ena,
        name:'Dr. Ena Fernandez',
        date:'14 March 2021',
        title:'The tooth cancer is taking a challenge',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptate esse! Nostrum porro neque.'
    }
]

const Blog = () => {
    return (
        <section className = "blog my-5 py-5">
            <div className="section-header text-center">
                <h5 className="text-info my-3 text-uppercase">
                    OUR BLOG
                </h5>
                <h1>From Our Blog News</h1>
            </div>

            <div className= "container">          
                <div className="card-deck mt-5 row">
                    {
                        BlogData.map(blog => <BlogInfo blog = {blog}></BlogInfo>
                        
                         )
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;