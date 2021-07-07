import React, { useState } from 'react';

const App = () =>{
    const [bg,setBg] = useState('red');
    const [text,setText] = useState('click me');
    
    const bgChange = () =>{
        
        let col='rgb(235, 135, 14)';
        setBg(col);
        let t1='Ouch';
        setText(t1);
    }
    const BgDouble = () =>{
        let col1='yellow';
        setBg(col1);
        let t2='hurray';
        setText(t2);
    }

    return(
        <>
            <div style={{ backgroundColor :bg }}>
                <button onClick = {bgChange} onDoubleClick={BgDouble}>{text}</button>
            </div>
        </>
    );
}

export default App;
