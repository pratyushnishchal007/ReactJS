
import React from 'react';
import Sdata from './Sdata.jsx';
import Card from './Card.jsx';


const Netflix = () =>{

    return(
        <Card  
            key={Sdata[1].id}
            imgsrc={Sdata[1].imgsrc}
            title={Sdata[1].title}
            sname={Sdata[ 1].sname}
            link={Sdata[1].link}
        /> 
        );
}
export default Netflix;