import React from 'react';
import {add,sub,mul,div} from './Calcy.jsx'
function App(){
    return(
        <>
    <ul>
        <li>The sum of 2 number is {add(20,2)}</li>
        <li>The sub of 2 number is {sub(20,2)}</li>
        <li>The mul of 2 number is {mul(20,2)}</li>
        <li>The div of 2 number is {div(40,3)}</li>
    </ul>
    </>
    );
}
export default App;