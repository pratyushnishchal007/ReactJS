import React from 'react';
import SlotM from './SlotM.jsx'



const App = () =>{
  return(

<>
<h1 className="heading_style"> 🎰 Welcome to <span style={{fontWeight:'bold'}}>slot machine game 🎰 </span> </h1>
 <div className="slotmachine">
  <SlotM x=' 😃 ' y=' 😃 ' z=' 😃 '/>
  <SlotM x=' 🥰 ' y=' 🐌 ' z=' 😃 '/>
  <SlotM x=' ❄️ ' y=' ❄️ ' z=' 😃 '/>
  <SlotM x=' ❄️ ' y=' ❄️ ' z=' 😃 '/>
  </div>
</>

  );

}

export default App;