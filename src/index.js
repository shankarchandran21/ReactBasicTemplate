import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//const Maincomponent=()=>{
  //return(
    //<>
    //<App/>
   // </>
  //);
//};
const Maincomponent=()=>{
  return React.createElement('div',{},<App/>)
}

ReactDOM.render(<Maincomponent/>,document.getElementById('root'))