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

 import {useState}  from 'react';

const Home = ()=>{
    // let name ='mario';
    const [ name , setName] = useState('mario');  //initial value   مقدار اولیه 
    const [age , setAge] = useState(20);
    
    const handleClick = ()=>{
        setName('ali');
        setAge(25);
   }
    return(
       <div className="home">
        <h2>HomePage</h2>
        <p>{name} is {age} years old.</p>
        <button onClick={handleClick }>Click me</button>
       </div>
    );
    
}

export default Home;