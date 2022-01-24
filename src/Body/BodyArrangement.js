import {AboutComp} from "./AboutComp";
import { Blogzine } from "./Blogzine";
import { TrendingComp } from "./Trending";
import { StartingImg } from "./BodyImg";
import{Highlights} from "./Highlights";
export const BodyFirstComp=()=>{
    return(<>
    <div className="BodyFirstComp">
<AboutComp/>
</div>
<div>
     <Blogzine/>
 </div>
 <div>
     <TrendingComp/>
 </div>
 <div>
     <StartingImg/>
 </div>
 <div>
     <Highlights/>
 </div>
    </>);
};

