(this["webpackJsonptable-football"]=this["webpackJsonptable-football"]||[]).push([[0],{12:function(e,t,n){e.exports={player_card:"Player_player_card__SlMrm",container:"Player_container__30pzO",player_card_img:"Player_player_card_img__1W3ZD",player_name:"Player_player_name__3xYHh",player_button:"Player_player_button__1KNuw",player_button_disable:"Player_player_button_disable__2K5vB"}},19:function(e,t,n){e.exports={game_score_container:"GameScoreManagement_game_score_container__27OKU",game_set:"GameScoreManagement_game_set__199rN"}},21:function(e,t,n){e.exports={header:"MainNavigation_header__1FZRl",logo:"MainNavigation_logo__9lYMe",active:"MainNavigation_active__4b6oo",badge:"MainNavigation_badge__1MRUk"}},25:function(e,t,n){e.exports={player_list_container:"PlayerList_player_list_container__3keii"}},26:function(e,t,n){e.exports={multi_select:"PlayerMultiSelect_multi_select__3Echq"}},29:function(e,t,n){e.exports={main:"MainPage_main__txyh8"}},36:function(e,t,n){},37:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(24),c=n.n(r),s=(n(36),n(10)),l=n(3),i=(n(37),n(9)),o=n(31),d=n(2),j=n(12),u=n.n(j),b=n(22),h=n(1),_=function(e){var t=e.player,n=e.victoriesHandler,r=e.lossesHandler,c=Object(a.useState)(!1),s=Object(d.a)(c,2),l=s[0],i=s[1];return Object(h.jsxs)("div",{className:u.a.player_card,children:[Object(h.jsx)("div",{className:u.a.player_card_img,children:Object(h.jsx)("img",{src:t.img,alt:"player img"})}),Object(h.jsxs)("div",{className:u.a.container,children:[Object(h.jsx)("h2",{className:u.a.player_name,children:Object(h.jsx)("b",{children:t.name})}),Object(h.jsxs)("div",{className:"".concat(u.a.player_button," ").concat(l&&u.a.player_button_disable),children:[Object(h.jsx)("button",{disabled:l,onClick:function(){i(!0),n([t.id]).then((function(){return i(!1)}))},children:Object(h.jsx)(b.a,{})}),Object(h.jsx)("button",{disabled:l,onClick:function(){i(!0),r([t.id]).then((function(){return i(!1)}))},children:Object(h.jsx)(b.b,{})})]}),Object(h.jsxs)("p",{children:["Victories : ",t.victories]}),Object(h.jsxs)("p",{children:["Losses : ",t.losses]}),Object(h.jsxs)("p",{children:["Total games : ",t.victories+t.losses]})]})]})},m=n(25),f=n.n(m),p=function(e){var t=e.playerList,n=e.victoriesHandler,a=e.lossesHandler;return Object(h.jsx)("div",{className:f.a.player_list_container,children:t.map((function(e){return Object(h.jsx)(_,{player:e,victoriesHandler:n,lossesHandler:a},e.id)}))})},O=n(30),v=n(26),x=n.n(v),y=function(e){return Object(h.jsxs)("div",{className:x.a.multi_select,children:[Object(h.jsx)("h3",{children:e.headerText}),Object(h.jsx)(O.a,{options:e.playerList.map((function(e){return{label:e.name,value:e.id}})),value:e.selected,onChange:e.setSelected,labelledBy:"Select"})]})},g=n(19),N=n.n(g),S=function(e){var t=Object(a.useState)([]),n=Object(d.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)([]),l=Object(d.a)(s,2),i=l[0],o=l[1],j=Object(a.useState)(!1),u=Object(d.a)(j,2),b=(u[0],u[1]);return Object(h.jsxs)("div",{className:N.a.game_score_container,children:[Object(h.jsx)(y,{playerList:e.playerList,selected:r,setSelected:c,headerText:"Winners"}),Object(h.jsx)("div",{className:N.a.game_set,children:Object(h.jsx)("button",{onClick:function(){var t=r.map((function(e){return e.value}));0!==t.length&&e.victoriesHandler(t).then((function(){return b(!1)}));var n=i.map((function(e){return e.value}));0!==n.length&&e.lossesHandler(n).then((function(){return b(!1)}))},children:" Set Score "})}),Object(h.jsx)(y,{playerList:e.playerList,selected:i,setSelected:o,headerText:"Losers"})]})},P=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),s=Object(d.a)(c,2),l=s[0],j=s[1],u=Object(a.useState)(!1),b=Object(d.a)(u,2),_=b[0],m=b[1],f=Object(a.useState)(""),O=Object(d.a)(f,2),v=O[0],x=O[1];Object(a.useEffect)((function(){console.log("board useEffect"),fetch("https://table-football-c48e9-default-rtdb.firebaseio.com/player.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var n in e){var a=Object(o.a)({id:n},e[n]);t.push(a)}r(t),j(t),m(!0)})).catch((function(e){console.error("Error:",e)}))}),[]);var y=function(e){for(var t=Object(i.a)(n),a=[],c=0;c<t.length;c++)for(var s=0;s<e.length;s++)t[c].id===e[s]&&(t[c].victories++,a.push(t[c]));for(var l=0;l<a.length;l++){var o,d,j,u;if(void 0!==a[l])return fetch("https://table-football-c48e9-default-rtdb.firebaseio.com/player/".concat(a[l].id,".json"),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"PUT",body:JSON.stringify({img:null===(o=a[l])||void 0===o?void 0:o.img,losses:null===(d=a[l])||void 0===d?void 0:d.losses,name:null===(j=a[l])||void 0===j?void 0:j.name,victories:null===(u=a[l])||void 0===u?void 0:u.victories})}).then((function(e){return e.json()})).then((function(e){r(t),console.log("Success:",e)})).catch((function(e){console.error("Error:",e)}))}},g=function(e){for(var t=Object(i.a)(n),a=[],c=0;c<t.length;c++)for(var s=0;s<e.length;s++)t[c].id===e[s]&&(t[c].losses++,a.push(t[c]));for(var l=0;l<a.length;l++){var o,d,j,u;if(void 0!==a[l])return fetch("https://table-football-c48e9-default-rtdb.firebaseio.com/player/".concat(a[l].id,".json"),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"PUT",body:JSON.stringify({img:null===(o=a[l])||void 0===o?void 0:o.img,losses:null===(d=a[l])||void 0===d?void 0:d.losses,name:null===(j=a[l])||void 0===j?void 0:j.name,victories:null===(u=a[l])||void 0===u?void 0:u.victories})}).then((function(e){return e.json()})).then((function(e){r(t),console.log("Success:",e)})).catch((function(e){console.error("Error:",e)}))}};return _?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{children:"Players Board"}),Object(h.jsx)("input",{name:"search",type:"search",onChange:function(e){var t=e.target.value,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));j(a),x(t)},value:v,placeholder:"player search"}),""===v&&Object(h.jsx)(S,{playerList:n,victoriesHandler:y,lossesHandler:g}),Object(h.jsx)(p,{playerList:l,victoriesHandler:y,lossesHandler:g})]}):Object(h.jsx)("h1",{children:"Loading... "})},H=n(8),w=n.n(H),L=function(){var e=Object(l.f)(),t=Object(a.useRef)(null),n=Object(a.useRef)(null);return Object(h.jsxs)("form",{className:w.a.form,onSubmit:function(a){var r,c;a.preventDefault();var s={name:null===(r=t.current)||void 0===r?void 0:r.value,victories:0,losses:0,img:null===(c=n.current)||void 0===c?void 0:c.value};fetch("https://table-football-c48e9-default-rtdb.firebaseio.com/player.json",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(s)}).then((function(e){return e.json()})).then((function(t){e.replace("/")})).catch((function(e){console.error("Error:",e)}))},children:[Object(h.jsxs)("div",{className:"".concat(w.a.form__group," ").concat(w.a.field),children:[Object(h.jsx)("input",{ref:t,className:w.a.form__field,required:!0,id:"user-name",type:"text",placeholder:"name"}),Object(h.jsx)("label",{className:w.a.form__label,htmlFor:"user-name",children:"Name : "})]}),Object(h.jsxs)("div",{className:"".concat(w.a.form__group," ").concat(w.a.field),children:[Object(h.jsx)("input",{ref:n,className:w.a.form__field,required:!0,id:"user-name",type:"text",placeholder:"Image"}),Object(h.jsx)("label",{className:w.a.form__label,htmlFor:"user-name",children:"Image : "})]}),Object(h.jsx)("div",{className:w.a.submit,children:Object(h.jsx)("button",{children:" Submit "})})]})},F=function(){return Object(h.jsxs)("main",{children:[Object(h.jsx)("h1",{children:"New Player"}),Object(h.jsx)(L,{})]})},M=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("h1",{children:"Game History Page"})})},T=n(21),C=n.n(T),E=function(){return Object(h.jsxs)("header",{className:C.a.header,children:[Object(h.jsx)("div",{className:C.a.logo,children:"Table Football"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(s.b,{to:"/",children:" Board "})}),Object(h.jsx)("li",{children:Object(h.jsx)(s.b,{to:"/new-player",children:" New Player "})}),Object(h.jsx)("li",{children:Object(h.jsx)(s.b,{to:"/game-history",children:" Game History "})})]})]})},k=n(29),B=n.n(k),G=function(e){return Object(h.jsxs)("main",{className:B.a.main,children:[" ",e.children," "]})};var J=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(s.a,{children:[Object(h.jsx)(E,{}),Object(h.jsx)(G,{children:Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{path:"/",exact:!0,children:Object(h.jsx)(P,{})}),Object(h.jsx)(l.a,{path:"/new-player",children:Object(h.jsx)(F,{})}),Object(h.jsx)(l.a,{path:"/game-history",children:Object(h.jsx)(M,{})})]})})]})})};c.a.render(Object(h.jsx)(J,{}),document.getElementById("root"))},8:function(e,t,n){e.exports={form:"NewPlayerForm_form__3G1Hg",form__group:"NewPlayerForm_form__group__rhKQo",form__field:"NewPlayerForm_form__field__3ZILN",form__label:"NewPlayerForm_form__label__a4wDz",submit:"NewPlayerForm_submit__3Wtdj"}}},[[45,1,2]]]);
//# sourceMappingURL=main.1786f31a.chunk.js.map