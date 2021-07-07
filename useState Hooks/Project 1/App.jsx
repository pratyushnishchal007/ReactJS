import React, { useState } from "react";
const App = () =>{
    const state=useState();
    // console.log(state);
    // setCount is a function and it is a updated value
    // and 5 is a initional value
const [count,setCount] = useState(0);


const IncNum = () =>{
  setCount(count+1);
  // console.log("clicked "+count++);  
}
  return(
    <>
    <div className="main">
        <h1 className="heading"> {count} </h1>
        <button className="btn" onClick={IncNum}>Click Me</button>
    </div>
    </>
  );
}
export default App;