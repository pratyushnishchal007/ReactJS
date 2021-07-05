import React from 'react';

function App(){
let currTime=new Date();
currTime=currTime.getHours();
let greeting='';
const cssStyle = {};
if(currTime>=1 && currTime<12){
    greeting='Good Morning';
    cssStyle.color='green';
    
}else if(currTime>=13 && currTime<19){
    greeting='Good Afternoon';
    cssStyle.color='orange';
}else{
    greeting='Good Night';
    cssStyle.color='black';
}

return (
<h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
);
}

export default App;
