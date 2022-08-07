import {useState}  from 'react';
import BlogList from './BlogList';

const Home = ()=>{
  const [blogs , setBlogs] = useState([
  {title : 'My new web site' , body: 'lorem ipsum...' , auther:'mario' , id: 1},
  {title : 'Welcom party!!' , body : 'lorem ipsum...' , auther:'ali' , id:2},
  {title : 'Web dev top tips' , body: 'lorem ipsum...' , auther:'mario' , id:3}
  ]);
       
    return(
       <div className="home">
       <BlogList blogs={blogs} title="All Blogs!"/>
       <BlogList blogs={blogs.filter((blogs) => blogs.auther === 'mario')} title="mario's blogs "/>
       </div>
    )} 
export default Home;