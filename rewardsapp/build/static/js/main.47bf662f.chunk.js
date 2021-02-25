(this.webpackJsonprewardsapp=this.webpackJsonprewardsapp||[]).push([[0],{104:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(81),i=n.n(s),a=(n(94),n(44)),o=n(11),l=n(67),u=n(128),d=n(127),j=n(117),h=n(124),b=n(45),x=n(130),p=n(24),f=n.n(p),g=n(37),O="https://coding-challenge-api.aerolab.co/",m={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDMwMzYzNjdlNzE4NzAwMjBlMzhlZmIiLCJpYXQiOjE2MTM3NzIzNDJ9.qBWzR8anJgSzSk2qjE4lxBp1pwrSG9ddnVdNcUf1gS8"},v={getUser:function(){var e=Object(g.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(O+"user/me",{method:"GET",headers:m}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getProducts:function(){var e=Object(g.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(O+"products",{method:"GET",headers:m}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getHistory:function(){var e=Object(g.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(O+"user/history",{method:"GET",headers:m}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),redeem:function(){var e=Object(g.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(O+"redeem",{body:JSON.stringify({productId:t}),method:"POST",headers:m}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addPoints:function(){var e=Object(g.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(O+"user/points",{method:"POST",body:JSON.stringify({amount:t}),headers:m}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=n(4),y=n(3),S=Object(r.createContext)(),C=function(e){var t=Object(r.useState)({name:"",id:"",points:0,redeemHistory:[],createDate:""}),n=Object(w.a)(t,2),c=n[0],s=n[1];return Object(r.useEffect)((function(){v.getUser().then((function(e){return s(e)}))}),[]),Object(y.jsx)(S.Provider,{value:{user:c,setUser:s},children:e.children})},k=n(123),I=function(e){var t=e.userPoints,n=e.handleAddCoins,r=c.a.useState(!1),s=Object(w.a)(r,2),i=s[0],a=s[1];return Object(y.jsxs)(k.a,{children:[Object(y.jsx)(k.g,{children:Object(y.jsxs)(h.a,{rounded:99,height:"48px",onClick:function(){return a(!i)},children:[Object(y.jsx)(j.a,{fontSize:"xl",color:"#616161",letterSpacing:"-0.15px",lineHeight:"48px",children:t}),Object(y.jsx)(d.a,{src:"../assets/icons/coin.svg",ml:1,mt:1})]})}),Object(y.jsxs)(k.e,{children:[Object(y.jsx)(k.b,{}),Object(y.jsx)(k.d,{}),Object(y.jsx)(k.f,{children:Object(y.jsx)(j.a,{children:"Add Coins to your Wallet!"})}),Object(y.jsx)(k.c,{children:Object(y.jsxs)(u.a,{isInline:!0,align:"center",children:[Object(y.jsxs)(h.a,{rounded:99,value:"1000",color:"#616161",letterSpacing:"-0.15px",onClick:n,children:[1e3,Object(y.jsx)(d.a,{src:"../assets/icons/coin.svg",ml:1,mt:1,width:6,cursor:"default"})]}),Object(y.jsxs)(h.a,{rounded:99,value:"5000",color:"#616161",letterSpacing:"-0.15px",onClick:n,children:[5e3,Object(y.jsx)(d.a,{src:"../assets/icons/coin.svg",ml:1,mt:1,width:6,cursor:"default"})]}),Object(y.jsxs)(h.a,{rounded:99,value:"7500",color:"#616161",letterSpacing:"-0.15px",onClick:n,children:[7500,Object(y.jsx)(d.a,{src:"../assets/icons/coin.svg",ml:1,mt:1,width:6,cursor:"default"})]})]})})]})]})},z=function(){var e=Object(r.useContext)(S),t=e.user,n=e.setUser;return Object(y.jsxs)(u.a,{as:"nav",isInline:!0,alignItems:"center",height:"80px",justifyContent:"space-between",bg:"white",children:[Object(y.jsx)(a.b,{to:"/home",children:Object(y.jsx)(d.a,{src:"../assets/logo.svg",ml:4})}),Object(y.jsxs)(u.a,{isInline:!0,align:"center",justify:"center",mr:4,children:[Object(y.jsx)(j.a,{fontSize:"xl",color:"#616161",letterSpacing:"-0.15px",lineHeight:"48px",children:t.name}),Object(y.jsx)(h.a,{variant:"link",as:a.b,to:"/redeems",children:Object(y.jsx)(b.a,{as:x.a,color:"secondary",height:10,width:10})}),Object(y.jsx)(I,{handleAddCoins:function(e){var r=e.target,c=parseInt(r.value);isNaN(c)||v.addPoints(c).then((function(e){return n(Object(l.a)(Object(l.a)({},t),{},{points:e["New Points"]}))}))},userPoints:t.points})]})]})},P=n(118),A=n(119),H=function(){return Object(y.jsx)(P.a,{background:"url(../assets/header.png) center right",backgroundSize:"cover",minHeight:"300px",width:"100%",children:Object(y.jsx)(A.a,{color:"white",fontSize:"64px",alignSelf:"flex-end",padding:6,children:"Electronics"})})},J=n(121),M=n(129),N=n(16),_=function(e,t){var n=Object(N.a)(e);switch(t){case"lowest":return n.sort((function(e,t){return e.cost-t.cost}));case"highest":return n.sort((function(e,t){return t.cost-e.cost}));default:return n.sort((function(e,t){return e._id>t._id?1:t._id>e._id?-1:0}))}},B=n(60),D=n(125),E=function(e){var t=e.sortSelected,n=e.handleChange,r=Object(D.a)({base:"",md:"Price"});return Object(y.jsxs)(u.a,{isInline:!0,children:[Object(y.jsx)(j.a,{display:{base:"none",md:"block"},alignSelf:"center",children:"Sort By:"}),Object(y.jsx)(h.a,{bg:"recent"===t?"primary":"#ededed",color:"recent"===t?"white":"#a3a3a3",rounded:999,_hover:{backgroundColor:"secondary",color:"white"},onClick:function(){return n("recent")},children:"Most Recent"}),Object(y.jsxs)(h.a,{bg:"lowest"===t?"primary":"#ededed",color:"lowest"===t?"white":"#a3a3a3",rounded:999,_hover:{backgroundColor:"secondary",color:"white"},onClick:function(){return n("lowest")},children:["Lowest ",r]}),Object(y.jsxs)(h.a,{bg:"highest"===t?"primary":"#ededed",color:"highest"===t?"white":"#a3a3a3",rounded:999,_hover:{backgroundColor:"secondary",color:"white"},onClick:function(){return n("highest")},children:["Highest ",r]})]})},U=n(120),T=n(70),W=n.n(T),R=function(e){var t=e.id,n=e.cost,c=Object(r.useContext)(S).setUser;return Object(y.jsxs)(u.a,{position:"absolute",top:"0",left:"0",bgGradient:"linear(to-b, #0ad4faCC 0%, #25bbf1CC 100%)",height:"100%",opacity:0,padding:2.5,spacing:4,width:"100%",zIndex:200,transitionDuration:"0.4s",transitionProperty:"transform",_hover:{opacity:"1"},children:[Object(y.jsx)(d.a,{src:"../assets/icons/buy-white.svg",maxH:"42px",maxW:"42px",alignSelf:"flex-end"}),Object(y.jsxs)(u.a,{isInline:!0,justify:"center",align:"center",children:[Object(y.jsx)(j.a,{fontSize:"36px",letterSpacing:"-0.08px",textAlign:"center",color:"white",children:n}),Object(y.jsx)(u.a,{children:Object(y.jsx)(d.a,{boxSize:"36px",borderRadius:"100%",marginTop:2.5,src:"../assets/icons/coin.svg"})})]}),Object(y.jsx)(h.a,{rounded:999,backgroundColor:"white",onClick:function(){v.redeem(t).then((function(e){var t=e.message,n=e.error;t?(v.getUser().then((function(e){return c(e)})),W.a.fire({icon:"success",title:"Product Buy !",text:t})):W.a.fire({icon:"error",title:"Crap...",text:n,footer:"Report with me"})}))},children:"Redeem now"})]})},G=function(e){var t=e.product,n=Object(r.useContext)(S).user.points,c=t._id,s=t.name,i=t.cost,a=t.category,o=t.img,l=Object(r.useState)(!1),h=Object(w.a)(l,2),b=h[0],x=h[1];return Object(y.jsxs)(u.a,{bg:"white",boxShadow:"2px 2px 4px 0 rgba(0,0,0,0.1)",height:"276px",padding:2.5,position:"relative",rounded:4,spacing:0,width:"276px",transitionDuration:"0.4s",transitionProperty:"transform",_hover:{transform:"translateY(-0.7em)"},onMouseLeave:function(){return x(!1)},onMouseEnter:function(){return x(!0)},children:[n>=i&&Object(y.jsx)(R,{id:c,cost:i}),Object(y.jsxs)(u.a,{spacing:4,children:[Object(y.jsxs)(u.a,{spacing:0,alignItems:"flex-end",children:[n>=i?Object(y.jsx)(d.a,{src:"../assets/icons/buy-blue.svg",marginBottom:-10,maxH:"42px",maxW:"42px",opacity:b?0:1,zIndex:100}):Object(y.jsxs)(U.a,{bg:"#616161CC",marginBottom:-10,rounded:999,zIndex:100,children:[Object(y.jsxs)(U.b,{children:["You need ",i-n," "]}),Object(y.jsx)(d.a,{src:"../assets/icons/coin.svg",ml:1,mt:1,maxW:"32px",maxH:"32px"})]}),Object(y.jsx)(d.a,{src:o.hdUrl,alt:s}),Object(y.jsx)(J.a,{})]}),Object(y.jsxs)(u.a,{textAlign:"start",spacing:0,children:[Object(y.jsx)(j.a,{color:"#a3a3a3",children:a}),Object(y.jsx)(j.a,{color:"#616161",children:s})]})]})]})},Y=16,L=function(){var e=Object(r.useState)([]),t=Object(w.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(1),i=Object(w.a)(s,2),a=i[0],o=i[1],l=Object(r.useState)("recent"),h=Object(w.a)(l,2),b=h[0],x=h[1];Object(r.useEffect)((function(){0===n.length&&v.getProducts().then((function(e){return c(_(e,b))}))}),[b,n.length]);return Object(y.jsxs)(u.a,{padding:8,spacing:3,textAlign:"center",children:[Object(y.jsxs)(u.a,{direction:{base:"column",md:"row"},justify:"space-between",align:"center",children:[Object(y.jsxs)(u.a,{direction:{base:"column",md:"row"},children:[Object(y.jsxs)(j.a,{alignSelf:"center",children:[a*Y," of ",n.length," products"]}),Object(y.jsx)(J.a,{orientation:"vertical",color:"black",colorScheme:"gray",size:"5px",variant:"solid"}),Object(y.jsx)(E,{sortSelected:b,handleChange:function(e){o(1),x(e),c(_(n,e))}})]}),Object(y.jsxs)(u.a,{isInline:!0,children:[Object(y.jsx)(d.a,{cursor:"pointer",src:"../assets/icons/arrow-right.svg",onClick:function(){return o((function(e){return e+1}))},display:Y===n.length/a&&"none"}),Object(y.jsx)(d.a,{cursor:"pointer",src:"../assets/icons/arrow-left.svg",onClick:function(){return o((function(e){return e-1}))},display:1===a&&"none"})]})]}),Object(y.jsx)(J.a,{variant:"solid"}),Object(y.jsx)(u.a,{children:Object(y.jsx)(M.a,{marginTop:4,columns:{base:1,sm:2,md:3,xl:4},gap:8,alignSelf:"center",children:null===n||void 0===n?void 0:n.slice((a-1)*Y,Y*a).map((function(e,t){return Object(y.jsx)(B.a.div,{animate:"visible",custom:t,initial:"hidden",variants:{hidden:{opacity:0,y:150},visible:function(e){return{opacity:1,y:0,transition:{delay:.09*e}}}},children:Object(y.jsx)(G,{product:e},e._id)},e._id)}))})}),Object(y.jsx)(J.a,{variant:"solid"}),Object(y.jsxs)(u.a,{isInline:!0,justify:"space-between",children:[Object(y.jsxs)(j.a,{alignSelf:"center",children:[a*Y," of ",n.length," products"]}),Object(y.jsxs)(u.a,{isInline:!0,children:[Object(y.jsx)(d.a,{cursor:"pointer",src:"../assets/icons/arrow-right.svg",onClick:function(){return o((function(e){return e+1}))},display:Y===n.length/a&&"none"}),Object(y.jsx)(d.a,{cursor:"pointer",src:"../assets/icons/arrow-left.svg",onClick:function(){return o((function(e){return e-1}))},display:1===a&&"none"})]})]})]})},F=function(){return Object(y.jsxs)(u.a,{bg:"#f9f9f9",children:[Object(y.jsx)(H,{}),Object(y.jsx)(L,{})]})},q=function(e){e.textcolor,e.position;return Object(y.jsxs)(j.a,{cursor:"pointer",onClick:function(){return window.open("https://juanmaportfolio.netlify.app/")},textAlign:"center",textColor:"white",children:["Aerolab Challenge Copyright \xa9 Juan Manuel Ibarzabal Salles"," ",(new Date).getFullYear(),"."]})},Q=function(){return Object(y.jsx)(u.a,{textAlign:"center",justify:"center",bg:"black",paddingY:4,as:"footer",children:Object(y.jsx)(q,{})})},V=function(){var e,t=Object(r.useContext)(S).user;return Object(y.jsxs)(u.a,{bg:"#f9f9f9",minH:"100vh",spacing:3,children:[Object(y.jsx)(P.a,{background:"url(../assets/header.png) center right",backgroundSize:"cover",filter:"invert(20%)",minHeight:"200px",width:"100%",children:Object(y.jsx)(A.a,{color:"white",fontSize:"64px",alignSelf:"flex-end",padding:6,children:"History"})}),Object(y.jsx)(u.a,{padding:4,children:Object(y.jsx)(M.a,{columns:{base:1,sm:2,xl:3},gap:2,children:null===(e=t.redeemHistory)||void 0===e?void 0:e.slice(0).reverse().map((function(e){var t=new Date(e.createDate);return Object(y.jsxs)(u.a,{border:"2px",borderColor:"primary",isInline:!0,alignItems:"center",children:[Object(y.jsx)(u.a,{children:Object(y.jsx)(d.a,{alt:e.name,src:e.img.hdUrl})}),Object(y.jsxs)(u.a,{w:"100%",justify:"center",spacing:0,children:[Object(y.jsx)(j.a,{color:"#a3a3a3",fontWeight:"bold",children:e.category}),Object(y.jsx)(j.a,{fontWeight:"bold",children:e.name}),Object(y.jsxs)(j.a,{children:["Date: ",t.toLocaleDateString("es-ar")]})]}),Object(y.jsxs)(u.a,{w:"100%",justify:"center",spacing:0,isInline:!0,children:[Object(y.jsx)(j.a,{align:"center",children:e.cost}),Object(y.jsx)(d.a,{src:"../assets/icons/coin.svg",w:8,h:8})]})]},e.createDate)}))})})]})},X=function(){return Object(y.jsxs)(a.a,{children:[Object(y.jsx)(z,{}),Object(y.jsxs)(o.d,{children:[Object(y.jsx)(o.b,{path:"/redeems",component:V}),Object(y.jsx)(o.b,{path:"/home",children:Object(y.jsx)(F,{})}),Object(y.jsx)(o.a,{to:"/home"})]}),Object(y.jsx)(Q,{})]})},Z=function(){return""===Object(r.useContext)(S).user.name?Object(y.jsxs)(u.a,{bg:"primary",justify:"center",align:"center",height:"100vh",width:"100vw",children:[Object(y.jsx)(d.a,{src:"../assets/logo.svg",w:20,h:"{20"}),Object(y.jsx)(A.a,{textAlign:"center",children:"Loading..."})]}):Object(y.jsx)(u.a,{maxW:"1440px",width:"100%",margin:"auto",bg:"#f9f9f9",m:{base:0,xl:4},spacing:0,children:Object(y.jsx)(X,{})})},K=n(122),$=Object(K.a)({colors:{primary:"#0ad4fa",secondary:"#FF7F01"},fonts:{body:"SourceSansPro-Regular, system-ui, sans-serif",heading:"SourceSansPro-Bold",mono:"SourceSansPro-Bold"},shadows:{outline:"0"}}),ee=n(126);i.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(C,{children:Object(y.jsx)(ee.a,{resetCSS:!0,theme:$,children:Object(y.jsx)(Z,{})})})}),document.getElementById("root"))},94:function(e,t,n){}},[[104,1,2]]]);
//# sourceMappingURL=main.47bf662f.chunk.js.map