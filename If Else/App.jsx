import React from 'react';
import Amazon from './Amazon.jsx';
import Netflix from './Netflix.jsx';



const favSeries = 'amazon';


const FavSeries = () =>{

if(favSeries==='netflix'){
  return <Netflix />
}else{
    return <Amazon />
}

}





const App = () => (
<>
    <h1 className="heading_style">List of Top 5 Netflix Series in 2020</h1>
    <FavSeries />
</>
);


export default App;