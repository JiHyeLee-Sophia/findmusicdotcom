(this.webpackJsonpfindmusicdotcom=this.webpackJsonpfindmusicdotcom||[]).push([[0],{41:function(e,n,t){e.exports=t(68)},68:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(35),o=t.n(i),c=t(17),u=t(15),l=t(4),s=t(5),d=t(7),p=t(6),m=t(8),f=t(1),b=t(2);function h(){var e=Object(f.a)(["\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  border: 0;\n  outline: 0;\n  color: white;\n  font-weight: border;\n  cursor: pointer;\n  &:hover {\n    transform: scale(1.05);\n  }\n  &:active {\n    transform: scale(1);\n  }\n"]);return h=function(){return e},e}function v(){var e=Object(f.a)(["\n  background-color: rgba(0, 0, 0, 0);\n  /* background-color:pink; */\n  margin-right:10px;\n  border: 0;\n  outline: 0;\n  width:100%;\n  height:inherit;\n"]);return v=function(){return e},e}function g(){var e=Object(f.a)(["\n  display:flex;\n  align-items:center;\n  justify-content:space-between;\n  padding:0 10px;\n  width:300px;\n  height: 32px;\n  font-size: 1.2rem;\n  font-weight: 500px;\n  border-radius: 30px;\n  border: 3px solid rgba(24, 21, 50, 0.55);\n  outline: none;\n  margin: 20px 0;\n  color: #333;\n  background-color: rgba(250, 250, 250, 0.85);\n  /* box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.17); */\n  \n"]);return g=function(){return e},e}function x(){var e=Object(f.a)(["\n  font-size: 32px;\n  color: black;\n"]);return x=function(){return e},e}function k(){var e=Object(f.a)(["\n  width: 100%;\n  /* height: 200px; */\n  padding: 50px 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return k=function(){return e},e}function j(){var e=Object(f.a)(["\n  padding-top: 50px;\n  width: 100%;\n  height: 100px;\n  padding-bottom: 30px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  position: -webkit-sticky;\n  position: sticky;\n  top: -80px;\n  background-color: rgba(200, 200, 200, 0.85);\n  order: 1;\n  z-index:1;\n"]);return j=function(){return e},e}function E(){var e=Object(f.a)(["\n    html,body{\n        height:100%;\n        width:100%;\n        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    }\n"]);return E=function(){return e},e}Object(b.a)(E());var y=b.b.div(j()),O=b.b.div(k()),w=b.b.h1(x()),S=b.b.div(g()),z=b.b.input(v()),H=b.b.button(h()),C=function(e){function n(){var e,t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(d.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(a)))).state={input:""},t.keyChangeHandler=function(e){t.setState({input:e.target.value})},t.keyDownHandler=function(e){13===e.keyCode&&(document.querySelector("#go").parentElement.click(),e.target.value="")},t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement(y,null,a.a.createElement(O,null,a.a.createElement(c.b,{to:"/",style:{textDecoration:"none"}},a.a.createElement(w,null,"FIND MUSIC . COM")),a.a.createElement(S,null,a.a.createElement(z,{id:"searchBar",onChange:this.keyChangeHandler,onKeyDown:this.keyDownHandler}),a.a.createElement(c.b,{to:"/".concat(this.state.input)},a.a.createElement(H,{id:"go"},"GO")))))}}]),n}(a.a.Component),T=t(9),D=t.n(T),A=t(13),M=t(14),N=t.n(M);function B(){var e=Object(f.a)(["\n  background-color: rgba(0, 0, 0, 0);\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  font-size: 1.4rem;\n  padding-right:20px;\n  &:hover {\n    transform: scale(1.1);\n  }\n  &:active {\n    transform: scale(1);\n  }\n"]);return B=function(){return e},e}function R(){var e=Object(f.a)(["\n  /* background-color:black; */\n"]);return R=function(){return e},e}function G(){var e=Object(f.a)(["\n  text-align: center;\n  /* background-color:pink; */\n"]);return G=function(){return e},e}function L(){var e=Object(f.a)(["\n  /* background-color:yellow; */\n"]);return L=function(){return e},e}function q(){var e=Object(f.a)(["\n  width: 40px;\n  height: 70px;\n  background-image: url(",");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n"]);return q=function(){return e},e}function F(){var e=Object(f.a)(["\n  background-color: rgba(240,240,240,0.5);\n  width: 100%;\n  display: grid;\n  grid-template-columns: 0.5fr 2.5fr 1fr 1fr;\n  grid-column-gap:20px;\n  align-items: center;\n  font-size: 1.1rem;\n"]);return F=function(){return e},e}var I="",Y=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(d.a)(this,Object(p.a)(n).call(this,e))).clickHandler=function(e){e.preventDefault();var n=e.currentTarget.nextElementSibling;if(t.state.audio)t.setState({audio:!1}),n.pause();else{if(I){var r=document.querySelector("#".concat(I));r&&r.pause()}I=n.id,t.setState({audio:!0}),n.play(),n.addEventListener("ended",t.stopHandler),n.addEventListener("pause",t.stopHandler)}},t.stopHandler=function(e){e.preventDefault(),t.setState({hover:!1,audio:!1})},t.state={audio:!1},t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.props;return a.a.createElement(_,null,a.a.createElement(U,{id:e.id,poster:e.album.cover_medium}),a.a.createElement(P,null,e.title),a.a.createElement(J,null,e.artist.name),a.a.createElement(K,null,a.a.createElement(Q,{onClick:this.clickHandler},a.a.createElement("span",{role:"img","aria-label":"img"},"\ud83c\udfbc")),a.a.createElement("audio",{id:"audioSong".concat(e.id)},a.a.createElement("source",{src:e.preview}))))}}]),n}(a.a.Component),_=b.b.div(F()),U=b.b.div(q(),(function(e){return e.poster})),P=b.b.span(L()),J=b.b.span(G()),K=b.b.div(R()),Q=b.b.button(B()),V=Y;function W(){var e=Object(f.a)(["\npadding-right:20px;\n"]);return W=function(){return e},e}function X(){var e=Object(f.a)(["\n  background-image: url(",");\n  width: 70px;\n  height: 100px;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n"]);return X=function(){return e},e}function Z(){var e=Object(f.a)(["\n  width: 100%;\n  font-size: 1.1rem;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  align-items: center;\n  grid-column-gap:20px;\n  background-color: rgba(240, 240, 240, 0.5);\n"]);return Z=function(){return e},e}var $=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(d.a)(this,Object(p.a)(n).call(this,e))).state={data:""},t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(A.a)(D.a.mark((function e(){var n,t,r,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props.artist.tracklist,"https://cors-anywhere.herokuapp.com/",t=n.split("?")[0],e.next=5,N.a.get("".concat("https://cors-anywhere.herokuapp.com/").concat(t,"?"),{params:{limit:50},method:"GET",headers:{"x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com","x-rapidapi-key":"03afeef36cmsh1bdcf2e9a60f303p19457cjsn1f84e9465bd0"}});case 5:r=e.sent,a=r.data.data,this.setState({data:a});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.artist;return a.a.createElement(a.a.Fragment,null,this.state.data?a.a.createElement(c.b,{to:{pathname:"/artist/".concat(e.name),state:{data:this.state.data},artist:e.name},style:{textDecoration:"none",color:"black"}},a.a.createElement(ee,null,a.a.createElement(ne,{poster:e.picture_medium}),a.a.createElement(te,null,e.name))):setTimeout((function(){return a.a.createElement("h2",null,"No Result Found")}),2e3))}}]),n}(a.a.Component),ee=b.b.div(Z()),ne=b.b.div(X(),(function(e){return e.poster})),te=b.b.div(W());function re(){var e=Object(f.a)(["\n  background-image: url(",");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 120px;\n  height: 120px;\n"]);return re=function(){return e},e}function ae(){var e=Object(f.a)(["\n  /* background-color:yellow; */\n  padding: 10px;\n"]);return ae=function(){return e},e}function ie(){var e=Object(f.a)(["\n  width: 100%;\n  font-size: 1.1rem;\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  align-items: center;\n  /* margin: 0 30px; */\n  background-color: rgba(240, 240, 240, 0.5);\n"]);return ie=function(){return e},e}var oe=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(d.a)(this,Object(p.a)(n).call(this,e))).state={data:""},t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(A.a)(D.a.mark((function e(){var n,t,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props.album.tracklist,"https://cors-anywhere.herokuapp.com/",e.next=4,N.a.get("".concat("https://cors-anywhere.herokuapp.com/").concat(n),{method:"GET",headers:{"x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com","x-rapidapi-key":"03afeef36cmsh1bdcf2e9a60f303p19457cjsn1f84e9465bd0"}});case 4:t=e.sent,r=t.data.data,this.setState({data:r});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.album;return a.a.createElement(a.a.Fragment,null,this.state.data?a.a.createElement(c.b,{to:{pathname:"/album/".concat(e.title),state:{data:this.state.data,album:e,poster:e.cover_medium,title:e.title}},style:{textDecoration:"none",color:"black"}},a.a.createElement(ce,null,a.a.createElement(le,{poster:e.cover_medium}),a.a.createElement(ue,null,e.title))):setTimeout((function(){return a.a.createElement("h2",null,"No Result Found")}),2e3))}}]),n}(a.a.Component),ce=b.b.div(ie()),ue=b.b.div(ae()),le=b.b.div(re(),(function(e){return e.poster}));function se(){var e=Object(f.a)(["\n  font-size: 1.2rem;\n  padding-top: 50px;\n  padding-bottom: 20px;\n  width: 80%;\n"]);return se=function(){return e},e}function de(){var e=Object(f.a)(["\n  width: 80%;\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 30px;\n  overflow-x:auto;\n"]);return de=function(){return e},e}function pe(){var e=Object(f.a)(["\n  width: 80%;\n  /* background-color:black; */\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-gap: 30px;\n  overflow-x:auto;\n"]);return pe=function(){return e},e}function me(){var e=Object(f.a)(["\n  width: 80%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 20px;\n  overflow-x:auto;\n"]);return me=function(){return e},e}function fe(){var e=Object(f.a)(["\n  font-size: 1rem;\n  background-color: white;\n  border-radius: 20px;\n  margin: 10px;\n  padding: 0 1rem;\n  border: 3px solid rgba(24, 21, 50, 0.55);\n  width: 150px;\n  height:2.5rem;\n  outline: 0;\n  cursor: pointer;\n  \n"]);return fe=function(){return e},e}function be(){var e=Object(f.a)(["\n  background-color: inherit;\n  padding-top: 10px;\n  height: 2.5rem;\n  width: 100%;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 47px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n  /* background-color:pink; */\n"]);return be=function(){return e},e}function he(){var e=Object(f.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return he=function(){return e},e}var ve=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(d.a)(this,Object(p.a)(n).call(this,e))).topHandler=function(e){window.scroll({top:0,behavior:"smooth"})},t.songHandler=function(e){var n=t.gotoSong.current.offsetTop-70;window.scroll({top:n,behavior:"smooth"})},t.artistHandler=function(e){var n=t.gotoArtist.current.offsetTop-70;window.scroll({top:n,behavior:"smooth"})},t.albumHandler=function(e){var n=t.gotoAlbum.current.offsetTop-70;window.scroll({top:n,behavior:"smooth"})},t.gotoTop=a.a.createRef(),t.gotoSong=a.a.createRef(),t.gotoArtist=a.a.createRef(),t.gotoAlbum=a.a.createRef(),t.state={id:e.match.params.id,datas:""},t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(A.a)(D.a.mark((function e(){var n,t,r,a,i,o,c,u,l,s,d,p;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("".concat("https://deezerdevs-deezer.p.rapidapi.com/search?"),{params:{q:this.state.id,limit:20},method:"GET",headers:{"x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com","x-rapidapi-key":"03afeef36cmsh1bdcf2e9a60f303p19457cjsn1f84e9465bd0"}});case 2:n=e.sent,t=n.data.data,this.setState({datas:t}),r=t.map((function(e){return e.artist.id})),a=new Set(r),i=Array.from(a),o=0;case 9:if(!(o<i.length)){e.next=21;break}c=0;case 11:if(!(c<t.length)){e.next=18;break}if(t[c].artist.id!==i[o]){e.next=15;break}return i[o]=t[c].artist,e.abrupt("break",18);case 15:c++,e.next=11;break;case 18:o++,e.next=9;break;case 21:u=t.map((function(e){return e.album.id})),l=new Set(u),s=Array.from(l),d=0;case 25:if(!(d<s.length)){e.next=37;break}p=0;case 27:if(!(p<t.length)){e.next=34;break}if(t[p].album.id!==s[d]){e.next=31;break}return s[d]=t[p].album,e.abrupt("break",34);case 31:p++,e.next=27;break;case 34:d++,e.next=25;break;case 37:this.setState({artists:i,albums:s});case 38:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"check",value:function(){this.state.id!==this.props.match.params.id&&window.location.reload()}},{key:"render",value:function(){this.check();var e=this.state.datas;return a.a.createElement(ge,null,a.a.createElement(xe,{ref:this.gotoTop},a.a.createElement(ke,{onClick:this.topHandler},"TOP"),a.a.createElement(ke,{onClick:this.songHandler},"BY SONGS"),a.a.createElement(ke,{onClick:this.artistHandler},"BY ARTISTS"),a.a.createElement(ke,{onClick:this.albumHandler},"BY ALBUMS")),a.a.createElement(Oe,{ref:this.gotoSong},"BY SONGS"),a.a.createElement(je,null,e?e.map((function(e,n){return a.a.createElement(V,{key:n,id:n,title:e.title,preview:e.preview,artist:e.artist,album:e.album})})):null),a.a.createElement(Oe,{ref:this.gotoArtist},"BY ARTISTS"),a.a.createElement(ye,null,this.state.artists?this.state.artists.map((function(e,n){return a.a.createElement($,{key:n,id:n,artist:e})})):null),a.a.createElement(Oe,{ref:this.gotoAlbum},"BY ALBUMS"),a.a.createElement(Ee,null,this.state.albums?this.state.albums.map((function(e,n){return a.a.createElement(oe,{key:n,id:n,album:e})})):null))}}]),n}(a.a.Component),ge=b.b.div(he()),xe=b.b.div(be()),ke=b.b.button(fe()),je=b.b.div(me()),Ee=b.b.div(pe()),ye=b.b.div(de()),Oe=b.b.h1(se()),we=Object(u.e)(ve);function Se(){var e=Object(f.a)(["\n  font-size: 0.8rem;\n  color: darkslategray;\n  background-color: rgba(240, 240, 240, 0.7);\n  padding: 0.2rem;\n  border-radius: 5px;\n  font-weight: 500px;\n  display: block;\n  &:hover {\n    font-size: 0.8rem;\n  }\n"]);return Se=function(){return e},e}function ze(){var e=Object(f.a)(["\n  font-size: 2rem;\n  background-color: rgba(0, 0, 0, 0);\n  outline: 0;\n  border: 0;\n  transition: all 0.3s;\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.2);\n  }\n  &:active {\n    transform: scale(1);\n  }\n"]);return ze=function(){return e},e}function He(){var e=Object(f.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: rgba(20, 20, 20, 0.5);\n  font-size: 1.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  transition: all 0.5s;\n  &:hover {\n    transform: scale(1.03);\n    font-size: 1.9rem;\n    background-color: rgba(240, 240, 240, 0.5);\n  }\n"]);return He=function(){return e},e}function Ce(){var e=Object(f.a)(["\n  width: 160px;\n  height: 200px;\n  background: #333 url(",") no-repeat center center/cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: white;\n  font-weight: 500px;\n  box-shadow: 3px 3px 5px 6px #ccc;\n"]);return Ce=function(){return e},e}var Te="",De=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(d.a)(this,Object(p.a)(n).call(this,e))).enterHandler=function(e){return t.setState({hover:!0})},t.leaveHandler=function(e){return t.state.audio?null:t.setState({hover:!1})},t.clickHandler=function(e){var n=e.currentTarget.nextElementSibling;Te&&document.querySelector("#".concat(Te)).pause();Te=n.id,n.addEventListener("ended",t.endedHandler),n.addEventListener("pause",t.pauseHandler),n.play(),t.setState({audio:!0})},t.endedHandler=function(e){console.log("ENDED"),Te=""},t.pauseHandler=function(e){console.log("-----PAUSED"),t.setState({audio:!1,hover:!1})},t.state={audio:!1},t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement(Ae,{poster:this.props.album.cover_medium,onMouseEnter:this.enterHandler,onMouseLeave:this.leaveHandler},a.a.createElement(Me,null,this.state.hover?a.a.createElement("div",null,a.a.createElement(Be,null,this.props.album.title),a.a.createElement(Ne,{onClick:this.clickHandler},a.a.createElement("span",{role:"img","aria-label":"img"},"\ud83c\udfbc")),a.a.createElement("audio",{className:"audio",id:"audioReco".concat(this.props.id)},a.a.createElement("source",{src:"".concat(this.props.preview)}))):this.props.title))}}]),n}(a.a.Component),Ae=b.b.div(Ce(),(function(e){return e.poster})),Me=b.b.div(He()),Ne=b.b.button(ze()),Be=b.b.span(Se()),Re=De;function Ge(){var e=Object(f.a)(["\n  width: 80%;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 20px;\n  justify-items: center;\n  overflow-x: auto;\n  overflow-y: hidden;\n"]);return Ge=function(){return e},e}function Le(){var e=Object(f.a)(["\n  font-size: 1.2rem;\n  margin: 20px;\n  width: 80%;\n"]);return Le=function(){return e},e}function qe(){var e=Object(f.a)(["\n  font-size: 1.5rem;\n  padding: 0 80px;\n  width: 80%;\n"]);return qe=function(){return e},e}function Fe(){var e=Object(f.a)(["\n  padding: 70px 0;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return Fe=function(){return e},e}function Ie(){var e=Object(f.a)(["\n  width: 100%;\n"]);return Ie=function(){return e},e}var Ye=["manhattans","james brown","fonsi","eminem","jovanotti","BTS"],_e=function(e){function n(){var e,t;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(d.a)(this,(e=Object(p.a)(n)).call.apply(e,[this].concat(a)))).state={posts:[]},t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(A.a)(D.a.mark((function e(){var n,t,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Math.floor(6*Math.random()),e.next=3,N.a.get("".concat("https://deezerdevs-deezer.p.rapidapi.com/search?"),{params:{q:Ye[n],limit:20},method:"GET",headers:{"x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com","x-rapidapi-key":"03afeef36cmsh1bdcf2e9a60f303p19457cjsn1f84e9465bd0"}});case 3:t=e.sent,r=t.data.data,this.setState({posts:r,name:r[0].artist.name});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e;return a.a.createElement(Ue,null,a.a.createElement(Pe,null,this.state.posts?a.a.createElement(a.a.Fragment,null,a.a.createElement(Je,null,"Today's SINGER"),a.a.createElement(Ke,null,this.state.name)):null,a.a.createElement(Qe,null,null===(e=this.state.posts)||void 0===e?void 0:e.map((function(e,n){return a.a.createElement(Re,{key:e.id,id:n,title:e.title,preview:e.preview,album:e.album})})))))}}]),n}(a.a.Component),Ue=b.b.div(Ie()),Pe=b.b.div(Fe()),Je=b.b.h1(qe()),Ke=b.b.h1(Le()),Qe=b.b.div(Ge()),Ve=_e;function We(){var e=Object(f.a)(["\n  font-size: 1.4rem;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  background-color: rgba(0, 0, 0, 0);\n  padding-right:20px;\n  &:hover {\n    transform: scale(1.1);\n  }\n  &:active {\n    transform: scale(1);\n  }\n"]);return We=function(){return e},e}function Xe(){var e=Object(f.a)([""]);return Xe=function(){return e},e}function Ze(){var e=Object(f.a)(["\n  font-weight: bolder;\n"]);return Ze=function(){return e},e}function $e(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return $e=function(){return e},e}function en(){var e=Object(f.a)(["\n  align-self: center;\n"]);return en=function(){return e},e}function nn(){var e=Object(f.a)(["\n  background-image: url(",");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 40px;\n  height: 70px;\n"]);return nn=function(){return e},e}function tn(){var e=Object(f.a)(["\n  width: 70%;\n  display: grid;\n  grid-template-columns: 0.5fr 3.5fr 3.5fr 0.5fr;\n  grid-column-gap:20px;\n  /* background-color:pink; */\n  padding: 7px 0;\n  border-bottom: 0.5px solid rgba(24, 21, 50, 0.55);\n"]);return tn=function(){return e},e}var rn="";function an(e){var n=e.id,t=e.title,r=e.preview,i=e.contributors,o=e.album,c=function(e){console.log("ENDED"),rn=""},u=function(e){console.log("-----PAUSED")};return a.a.createElement(on,null,a.a.createElement(cn,{poster:o.cover_medium,track:o.tracklist}),a.a.createElement(un,null,o.title),a.a.createElement(ln,null,a.a.createElement(sn,null,t),i.map((function(e,n){return n<3?i.length-1>n?a.a.createElement(dn,{key:n},"".concat(e.name," & ")):a.a.createElement(dn,{key:n},e.name):4===n?a.a.createElement(dn,{key:n},"..."):null}))),a.a.createElement(pn,{onClick:function(e){var n=e.currentTarget.nextElementSibling;rn&&document.querySelector("#".concat(rn)).pause();rn=n.id,n.addEventListener("ended",c),n.addEventListener("pause",u),n.play()}},a.a.createElement("span",{role:"img","aria-label":"img"},"\ud83c\udfbc")),a.a.createElement("audio",{className:"audio",id:"ArtistName".concat(n)},a.a.createElement("source",{src:r})))}var on=b.b.div(tn()),cn=b.b.div(nn(),(function(e){return e.poster})),un=b.b.div(en()),ln=b.b.div($e()),sn=b.b.div(Ze()),dn=b.b.span(Xe()),pn=b.b.button(We());function mn(){var e=Object(f.a)(["\nfont-size:30px;\n"]);return mn=function(){return e},e}function fn(){var e=Object(f.a)(["\n  width:100%;\n  display:flex;\n  flex-direction:column;\n  align-items:center;\n  margin:30px 0;\n"]);return fn=function(){return e},e}var bn=function(e){function n(){return Object(l.a)(this,n),Object(d.a)(this,Object(p.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.props.location,n=e.artist,t=e.state.data;return console.log(n),a.a.createElement(hn,null,a.a.createElement(vn,null,n),null===t||void 0===t?void 0:t.map((function(e,n){return a.a.createElement(an,{key:n,id:n,title:e.title,preview:e.preview,contributors:e.contributors,artist:e.artist,album:e.album})})))}}]),n}(a.a.Component),hn=b.b.div(fn()),vn=b.b.div(mn()),gn=bn;function xn(){var e=Object(f.a)(["\n  width: 80%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 20px;\n  overflow-x: auto;\n"]);return xn=function(){return e},e}function kn(){var e=Object(f.a)(["\n  font-size:20px;\n  margin-left:50px;\n"]);return kn=function(){return e},e}function jn(){var e=Object(f.a)(["\n  background-image: url(",");\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  width: 120px;\n  height: 120px;\n"]);return jn=function(){return e},e}function En(){var e=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-items:center;\n  margin:20px;\n"]);return En=function(){return e},e}function yn(){var e=Object(f.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 30px 0;\n"]);return yn=function(){return e},e}var On=function(e){function n(e){var t;return Object(l.a)(this,n),(t=Object(d.a)(this,Object(p.a)(n).call(this,e))).state={data:""},t}return Object(m.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(A.a)(D.a.mark((function e(){var n,t,r,a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props.location.state.data[0].artist.tracklist,"https://cors-anywhere.herokuapp.com/",t=n.split("?")[0],e.next=5,N.a.get("".concat("https://cors-anywhere.herokuapp.com/").concat(t,"?"),{params:{limit:20},method:"GET",headers:{"x-rapidapi-host":"deezerdevs-deezer.p.rapidapi.com","x-rapidapi-key":"03afeef36cmsh1bdcf2e9a60f303p19457cjsn1f84e9465bd0"}});case 5:r=e.sent,a=r.data.data,this.setState({data:a});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.location.state,n=e.album,t=e.poster,r=e.title;return a.a.createElement(wn,null,a.a.createElement(Sn,null,a.a.createElement(zn,{poster:t}),a.a.createElement(Hn,null,r)),a.a.createElement(Cn,null,this.state.data?this.state.data.map((function(e,t){return a.a.createElement(V,{key:t,id:t,title:e.title,preview:e.preview,artist:e.artist,album:n})})):null))}}]),n}(a.a.Component),wn=b.b.div(yn()),Sn=b.b.div(En()),zn=b.b.div(jn(),(function(e){return e.poster})),Hn=b.b.div(kn()),Cn=b.b.div(xn()),Tn=On;var Dn=function(){return a.a.createElement(c.a,null,a.a.createElement(C,null),a.a.createElement(u.a,{exact:!0,path:"/",component:Ve}),a.a.createElement(u.a,{exact:!0,path:"/:id",component:we}),a.a.createElement(u.a,{exact:!0,path:"/artist/:id",component:gn}),a.a.createElement(u.a,{exact:!0,path:"/album/:id",component:Tn}))};o.a.render(a.a.createElement(Dn,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.e5a21719.chunk.js.map