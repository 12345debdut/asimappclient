(this.webpackJsonpasimexamappclient=this.webpackJsonpasimexamappclient||[]).push([[10],{414:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(0),l=a.n(c),r=a(345),o=a(368),i=a(349),s=a(350),m=a(312),u=a(93),d=a(122),f=a.n(d),p=a(313),E=a(166),g=a(178),b=a(11),y=a(353),v=Object(r.a)((function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1}}})),h=l.a.forwardRef((function(e,t){return l.a.createElement(p.a,Object.assign({direction:"up",ref:t},e))}));function j(e){var t=v(),a=Object(c.useState)(1),r=Object(n.a)(a,2),d=r[0],p=r[1],j=Object(c.useState)(null),O=Object(n.a)(j,2),x=O[0],C=O[1];Object(c.useEffect)((function(){x&&(document.getElementsByClassName("canvas-docs")[0].oncontextmenu=function(){return b.b.error("Please do not tamper pdf"),!1})}),[x]);var S=function(){e.setOpen(!1)};return l.a.createElement("div",null,l.a.createElement(o.a,{fullScreen:!0,open:e.open,onClose:S,TransitionComponent:h},l.a.createElement(i.a,{className:t.appBar},l.a.createElement(s.a,null,l.a.createElement(m.a,{edge:"start",color:"inherit",onClick:S,"aria-label":"close"},l.a.createElement(f.a,null)),l.a.createElement(u.a,{variant:"h6",className:t.title},"Document"))),l.a.createElement("br",null),l.a.createElement("div",{className:"row",style:{justifyContent:"center"}},l.a.createElement(y.a,{onClick:function(){1!=d?p(d-1):b.b.warn("You are at the bigining of the pdf file")},color:"primary",variant:"contained"},"Prev"),l.a.createElement(y.a,{onClick:function(){d!=x?p(d+1):b.b.warn("You have reached on the last page")},color:"secondary",variant:"contained",style:{marginLeft:10}},"Next")),l.a.createElement(g.Document,{file:e.docs?e.docs:null,onLoadSuccess:function(e){var t=e.numPages;C(t)},onLoadError:function(e){console.log(e.message)},className:"canvas-docs"},l.a.createElement(E.Page,{pageNumber:d}))))}t.default=function(e){var t=Object(c.useState)(!1),a=Object(n.a)(t,2),r=a[0],o=a[1],i=new Date(e.time);return l.a.createElement("div",{className:"col-lg-4"},l.a.createElement("div",{style:{justifyContent:"center",display:"flex"}},l.a.createElement("div",{className:"login-card",style:{alignSelf:"center",width:"80%",padding:30}},l.a.createElement("p",{style:{color:"gray",fontSize:20}},e.id),e.text&&l.a.createElement("p",{style:{color:"gray",fontSize:20}},e.text),e.docs&&l.a.createElement("p",{style:{color:"blue",fontSize:18,textDecoration:"underline",cursor:"pointer"},onClick:function(){e.docs&&o(!r)}},r?"close docs":"open docs"),e.time&&l.a.createElement("p",{style:{color:"gray",fontSize:18}},"Date:  ",i.getDate(),"/",i.getMonth()+1,"/",i.getFullYear()))),l.a.createElement("br",null),l.a.createElement("div",{style:{justifyContent:"center",display:"flex"},id:"disable-iframe"},r&&l.a.createElement(j,{open:r,setOpen:o,docs:e.docs})),l.a.createElement("br",null),l.a.createElement("br",null))}}}]);
//# sourceMappingURL=10.8c3208c9.chunk.js.map