(this.webpackJsonpMe=this.webpackJsonpMe||[]).push([[0],{34:function(e,a,t){e.exports=t(57)},39:function(e,a,t){},42:function(e,a,t){},50:function(e,a){},57:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(12),s=t.n(r),c=(t(39),t(1)),o=t(2),i=t(3),m=t(4),u=t(15),d=t(25),p=t.n(d),h=(t(42),function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e="images/"+this.props.data.logo,a=this.props.data.name,t=this.props.data.occupation,n=this.props.data.description,r=this.props.data.address.city,s=this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:e,alt:"Logo"})),l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#home",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"ArtWork")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#testimonials"},"Quotes")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},"I'm ",a,"."),l.a.createElement("h3",null,l.a.createElement("span",null,t)," based in ",r,". ",n,"."),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},s))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component)),E=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}));return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e),l.a.createElement("ul",{className:"copyright"},l.a.createElement("li",null,"\xa9 Copyright 2020 LoriRongrong"))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),f=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a="images/"+this.props.data.image,t=this.props.data.bio,n=(this.props.data.address.street,this.props.data.address.city),r=this.props.data.address.state,s=(this.props.data.address.zip,this.props.data.phone),c=this.props.data.email,o=this.props.data.resumedownload;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"three columns"},l.a.createElement("img",{className:"profile-pic",src:a,alt:"Lori Liu Profile Pic"})),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,t),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"columns contact-details"},l.a.createElement("h2",null,"Contact Details"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e),l.a.createElement("br",null),l.a.createElement("span",null,n," ",r),l.a.createElement("br",null),l.a.createElement("span",null,s),l.a.createElement("br",null),l.a.createElement("span",null,c))),l.a.createElement("div",{className:"columns download"},l.a.createElement("p",null,l.a.createElement("a",{href:o,className:"button"},l.a.createElement("i",{className:"fa fa-download"}),"Download Resume")))))))}}]),t}(n.Component),v=t(31),N=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){e.forceUpdate()}),3e3)}},{key:"render",value:function(){if(this.props.data)var e=this.props.data.education.map((function(e){return l.a.createElement("div",{key:e.school},l.a.createElement("h3",null,e.school),l.a.createElement("p",{className:"info"},e.degree," ",l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.graduated)),l.a.createElement("p",null,e.description))})),a=this.props.data.work.map((function(e){return l.a.createElement("div",{key:e.company},l.a.createElement("h3",null,e.company),l.a.createElement("p",{className:"info"},e.title,l.a.createElement("span",null,"\u2022")," ",l.a.createElement("em",{className:"date"},e.years)),l.a.createElement("p",null,e.description))})),t=l.a.createElement(v.a,{options:{colors:["#314455","#644e5b","#9e5a63","#31708e","#e85a4f","#501b1d"],fontFamily:"impact",fontSizes:[20,40,0],fontStyle:"normal",fontWeight:"normal",padding:1,rotations:3,rotationAngles:[0,45,90],scale:"sqrt",spiral:"rectangular",transitionDuration:3e3},words:this.props.data.skills.map((function(e){return{text:e.name,value:e.level}}))});return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education"))),l.a.createElement("div",{className:"nine columns main-col"},l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},e)))),l.a.createElement("div",{className:"row work"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Work"))),l.a.createElement("div",{className:"nine columns main-col"},a)),l.a.createElement("div",{className:"row skill"},l.a.createElement("div",{className:"three columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Skills"))),l.a.createElement("div",{className:"twelve columns main-col"},t)))}}]),t}(n.Component),w=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.testimonials.map((function(e){return l.a.createElement("li",{key:e.user},l.a.createElement("blockquote",null,l.a.createElement("p",null,e.text),l.a.createElement("cite",null,e.user)))}));return l.a.createElement("section",{id:"testimonials"},l.a.createElement("div",{className:"text-container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"two columns header-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Client Testimonials"))),l.a.createElement("div",{className:"ten columns flex-container"},l.a.createElement("ul",{className:"slides"},e)))))}}]),t}(n.Component),b=(t(51),t(30)),g=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var a="images/portfolio/"+e.image;return l.a.createElement("div",{key:e.title,style:{widht:600,heght:650,backgroundColor:"#25274d"}},l.a.createElement("img",{src:a,alt:e.title,style:{width:500,heght:550}}))}));return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapse"},l.a.createElement("h1",null,"My Artwork"),l.a.createElement(b.Carousel,{showStatus:!1,infiniteLoop:!0},e))))}}]),t}(n.Component),y=function(e){Object(m.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={foo:"bar",resumeData:{}},u.a.initialize("UA-110570651-1"),u.a.pageview(window.location.pathname),n}return Object(o.a)(t,[{key:"getResumeData",value:function(){p.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,{data:this.state.resumeData.main}),l.a.createElement(f,{data:this.state.resumeData.main}),l.a.createElement(N,{data:this.state.resumeData.resume}),l.a.createElement(g,{data:this.state.resumeData.portfolio}),l.a.createElement(w,{data:this.state.resumeData.testimonials}),l.a.createElement(E,{data:this.state.resumeData.main}))}}]),t}(n.Component),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(l.a.createElement(y,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Me",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/Me","/service-worker.js");k?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):j(e)}))}}()}},[[34,1,2]]]);
//# sourceMappingURL=main.18b1488c.chunk.js.map