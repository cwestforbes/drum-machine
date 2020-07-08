(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{33:function(n,t,e){n.exports=e(45)},45:function(n,t,e){"use strict";e.r(t);var r={};e.r(r),e.d(r,"SET_SELECT_BEAT",(function(){return v})),e.d(r,"SET_TOGGLE_IS_PLAYING",(function(){return x})),e.d(r,"SET_INSTRUMENT_IS_MUTED",(function(){return g})),e.d(r,"HANDLE_START_PLAYBACK",(function(){return m})),e.d(r,"HANDLE_STOP_PLAYBACK",(function(){return S})),e.d(r,"HANDLE_MUTE_SOUND",(function(){return y})),e.d(r,"HANDLE_SELECT_BEAT",(function(){return T})),e.d(r,"PLAY_SOUND",(function(){return E})),e.d(r,"UNLOCK_TONE",(function(){return w})),e.d(r,"SETUP_LOOP",(function(){return _})),e.d(r,"STOP_SOUND",(function(){return k})),e.d(r,"MUTE_SOUND",(function(){return P})),e.d(r,"GET_PLAYER",(function(){return A})),e.d(r,"SET_CANCEL_TRANSPORT",(function(){return N})),e.d(r,"SET_TEMPO",(function(){return L})),e.d(r,"selectBeat",(function(){return M})),e.d(r,"setToggleIsPlaying",(function(){return C})),e.d(r,"handleStartPlayback",(function(){return U})),e.d(r,"handleStopPlayback",(function(){return D})),e.d(r,"handleMuteSound",(function(){return B})),e.d(r,"handleSelectBeat",(function(){return R})),e.d(r,"playSound",(function(){return I})),e.d(r,"unlockTone",(function(){return Y})),e.d(r,"setupLoop",(function(){return H})),e.d(r,"stopSound",(function(){return K})),e.d(r,"muteSound",(function(){return G})),e.d(r,"getPlayer",(function(){return z})),e.d(r,"setInstrumentIsMuted",(function(){return F})),e.d(r,"setTransportCancel",(function(){return J})),e.d(r,"setTempo",(function(){return W}));var c=e(1),a=e.n(c),u=e(16),i=e.n(u),o=e(19),s=e(7),b=e.n(s),d=e(11),f=e(31),l=e(6),p=e(12),O=e(15),j=e(13),h={instruments:["Kick","Clap","Hihat","Snare"].reduce((function(n,t){return Object(j.a)({},n,Object(p.a)({},t,{title:t,file:"",beats:Array.from({length:16},(function(n,t){return{id:t.toString(),on:!1}})),isMuted:!1}))}),{}),isPlaying:!1},v="SET_SELECT_BEAT",x="SET_TOGGLE_IS_PLAYING",g="SET_INSTRUMENT_IS_MUTED",m="HANDLE_START_PLAYBACK",S="HANDLE_STOP_PLAYBACK",y="HANDLE_MUTE_SOUND",T="HANDLE_SELECT_BEAT",E="PLAY_SOUND",w="UNLOCK_TONE",_="SETUP_LOOP",k="STOP_SOUND",P="MUTE_SOUND",A="GET_PLAYER",N="SET_CANCEL_TRANSPORT",L="SET_TEMPO",M=function(n){return{type:v,params:n}},C=function(n){return{type:x,isPlaying:n}},U=function(){return{type:m}},D=function(){return{type:S}},B=function(n){return{type:y,title:n}},R=function(n){return{type:T,params:n}},I=function(){return{type:E}},Y=function(){return{type:w}},H=function(n){return{type:_,drumPatterns:n}},K=function(){return{type:k}},G=function(n){return{type:P,title:n}},z=function(n){return{type:A,title:n}},F=function(n,t){return{type:g,isMuted:n,title:t}},J=function(){return{type:N}},W=function(n){return{type:L,bpm:n}},$=function(n,t){return Object(j.a)({},n,Object(p.a)({},t.title,Object(j.a)({},n[t.title],{beats:[].concat(Object(O.a)(n[t.title].beats.slice(0,Number(t.id))),[{on:!t.on,id:t.id}],Object(O.a)(n[t.title].beats.slice(Number(t.id)+1)))})))},q=function(n,t,e){return Object(j.a)({},n,Object(p.a)({},e,Object(j.a)({},n[e],{isMuted:t})))},Q={instruments:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h.instruments,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return $(n,t.params);case g:return q(n,t.isMuted,t.title);default:return n}},isPlaying:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h.isPlaying,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return t.isPlaying;default:return n}}},V=Object(d.c)(Q);function X(n){return n.isPlaying}function Z(n){return n.instruments}function nn(n,t){return n.instruments[t].isMuted}var tn=e(25),en=e(9),rn=function(n){return Object.keys(n).reduce((function(t,e){var r=n[e].beats.reduce((function(n,t){return t.on?[].concat(Object(O.a)(n),[["0:0:".concat(t.id)]]):n}),[]);return Object(j.a)({},t,Object(p.a)({},e,r))}),{})},cn=function(n,t){var e=function(n,t){return new en.Part((function(t){!function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;n&&n.start(t)}(n,t)}),t)}(n,t);e.loop=!0,e.start(0)},an=function(){var n=Object(tn.a)(b.a.mark((function n(t,e){var r;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,un(t,e);case 2:return r=n.sent,n.next=5,!r.mute;case 5:r.mute=n.sent;case 6:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),un=function(n,t){return n.get(t)},on=b.a.mark(fn),sn=b.a.mark(ln),bn=b.a.mark(pn),dn=b.a.mark(On);function fn(){var n,t,e;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(l.b)(Y());case 2:return r.next=4,Object(l.c)(X);case 4:return n=r.sent,r.next=7,Object(l.b)(C(!n));case 7:return r.next=9,Object(l.c)(Z);case 9:return t=r.sent,r.next=12,Object(l.a)(rn,t);case 12:return e=r.sent,r.next=15,Object(l.c)(X);case 15:if(!r.sent){r.next=23;break}return r.next=19,Object(l.b)(H(e));case 19:return r.next=21,Object(l.b)(I());case 21:r.next=25;break;case 23:return r.next=25,Object(l.b)(K());case 25:case"end":return r.stop()}}),on)}function ln(){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(l.b)(C(!1));case 2:return n.next=4,Object(l.b)(K());case 4:case"end":return n.stop()}}),sn)}function pn(n){var t,e;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=n.title,r.next=3,Object(l.c)(nn,t);case 3:return e=r.sent,r.next=6,Object(l.b)(F(!e,t));case 6:return r.next=8,Object(l.b)(G(t));case 8:case"end":return r.stop()}}),bn)}function On(n){var t,e;return b.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(l.b)(J());case 2:return r.next=4,Object(l.b)(M(n.params));case 4:return r.next=6,Object(l.c)(Z);case 6:return t=r.sent,r.next=9,Object(l.a)(rn,t);case 9:return e=r.sent,r.next=12,Object(l.b)(H(e));case 12:case"end":return r.stop()}}),dn)}var jn=b.a.mark(hn);function hn(){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(l.d)("HANDLE_START_PLAYBACK",fn);case 2:return n.t0=n.sent,n.next=5,Object(l.d)("HANDLE_STOP_PLAYBACK",ln);case 5:return n.t1=n.sent,n.next=8,Object(l.d)("HANDLE_MUTE_SOUND",pn);case 8:return n.t2=n.sent,n.next=11,Object(l.d)("HANDLE_SELECT_BEAT",On);case 11:return n.t3=n.sent,n.abrupt("return",[n.t0,n.t1,n.t2,n.t3]);case 13:case"end":return n.stop()}}),jn)}var vn=b.a.mark(xn);function xn(){return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(l.a)(hn);case 2:case"end":return n.stop()}}),vn)}var gn=Object(f.a)(),mn=function(){var n,t=(n={Kick:"./kick.wav",Snare:"./snare.wav",Hihat:"./hihat.wav",Clap:"./clap.wav"},new en.Players(n).toMaster());return function(n){return function(n){return function(e){switch(e.type){case"UNLOCK_TONE":en.start();break;case"SETUP_LOOP":c=t,a=e.drumPatterns,c&&Object.keys(a).forEach((function(n){cn(c.get(n),a[n])}));break;case"PLAY_SOUND":en.Transport.start("+0.1");break;case"STOP_SOUND":en.Transport.stop(),en.Transport.cancel();break;case"MUTE_SOUND":an(t,e.title);break;case"GET_PLAYER":return un(t,e.title);case"SET_CANCEL_TRANSPORT":en.Transport.cancel();break;case"SET_TEMPO":r=e.bpm,en.Transport.timeSignature=4,en.Transport.bpm.value=r}var r,c,a;return n(e)}}}}(),Sn=Object(d.e)(V,Object(d.a)(gn,mn));gn.run(xn);var yn=Sn,Tn=e(5),En=e(2),wn=e(27),_n=e(28),kn=e(32),Pn=e(29),An=function(n){var t=n.cssProp,e=n.on,r=n.id,c=n.title,a=n.handleSelectBeat;return Object(En.b)("div",{css:t,onClick:function(){return function(n,t){t(n)}({id:r,title:c,on:e},a)}})};function Nn(){var n=Object(Tn.a)(["\n        background-color: #a2eb34;\n      "]);return Nn=function(){return n},n}function Ln(){var n=Object(Tn.a)(["\n        background-color: grey;\n      "]);return Ln=function(){return n},n}function Mn(){var n=Object(Tn.a)(["\n  border: 1px solid black;\n  outline: none;\n  width: 10px;\n  display: block;\n  height: 10px;\n  border-radius: 50%;\n  cursor: pointer;\n  margin-right: 10px;\n"]);return Mn=function(){return n},n}var Cn=Object(En.a)(Mn()),Un=function(n){return n?Object(En.a)(Ln()):Object(En.a)(Nn())},Dn=function(n){var t=n.title,e=n.handleMuteSound,r=n.isMuted;return Object(En.b)("div",{onClick:function(){return e(t)},css:[Cn,Un(r)]})};function Bn(){var n=Object(Tn.a)(["\n              background-color: #6b2b2b;\n              opacity: ",";\n            "]);return Bn=function(){return n},n}function Rn(){var n=Object(Tn.a)(["\n              background-color: #473d3d;\n              opacity: ",";\n            "]);return Rn=function(){return n},n}function In(){var n=Object(Tn.a)(["\n  font-size: 14px;\n"]);return In=function(){return n},n}function Yn(){var n=Object(Tn.a)(["\n  min-width: 120px;\n  border: 1px solid #5c5c5c;\n  height: 40px;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #473d3d;\n  margin-right: 5px;\n"]);return Yn=function(){return n},n}function Hn(){var n=Object(Tn.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 45px;\n"]);return Hn=function(){return n},n}function Kn(){var n=Object(Tn.a)(["\n  display: flex;\n  flex-direction: row;\n  margin-bottom: 10px;\n  justify-content: center;\n"]);return Kn=function(){return n},n}function Gn(){var n=Object(Tn.a)(["\n  width: 30px;\n  height: 40px;\n  margin-right: 5px;\n  margin-left: 5px;\n  border-radius: 5px;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  cursor: pointer;\n"]);return Gn=function(){return n},n}var zn=Object(En.a)(Gn()),Fn=Object(En.a)(Kn()),Jn=Object(En.a)(Hn()),Wn=Object(En.a)(Yn()),$n=Object(En.a)(In()),qn=function(n){Object(kn.a)(e,n);var t=Object(Pn.a)(e);function e(){var n;Object(wn.a)(this,e);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(n=t.call.apply(t,[this].concat(c))).genOnOffColor=function(n){return n?.4:1},n.renderRow=function(){var t=n.props,e=t.beats,r=t.title,c=t.handleSelectBeat;return e.map((function(t,e){var a=n.genOnOffColor(t.on),u=e<4||e>7&&e<12?Object(En.a)(Rn(),a):Object(En.a)(Bn(),a);return Object(En.b)(An,{cssProp:[zn,u],key:"".concat(t.id),on:t.on,id:t.id,title:r,handleSelectBeat:c})}))},n}return Object(_n.a)(e,[{key:"render",value:function(){var n=this.props,t=n.title,e=n.handleMuteSound,r=n.isMuted;return Object(En.b)("div",{css:Fn},Object(En.b)("div",{css:Jn},Object(En.b)(Dn,{title:t,handleMuteSound:e,isMuted:r}),Object(En.b)("div",{css:Wn},Object(En.b)("p",{css:$n},t)),this.renderRow()))}}]),e}(c.Component);function Qn(){var n=Object(Tn.a)(["\n  width: 770px;\n  height: 300px;\n  border: 1px solid darkgrey;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-top: 10px;\n  padding-left: 20px;\n  padding-right: 20px;\n  background-color: #6e6e6e;\n"]);return Qn=function(){return n},n}function Vn(){var n=Object(Tn.a)(['\n  display: "flex";\n  justify-content: "center";\n  align-items: "center";\n']);return Vn=function(){return n},n}var Xn=Object(En.a)(Vn()),Zn=Object(En.a)(Qn()),nt=function(n){return Object(En.b)("div",{css:Xn},Object(En.b)("div",{css:Zn},function(){var t=n.instruments,e=n.handleMuteSound,r=n.handleSelectBeat;return Object.keys(t).map((function(n,c){var a=t[n];return Object(En.b)(qn,{title:a.title,beats:a.beats,isMuted:a.isMuted,key:"".concat(a.title,"row").concat(c),handleMuteSound:e,handleSelectBeat:r})}))}()))};function tt(){var n=Object(Tn.a)(["\n  width: 4px;\n  height: 15px;\n  background-color: white;\n"]);return tt=function(){return n},n}function et(){var n=Object(Tn.a)(["\n  width: 12px;\n  height: 15px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]);return et=function(){return n},n}function rt(){var n=Object(Tn.a)(["\n  width: 0;\n  height: 0;\n  border-top: 10px solid transparent;\n  border-left: 20px solid white;\n  border-bottom: 10px solid transparent;\n"]);return rt=function(){return n},n}function ct(){var n=Object(Tn.a)(["\n  width: 87.5px;\n  height: 60px;\n  border-right: 1px solid grey;\n  display: flex;\n  background-color: #473d3d;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  outline: none;\n"]);return ct=function(){return n},n}var at=Object(En.a)(ct()),ut=Object(En.a)(rt()),it=Object(En.a)(et()),ot=Object(En.a)(tt()),st=function(n){var t=n.handleStartPlayback,e=n.isPlaying;return Object(En.b)("button",{css:at,onClick:function(){!function(n){n()}(t)}},function(n){return n?Object(En.b)("div",{css:it},Object(En.b)("div",{css:ot}),Object(En.b)("div",{css:ot})):Object(En.b)("div",{css:ut})}(e))};function bt(){var n=Object(Tn.a)(["\n  width: 15px;\n  height: 15px;\n  background-color: white;\n"]);return bt=function(){return n},n}function dt(){var n=Object(Tn.a)(["\n  width: 87.5px;\n  height: 60px;\n  background-color: #473d3d;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n  outline: none;\n"]);return dt=function(){return n},n}var ft=Object(En.a)(dt()),lt=Object(En.a)(bt()),pt=function(n){var t=n.handleStopPlayback;return Object(En.b)("button",{css:ft,onClick:function(){return t()}},Object(En.b)("div",{css:lt}))},Ot=e(30);function jt(){var n=Object(Tn.a)(["\n  box-sizing: border-box;\n  height: 55px;\n  width: 75px;\n  padding: 7px 0;\n  outline: none;\n  font-size: 20px;\n  appearance: none;\n  display: flex;\n  text-align: right;\n  cursor: row-resize;\n"]);return jt=function(){return n},n}var ht=Object(En.a)(jt()),vt=function(n){var t=n.setTempo,e=Object(c.useState)("120"),r=Object(Ot.a)(e,2),a=r[0],u=r[1],i=Object(c.useRef)(),o=Object(c.useRef)(),s=function(n){var e=document.getElementById("tempo-input").value,r=parseInt(e,10),c=b(r,n);r>=10&&r<=500&&(u(String(c)),t(Number(c)))},b=function(n,t){return 10===n&&t.toString().includes("+")||500===n&&t.toString().includes("-")||n>10&&n<500?t(n):n},d=function(n){return n+1},f=function(n){return n-1},l=function(n,t){i.current=window.setTimeout((function(){o.current=window.setInterval((function(){n(t)}),60)}),300)},p=function(){window.clearTimeout(i.current),window.clearInterval(o.current)};return Object(En.b)("input",{id:"tempo-input",css:ht,onChange:function(n){return function(n){u(n.target.value),t(Number(n.target.value))}(n)},onMouseDown:function(n){return function(n){n.nativeEvent.offsetY>=-2&&n.nativeEvent.offsetY<=19?l(s,d):l(s,f)}(n)},onMouseUp:function(){return p()},onMouseLeave:function(){return p()},type:"number",min:10,max:500,value:a,readOnly:!0})};function xt(){var n=Object(Tn.a)(["\n  width: 175px;\n  height: 60px;\n  border: 1px solid #473d3d;\n  flex-direction: row;\n  display: flex;\n  border-radius: 5px;\n  margin-right: 5px;\n"]);return xt=function(){return n},n}function gt(){var n=Object(Tn.a)(["\n  display: flex;\n  width: 300px;\n  height: 75px;\n  background-color: #6e6e6e;\n  justify-content: center;\n  align-items: center;\n"]);return gt=function(){return n},n}var mt=Object(En.a)(gt()),St=Object(En.a)(xt()),yt=function(n){var t=n.isPlaying,e=n.handleStartPlayback,r=n.handleStopPlayback,c=n.setTempo;return Object(En.b)("div",{css:mt},Object(En.b)("div",{css:St},Object(En.b)(st,{isPlaying:t,handleStartPlayback:e}),Object(En.b)(pt,{handleStopPlayback:r})),Object(En.b)(vt,{setTempo:c}))};function Tt(){var n=Object(Tn.a)(["\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n"]);return Tt=function(){return n},n}function Et(){var n=Object(Tn.a)(['\n  text-align: center;\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n']);return Et=function(){return n},n}var wt=Object(En.a)(Et()),_t=Object(En.a)(Tt()),kt=Object(o.b)((function(n){return n}),r)((function(n){var t=n.instruments,e=n.isPlaying,r=n.handleStartPlayback,c=n.handleStopPlayback,a=n.handleMuteSound,u=n.handleSelectBeat,i=n.setTempo;return Object(En.b)("div",{css:wt},Object(En.b)("header",{css:_t},Object(En.b)("p",null,"Drum machine"),Object(En.b)(yt,{isPlaying:e,handleStartPlayback:r,handleStopPlayback:c,setTempo:i}),Object(En.b)(nt,{instruments:t,handleMuteSound:a,handleSelectBeat:u})))}));var Pt=function(){return a.a.createElement(o.a,{store:yn},a.a.createElement(kt,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Pt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.7d2521a5.chunk.js.map