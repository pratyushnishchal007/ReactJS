import React from 'react';
import Sdata from './Sdata.jsx';
import Card from './Card.jsx';


const Amazon = () =>{
    return(
        <Card  
            key={Sdata[3].id}
            imgsrc={Sdata[3].imgsrc}
            title={Sdata[3].title}
            sname={Sdata[3].sname}
            link={Sdata[3].link}
        /> 
        );  
}
export default Amazon;