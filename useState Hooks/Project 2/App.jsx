import React, { useState } from 'react';

const App = () =>{
  let date=new Date().toLocaleTimeString();

  const [time,getTime]=useState(date);
  
  const Click = ()=>{
    date=new Date().toLocaleTimeString();
    getTime(date);
    

  }
  return(  
    <>
    <div className="main">
        <h1 className="heading"> {time} </h1>
        <button className="btn" onClick={Click}>Get Time</button>
    </div>
</>

  );
}

export default App;