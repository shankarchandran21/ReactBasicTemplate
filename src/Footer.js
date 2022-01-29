import React from "react";

export const Footer=()=>{
    return React.createElement('div',{className:"Border-full-color"}, <FooterFull/>,
        <FullLast/>)
};
//const Footer=()=>{
  //  return(<div className="Border-full-color">
    //    <FooterFull/>
      //  <FullLast/>
   // </div>);
//};



//<BlogzinePara/>
const Blogzinecontent=()=>React.createElement(BlogzinePara,{},'null')
const BlogzineH1=()=>React.createElement('h1',{},'blogzine')
//<h1>blogzine</h1>;
const BlogzineIcon=()=><i class="fas fa-quote-left"></i>;
const BlogzinePara=()=><p className="Blogzine-para">The next-generation blog, news, and magazine theme for you to start sharing your stories today!
     This Bootstrap 5 based theme is ideal for all types of sites that deliver the news.</p>
const Post=()=><h3>Recent post</h3>;
const Navigation=()=><h3>Navigation</h3>;
const Updates=()=><h3>Get Regular Updates</h3>
const MobileApp=()=><h3>Our mobile App</h3>
const News=()=><p>News</p>
const Career=()=><p>Career</p>
const Technology=()=><p>Technology</p>
const Startups=()=><p>Startups</p>
const Gadgets=()=><p>Gadgets</p>
const Inspiration=()=><p>Inspiration</p>

const Style=()=><p>Style Guide</p>
const Contact=()=><p>Contact us</p>
const Theme=()=><p>Get Theme</p>
const Support=()=><p>Support</p>
const Policy=()=><p>Privacy Policy</p>
const Newsletter=()=><p>Newsletter</p>

const BusiPara=()=><h4 className="width-h4-busi">Up-coming business bloggers, you need to watch</h4>
const BusinessSub=()=><p className="border-bus-footer">Business</p>;
const FeaturesSub=()=><p className="Margin-feature">Features</p>;
const NewsSub=()=><p>News</p>;
const WhatsAppIcon=()=><i class="fab fa-whatsapp"></i>;
const WhatsAppH=()=><p>WhatsApp</p>
const MobilePara=()=><p className="Mobile-para-width">Download our App and get the latest Breaking
     News Alerts and latest headlines and daily articles near you.</p>
const YoutubeIcon=()=><i class="fab fa-youtube"></i>
const YoutubeH=()=><p>YouTube</p>
const NewsLetterIcon=()=><i class="far fa-envelope"></i>;
const NewsLetterH=()=><p>Newsletters</p>
const WebsiteIcon=()=><i class="far fa-bell"></i>
const Website=()=><p>Website Notification</p>

const HotTopics=()=><h4>Hot topics</h4>
const HotTopicsPara=()=><p className="Hot-para-padding">Covid-19 Politics Entertainment Media Royalist World Half Full Scouted Travel Beast Inside Crossword Newsletters Podcasts Auction 2021 Protests
          NewsCyber Education Sports Tech And Auto Opinion Share Market</p>
const WebSiterights=()=><p>©2021 Webestica. All rights reserved</p>
const English=()=><p>English Edition</p>;
const Terms=()=><p className="margin-term">Terms</p>;
const Privacy=()=><p className="margin-privacy">Privacy</p>
const Cookies=()=><p className="Margin-cookies">Cookies</p>

//const FooterFull=()=>{
  //  return(<div className="centerfooter">
    //            <BlogzineFull/>
      //          <FooterMid/>
    //</div>);
//};

const FooterFull=()=>{
    return React.createElement('div',{className:"centerfooter"},
                <BlogzineFull/>,
                <FooterMid/>);
};

const BlogzineFull=()=>{
    return(<div>
        <div className="flex-blogzine">
            <BlogzineFooter/>
        <Blogzinecontent/>
        <div>
            <EmailAndSub/>
            <div>
                <EmailSubUnder/>
            </div>
        </div>
        </div>
    </div>);
};

const EmailSubUnder=()=>{
    return(<div>
        <p className="Email-under-para">By subscribing you agree to our Privacy Policy</p>
    </div>);
};

//const BlogzineFooter=()=>{
  //  return(<div className="flex-icon-blogzine">
    //    <BlogzineIcon/>
        <BlogzineH1/>
    //</div>);
//};

const BlogzineFooter=()=>{
    return React.createElement('div',{className:"flex-icon-blogzine"},
     <BlogzineIcon/>,
        <BlogzineH1/>
    );
};


//const EmailAndSub=()=>{
  //  return(<div className="flex-emailsub">
    //    <Email/>
      //  <Sub/>
    //</div>);
//}

const EmailAndSub=()=>{
    return React.createElement('div',{ className:"flex-emailsub"},
    <Email/>,
        <Sub/>);
};

const Email=()=><p className="email-box">Enter your email address</p>
const Sub=()=><p className="Sub-border">Subscribe</p>

