export const StartingImg=()=>{
    return(
    <div>
      <StartingImgAlign/>  
    </div>
    );
};

const StartingImgAlign =()=>{
    return(<>
    <div className="startingImg-flex">
        <div className="life-margin-starting">
            <Lifestyle/>
        </div>
        <div className="tech-margin-staring">
                 <Technology/>
        <div className="flex-starting-sb">
                <Business/>
                <Sports/>
            </div>
        </div>
    </div>
    </>);
};
const Lifestyle =()=>{
    return(<>
         <LifeImg/>
    <div className="life-starting-text"> 
       <div className="LifeHeader-starting">
            <div className="flex-circle-life-starting">
           <LifeIcon/>
           <LifeBox/>
        </div>    
        <LifeH1/>
        <LifePara/>
       </div>
    </div>
    
    </>);
}

const LifeImg=()=>{
    return <img src="https://i.pinimg.com/564x/78/36/24/783624e4ce5828774ce022d648b5511c.jpg" className="Img-staring-life"/>
};
const LifeIcon=()=>  <i class="fas fa-circle"></i>;
const LifeBox=()=> <p>Lifestyle</p>
const LifeH1=()=><h1>Ten tell-tale signs you need to get a new startup.</h1>
const LifePara=()=><p>No visited raising gravity outward subject my cottage Mr be.
     Hold do at tore in park feet near my case.
</p>

const Technology =()=>{
    return(
        <div className="border-tech-starting">
      <div>
        <TechImg/>  
      </div>
    <div className="Tech-starting-position">
        <div className="tech-text-position">
            <div className="tech-flex-icon">
               <TechIcon/>
            <TechBox/>
            </div>
            <TechH5/>
        </div>
    </div>
  </div>
    );
};

const TechImg=()=><img src="https://cdn.talkesport.com/wp-content/uploads/technology-esports.jpg"className="tech-starting-img"/>
const TechIcon=()=> <i class="fas fa-circle"></i>;
const TechBox=()=> <p className="tech-heading">Technology</p>;
const TechH5=()=><h4 className="tech-starting-hfive">Best Pinterest boards for learning about business</h4>

const Business=()=>{
    return(
    <div className="business-border-starting">
        <div>
           <BusiImage/> 
        </div>
        <div className="set-bus-staring">
            <div className="flex-sports-icon-starting">
            <BusiIcon/>
            <BusiBox/>
                 </div>
            <BusiH4/>
        </div>
    </div>
    );
};

const BusiImage=()=><img src="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2019/10/business_with_esa/21093947-3-eng-GB/Business_with_ESA_pillars.jpg" className="img-busi-starting"/>
const BusiIcon=()=><i class="fas fa-circle"></i>;
const BusiBox=()=><p>Business</p>;
const BusiH4=()=><h4 className="bus-heading-starting">Five intermediate guide to business</h4>;

const Sports=()=>{
    return(
    <div className="sports-staring-border">
        <div>
           <SportImg/>
        </div>
       <div className="sports-text-starting">
            <div className="icon-flex-sports-starting">
            <SportIcon/>
            <SportBox/>
        </div>
        <SportH4/>
       </div>
    </div>
    );
};

const SportImg=()=> <img src="https://media.istockphoto.com/photos/various-sport-equipments-on-grass-picture-id949190736?b=1&k=20&m=949190736&s=170667a&w=0&h=f3ofVqhbmg2XSVOa3dqmvGtHc4VLA_rtbboRGaC8eNo=" className="img-sports-starting"/>;
const SportIcon=()=> <i class="fas fa-circle"></i>;
const SportBox=()=><p>Sports</p>;
const SportH4=()=><h4>15 reasons to choose startup</h4>;