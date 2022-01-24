export const TrendingComp=()=>{
    return(<>
    <div>
        <TrendingBox/>
    </div>
    </>);
};

const TrendingBox=()=>{
    return(<>
    <div className="trend-flex">
        <Trending/>
        <TrendingIcon/>
    </div>
    </>);
};
const Trending=()=><p className="trend-box">Trending:</p>;

const TrendingIcon=()=>{
    return(<>
    <div>
    <LeftArrow/>   
    <RightArrow/>
    </div>
    </>);
};

const LeftArrow=()=><i class="fas fa-angle-left"></i>;
const RightArrow=()=><i class="fas fa-angle-right"></i>