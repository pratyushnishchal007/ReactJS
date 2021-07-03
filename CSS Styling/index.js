import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const name="pratyush";
const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/300/300";
const img3="https://picsum.photos/200/300";
const href="https://www.google.com/search?q=google+drive&oq=goo&aqs=chrome.2.69i65j69i57j69i59l2j69i60l4.2083j0j7&sourceid=chrome&ie=UTF-8";
ReactDOM.render( 
    <>
    <h1 className="heading">My name is {name}</h1>
    <div className="img_div">
    <img src={img1} alt="photos" />
    <img src={img2} alt="photos" />
    <a href={href} target="_blank">
    <img src={img3} alt="photos" />
    </a>
    </div>
</>
,document.getElementById("root")

);