const FooterMid=()=>{
    return(<div>
        <div>
            <MainHeading/>
        </div>
        <div>
            <SubHeading/>
        </div>
        <div className="padding-hot">
            <HotTopicsFull/>
        </div>
    </div>);
};
//const MainHeading=()=>{
  //  return(<div className="flex-Main-H">
    //    <Post/>
      //  <Navigation/>
        //<Updates/>
        //<MobileApp/>
    //</div>);
//};

const MainHeading=()=>{
    return React.createElement('div',{className:"flex-Main-H"},
     <Post/>,
        <Navigation/>,
        <Updates/>,
        <MobileApp/>,
    )
};

//const SubHeading=()=>{return(<div className="flex-sub-H">
            
  //              <BusinessUnder/>
    //            <FeaturesSubUnder/>
      //          <NewsSubUnder/>
        //        <WhatsAppFullUnder/>
          //      <MobilePara/>
//</div>);};

const SubHeading=()=>{
    return React.createElement('div',{className:"flex-sub-H"},
     <BusinessUnder/>,
                <FeaturesSubUnder/>,
                <NewsSubUnder/>,
                <WhatsAppFullUnder/>,
                <MobilePara/>,
    );
};

//const BusinessUnder=()=>{
  //  return(<div className="width-full-business">
    //    <BusinessSub/>
      //  < BusiPara/>
        // <BusinessSub/>
        //< BusiPara/>
    //</div>);
//};

const BusinessUnder=()=>{
    return React.createElement('div',{className:"width-full-business"},
     <BusinessSub/>,
        < BusiPara/>,
         <BusinessSub/>,
        < BusiPara/>,
    );
};

//const FeaturesSubUnder=()=>{
  //  return(<div>
    //    <FeaturesSub/>
      //  <Style/>
        //<Contact/>
        //<Theme/>
        //<Support/>
        //<Policy/>
        //<Newsletter/>
    //</div>);
//};

const FeaturesSubUnder=()=>{
    return React.createElement('div',{}, <FeaturesSub/>,
        <Style/>,
        <Contact/>,
        <Theme/>,
        <Support/>,
        <Policy/>,
        <Newsletter/>)
};

//const NewsSubUnder=()=>{return(<div>
  //      <NewsSub/>
    //    <News/>
      //  <Career/>
       // <Technology/>
        //<Startups/>
        //<Gadgets/>
       // <Inspiration/>
//</div>)};

const NewsSubUnder=()=>{
    return React.createElement('div',{}, <NewsSub/>,
        <News/>,
        <Career/>,
        <Technology/>,
        <Startups/>,
        <Gadgets/>,
        <Inspiration/>);
}
//const WhatsAppFullUnder=()=>{return(<div>
  //      <WhatsAppFull/>
  //      <YoutubeFull/>
  //      <WebsiteFull/>
  //      <NewsLetterFull/>
//</div>)};

const WhatsAppFullUnder=()=>{
    return React.createElement('div',{}, <WhatsAppFull/>,
        <YoutubeFull/>,
        <WebsiteFull/>,
        <NewsLetterFull/>);
};

//const WhatsAppFull=()=>{return(<div className="wathsapp-flex">
  //  <WhatsAppIcon/>
    //<WhatsAppH/>
//</div>);};

const WhatsAppFull=()=>{
    return React.createElement('div',{className:"wathsapp-flex"}, <WhatsAppIcon/>,
    <WhatsAppH/>)
};

//const YoutubeFull=()=>{return(<div className="flex-youtube-icon">
  //       <YoutubeIcon/>
    //     <YoutubeH/>
    // </div>)};

 const YoutubeFull=()=>{
     return React.createElement('div',{className:"flex-youtube-icon"},<YoutubeIcon/>,
         <YoutubeH/>);
 };   

//const WebsiteFull=()=>{return(<div className="flex-website">
//         <WebsiteIcon/>
//         <Website/>
//     </div>);};
    
const WebsiteFull=()=>{
    return React.createElement('div',{className:"flex-website"}, <WebsiteIcon/>,
         <Website/>)
};


  //   const NewsLetterFull=()=>{return(<div className="NewsLetter-flex">
    //     <NewsLetterIcon/>
      //   <NewsLetterH/>
     //</div>);};
     
 const NewsLetterFull=()=>{
     return React.createElement('div',{className:"NewsLetter-flex"},<NewsLetterIcon/>,
         <NewsLetterH/>);
 };


     const HotTopicsFull=()=>{return(<div>
         <HotTopics/>
         <HotTopicsPara/>
     </div>);};
//const FullLast=()=>{return(<div className="margin-top-color">
  //  <div className="margin-width-last-box">
    //    <WebSiterights/>
    //<FourSidesFull/>
    //</div>
//</div>);};

const FullLast=()=>{
    return React.createElement('div',{className:"margin-top-color"},React.createElement('div',{className:"margin-width-last-box"},  <WebSiterights/>,
    <FourSidesFull/>))
};

//const FourSidesFull=()=>{return(<div className="flex-sideLast">
  //    <English/>
    //  <Terms/>
    //  <Privacy/>
    //  <Cookies/>
//</div>);};

const FourSidesFull=()=>{
    return React.createElement('div',{className:"flex-sideLast"}, <English/>,
      <Terms/>,
      <Privacy/>,
      <Cookies/>);
};