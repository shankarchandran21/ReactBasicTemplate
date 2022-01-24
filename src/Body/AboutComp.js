export const AboutComp=()=>{
    return(<>
    <div className="body-header">
 <About/>
 <Forum/>
 <Buy/>
 <Join/>
</div>
 <div>
     <BodyFirstCompIcon/>
 </div>
    </>);
};

const About =()=><p>About</p>;
const Forum=()=><p className="forum-margin">Forum</p>;
const Buy=()=><p className="buy-margin">Buy now!</p>;
const Join=()=> <p className="join-margin">Login / Join</p>;
const BodyFirstCompIcon=()=>{
    return(<>
    <div className="first-comp-icon">
        <div className="Aicon">
        <p className="first-A">A</p>
        <p className="Center-A">A</p>
        <p className="last-A">A</p>
        </div>
        <Setting/>
       <Facebook/>
       <Twitter/>
       <Linked/>
        <Youtube/>
        <Viemo/>
    </div>
    
    </>);
};

const Setting=()=>{
    return <i class="fas fa-cog"></i>
};
const Facebook=()=>{
    return <i class="fab fa-facebook-square"></i>
};

const Twitter=()=>{
    return  <i class="fab fa-twitter-square"></i>
};

const Linked=()=>{
    return <i class="fab fa-linkedin-in"></i>
};
const Youtube =()=>{
    return <i class="fab fa-youtube-square"></i>
};
const Viemo =()=>{
    return  <i class="fab fa-vimeo-square"></i>
}