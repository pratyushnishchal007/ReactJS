import React from 'react';
import ReactDOM from 'react-dom';

const name="pratyush";
const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/300/300";
const img3="https://picsum.photos/200/300";
const href="https://www.google.com/search?q=google+drive&oq=goo&aqs=chrome.2.69i65j69i57j69i59l2j69i60l4.2083j0j7&sourceid=chrome&ie=UTF-8";
// .heading{
//     color: rgb(163, 255, 127);
//     text-align: center;
//     text-transform: capitalize;
//     font-weight: bold;
//     text-shadow: 0px 2px 4px red;
//     margin:70px 0;
//     font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  
//   }
//   .img_div {
//     display: flex;
//     justify-content: center;
//   }
//   .img_div img{
//     width: 250px;
//     height: 300px;
//   }

const heading = {
    color : 'rgb(163, 255, 127)',
    textTransform: 'capitalize',
    textAlign: 'center',
    fontWeight: 'bold',
    textShadow: '0px 2px 4px red',
    margin:'70px 0',
    fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
  
}

ReactDOM.render(
    <>
    <h1 style={heading}>My name is {name}</h1>
    <div style={img_div}>
    <img src={img1} alt="photos" />
    <img src={img2} alt="photos" />
    <a href={href} target="_blank">
    <img src={img3} alt="photos" />
    </a>
    </div>
</>
,document.getElementById("root")

);
