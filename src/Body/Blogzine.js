export const Blogzine=()=>{
    return(<>
    <div>
         <BlogzineIcon/>
    </div>
    </>);
};

const BlogzineIcon=()=>{
    return(<>
   <div className="Blogzine-full-flex">
        <div className="blogzineicon">
      <BlogzineTheme/>
        <h3>blogzine</h3>
    </div>
   <div>
        <BlogzineCenter/>
   </div>
     <div>
       <Subscribe/>
   </div>
   </div>
  
   
    </>);
};
const BlogzineTheme=()=>{
    return<i class="fas fa-quote-right"></i>;
};
const BlogzineCenter=()=>{
    return(<>
    <div className="BlogCenter">
        <Home/>
        <Pages/>
        <Lifestyle/>
        <Components/>
    </div>
    </>);
};

const Home=()=>{
return <p>Home</p>
};
const Pages=()=>{
    return <p className="page-margi">Pages</p>
};
const Post=()=>{
    return <p className="post-matgin">Post</p>
};
const Lifestyle =()=>{
    return <p className="life-margin">Lifestyle</p>
}
const Components=()=>{
    return <p className="comp-margin">Components</p>
}

const Subscribe=()=>{
    return(<>
    <div className="sub-flex">
        <p className="sub-border-color"> Subscribe!</p>
        <SubIcon/>
    </div>

    </>);
};
const SubIcon=()=>{
    return(<>
    <div>
       <SearchIcon/>
       <AlignIcon/>
    </div>
    </>);
};

const SearchIcon=()=>{
    return <i class="fas fa-search"></i>
};
const AlignIcon=()=>{
    return  <i class="fas fa-align-right"></i>
}