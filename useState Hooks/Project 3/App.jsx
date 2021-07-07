import React, { useState } from 'react';


const App = () =>{

  let t = new Date().toLocaleTimeString();
  
  const [time,setTime]=useState(t);

  const GetTime = () => {
    t=new Date().toLocaleTimeString();
    setTime(t); 
  }
  setInterval(GetTime,1000);
  return(
    <>
    <div className="main">
        <h1 className="heading">{time}</h1>
    </div>
    </>


  );
}

export default App;
