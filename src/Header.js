export const Header=()=>{
  return(<>
    <HeaderFullArange/>
  </>);
};
const Headersecond=()=> <p className='header-second-p'>Grab now!</p>;
const HeaderIcon=()=><i class="fas fa-times"></i>
const HeaderPara=()=><p className='header-first-p'>Unlimited download! Starting from just $15/m</p>;
const HeaderImg=()=>< img  src="https://i.pinimg.com/originals/75/72/4d/75724d2d67b5c7fd5634777c5afa0a2a.jpg" alt=""/>
const HeaderFullArange=()=>{return(<div className='header'>
  <HeaderImg/>
  <Headersecond/>
  <HeaderPara/>
  <HeaderIcon/>
</div>);};




