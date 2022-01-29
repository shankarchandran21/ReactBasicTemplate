import React from 'react';
export const Header=()=>{
  return(<>
    <HeaderFullArange/>
  </>);
};
var PStyle= {
  position: 'absolute',
  left: '70%',
  border: '1px solid black',
  borderRadius: '2px',
  padding: '5px',
  backgroundColor: 'black',
};
var HeaderFirstPara= {
  position: 'absolute',
  left: '40%',
}
 //<p className='header-second-p'>Grab now!</p>;
const Headersecond=()=>React.createElement('p',{style:PStyle},'Grab now!')
const HeaderIcon=()=><i class="fas fa-times"></i>
const HeaderPara=()=>React.createElement('p',{style:HeaderFirstPara},'Unlimited download! Starting from just $15/m')
//<p className='header-first-p'>Unlimited download! Starting from just $15/m</p>;
const HeaderImg=()=>< img  src="https://i.pinimg.com/originals/75/72/4d/75724d2d67b5c7fd5634777c5afa0a2a.jpg" alt=""/>
//const HeaderFullArange=()=>{return(<div className='header'>
  //<HeaderImg/>
  //<Headersecond/>
  //<HeaderPara/>
  //<HeaderIcon/>
//</div>);};

const HeaderFullArange=()=>{return React.createElement("div",
{className:'header'},
<HeaderImg/>,
<Headersecond/>,
<HeaderPara/>,
<HeaderIcon/>,
);};








