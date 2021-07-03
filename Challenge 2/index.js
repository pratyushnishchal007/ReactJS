import React from 'react';
import ReactDOM from 'react-dom';

const fname="pratyush";
const lname="nischal";
const currdate = new Date().toLocaleDateString();
const currtime = new Date().toLocaleTimeString();

ReactDOM.render(
<>
  <h1>{`Hello , My Name is ${fname} ${lname}`}</h1>
  <p>The current data is = {currdate}</p>
  <p>The current data is = {currtime}</p>
  

</>
  
  ,document.getElementById("root"));