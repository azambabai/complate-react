//lesson 7

// const Home = ()=>{
//     const handleClick = (e)=>{
//      console.log("hello APS!" , e)
//     }
 
//     const handleClickAgain = (name , e) =>{
//     console.log("hello" + '' + name , e.target)
//     }
//      return(
//         <div className="home">
//          <h2>HomePage</h2>
//          <button onClick={handleClick }>Click me</button>
//          <button onClick= { (e)=> handleClickAgain('azam' , e) }>Click me again</button>
//         </div>
//      );
     
//  }
 
//  export default Home;


 //lesson 8 , 9

//  import {useState}  from 'react';

// const Home = ()=>{
//     // let name ='mario';
//     const [ name , setName] = useState('mario');  //initial value   مقدار اولیه 
//     const [age , setAge] = useState(20);
    
//     const handleClick = ()=>{
//         setName('ali');
//         setAge(25);
//    }
//     return(
//        <div className="home">
//         <h2>HomePage</h2>
//         <p>{name} is {age} years old.</p>
//         <button onClick={handleClick }>Click me</button>
//        </div>
//     );
    
// }

// export default Home;

//lesson 12,13 

// import {useState}  from 'react';
// import BlogList from './BlogList';

// const Home = ()=>{
//   const [blogs , setBlogs] = useState([
//   {title : 'My new web site' , body: 'lorem ipsum...' , auther:'mario' , id: 1},
//   {title : 'Welcom party!!' , body : 'lorem ipsum...' , auther:'ali' , id:2},
//   {title : 'Web dev top tips' , body: 'lorem ipsum...' , auther:'mario' , id:3}
//   ]);

//   const handleDelete = (id)=>{
//   const newBlogs = blogs.filter(blog => blog.id !==id)
//   setBlogs(newBlogs);
//   }
//     return(
//        <div className="home">
//        <BlogList blogs={blogs} title="All Blogs!" handleDelete = {handleDelete}/>
//        {/* /* <BlogList blogs={blogs.filter((blogs) => blogs.auther === 'mario')} title="mario's blogs "/> */} 
//        </div>
//     )} 
// export default Home;

//lesson 14 , 15 , 16 
import {useState , useEffect}  from 'react';
import BlogList from './BlogList';

const Home = ()=>{
  const [blogs , setBlogs] = useState([
  {title : 'My new web site' , body: 'lorem ipsum...' , auther:'mario' , id: 1},
  {title : 'Welcom party!!' , body : 'lorem ipsum...' , auther:'ali' , id:2},
  {title : 'Web dev top tips' , body: 'lorem ipsum...' , auther:'mario' , id:3}
  ]);

  const [name , setName] = useState('mario');

  const handleDelete = (id)=>{
  const newBlogs = blogs.filter(blog => blog.id !==id)
  setBlogs(newBlogs);
  }

  useEffect( ()=>{
  console.log('use effect ran')
  console.log(name)
  } , [name])

    return(
       <div className="home">
       <BlogList blogs={blogs} title="All Blogs!" handleDelete = {handleDelete}/>
       {/* /* <BlogList blogs={blogs.filter((blogs) => blogs.auther === 'mario')} title="mario's blogs "/> */} 
       <button onClick={ ()=> setName('azam')}>change name</button>
       <p>{name}</p>
       </div>
    )} 
export default Home;
