(this["webpackJsonplexa-cosmos"]=this["webpackJsonplexa-cosmos"]||[]).push([[0],{101:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),i=(a(101),a(12)),s=a(65),l=a(203),j=a(181),d=a(183),u=a(207),b=a(139),h=a.p+"static/media/logo.f7a0ce2b.svg",x=a(3),f=Object(b.a)((function(){return{root:{boxShadow:"none"},indicator:{backgroundColor:"#6411ad"}}}));function p(e){var t=f();return Object(x.jsx)(j.a,{position:"static",className:t.root,children:Object(x.jsxs)(l.a,{variant:"fullWidth",classes:{indicator:t.indicator},onChange:e.tabHandler,"aria-label":"navbar tabs",children:[Object(x.jsx)(d.a,{icon:Object(x.jsx)(u.a,{variant:"square",alt:"logo",src:h}),value:"1"}),Object(x.jsx)(d.a,{label:"Universes",value:"1"}),Object(x.jsx)(d.a,{label:"Stars",value:"2"}),Object(x.jsx)(d.a,{label:"Imprint",value:"3"})]})})}var O=a(184),m=a(191),v=a(185),g=a(48),y=Object(O.a)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(1),height:e.spacing(5)}}}}));function w(){var e=y();return Object(x.jsx)("div",{className:e.root,children:Object(x.jsx)(v.a,{container:!0,spacing:4,children:Object(x.jsx)(v.a,{item:!0,xs:12,children:Object(x.jsx)(g.a,{variant:"h4",component:"h2",children:"\u2755 Imprint"})})})})}var C=a(24),F=a.n(C),S=a(32),N=a(186),k=a(188),E=a(187),L=a(189),W=a(87),B=a.n(W),D=a(42),R=a.n(D),A=a(33),I=a.n(A),U=Object(O.a)((function(e){return{root:{backgroundColor:function(e){return"RED"===e.color?"#e01e37":"BLUE"===e.color?"#90e0ef":"GREEN"===e.color?"#7dd181":"YELLOW"===e.color?"#ffee32":"BLACK"===e.color&&"#011627"},minWidth:275,color:function(e){return"BLACK"===e.color&&"#F6F5F3"},boxShadow:"none","&:hover":{transform:"scale(1.05)",boxShadow:"0 6px 12px 0 ".concat(R()("#011627").rotate(-12).darken(.2).fade(.5))},transition:"0.2s"}}}));function M(e){var t=e.info,a=U(e.info),n=function(){var e=Object(S.a)(F.a.mark((function e(a){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,I.a.delete("http://localhost:4242/stars/".concat(t.id));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(N.a,{className:a.root,children:[Object(x.jsxs)(E.a,{children:[Object(x.jsx)(g.a,{variant:"caption",gutterBottom:!0,children:"Star"}),Object(x.jsx)(g.a,{variant:"h5",component:"h2",children:t.name}),Object(x.jsx)(g.a,{variant:"body",children:t.color}),Object(x.jsxs)(g.a,{variant:"body2",component:"p",children:["id: ",t.id]})]}),Object(x.jsx)(k.a,{children:Object(x.jsx)(L.a,{size:"small",onClick:n,children:Object(x.jsx)(B.a,{style:{color:"BLACK"===t.color&&"#fafafa"}})})})]})}var z=function(e,t){var a=Object(n.useState)(t),r=Object(i.a)(a,2),c=r[0],o=r[1],s=Object(n.useState)(!0),l=Object(i.a)(s,2),j=l[0],d=l[1];return Object(n.useEffect)((function(){(function(){var t=Object(S.a)(F.a.mark((function t(){var a;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,d(!0),t.next=4,I.a.get(e);case 4:200!==(a=t.sent).status&&304!==a.status||o(a.data),t.next=12;break;case 8:throw t.prev=8,t.t0=t.catch(0),console.log("error",t.t0),t.t0;case 12:return t.prev=12,d(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,8,12,15]])})));return function(){return t.apply(this,arguments)}})()()}),[e]),{loading:j,data:c}},K=Object(b.a)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(1),height:e.spacing(5)}}}}));function G(e){var t=e.fetchUrl,a=z(t),n=a.loading,r=a.data,c=K();return Object(x.jsx)("div",{className:c.root,children:Object(x.jsxs)(v.a,{container:!0,spacing:4,children:[Object(x.jsx)(v.a,{item:!0,xs:12,children:Object(x.jsx)(g.a,{variant:"h4",component:"h2",children:"\ud83c\udf0c Stars"})}),n&&Object(x.jsx)(g.a,{children:"Loading..."}),null!=r&&Object.values(r).map((function(e){return Object(x.jsx)(v.a,{item:!0,xs:12,md:3,sm:6,children:Object(x.jsx)(M,{info:e})},e.id)}))]})})}var Y=a(11),q=a(45),H=a(202),P=a(199),T=a(205),J=a(190),V=a(192),Q=a(138),X=a(193),Z=a(195),$=a(196),_=a(197),ee=a(208),te=a(198),ae=a(204),ne=a(194),re=Object(b.a)((function(e){return{root:{color:function(e){return"RED"===e.color?"#EF2E10":"BLUE"===e.color?"#64DFDF":"GREEN"===e.color?"#9EF01A":"YELLOW"===e.color?"#FFD60A":"BLACK"===e.color&&"#252422"}},card:{border:"1 px solid #183642",boxShadow:"none","&:hover":{transform:"scale(1.05)",boxShadow:"0 6px 12px 0 ".concat(R()("#011627").rotate(-5).darken(.2).fade(.5))},transition:"0.2s"},modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},indicator:{backgroundColor:"#6411ad"}}}));function ce(e){var t=re(e.info),a=e.info,r=Object(n.useState)(!1),c=Object(i.a)(r,2),o=c[0],j=c[1],u=z("http://localhost:4242/stars"),b=(u.loading,u.data),h=Object(n.useState)("1"),f=Object(i.a)(h,2),p=f[0],O=f[1],y=Object(n.useState)({color:"RED",name:"Vega",universeId:a.id}),w=Object(i.a)(y,2),C=w[0],W=w[1],B=function(){var e=Object(S.a)(F.a.mark((function e(t){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.stopPropagation(),t.preventDefault(),e.next=4,I.a.post("http://localhost:4242/stars",C).catch((function(e){return console.log("error",e)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e){W(Object(q.a)(Object(q.a)({},C),{},Object(Y.a)({},e.target.name,e.target.value)))};return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(N.a,{className:t.card,style:{display:"flex",flexDirection:"column",alignItems:"stretch",justifyContent:"space-between",padding:5},children:Object(x.jsxs)(E.a,{children:[Object(x.jsxs)(g.a,{variant:"h5",component:"h2",children:[" ",a.name," "]}),Object(x.jsxs)(g.a,{color:"textSecondary",children:["  Max size: ",a.maxSize,"  "]}),Object(x.jsx)(J.a,{in:o,timeout:"auto",unmountOnExit:!0,children:Object(x.jsxs)(s.a,{value:p,variant:"fullWidth",children:[Object(x.jsxs)(l.a,{classes:{indicator:t.indicator},onChange:function(e,t){O(t)},"aria-label":"simple tabs example",children:[Object(x.jsx)(d.a,{label:"Stars",value:"1"}),Object(x.jsx)(d.a,{label:"Add Star",value:"2"})]}),Object(x.jsx)(m.a,{value:"1",children:Object(x.jsx)(V.a,{children:b&&b.map((function(e){return e.universeId===a.id&&Object(x.jsxs)(Q.a,{children:[Object(x.jsx)(X.a,{children:Object(x.jsx)(ne.a,{className:t.root})}),Object(x.jsx)(Z.a,{primary:e.name})]},e.id)}))})}),Object(x.jsx)(m.a,{value:"2",children:Object(x.jsx)("form",{className:t.form,validate:"true",autoComplete:"off",children:Object(x.jsxs)(v.a,{container:!0,spacing:1,children:[Object(x.jsx)(v.a,{item:!0,sm:6,children:Object(x.jsx)(H.a,{className:t.textField,label:"Name",name:"name",onChange:D,required:!0})}),Object(x.jsx)(v.a,{item:!0,sm:6,children:Object(x.jsxs)($.a,{children:[Object(x.jsx)(_.a,{component:"legend",children:"Color"}),Object(x.jsxs)(ee.a,{"aria-label":"color",name:"color",onChange:D,children:[Object(x.jsx)(te.a,{value:"RED",control:Object(x.jsx)(ae.a,{}),label:"Red"}),Object(x.jsx)(te.a,{value:"BLUE",control:Object(x.jsx)(ae.a,{}),label:"Blue"}),Object(x.jsx)(te.a,{value:"GREEN",control:Object(x.jsx)(ae.a,{}),label:"Green"}),Object(x.jsx)(te.a,{value:"YELLOW",control:Object(x.jsx)(ae.a,{}),label:"Yellow"}),Object(x.jsx)(te.a,{value:"BLACK",control:Object(x.jsx)(ae.a,{}),label:"Black"})]}),Object(x.jsx)(L.a,{onClick:B,children:"Save"})]})})]})})})]})}),Object(x.jsx)(k.a,{children:Object(x.jsx)(L.a,{variant:"contained",onClick:function(){j(!o)},children:o?"Hide Details":"Show Details"})})]})})})}var oe=Object(b.a)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(1),height:e.spacing(5)}},title:{paddingBottom:"1rem"},card:{boxShadow:"none","&:hover":{transform:"scale(1.05)",boxShadow:"0 6px 12px 0 ".concat(R()("#252422").rotate(-12).darken(.2).fade(.5))},transition:"0.2s"},drawer:{padding:"1rem",height:450,display:"flex",flexDirection:"column",flexWrap:"nowrap",justifyContent:"space-around",alignContent:"stretch",alignItems:"stretch"},newUniverse:{width:"100%",fontWeight:500},form:{isplay:"flex",flexDirection:"column",flexWrap:"wrap",justifyContent:"space-around",alignContent:"stretch",alignItems:"stretch",height:200},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:"20ch"}}}));function ie(e){var t=e.fetchUrl,a=z(t),r=(a.loading,a.data),c=Object(n.useState)(!1),o=Object(i.a)(c,2),s=o[0],l=o[1],j=oe(),d=Object(n.useState)({maxSize:0,name:""}),u=Object(i.a)(d,2),b=u[0],h=u[1],f=function(){var e=Object(S.a)(F.a.mark((function e(a){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,I.a.post(t,b).catch((function(e){return console.log("error",e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){return function(t){l(e)}};return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:j.root,children:[Object(x.jsxs)(v.a,{container:!0,spacing:4,children:[Object(x.jsx)(v.a,{item:!0,xs:12,children:Object(x.jsxs)(g.a,{variant:"h4",component:"h2",children:["\ud83d\udfe3 Universes | ",Object(x.jsx)(L.a,{onClick:p(!0),style:{color:"#6411ad"},children:"Create New"})]})}),null!=r&&Object.values(r).map((function(e){return Object(x.jsx)(v.a,{item:!0,xs:12,md:6,sm:6,children:Object(x.jsx)(ce,{info:e})},e.id)}))]}),Object(x.jsx)(T.a,{className:j.drawer,anchor:"top",open:s,onClose:p(!1),onOpen:p(!0),children:function(){var e=function(e){h(Object(q.a)(Object(q.a)({},b),{},Object(Y.a)({},e.target.name,e.target.value)))};return Object(x.jsxs)("div",{className:j.drawer,children:[Object(x.jsx)(g.a,{variant:"h5",color:"textSecondary",children:"Add new Universe"}),Object(x.jsx)("br",{}),Object(x.jsxs)("form",{className:j.form,validate:"true",autoComplete:"off",children:[Object(x.jsx)(H.a,{className:j.textField,label:"Name",name:"name",onChange:e,required:!0}),Object(x.jsx)(H.a,{className:j.textField,name:"maxSize",select:!0,label:"Max Size",value:b.maxSize,onChange:e,helperText:"Select the max number of stars",children:[1,2,3,4,5,6,7,8].map((function(e){return Object(x.jsx)(P.a,{value:e,children:e},e)}))}),Object(x.jsx)(L.a,{onClick:f,children:"Save"})]})]})}()})]})})}var se=Object(O.a)((function(e){return{root:{padding:0}}}));function le(){se();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m.a,{value:"1",children:Object(x.jsx)(ie,{fetchUrl:"http://localhost:4242/universes"})}),Object(x.jsx)(m.a,{value:"2",children:Object(x.jsx)(G,{fetchUrl:"http://localhost:4242/stars"})}),Object(x.jsx)(m.a,{value:"3",children:Object(x.jsx)(w,{})})]})}var je=a(200),de=a(201),ue=(a(136),a(88)),be=Object(ue.a)({palette:{type:"light",primary:{main:"#7042C1"},secondary:{main:"#d0bfff"},background:{default:"#fafafa",paper:"#F5F5F5"},text:{primary:"#183642",secondary:"#7042C1"}},typography:{subtitle1:{fontFamily:"Nunito"},button:{fontFamily:"Nunito",fontWeight:"bold"},fontFamily:"Nunito",overline:{fontFamily:"Nunito"},caption:{fontFamily:"Nunito"},h5:{fontFamily:"Nunito"},h4:{fontWeight:400},h6:{fontWeight:500}},props:{MuiAppBar:{color:"transparent"}}}),he=Object(ue.a)({palette:{type:"dark",primary:{main:"#e0ac9d"},secondary:{main:"#6f2dbd"},background:{default:"#231651",paper:"#2e1760"},text:{primary:"#50ffb1",secondary:"#d6fff6"}},typography:{subtitle1:{fontFamily:"Roboto Mono"},button:{fontFamily:"Roboto Mono"},fontFamily:"Inter",overline:{fontFamily:"Roboto Mono"},caption:{fontFamily:"Roboto Mono"},h5:{fontFamily:"Roboto Mono"},h4:{fontWeight:400},h6:{fontWeight:500}},props:{MuiAppBar:{color:"transparent"}},spacing:8});function xe(){var e,t=r.a.useState("1"),a=Object(i.a)(t,2),n=a[0],c=a[1];return Object(x.jsxs)(je.a,{theme:(e="light","light"===e?be:he),children:[Object(x.jsx)(de.a,{}),Object(x.jsxs)(s.a,{value:n,variant:"fullWidth",children:[Object(x.jsx)(p,{tabHandler:function(e,t){c(t)}}),Object(x.jsx)(le,{})]})]})}var fe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,209)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};o.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(xe,{})}),document.getElementById("root")),fe()}},[[137,1,2]]]);
//# sourceMappingURL=main.91e06a67.chunk.js.map