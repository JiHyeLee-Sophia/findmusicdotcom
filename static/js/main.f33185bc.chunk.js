(this.webpackJsonpfindmusicdotcom=this.webpackJsonpfindmusicdotcom||[]).push([[0],{41:function(n,e,t){n.exports=t(68)},68:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(35),o=t.n(i),c=t(15),u=t(13),l=t(8),s=t(9),d=t(11),p=t(10),f=t(12),m=t(1),b=t(2);function h(){var n=Object(m.a)(["\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  border: 0;\n  outline: 0;\n  color: white;\n  font-weight: border;\n  cursor: pointer;\n  &:hover {\n    transform: scale(1.05);\n  }\n  &:active {\n    transform: scale(1);\n  }\n"]);return h=function(){return n},n}function g(){var n=Object(m.a)(["\n  background-color: rgba(0, 0, 0, 0);\n  /* background-color:pink; */\n  margin-right:10px;\n  border: 0;\n  outline: 0;\n  width:100%;\n"]);return g=function(){return n},n}function v(){var n=Object(m.a)(["\n  display:flex;\n  align-items:center;\n  justify-content:space-between;\n  padding:0 10px;\n  width:300px;\n  height: 32px;\n  font-size: 1.2rem;\n  font-weight: 500px;\n  border-radius: 30px;\n  border: 3px solid rgba(24, 21, 50, 0.55);\n  outline: none;\n  margin: 20px 0;\n  color: #333;\n  background-color: rgba(250, 250, 250, 0.85);\n  /* box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.17); */  \n"],["\n  display:flex;\n  align-items:center;\n  justify-content:space-between;\n  padding:0 10px;\n  width:300px;\n  height: 32px;\n  font-size: 1.2rem;\n  font-weight: 500px;\n  border-radius: 30px;\n  border: 3px solid rgba(24, 21, 50, 0.55);\n  outline: none;\n  margin: 20px 0;\n  color: #333;\n  background-color: rgba(250, 250, 250, 0.85);\n  /* box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.17); */\\\n  \n"]);return v=function(){return n},n}function x(){var n=Object(m.a)(["\n  font-size: 32px;\n  color: black;\n"]);return x=function(){return n},n}function k(){var n=Object(m.a)(["\n  width: 100%;\n  /* height: 200px; */\n  padding: 50px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return k=function(){return n},n}function j(){var n=Object(m.a)(["\n  padding-top: 50px;\n  width: 100%;\n  height: 100px;\n  padding-bottom: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: -webkit-sticky;\n  position: sticky;\n  top: -80px;\n  background-color: rgba(200, 200, 200, 0.85);\n  order: 1;\n  z-index:1;\n"]);return j=function(){return n},n}function y(){var n=Object(m.a)(["\n    html,body{\n        height:100%;\n        width:100%;\n    }\n"]);return y=function(){return n},n}Object(b.a)(y());var E=b.b.div(j()),w=b.b.div(k()),O=b.b.h1(x()),S=b.b.div(v()),z=b.b.input(g()),H=b.b.button(h()),C=function(n){function e(){var n,t;Object(l.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(d.a)(this,(n=Object(p.a)(e)).call.apply(n,[this].concat(a)))).state={input:""},t.keyChangeHandler=function(n){t.setState({input:n.target.value})},t.keyDownHandler=function(n){13===n.keyCode&&(document.querySelector("#go").parentElement.click(),n.target.value="")},t}return Object(f.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement(E,null,a.a.createElement(w,null,a.a.createElement(c.b,{to:"/",style:{textDecoration:"none"}},a.a.createElement(O,null,"FIND MUSIC . COM")),a.a.createElement(S,null,a.a.createElement(z,{id:"searchBar",onChange:this.keyChangeHandler,onKeyDown:this.keyDownHandler}),a.a.createElement(c.b,{to:"/".concat(this.state.input)},a.a.createElement(H,{id:"go"},"GO")))))}}]),e}(a.a.Component),A=t(6),D=t.n(A),T=t(16),B=t(17),M=t.n(B);function I(){var n=Object(m.a)(["\n\n  background-color: rgba(0, 0, 0, 0);\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  font-size: 1.4rem;\n  &:hover {\n    transform: scale(1.1);\n  }\n  &:active {\n    transform: scale(1);\n  }\n"]);return I=function(){return n},n}function G(){var n=Object(m.a)(["\n/* background-color:black; */\n"]);return G=function(){return n},n}function L(){var n=Object(m.a)(["\ntext-align:center;\n/* background-color:pink; */\n"]);return L=function(){return n},n}function R(){var n=Object(m.a)(["\n/* background-color:yellow; */\n"]);return R=function(){return n},n}function N(){var n=Object(m.a)(["\n  width: 40px;\n  height: 70px;\n  background-image: url(",");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n"]);return N=function(){return n},n}function Y(){var n=Object(m.a)(["\n  display: grid;\n  grid-template-columns: .5fr 2.5fr 1fr 1fr;\n  justify-content: center;\n  align-items: center;\n  /* margin: 30px; */\n  /* background-color:lightblue; */\n  font-size:1.1rem;\n"]);return Y=function(){return n},n}var q="",U=function(n){function e(n){var t;return Object(l.a)(this,e),(t=Object(d.a)(this,Object(p.a)(e).call(this,n))).clickHandler=function(n){n.preventDefault();var e=n.currentTarget.nextElementSibling;if(t.state.audio)t.setState({audio:!1}),e.pause();else{if(q){var r=document.querySelector("#".concat(q));r&&r.pause()}q=e.id,t.setState({audio:!0}),e.play(),e.addEventListener("ended",t.stopHandler),e.addEventListener("pause",t.stopHandler)}},t.stopHandler=function(n){n.preventDefault(),t.setState({hover:!1,audio:!1})},t.state={audio:!1},t}return Object(f.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){var n=this.props;return a.a.createElement(V,null,a.a.createElement(_,{id:n.id,poster:n.artist.picture}),a.a.createElement(F,null,n.title),a.a.createElement(J,null,n.artist.name),a.a.createElement(P,null,a.a.createElement(K,{onClick:this.clickHandler},a.a.createElement("span",{role:"img","aria-label":"img"},"\ud83c\udfbc")),a.a.createElement("audio",{id:"audioSong".concat(n.id)},a.a.createElement("source",{src:n.preview}))))}}]),e}(a.a.Component),V=b.b.div(Y()),_=b.b.div(N(),(function(n){return n.poster})),F=b.b.span(R()),J=b.b.span(L()),P=b.b.div(G()),K=b.b.button(I()),Q=U;function W(){var n=Object(m.a)(["\n  background-image: url(",");\n  width: 70px;\n  height: 100px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n"]);return W=function(){return n},n}function X(){var n=Object(m.a)([""]);return X=function(){return n},n}function Z(){var n=Object(m.a)(["\n  width: 100%;\n  font-size: 1.1rem;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  align-items: center;\n  margin: 0 30px;\n"]);return Z=function(){return n},n}var $=function(n){n.id;var e=n.artist;return a.a.createElement(nn,null,a.a.createElement(tn,{poster:e.picture_medium}),a.a.createElement(c.b,{to:"/artist/".concat(e.name),style:{textDecoration:"none",color:"black"}},a.a.createElement(en,null,e.name)))},nn=b.b.div(Z()),en=b.b.div(X()),tn=b.b.div(W(),(function(n){return n.poster}));function rn(){var n=Object(m.a)(["\n  background-image: url(",");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 120px;\n  height: 120px;\n"]);return rn=function(){return n},n}function an(){var n=Object(m.a)(["\n  /* background-color:yellow; */\n  padding: 10px;\n"]);return an=function(){return n},n}function on(){var n=Object(m.a)(["\n  width: 100%;\n  font-size: 1.1rem;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  align-items: center;\n  /* margin: 0 30px; */\n"]);return on=function(){return n},n}function cn(){return(cn=Object(T.a)(D.a.mark((function n(e){var t,r;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"https://cors-anywhere.herokuapp.com/",n.next=3,M.a.get("".concat("https://cors-anywhere.herokuapp.com/").concat(e,"?"),{params:{limit:10},method:"GET",headers:{"x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com","x-rapidapi-key":"03afeef36cmsh1bdcf2e9a60f303p19457cjsn1f84e9465bd0"}});case 3:return t=n.sent,r=t.data.data,n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var un=function(n){var e=n.id,t=n.album;return function(n){return cn.apply(this,arguments)}(t.tracklist).then((function(n){return console.log("id",e,n)})),a.a.createElement(ln,null,a.a.createElement(dn,{poster:t.cover_medium}),a.a.createElement(c.b,{to:"/album/".concat(t.title),style:{textDecoration:"none",color:"black"}},a.a.createElement(sn,null,t.title)))},ln=b.b.div(on()),sn=b.b.div(an()),dn=b.b.div(rn(),(function(n){return n.poster}));function pn(){var n=Object(m.a)(["\nfont-size:1.2rem;\n  padding-top: 50px;\n  padding-bottom: 20px;\n  width: 80%;\n"]);return pn=function(){return n},n}function fn(){var n=Object(m.a)(["\n  width: 80%;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap:30px;\n  padding:30px 0;\n"]);return fn=function(){return n},n}function mn(){var n=Object(m.a)(["\n  width: 80%;\n  /* background-color:black; */\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap:30px;\n  padding:30px 0;\n"]);return mn=function(){return n},n}function bn(){var n=Object(m.a)(["\n  width: 80%;\n  display:grid;\n  grid-template-columns:1fr 1fr;\n  grid-gap:20px;\n  \n"]);return bn=function(){return n},n}function hn(){var n=Object(m.a)(["\nfont-size:1rem;\nbackground-color:white;\nborder-radius:20px;\nmargin:10px;\npadding:0 1rem;\nborder: 2px solid rgba(24, 21, 50, 0.55);\nheight:2rem;\noutline:0;\ncursor: pointer;\n"]);return hn=function(){return n},n}function gn(){var n=Object(m.a)(["\nbackground-color: inherit;\npadding-top:10px;\nheight:2.5rem;\nwidth:100%;\nposition:-webkit-sticky;\nposition:sticky;\ntop:47px;\ndisplay:flex;\njustify-content:center;\nalign-items:center;\n/* background-color:pink; */\n\n"]);return gn=function(){return n},n}function vn(){var n=Object(m.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return vn=function(){return n},n}var xn=function(n){function e(n){var t;return Object(l.a)(this,e),(t=Object(d.a)(this,Object(p.a)(e).call(this,n))).topHandler=function(n){window.scrollTo(0,0)},t.songHandler=function(n){t.gotoSong.current.scrollIntoView({behavior:"smooth"})},t.artistHandler=function(n){t.gotoArtist.current.scrollIntoView({behavior:"smooth"})},t.albumHandler=function(n){t.gotoAlbum.current.scrollIntoView({behavior:"smooth"})},t.gotoSong=a.a.createRef(),t.gotoArtist=a.a.createRef(),t.gotoAlbum=a.a.createRef(),t.state={id:n.match.params.id,datas:""},t}return Object(f.a)(e,n),Object(s.a)(e,[{key:"componentDidMount",value:function(){var n=Object(T.a)(D.a.mark((function n(){var e,t,r,a,i,o,c,u,l,s,d,p;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,M.a.get("".concat("https://deezerdevs-deezer.p.rapidapi.com/search?"),{params:{q:this.state.id,limit:50},method:"GET",headers:{"x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com","x-rapidapi-key":"03afeef36cmsh1bdcf2e9a60f303p19457cjsn1f84e9465bd0"}});case 2:e=n.sent,t=e.data.data,this.setState({datas:t}),r=t.map((function(n){return n.artist.id})),a=new Set(r),i=Array.from(a),o=0;case 9:if(!(o<i.length)){n.next=21;break}c=0;case 11:if(!(c<t.length)){n.next=18;break}if(t[c].artist.id!==i[o]){n.next=15;break}return i[o]=t[c].artist,n.abrupt("break",18);case 15:c++,n.next=11;break;case 18:o++,n.next=9;break;case 21:u=t.map((function(n){return n.album.id})),l=new Set(u),s=Array.from(l),d=0;case 25:if(!(d<s.length)){n.next=37;break}p=0;case 27:if(!(p<t.length)){n.next=34;break}if(t[p].album.id!==s[d]){n.next=31;break}return s[d]=t[p].album,n.abrupt("break",34);case 31:p++,n.next=27;break;case 34:d++,n.next=25;break;case 37:this.setState({artists:i,albums:s});case 38:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"check",value:function(){this.state.id!==this.props.match.params.id&&window.location.reload()}},{key:"render",value:function(){this.check();var n=this.state.datas;return a.a.createElement(kn,null,a.a.createElement(jn,null,a.a.createElement(yn,{onClick:this.topHandler},"TOP"),a.a.createElement(yn,{onClick:this.songHandler},"BY SONGS"),a.a.createElement(yn,{onClick:this.artistHandler},"BY ARTISTS"),a.a.createElement(yn,{onClick:this.albumHandler},"BY ALBUMS")),a.a.createElement(Sn,{ref:this.gotoSong},"BY SONGS"),a.a.createElement(En,null,n?n.map((function(n,e){return a.a.createElement(Q,{key:e,id:e,title:n.title,preview:n.preview,artist:n.artist})})):null),a.a.createElement(Sn,{ref:this.gotoArtist},"BY ARTISTS"),a.a.createElement(On,null,this.state.artists?this.state.artists.map((function(n,e){return a.a.createElement($,{key:e,id:e,artist:n})})):null),a.a.createElement(Sn,{ref:this.gotoAlbum},"BY ALBUMS"),a.a.createElement(wn,null,this.state.albums?this.state.albums.map((function(n,e){return a.a.createElement(un,{key:e,id:e,album:n})})):null))}}]),e}(a.a.Component),kn=b.b.div(vn()),jn=b.b.div(gn()),yn=b.b.button(hn()),En=b.b.div(bn()),wn=b.b.div(mn()),On=b.b.div(fn()),Sn=b.b.h1(pn()),zn=Object(u.e)(xn);function Hn(){var n=Object(m.a)(["\n  font-size: 0.8rem;\n  color: darkslategray;\n  background-color: rgba(240, 240, 240, 0.7);\n  padding: 0.2rem;\n  border-radius: 5px;\n  font-weight: 500px;\n  display: block;\n  &:hover {\n    font-size: 0.8rem;\n  }\n"]);return Hn=function(){return n},n}function Cn(){var n=Object(m.a)(["\n  font-size: 2rem;\n  background-color: rgba(0, 0, 0, 0);\n  outline: 0;\n  border: 0;\n  transition: all 0.3s;\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.2);\n  }\n  &:active {\n    transform: scale(1);\n  }\n"]);return Cn=function(){return n},n}function An(){var n=Object(m.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: rgba(20, 20, 20, 0.5);\n  font-size: 1.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  transition: all 0.5s;\n  &:hover {\n    transform: scale(1.03);\n    font-size: 1.9rem;\n    background-color: rgba(240, 240, 240, 0.5);\n  }\n"]);return An=function(){return n},n}function Dn(){var n=Object(m.a)(["\n  width: 160px;\n  height: 200px;\n  background: #333 url(",") no-repeat center center/cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-weight: 500px;\n  box-shadow: 3px 3px 5px 6px #ccc;\n"]);return Dn=function(){return n},n}var Tn="",Bn=function(n){function e(n){var t;return Object(l.a)(this,e),(t=Object(d.a)(this,Object(p.a)(e).call(this,n))).enterHandler=function(n){return t.setState({hover:!0})},t.leaveHandler=function(n){return t.state.audio?null:t.setState({hover:!1})},t.clickHandler=function(n){var e=n.currentTarget.nextElementSibling;Tn&&document.querySelector("#".concat(Tn)).pause();Tn=e.id,e.addEventListener("ended",t.endedHandler),e.addEventListener("pause",t.pauseHandler),e.play(),t.setState({audio:!0})},t.endedHandler=function(n){console.log("ENDED"),Tn=""},t.pauseHandler=function(n){console.log("-----PAUSED"),t.setState({audio:!1,hover:!1})},t.state={audio:!1},t}return Object(f.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement(Mn,{poster:this.props.album.cover_medium,onMouseEnter:this.enterHandler,onMouseLeave:this.leaveHandler},a.a.createElement(In,null,this.state.hover?a.a.createElement("div",null,a.a.createElement(Ln,null,this.props.album.title),a.a.createElement(Gn,{onClick:this.clickHandler},a.a.createElement("span",{role:"img","aria-label":"img"},"\ud83c\udfbc")),a.a.createElement("audio",{className:"audio",id:"audioReco".concat(this.props.id)},a.a.createElement("source",{src:"".concat(this.props.preview)}))):this.props.title))}}]),e}(a.a.Component),Mn=b.b.div(Dn(),(function(n){return n.poster})),In=b.b.div(An()),Gn=b.b.button(Cn()),Ln=b.b.span(Hn()),Rn=Bn;function Nn(){var n=Object(m.a)(["\n  width: 80%;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 20px;\n  justify-items: center;\n  overflow-x:auto;\n  overflow-y:hidden;\n"]);return Nn=function(){return n},n}function Yn(){var n=Object(m.a)(["\n  font-size: 1.5rem;\n  margin:30px;\n  padding:0 100px;\n  align-self:flex-start;\n"]);return Yn=function(){return n},n}function qn(){var n=Object(m.a)(["\n  font-size: 2rem;\n  margin:30px;  \n  padding:0 80px;\n  align-self:flex-start;\n"]);return qn=function(){return n},n}function Un(){var n=Object(m.a)(["\n  padding: 70px 0;\n  width: 100%;\n  display:flex;\n  flex-direction:column;\n  justify-content:center;\n  align-items:center;\n"]);return Un=function(){return n},n}function Vn(){var n=Object(m.a)(["\n  width: 100%;\n"]);return Vn=function(){return n},n}var _n=["manhattans","james brown","fonsi","eminem","jovanotti","BTS"],Fn=function(n){function e(){var n,t;Object(l.a)(this,e);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(d.a)(this,(n=Object(p.a)(e)).call.apply(n,[this].concat(a)))).state={posts:[]},t}return Object(f.a)(e,n),Object(s.a)(e,[{key:"componentDidMount",value:function(){var n=Object(T.a)(D.a.mark((function n(){var e,t,r;return D.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=Math.floor(6*Math.random()),n.next=3,M.a.get("".concat("https://deezerdevs-deezer.p.rapidapi.com/search?"),{params:{q:_n[e],limit:20},method:"GET",headers:{"x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com","x-rapidapi-key":"03afeef36cmsh1bdcf2e9a60f303p19457cjsn1f84e9465bd0"}});case 3:t=n.sent,r=t.data.data,this.setState({posts:r,name:r[0].artist.name});case 6:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var n;return a.a.createElement(Jn,null,a.a.createElement(Pn,null,this.state.posts?a.a.createElement(a.a.Fragment,null,a.a.createElement(Kn,null,"Today's SINGER"),a.a.createElement(Qn,null,this.state.name)):null,a.a.createElement(Wn,null,null===(n=this.state.posts)||void 0===n?void 0:n.map((function(n,e){return a.a.createElement(Rn,{key:n.id,id:e,title:n.title,preview:n.preview,album:n.album})})))))}}]),e}(a.a.Component),Jn=b.b.div(Vn()),Pn=b.b.div(Un()),Kn=b.b.h1(qn()),Qn=b.b.h1(Yn()),Wn=b.b.div(Nn()),Xn=Fn,Zn=function(n){return a.a.createElement("div",null,"hi")},$n=function(){return"yoooo"};var ne=function(){return a.a.createElement(c.a,null,a.a.createElement(C,null),a.a.createElement(u.a,{exact:!0,path:"/",component:Xn}),a.a.createElement(u.a,{exact:!0,path:"/:id",component:zn}),a.a.createElement(u.a,{exact:!0,path:"/artist/:id",component:Zn}),a.a.createElement(u.a,{exact:!0,path:"/album/:id",component:$n}))};o.a.render(a.a.createElement(ne,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.f33185bc.chunk.js.map