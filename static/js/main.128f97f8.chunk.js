(this.webpackJsonpMe=this.webpackJsonpMe||[]).push([[0],{46:function(e,a,t){e.exports=t(73)},51:function(e,a,t){},54:function(e,a,t){},62:function(e,a){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(22),c=t.n(r),s=(t(51),t(43)),i=t(11),o=t(1),m=(t(72),t(37)),u=t.n(m),d=(t(54),t(4)),p=t(5),E=t(6),h=t(7),v=function(e){Object(h.a)(t,e);var a=Object(E.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){if(this.props.data){"".concat("/Me","/images/"),this.props.data.logo;var e=this.props.data.name,a=this.props.data.occupation,t=this.props.data.description,n=this.props.data.address.city,r=this.props.data.social.map((function(e){return l.a.createElement("li",{style:{paddingLeft:"100px",paddingRight:"100px"},key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))}return l.a.createElement("header",{id:"home"},l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I'm ",e,"."),l.a.createElement("h3",null,l.a.createElement("span",null,a)," based in ",n,". ",t,"."),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},r))))}}]),t}(n.Component),f=(n.Component,function(e){Object(h.a)(t,e);var a=Object(E.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){if(console.log("here"),this.props.data)var e=this.props.data.name,a="".concat("/Me","/images/")+this.props.data.image,t=this.props.data.bio,n=this.props.data.address.city,r=this.props.data.address.state,c=this.props.data.phone,s=this.props.data.email,i=this.props.data.resumedownload;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:a,alt:"Lori Liu Profile Pic"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",{className:"uniformStyling"},t),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address uniformStyling"},l.a.createElement("span",null,e),l.a.createElement("br",null),l.a.createElement("span",null,n," ",r),l.a.createElement("br",null),l.a.createElement("span",null,c),l.a.createElement("br",null),l.a.createElement("span",null,s))),l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null,l.a.createElement("a",{href:i,className:"button"},l.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),t}(n.Component)),g=t(42),N=function(e){Object(h.a)(t,e);var a=Object(E.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.education.map((function(e){return l.a.createElement("div",{key:e.school},l.a.createElement("h3",null,e.school),l.a.createElement("p",{className:"info"},e.degree," ",l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.graduated)),l.a.createElement("p",null,e.description))})),a=this.props.data.work.map((function(e){return l.a.createElement("div",{key:e.company},l.a.createElement("h3",null,e.company),l.a.createElement("p",{className:"info"},e.title,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.years)),l.a.createElement("p",null,e.description))}));g.a,this.props.data.skills.map((function(e){return{text:e.name,value:e.level}}))}return l.a.createElement("section",{className:"smoothscroll",id:"resume",style:{overflow:"auto",height:"inherit",display:"block",width:"100%"}},l.a.createElement("div",{className:"row education",style:{overflow:"auto"}},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns",style:{fontSize:"large",fontFamily:"calibri",letterSpacing:"1px"}},e)))),l.a.createElement("div",{className:"row work",style:{overflow:"auto"}},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col",style:{fontSize:"large",fontFamily:"calibri",letterSpacing:"1px"}},a)))}}]),t}(n.Component),y=function(e){Object(h.a)(t,e);var a=Object(E.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.testimonials.map((function(e){return l.a.createElement("li",{key:e.user},l.a.createElement("blockquote",null,l.a.createElement("p",null,e.text),l.a.createElement("cite",null,e.user)))}));return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Client Testimonials"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("ul",{className:"slides"},e)))))}}]),t}(n.Component),w=(t(63),t(64),function(e){Object(h.a)(t,e);var a=Object(E.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){if(this.props.data)this.props.data.projects.map((function(e){var a="".concat("/Me","/images/portfolio/")+e.image;return l.a.createElement("div",{key:e.image,style:{widht:600,heght:650,backgroundColor:"#25274d"}},l.a.createElement("img",{src:a,alt:e.image,style:{width:500,heght:550}}))}));return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapse"},l.a.createElement("h1",null,"My Artwork"),l.a.createElement("h3",null,"under maintenance right now"),l.a.createElement("h3",null,"Hope you find other sections interesting though!"))))}}]),t}(n.Component)),b=function(e){Object(h.a)(t,e);var a=Object(E.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(p.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.objectives.map((function(e){return l.a.createElement("div",{key:e.prompt},l.a.createElement("h3",null,e.prompt),l.a.createElement("p",null,e.description),l.a.createElement("h3",null,e.obj),l.a.createElement("p",null,e.objContent))})),a=l.a.createElement("div",null,l.a.createElement("p",null,this.props.data.background)),t="".concat("/Me","/images/")+this.props.data.showcase,n=this.props.data.research.map((function(e){return l.a.createElement("div",{key:e.method},l.a.createElement("h3",null,e.method),l.a.createElement("p",null,e.methodDescription),l.a.createElement("p",null,e.interviews))})),r=l.a.createElement("div",null,l.a.createElement("p",null,this.props.data.statement)),c=l.a.createElement("div",null,l.a.createElement("p",null,this.props.data.personas.description)),s="".concat("/Me","/images/")+this.props.data.personas.pictures.profiles1,i="".concat("/Me","/images/")+this.props.data.personas.pictures.profiles2,o=l.a.createElement("div",null,l.a.createElement("p",null,this.props.data.personas.persona1Dept)),m=l.a.createElement("div",null,l.a.createElement("p",null,this.props.data.personas.persona2Dept)),u=l.a.createElement("div",null,l.a.createElement("p",null,this.props.data.personas.explanation)),d=l.a.createElement("p",null,this.props.data.UX.redesign),p=this.props.data.UX.actualFlow.map((function(e){return l.a.createElement("div",{key:e.title},l.a.createElement("p",null,e.uX),l.a.createElement("div",null,l.a.createElement("img",{width:"600",src:"".concat("/Me","/images/")+e.flow})))})),E=this.props.data.testing.map((function(e){return l.a.createElement("div",{key:e.directions},l.a.createElement("p",null,e.directions),l.a.createElement("h3",null,"Strength"),l.a.createElement("p",null,e.strength.map((function(e){return l.a.createElement("li",null,e.s)}))),l.a.createElement("h3",null,"Struggles"),l.a.createElement("p",null," ",e.confusion.map((function(e){return l.a.createElement("li",null,e.c)}))),l.a.createElement("h3",null,"Point of view"),l.a.createElement("p",{style:{fontStyle:"italic"}},e.viewpoint))})),h=l.a.createElement("div",null,l.a.createElement("p",null,this.props.data.hiFi.description)),v="".concat("/Me","/images/")+this.props.data.hiFi.dropdown,f=l.a.createElement("div",null,this.props.data.hiFi.options.map((function(e){return l.a.createElement("img",{style:{padding:"5px",float:"center"},width:"350",src:"".concat("/Me","/images/")+e.pic})}))),g=l.a.createElement("div",null,l.a.createElement("p",null,this.props.data.hiFi.outcomeDescription)),N=l.a.createElement("div",null,this.props.data.hiFi.outcome.map((function(e){return l.a.createElement("img",{className:"imgChild",style:{width:"50%",padding:"20px",paddingTop:"0px"},src:"".concat("/Me","/images/")+e.pic})}))),y=l.a.createElement("div",null,l.a.createElement("p",null,this.props.data.reflection));return l.a.createElement("section",{id:"caseStudy"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"eight columns",style:{fontSize:"30px",paddingBottom:"30px",color:"#B39BC8",fontStyle:"italic"}},"Product Design Case Study"),l.a.createElement("div",{className:"four columns",style:{marginTop:"10px",color:"#f3d250"}},"Sept 2020 - Dec 2020")),l.a.createElement("div",{className:"row history"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Where the journey began ..."))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"imgChild uniformStyling",style:{width:"70%",paddingLeft:"0px"}},a),l.a.createElement("div",null,l.a.createElement("img",{width:"20",height:"20",src:t,alt:"background",className:"imgChild",style:{textAlign:"right",paddingTop:"0px"}})))),l.a.createElement("div",{className:"row objectives"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Design Objectives"))),l.a.createElement("div",{className:"nine columns main-col uniformStyling"},e)),l.a.createElement("div",{className:"row userResearch"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"User side of stories"))),l.a.createElement("div",{className:"nine columns main-col uniformStyling"},n)),l.a.createElement("div",{className:"row problemStatement"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",{style:{color:"#659DBD"}},l.a.createElement("span",null,"Problem Statement"))),l.a.createElement("div",{className:"nine columns main-col uniformStyling",id:"pStatement"},r)),l.a.createElement("div",{className:"row personas"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Personas"))),l.a.createElement("div",{className:"nine columns main-col uniformStyling"},c)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"imgChild"},l.a.createElement("img",{width:"240",height:"180",src:i,alt:"James"})),l.a.createElement("div",{className:"imgChild",style:{fontSize:"large",color:"#c4c4c4"}},o),l.a.createElement("div",{className:"imgChild"},l.a.createElement("img",{width:"240",height:"180",src:s,alt:"Lucy"})),l.a.createElement("div",{className:"imgChild",style:{fontSize:"large",color:"#c4c4c4"}},m)),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns header-col"}),l.a.createElement("div",{className:"nine columns main-col uniformStyling",style:{paddingTop:"20px"}},u)),l.a.createElement("div",{className:"row UXFlow"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Logic of design"))),l.a.createElement("div",{className:"nine columns main-col uniformStyling"},d,p)),l.a.createElement("div",{className:"row userTesting",style:{paddingTop:"20px"}},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Feedback from users"))),l.a.createElement("div",{className:"nine columns main-col uniformStyling",style:{paddingTop:"10px"}},E)),l.a.createElement("div",{className:"row hiFi"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"High Fidelity Prototype"))),l.a.createElement("div",{className:"nine columns main-col uniformStyling"},l.a.createElement("div",{className:"imgChild",style:{width:"70%",paddingLeft:"0px"}},h),l.a.createElement("div",null,l.a.createElement("img",{width:"200px",src:v}))),l.a.createElement("div",{className:"row"},f),l.a.createElement("div",{className:"three columns header-col"}),l.a.createElement("div",{className:"nine columns main-col uniformStyling",style:{paddingTop:"15px"}},l.a.createElement("div",null,g)),l.a.createElement("div",{className:"row"},l.a.createElement("div",null,N))),l.a.createElement("div",{className:"row refelection"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Thoughts"))),l.a.createElement("div",{className:"nine columns main-col uniformStyling",style:{fontStyle:"Bold"}},y)))}}]),t}(n.Component);function j(){var e,a=Object(n.useState)({resumeData:{}}),t=Object(s.a)(a,2),r=t[0],c=t[1],m="".concat("/Me","/images/");(null===(e=r.resumeData.main)||void 0===e?void 0:e.logo)&&(m+=r.resumeData.main.logo);return Object(n.useEffect)((function(){u.a.ajax({url:"".concat("/Me","/resumeData.json"),dataType:"json",cache:!1,success:function(e){c({resumeData:e})},error:function(e,a,t){console.log(t),alert(t)}})}),[]),l.a.createElement("div",{className:"App"},l.a.createElement("header",{id:"home",style:{height:"500px"}},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("div",{className:"topnav"},l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{style:{marginTop:"-20px"}},l.a.createElement(i.b,{to:"/"},l.a.createElement("img",{className:"logo",src:m,alt:"Logo"}))),l.a.createElement("li",{className:"current"},l.a.createElement(i.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/about"},"About")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/resume"},"Resume")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/caseStudy"},"Case Study")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/art"},"Art Work")),l.a.createElement("li",null,l.a.createElement(i.b,{to:"/quotes"},"Quotes"))),l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/"},l.a.createElement(v,{data:r.resumeData.main})),l.a.createElement(o.a,{path:"/about"},l.a.createElement(f,{data:r.resumeData.main})),l.a.createElement(o.a,{path:"/resume"},l.a.createElement(N,{data:r.resumeData.resume})),l.a.createElement(o.a,{path:"/caseStudy"},l.a.createElement(b,{data:r.resumeData.casestudy})),l.a.createElement(o.a,{path:"/art"},l.a.createElement(w,{data:r.resumeData.portfolio})),l.a.createElement(o.a,{path:"/quotes"},l.a.createElement(y,{data:r.resumeData.testimonials})))))))}var k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(l.a.createElement(i.a,null,l.a.createElement(j,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Me",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Me","/service-worker.js");k?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):S(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):S(e)}))}}()}},[[46,1,2]]]);
//# sourceMappingURL=main.128f97f8.chunk.js.map