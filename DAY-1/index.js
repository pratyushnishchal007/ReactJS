import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render('what to show', 'where to show', 'callback function');
// IN REACT v16 IT'S POSSIBLE FOR render()
// TO RETURN AN ARRAY OF ELEMENTS.
// ReactDOM.render(
//      <>
//         <h1>Hello World</h1>
//         <p>this is a paragraph</p>
//         <h2>this is 2nd heading</h2>
//     </>,
//     document.getElementById("root"));

//  JAVASCRIPT EXPRESSION IN JSX

// const fname="pratyush";
// const lname="nishchal";
// ReactDOM.render(
// <>
//     <h1>My first name is {fname} and last name is {lname}</h1>
//     <h1>My first name is {fname} {lname}</h1>
//     <h1>My first name is {fname + " "+ lname}</h1>
//     <p>My lucky number is {5+4}</p>
//     <p>My lucky number is {Math.random()}</p>

// </>,document.getElementById("root"));

// TEMPLATE LITERALS

const fname="pratyush";
const lname="nishchal";

ReactDOM.render(
    <>
            <h1>{`My name is ${fname} ${lname}`}</h1>
            <p>My lucky number is {5+6}</p>
    </>    
    ,document.getElementById("root"));



// ReactDOM.render(
//     React.createElement("h1",null,"Pratyush"),document.getElementById("root")
// );

// var h1=document.createElement("h1");
// h1.innerHTML="hello world";
// document.getElementById("root").appendChild(h1);

