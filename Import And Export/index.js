import React from 'react';
import ReactDOM from 'react-dom';
// import youtuber from './App.jsx';
// import myFav from './App.jsx';
// import myFav,{favProg,myName,myNames} from './App.jsx';
// or
import * as funs from './App.jsx';
ReactDOM.render(
  <>
  <ol>
    <li>Pratyush </li>
    <li>{funs.default} </li>
    <li>{funs.favProg} </li>
    <li>{funs.myName()} </li>
    <li>{funs.myNames()} </li>
  </ol>
  </>,
  document.getElementById('root')


);