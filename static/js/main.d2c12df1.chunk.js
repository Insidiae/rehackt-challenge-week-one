(this["webpackJsonprehackt-challenge-week-one"]=this["webpackJsonprehackt-challenge-week-one"]||[]).push([[0],{12:function(e,n,t){e.exports={contributor:"ContributorDetails_contributor__20cFf",entryInfo:"ContributorDetails_entryInfo__3VGmj",authorInfo:"ContributorDetails_authorInfo__3rglL",authorInfoItem:"ContributorDetails_authorInfoItem__20m-C",authorName:"ContributorDetails_authorName__2JK9n"}},13:function(e,n,t){e.exports={container:"Footer_container__1T53M",footer:"Footer_footer__2MUHE",sponsor:"Footer_sponsor__1si8n",bg:"Footer_bg__2yoiM"}},18:function(e,n,t){e.exports={header:"Header_header__odP5s",challengeInfo:"Header_challengeInfo__lL2yx",buttonMenu:"Header_buttonMenu__1fOys"}},25:function(e,n,t){e.exports={app:"App_app__MQb6g",container:"App_container__1DsLh"}},45:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t(31),a=t.n(c),o=t(21),s=t(18),i=t.n(s),l=t(0),j=function(){return Object(l.jsxs)("header",{className:i.a.header,children:[Object(l.jsx)("img",{src:"/header-logo.png"}),Object(l.jsxs)("div",{className:i.a.challengeInfo,children:[Object(l.jsx)("h2",{children:"Turn it up"}),Object(l.jsx)("p",{children:"Make the best, worst or weirdest volume slider"})]}),Object(l.jsx)("div",{className:i.a.buttonMenu,children:Object(l.jsx)("a",{href:"https://github.com/reactph/rehackt-challenge-week-one",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("button",{children:"Join now"})})})]})},h=t(10),u=t(23),d=t(3),b=[{component:Object(r.lazy)((function(){return Promise.all([t.e(2),t.e(4)]).then(t.bind(null,87))})),slug:"SampleEntry",title:"(Sample) Press To Chill",description:"A simple untouched input range slider with the use of styled-components for styling and audio context API.",author:"Franrey Saycon",email:"franreysaycon@gmail.com",linkedIn:"https://www.linkedin.com/in/fssaycon/",website:"https://fsaycon.dev"}],x=Object(r.createContext)(),p=function(e){var n=e.children,t=function(e){var n=e.pathname.split("/");return n.length>1?n[1]:null}(Object(d.g)()),c=Object(r.useRef)(t?function(e){return[b.find((function(n){return n.slug===e}))].concat(Object(h.a)(Object(u.a)(b.filter((function(n){return n.slug!==e})))))}(t):Object(u.a)(b));return Object(l.jsx)(x.Provider,{value:{entries:c.current,currentSlug:t},children:n})},f=t(25),O=t.n(f),_=t(22),m=t(30),g=t(12),y=t.n(g),v=t(15),w=t(11),k=t(26),I=["icon","children","href"],N=function(e){var n=e.icon,t=e.children,r=e.href,c=Object(m.a)(e,I);return Object(l.jsxs)("a",Object(_.a)(Object(_.a)({className:y.a.authorInfoItem,href:r,target:"_blank",rel:"noreferrer"},c),{},{children:[Object(l.jsx)(v.a,{icon:n,color:""}),Object(l.jsx)("p",{children:t})]}))},C=function(e){var n=e.entries,t=e.currentSlug,r=0;t&&(r=n.findIndex((function(e){return e.slug===t})));var c=n[r]||{},a=c.title,o=c.author,s=c.description,i=c.email,j=c.linkedIn,h=c.website,u=c.slug;return a?Object(l.jsxs)("div",{className:y.a.contributor,children:[Object(l.jsxs)("div",{className:y.a.entryInfo,children:[Object(l.jsx)("h1",{children:a}),Object(l.jsxs)("p",{children:["by ",o]}),Object(l.jsx)(N,{href:"https://github.com/reactph/rehackt-challenge-week-one/tree/main/src/entries/".concat(u),icon:k.a,style:{marginTop:"5px",marginBottom:0},children:"/".concat(u)}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:s})]}),Object(l.jsxs)("div",{className:y.a.authorInfo,children:[Object(l.jsx)("p",{id:y.a.authorName,children:o}),h&&Object(l.jsx)(N,{href:h,icon:w.d,children:h}),i&&Object(l.jsx)(N,{href:"mailto:".concat(i),icon:w.c,children:i}),i&&Object(l.jsx)(N,{href:j,icon:k.b,children:o})]})]}):null},S=t(9),E=t.n(S),M=function(e){return 0===e.length?null:[Object(l.jsx)(d.a,{path:"/",exact:!0,component:e[0].component},"default")].concat(Object(h.a)(e.map((function(e){return Object(l.jsx)(d.a,{path:"/".concat(e.slug),component:e.component},e.slug)}))))},D=function(){var e=Object(d.f)(),n=Object(r.useContext)(x),t=n.entries,c=n.currentSlug,a=0;c&&(a=t.findIndex((function(e){return e.slug===c})));var o=a>0?t[a-1]:null,s=a<t.length-1?t[a+1]:null;return Object(l.jsxs)("div",{className:E.a.container,children:[Object(l.jsx)(v.a,{icon:w.b,size:"3x",className:o?E.a.arrow:E.a["arrow-disabled"],onClick:function(){return o&&e.push("".concat(o.slug))}}),Object(l.jsxs)("div",{className:E.a.entryCard,children:[Object(l.jsx)(d.c,{children:M(t)}),Object(l.jsx)(C,{entries:t,currentSlug:c})]}),Object(l.jsx)(v.a,{icon:w.a,size:"3x",className:s?E.a.arrow:E.a["arrow-disabled"],onClick:function(){return s&&e.push("".concat(s.slug))}})]})},F=t(13),A=t.n(F),J=function(){return Object(l.jsxs)("div",{className:A.a.container,children:[Object(l.jsxs)("div",{className:A.a.footer,children:[Object(l.jsxs)("div",{className:A.a.sponsor,children:[Object(l.jsxs)("p",{children:[Object(l.jsx)("b",{children:"Rehackt"})," is presented by"]}),Object(l.jsx)("a",{href:"https://reactjs.org.ph/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:"/reactjsph.png",style:{height:"45px"}})})]}),Object(l.jsxs)("div",{className:A.a.sponsor,children:[Object(l.jsx)("p",{children:"in cooperation with"}),Object(l.jsx)("a",{href:"https://codev.com/",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:"/codev-logo.png",style:{height:"25px"}})})]})]}),Object(l.jsx)("div",{className:A.a.bg})]})},P=function(){return Object(l.jsxs)("div",{className:O.a.app,children:[Object(l.jsx)(j,{}),Object(l.jsx)("main",{className:O.a.container,children:Object(l.jsx)(r.Suspense,{fallback:Object(l.jsx)("div",{children:"Loading..."}),children:Object(l.jsx)(D,{})})}),Object(l.jsx)(J,{})]})};a.a.render(Object(l.jsx)(o.a,{children:Object(l.jsx)(p,{children:Object(l.jsx)(P,{})})}),document.getElementById("root"))},9:function(e,n,t){e.exports={container:"EntryCard_container__3axa3",entryCard:"EntryCard_entryCard__1-Ss9",content:"EntryCard_content__J4ArR",arrow:"EntryCard_arrow__26j4r","arrow-disabled":"EntryCard_arrow-disabled__1gQSm"}}},[[45,1,3]]]);
//# sourceMappingURL=main.d2c12df1.chunk.js.map