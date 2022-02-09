import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { useEffect, useState } from 'react';


function App() {
  const [showL ,setshowL]= useState(true)
  useEffect(()=>{
    const loggin = localStorage.getItem("loggin")
    if(loggin) 
    setshowL(false);
  },[]);
  const nextPage = () => {
    setshowL(false);
    localStorage.setItem("loggin",true);
  };
  const title = showL ? "log-in ": "user_detail";
  
  return (
  <>
     <h1>{title}</h1>
       {showL ? (
         <div>
          <Login nextPage = {nextPage}/>
         </div> 
       ): <div> <h1>projects</h1></div>}
       
  </>
  
   
    
    
    
  );
};

export default App;

