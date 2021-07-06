import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.jsx';
import "./index.css";
import Sdata from './Sdata';
 

// function ncard(val,indexnum,array){

// }
// MAP FUNCTION:
// function ncard(val){
//     console.log(val);
    
// }
ReactDOM.render(
<>
<h1 className="heading_style">List of Top 5 Netflix Series in 2020</h1>
{Sdata.map((val,index) => {

    console.log(index);
    return(
    <Card  
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
    /> 
    );

})} 
</>
  ,document.getElementById('root')
  );

// NORMAL FUNCTION

// function myname(a,b){
//     return a+b;

// }
// FAT ARROW FUNCTION

// const myname = (a,b) => a+b;

