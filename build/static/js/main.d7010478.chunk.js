(window["webpackJsonpopenlive-web"]=window["webpackJsonpopenlive-web"]||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(10),c=a.n(r),i=(a(94),a(95),a(27)),l=a(35),s=a(46),u=a(15);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f={loading:!1,streams:[],localStream:null,currentStream:null,otherStreams:[],devicesList:[],config:{uid:0,host:!0,channelName:"",token:Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_AGORA_APP_TOKEN,microphoneId:"",cameraId:"",resolution:"480p"},agoraClient:null,mode:"live",codec:"h264",muteVideo:!0,muteAudio:!0,screen:!1,profile:!1},p=function(e,t){switch(t.type){case"config":return d({},e,{config:t.payload});case"client":return d({},e,{client:t.payload});case"loading":return d({},e,{loading:t.payload});case"codec":return d({},e,{codec:t.payload});case"video":return d({},e,{muteVideo:t.payload});case"audio":return d({},e,{muteAudio:t.payload});case"screen":return d({},e,{screen:t.payload});case"devicesList":return d({},e,{devicesList:t.payload});case"localStream":return d({},e,{localStream:t.payload});case"profile":return d({},e,{profile:t.payload});case"currentStream":var a=e.streams,n=t.payload,o=a.filter((function(e){return e.getId()!==n.getId()}));return d({},e,{currentStream:n,otherStreams:o});case"addStream":var r=e.streams,c=e.currentStream,i=t.payload,s=c;if(s||(s=i),4===r.length)return d({},e);var u=[].concat(Object(l.a)(r),[i]),m=u.filter((function(e){return e.getId()!==s.getId()}));return d({},e,{streams:u,currentStream:s,otherStreams:m});case"removeStream":var f=e.streams,p=e.currentStream,h=t.stream,g=t.uid,v=h?h.getId():g,b=p,y=f.filter((function(e){return e.getId()!==v}));v===p.getId()&&(b=0===y.length?null:y[0]);var E=b?y.filter((function(e){return e.getId()!==b.getId()})):[];return d({},e,{streams:y,currentStream:b,otherStreams:E});case"clearAllStream":var S=e.streams,x=e.localStream,j=e.currentStream;return S.forEach((function(e){e.isPlaying()&&e.stop(),e.close()})),x&&(x.isPlaying()&&x.stop(),x.close()),j&&(j.isPlaying()&&j.stop(),j.close()),d({},e,{currentStream:null,localStream:null,streams:[]});default:throw new Error("mutation type not defined")}},h=a(39),g=a(3),v=a(155),b=a(64),y=a.n(b),E=a(67),S=a.n(E),x=a(68),j=a.n(x),O=a(69),C=a.n(O),I=a(140),k=a(141),_=a(143),N=a(142),w=a(66),P=a.n(w),A=a(139),R={success:y.a,warning:P.a,error:S.a,info:j.a},D=Object(A.a)((function(e){return{success:{backgroundColor:I.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main},warning:{backgroundColor:k.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"},customSnackbar:{minWidth:"180px !important",minHeight:"40px !important",background:"rgba(0,0,0,0.7)",boxShadow:"0px 2px 4px 0px rgba(42,62,84,0.24)",borderRadius:"30px",justifyContent:"center",padding:"0 11px"}}}));function V(e){var t=D(),a=$(),r=e.message,c=(e.onClose,e.variant),i=Object(h.a)(e,["message","onClose","variant"]),l=R[c];return Object(n.useEffect)((function(){var e=setTimeout((function(){a.removeTop()}),1e3);return function(){clearTimeout(e)}}),[a]),o.a.createElement(N.a,Object.assign({className:Object(g.a)(t[c],t.customSnackbar),"aria-describedby":"client-snackbar",message:o.a.createElement("span",{id:"client-snackbar",className:t.message},"error"===c?o.a.createElement("i",{className:"error-icon"}):o.a.createElement(l,{className:Object(g.a)(t.icon,t.iconVariant)}),r),action:[o.a.createElement(_.a,{key:"close","aria-label":"close",color:"inherit",onClick:function(){a.removeTop()}},o.a.createElement(C.a,{className:Object(g.a)(t.icon)}))]},i))}function L(e){var t=function(e){};return o.a.createElement(o.a.Fragment,null,e.toasts.map((function(e,a){return o.a.createElement(v.a,{key:a,open:!0,anchorOrigin:{vertical:"top",horizontal:"center"}},o.a.createElement(V,{onClose:t,variant:e.variant,message:"".concat(e.message)}))})))}var B=a(144),T=Object(A.a)((function(e){return{progress:{margin:e.spacing(2),color:"#44A2FC"},container:{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",background:"#666666"}}}));function F(){var e=T();return o.a.createElement("div",{className:e.container},o.a.createElement(B.a,{className:e.progress}))}function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(a,!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var M=Object(n.createContext)({}),H=Object(n.createContext)({});function U(){return Object(n.useContext)(M)}function $(){return Object(n.useContext)(H)}var q=a(150),G=a(153),J=a(149),K=a(4),X=a(145),Y=a(156),Q=a(146),Z=a(147),ee=a(24),te=o.a.createContext({}),ae=function(e){var t=e.children;return o.a.createElement(ee.a,null,o.a.createElement(i.c,null,o.a.createElement(i.a,null,(function(e){return o.a.createElement(te.Provider,{value:e},t)}))))};function ne(){return Object(n.useContext)(te)}var oe=Object(K.a)({root:{color:"#999999","&$checked":{color:"#44A2FC"},"&:hover":{backgroundColor:"inherit"}}})((function(e){e.children;var t=Object(h.a)(e,["children"]);return o.a.createElement("div",{className:"role-item"},o.a.createElement("div",{className:"icon-".concat(t.value,"-").concat(t.checked?"active":"inactive")}),o.a.createElement("div",{className:"radio-row ".concat(t.value)},o.a.createElement("div",{className:"custom-radio"},o.a.createElement("input",{type:"radio",value:t.value,checked:t.checked,onChange:t.onChange}),o.a.createElement("div",{className:"checkmark"})),o.a.createElement(G.a,{flex:"1",className:"role-name-".concat(t.checked?"active":"inactive")},t.value)))})),re=Object(A.a)((function(e){return{fontStyle:{color:"#9ee2ff"},midItem:{marginTop:"1rem",marginBottom:"6rem"},item:{flex:1,display:"flex",alignItems:"center"},coverLeft:{background:"linear-gradient(to bottom, #307AFF, 50%, #46cdff)",alignItems:"center",flex:1,display:"flex",flexDirection:"column"},coverContent:{display:"flex",justifyContent:"center",flexDirection:"column",color:"#fff"},container:{display:"flex",justifyContent:"center",alignItems:"center"},card:{display:"flex",minWidth:700,minHeight:500,maxHeight:500,borderRadius:"10px",boxShadow:"0px 6px 18px 0px rgba(0,0,0,0.2)"},input:{maxWidth:"250px",minWidth:"250px",alignSelf:"center"},grid:{margin:"0 !important"},button:{lineHeight:"21px",color:"rgba(255,255,255,1)",fontSize:"17px",textTransform:"none",height:"44px",width:"260px","&:hover":{backgroundColor:"#82C2FF"},margin:e.spacing(1),marginTop:"33px",backgroundColor:"#44a2fc",borderRadius:"30px"},radio:{padding:"0",fontSize:"14px",alignItems:"center",paddingRight:"5px"}}}));function ce(){var e=re(),t=ne(),a=U(),n=$(),r=function(e){var t=e.target.value;n.updateConfig({host:"host"===t})};return o.a.createElement(G.a,{marginTop:"114px",flex:"1",display:"flex",alignItems:"center",justifyContent:"flex-start",flexDirection:"column"},o.a.createElement(ee.b,{to:"/setting",className:"setting-btn"}),o.a.createElement("a",{href:"https://github.com/AgoraIO/Basic-Video-Broadcasting/tree/master/OpenLive-Web",className:"github"}),o.a.createElement("div",{className:"role-container"},o.a.createElement(oe,{className:e.radio,value:"host",checked:a.config.host,onChange:r}),o.a.createElement(oe,{className:e.radio,value:"audience",checked:!a.config.host,onChange:r})),o.a.createElement(G.a,{marginTop:"92",flex:"1",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"},o.a.createElement(X.a,{className:Object(g.a)(e.input,e.grid)},o.a.createElement(Y.a,{htmlFor:"channelName"},"Pick a topic to chat"),o.a.createElement(Q.a,{id:"channelName",name:"channelName",defaultValue:a.config.channelName,onChange:function(e){n.updateConfig({channelName:e.target.value})}})),o.a.createElement(X.a,{className:e.grid},o.a.createElement(Z.a,{onClick:function(){a.config.channelName?(n.startLoading(),t.history.push({pathname:"/meeting/".concat(a.config.channelName)})):n.toastError("You need enter the topic")},variant:"contained",color:"primary",className:e.button},"Start Live Broadcast"))))}var ie=a(73),le=a(74),se=a(28),ue=a.n(se),me=a(75),de=a.n(me),fe=Object({NODE_ENV:"production",PUBLIC_URL:"."}).REACT_APP_AGORA_APP_ID;console.log("agora sdk version: "+ue.a.VERSION+" compatible: "+ue.a.checkSystemRequirements());var pe=function(){function e(){Object(ie.a)(this,e),this._client=null,this._joined=!1,this._localStream=null,this._params={},this._uid=0,this._eventBus=new de.a,this._showProfile=!1,this._subscribed=!1,this._created=!1}return Object(le.a)(e,[{key:"createClient",value:function(e){return this._client=ue.a.createClient({mode:e.mode,codec:e.codec}),this._client}},{key:"destroy",value:function(){this._created=!1,this._client=null}},{key:"on",value:function(e,t){-1===["localStream-added","screenShare-canceled"].indexOf(e)?this._client.on(e,t):this._eventBus.on(e,t)}},{key:"setClientRole",value:function(e){this._client.setClientRole(e)}},{key:"createRTCStream",value:function(e){var t=this;return new Promise((function(a,n){t._uid=t._localStream?t._localStream.getId():e.uid,t._localStream&&(t.unpublish(),t._localStream.isPlaying()&&t._localStream.stop(),t._localStream.close());var o=ue.a.createStream({streamID:t._uid,audio:!0,video:!0,screen:!1,microphoneId:e.microphoneId,cameraId:e.cameraId});e.resolution&&"default"!==e.resolution&&o.setVideoProfile(e.resolution),o.init((function(){t._localStream=o,t._eventBus.emit("localStream-added",{stream:t._localStream}),!1===e.muteVideo&&t._localStream.muteVideo(),!1===e.muteAudio&&t._localStream.muteAudio(),a()}),(function(e){n(e),console.error("init local stream failed ",e)}))}))}},{key:"createScreenSharingStream",value:function(e){var t=this;return new Promise((function(a,n){t._uid=t._localStream?t._localStream.getId():e.uid,t._localStream&&(t._uid=t._localStream.getId(),t.unpublish(),t._localStream.isPlaying()&&t._localStream.stop(),t._localStream.close());var o=ue.a.createStream({streamID:t._uid,audio:!0,video:!1,screen:!0,microphoneId:e.microphoneId,cameraId:e.cameraId});e.resolution&&"default"!==e.resolution&&o.setScreenProfile("".concat(e.resolution,"_1")),o.on("stopScreenSharing",(function(e){t._eventBus.emit("stopScreenSharing",e)})),o.init((function(){t._localStream=o,t._eventBus.emit("localStream-added",{stream:t._localStream}),a()}),(function(e){a(e)}))}))}},{key:"subscribe",value:function(e,t){this._client.subscribe(e,t)}},{key:"_createTmpStream",value:function(){var e=this;return this._uid=0,new Promise((function(t,a){e._localStream&&e._localStream.close();var n=ue.a.createStream({streamID:e._uid,audio:!0,video:!0,screen:!1});n.init((function(){e._localStream=n,t()}),(function(e){a(e),console.error("init local stream failed ",e)}))}))}},{key:"getDevices",value:function(){var e=this;return new Promise((function(t,a){e._client||e.createClient({codec:"h264",mode:"live"}),e._createTmpStream().then((function(){ue.a.getDevices((function(a){e._localStream.close(),t(a)}))}))}))}},{key:"join",value:function(e){var t=this;return this._joined="pending",new Promise((function(a,n){t._params=e,t._client.init(fe,(function(){t._client.join(e.token?e.token:null,e.channel,e.uid?+e.uid:null,(function(o){t._uid=o,console.log("join channel: "+e.channel+" success, uid: "+o),t._joined=!0,e.uid=o,e.host?t.createRTCStream(e).then((function(){a()})).catch((function(e){n(e)})):a()}),(function(e){t._joined=!1,n(e),console.error("client join failed",e)}))}),(function(e){t._joined=!1,n(e),console.error(e)}))}))}},{key:"publish",value:function(){this._client.publish(this._localStream,(function(e){console.error(e)}))}},{key:"unpublish",value:function(){this._client&&this._client.unpublish(this._localStream,(function(e){console.error(e)}))}},{key:"leave",value:function(){var e=this;return new Promise((function(t){e._client.leave((function(){e._joined=!1,e.destroy(),t()}),(function(e){console.log("channel leave failed"),console.error(e)}))}))}}]),e}();var he=a(152),ge=a(148),ve=a(158),be=a(157),ye=Object(A.a)((function(e){return{menuTitle:{color:"#333333",textAlign:"center",fontSize:"h6.fontSize",position:"relative",top:"7px"},marginTop:{marginTop:"0 !important"},menu:{margin:"0.4rem 0",position:"relative",height:"39px",display:"flex",justifyContent:"center",alignItems:"center"},line:{marginTop:"0.2rem",marginBottom:"0.5rem",borderBottom:"1px solid #EAEAEA"},hr:{borderBottom:"1px solid #EAEAEA"},switchItem:{flexDirection:"row-reverse !important",marginLeft:"0 !important",marginRight:"0 !important",justifyContent:"space-between"}}})),Ee=Object(K.a)((function(e){return{root:{width:42,height:26,padding:0,margin:e.spacing(1)},switchBase:{padding:1,"&$checked":{transform:"translateX(16px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#44A2FC",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#52d869",border:"6px solid #fff"}},thumb:{width:24,height:24},track:{borderRadius:13,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:e.palette.grey[50],opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))((function(e){var t=e.classes,a=Object(h.a)(e,["classes"]);return o.a.createElement(be.a,Object.assign({focusVisibleClassName:t.focusVisible,classes:{root:t.root,switchBase:t.switchBase,thumb:t.thumb,track:t.track,checked:t.checked}},a))}));function Se(){var e=ye(),t=U(),a=$(),r=function(){var e=U(),t=$(),a=Object(n.useMemo)((function(){return new pe}),[]),o=Object(n.useMemo)((function(){return[e.devicesList.filter((function(e){return"videoinput"===e.kind})).map((function(e,t){return{value:e.deviceId,label:e.label?e.label:"Video Input ".concat(t)}})),e.devicesList.filter((function(e){return"audioinput"===e.kind})).map((function(e,t){return{value:e.deviceId,label:e.label?e.label:"Audio Input ".concat(t)}}))]}),[e.devicesList]),r=Object(u.a)(o,2),c=r[0],i=r[1];return Object(n.useEffect)((function(){if(!(c.length>0||i.length>0))return a.getDevices().then((function(e){t.setDevicesList(e)})),function(){a.destroy()}}),[i,t,c,a]),Object(n.useEffect)((function(){!c[0]||!i[0]||e.config.cameraId&&e.config.microphoneId||(t.updateConfig({cameraId:c[0].value,microphoneId:i[0].value}),t.stopLoading())}),[t,e.devicesList,e.config,c,i]),[c,i]}(),c=Object(u.a)(r,2),i=c[0],l=c[1];return o.a.createElement(G.a,{flex:"1",display:"flex",flexDirection:"column"},o.a.createElement(ee.b,{to:"/",className:"back-btn"}),o.a.createElement(G.a,{display:"flex",flex:"1",flexDirection:"column",padding:"0 1rem",justifyContent:"flex-start"},o.a.createElement(X.a,{className:e.menu},o.a.createElement("span",{className:e.menuTitle},"Setting")),o.a.createElement("div",{className:e.line}),o.a.createElement(X.a,null,o.a.createElement(Y.a,{htmlFor:"resolution"},"Resolution"),o.a.createElement(he.a,{value:t.config.resolution,onChange:function(e){a.updateConfig({resolution:e.target.value})},inputProps:{name:"resolution",id:"resolution"}},o.a.createElement(ve.a,{value:"480p"},"480p"),o.a.createElement(ve.a,{value:"720p"},"720p"),o.a.createElement(ve.a,{value:"1080p"},"1080p"))),o.a.createElement(X.a,null,o.a.createElement(Y.a,{htmlFor:"codec"},"Video Codec"),o.a.createElement(he.a,{value:t.codec,onChange:function(e){a.setCodec(e.target.value)},inputProps:{name:"codec",id:"codec"}},o.a.createElement(ve.a,{value:"h264"},"h264"),o.a.createElement(ve.a,{value:"vp8"},"vp8"))),o.a.createElement(X.a,null,o.a.createElement(Y.a,{htmlFor:"camera"},"Camera"),o.a.createElement(he.a,{value:t.config.cameraId,onChange:function(e){a.updateConfig({cameraId:e.target.value})},inputProps:{name:"camera",id:"camera"}},i.map((function(e,t){return o.a.createElement(ve.a,{key:t,value:e.value},e.label)})))),o.a.createElement(X.a,null,o.a.createElement(Y.a,{htmlFor:"Microphone"},"Microphone"),o.a.createElement(he.a,{value:t.config.microphoneId,onChange:function(e){a.updateConfig({microphoneId:e.target.value})},inputProps:{name:"microphone",id:"microphone"}},l.map((function(e,t){return o.a.createElement(ve.a,{key:t,value:e.value},e.label)})))),o.a.createElement(X.a,null,o.a.createElement(ge.a,{control:o.a.createElement(Ee,{checked:t.muteVideo,onChange:function(){a.setVideo(!t.muteVideo)},value:t.muteVideo,color:"primary"}),className:e.switchItem,label:"Video"}),o.a.createElement("div",{className:e.hr})),o.a.createElement(X.a,null,o.a.createElement(ge.a,{control:o.a.createElement(Ee,{checked:t.muteAudio,onChange:function(){a.setAudio(!t.muteAudio)},value:t.muteAudio,color:"primary"}),className:e.switchItem,label:"Audio"}),o.a.createElement("div",{className:e.hr})),o.a.createElement(X.a,null,o.a.createElement(ge.a,{control:o.a.createElement(Ee,{checked:t.profile,onChange:function(){a.setProfile(!t.profile)},value:t.profile,color:"primary"}),className:e.switchItem,label:"Profile"}),o.a.createElement("div",{className:e.hr}))))}var xe=Object(A.a)((function(e){return{fontStyle:{color:"#9ee2ff"},midItem:{marginTop:"1rem",marginBottom:"6rem"},item:{flex:1,display:"flex",alignItems:"center"},coverLeft:{background:"linear-gradient(to bottom, #307AFF, 50%, #46cdff)",alignItems:"center",flex:1,display:"flex",flexDirection:"column"},coverContent:{display:"flex",justifyContent:"center",flexDirection:"column",color:"#fff"},coverRight:{position:"relative",flex:1,display:"flex"},container:{display:"flex",justifyContent:"center",alignItems:"center"},card:{display:"flex",minWidth:700,minHeight:500,maxHeight:500,borderRadius:"10px",boxShadow:"0px 6px 18px 0px rgba(0,0,0,0.2)"},input:{maxWidth:"250px",minWidth:"250px",alignSelf:"center"},grid:{margin:"0 !important"},button:{height:"44px",width:"260px","&:hover":{backgroundColor:"#307AFF"},margin:e.spacing(1),marginTop:"33px",backgroundColor:"#44a2fc",borderRadius:"30px"}}}));function je(){var e=xe();return o.a.createElement(G.a,{display:"flex",alignItems:"center",justifyContent:"center"},o.a.createElement(J.a,{className:e.card},o.a.createElement(G.a,{display:"flex",flex:"1"},o.a.createElement("div",{className:e.coverLeft},o.a.createElement("div",{className:e.item},o.a.createElement("div",{className:"cover-image"})),o.a.createElement("div",{className:e.item},o.a.createElement("div",{className:e.coverContent},o.a.createElement(G.a,{textAlign:"center",fontSize:"h6.fontSize",className:e.fontStyle},"Welcome to"),o.a.createElement(G.a,{textAlign:"center",fontWeight:"fontWeightRegular",fontSize:"h4.fontSize",className:e.midItem},"OPEN LIVE"),o.a.createElement(G.a,{textAlign:"center",fontWeight:"fontWeightRegular",className:e.fontStyle,fontSize:"h7.fontSize"},"Powered by Agora.io")))),o.a.createElement("div",{className:e.coverRight},o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:ce}),o.a.createElement(i.a,{path:"/setting",component:Se}))))))}var Oe=Object(A.a)((function(){return{container:{height:"100%",width:"100%",minWidth:800,minHeight:600,boxSizing:"content-box",display:"flex",justifyContent:"center"}}})),Ce=function(){var e=U(),t=$(),a=Oe();return Object(n.useEffect)((function(){!0===e.loading&&t.stopLoading()}),[e.loading,t]),o.a.createElement(q.a,{maxWidth:"sm",className:a.container},o.a.createElement(je,null))};function Ie(e){var t=e.stream,a=e.domId,r=e.uid,c=Object(n.useState)(!1),i=Object(u.a)(c,2),l=i[0],s=i[1],m=Object(n.useState)(!1),d=Object(u.a)(m,2),f=d[0],p=d[1],h=Object(n.useState)({accessDelay:0,fps:0,resolution:0}),g=Object(u.a)(h,2),v=g[0],b=g[1],y=Object(n.useMemo)((function(){return v}),[v]);return Object(n.useEffect)((function(){var a=setInterval((function(){t.getStats((function(t){var a=e.local?t.videoSendResolutionWidth:t.videoReceiveResolutionWidth,n=e.local?t.videoSendResolutionHeight:t.videoReceiveResolutionHeight,o=e.local?t.videoSendFrameRate:t.videoReceiveFrameRate;b({accessDelay:"".concat(t.accessDelay?t.accessDelay:0),resolution:"".concat(a,"x").concat(n),fps:"".concat(o||0)})}))}),500);return function(){clearInterval(a)}}),[t]),Object(n.useEffect)((function(){return t.isPlaying()?t.stop():t.play(a,{fit:"cover"},(function(e){e&&"aborted"!==e.status&&(console.log("stream-player play failed ",a),p(!0))})),function(){t.isPlaying()?t.stop():t.play(a,{fit:"cover"},(function(e){e&&"aborted"!==e.status&&(console.log("stream-player play failed ",a),p(!0))}))}}),[t.isPlaying(),a]),o.a.createElement("div",{className:"stream-player ".concat(f?"autoplay":""),id:a,onClick:function(){f&&!l&&(t.resume(),s(!0))},onDoubleClick:function(a){a.stopPropagation(),e.onDoubleClick(t)}},e.children,e.showProfile?o.a.createElement("div",{className:e.className},o.a.createElement("span",null,"SD-RTN delay: ",y.accessDelay,"ms"),o.a.createElement("span",null,"Video: ",y.fps,"fps ",y.resolution)):null,e.showUid&&r?o.a.createElement("div",{className:"stream-uid"},"UID: ",r):null)}var ke=Object(A.a)({menu:{height:"150px",display:"flex",justifyContent:"center",alignItems:"center"},customBtn:{width:"50px",height:"50px",borderRadius:"26px",backgroundColor:"rgba(0, 0, 0, 0.4)",backgroundSize:"50px",cursor:"pointer"},leftAlign:{display:"flex",flex:"1",justifyContent:"space-evenly"},rightAlign:{display:"flex",flex:"1",justifyContent:"center"},menuContainer:{width:"100%",height:"100%",position:"absolute",display:"flex",flexDirection:"column",justifyContent:"flex-end",zIndex:"2"}}),_e=function(){var e=ke(),t=ne(),a=U(),r=$(),c=Object(n.useMemo)((function(){var e=new pe;return e._created||(e.createClient({codec:a.codec,mode:a.mode}),e._created=!0),e}),[a.codec,a.mode]),i=function(e){var t=U(),a=$(),o=[t.localStream,t.currentStream],r=o[0],c=o[1],i=Object(n.useMemo)((function(){return t.streams.filter((function(e){return e.getId()!==c.getId()}))}),[t,c]);return Object(n.useEffect)((function(){e&&!1===e._subscribed&&(e.on("connection-state-change",a.connectionStateChanged),e.on("localStream-added",a.addLocal),e.on("stream-published",a.addStream),e.on("stream-added",(function(t){var n=t.stream;e.subscribe(n,(function(e){a.toastError("stream ".concat(t.stream.getId()," subscribe failed: ").concat(e))}))})),e.on("stream-removed",a.removeStream),e.on("stream-subscribed",a.addStream),e.on("peer-leave",a.removeStreamById),e._subscribed=!0)}),[e,a]),[r,c,i]}(c),l=Object(u.a)(i,2),s=l[0],m=l[1],d=Object(n.useMemo)((function(){return{token:a.config.token,channel:a.config.channelName,microphoneId:a.config.microphoneId,cameraId:a.config.cameraId,resolution:a.config.resolution,muteVideo:a.muteVideo,muteAudio:a.muteAudio,uid:0,host:a.config.host}}),[a]),f=t.history;Object(n.useEffect)((function(){d.channel||f.push("/")}),[d.channel,f]),Object(n.useEffect)((function(){d.channel&&c._created&&!1===c._joined&&c.join(d).then((function(){d.host?c.setClientRole("host"):c.setClientRole("audience"),d.host&&c.publish(),r.stopLoading()})).catch((function(e){r.toastError("Media ".concat(e.info)),t.history.push("/")}))}),[c,r,d,t]);var p=function(e){return function(n){switch(n.stopPropagation(),e){case"video":a.muteVideo?s.muteVideo():s.unmuteVideo(),r.setVideo(!a.muteVideo);break;case"audio":a.muteAudio?s.muteAudio():s.unmuteAudio(),r.setAudio(!a.muteAudio);break;case"screen":a.screen?c.createRTCStream({token:null,channel:a.config.channelName,microphoneId:a.config.microphoneId,resolution:a.config.resolution,video:a.video,audio:a.audio}).then((function(){c.publish(),r.setScreen(!1)})).catch((function(e){console.log(e),r.toastError("Media ".concat(e.info)),t.history.push("/")})):c.createScreenSharingStream({token:null,channel:a.config.channelName,microphoneId:a.config.microphoneId,cameraId:a.config.cameraId,resolution:a.config.resolution}).then((function(){c.publish(),r.setScreen(!0)})).catch((function(e){console.log(e),r.toastError("Media ".concat(e.info)),t.history.push("/")}));break;case"profile":break;default:throw new Error("Unknown click handler, name: ".concat(e))}}},h=function(e){r.setCurrentStream(e)},v=Object(n.useMemo)((function(){return a.streams.filter((function(e){return e.getId()!==m.getId()}))}),[m,a]);return o.a.createElement("div",{className:"meeting"},o.a.createElement("div",{className:"current-view"},o.a.createElement("div",{className:"nav"},o.a.createElement("div",{className:"avatar-container"},o.a.createElement("div",{className:"default-avatar"}),o.a.createElement("div",{className:"avatar-text"},"Agora Test"),o.a.createElement("div",{className:"like"})),o.a.createElement("div",{className:"quit",onClick:function(){c.leave().then((function(){r.clearAllStream(),t.history.push("/")}))}})),m?o.a.createElement(Ie,{className:"main-stream-profile",showProfile:a.profile,local:!!d.host&&m.getId()===s.getId(),stream:m,onDoubleClick:h,uid:m.getId(),domId:"stream-player-".concat(m.getId())},o.a.createElement("div",{className:e.menuContainer},d.host&&o.a.createElement("div",{className:e.menu},o.a.createElement("i",{onClick:p("video"),className:Object(g.a)(e.customBtn,"margin-right-19",a.muteVideo?"mute-video":"unmute-video")}),o.a.createElement("i",{onClick:p("audio"),className:Object(g.a)(e.customBtn,a.muteAudio?"mute-audio":"unmute-audio")}))),o.a.createElement("div",{className:"stream-container"},v.map((function(e,t){return o.a.createElement(Ie,{className:"stream-profile",showProfile:a.profile,local:!!d.host&&e.getId()===s.getId(),key:t,stream:e,isPlaying:e.isPlaying(),uid:e.getId(),domId:"stream-player-".concat(e.getId()),onDoubleClick:h,showUid:!0})})))):null))};var Ne=function(){return o.a.createElement(ae,null,o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/meeting/:name",component:_e}),o.a.createElement(i.a,{path:"/",component:Ce})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var we=a(151),Pe=a(76),Ae=Object(Pe.a)({typography:{fontFamily:'-apple-system, BlinkMacSystemFont, \\"Segoe UI\\", \\"Roboto\\", \\"Oxygen\\", \\"Ubuntu\\", \\"Cantarell\\", \\"Fira Sans\\", \\"Droid Sans\\", \\"Helvetica Neue\\", sans-serif',fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500,color:"#333"},overrides:{MuiFormControl:{root:{margin:"0.3rem 0"}},MuiInput:{underline:{"&:before":{borderBottom:"1px solid #EAEAEA"},"&:hover:not($disabled):not($focused):not($error):before":{borderBottom:"2px solid #EAEAEA"},"&$focused":{"&:after":{borderBottom:"2px solid #44a2fc"}}}}}});c.a.render(o.a.createElement(we.a,{theme:Ae},o.a.createElement((function(e){var t=e.children,a=Object(n.useReducer)(p,f),r=Object(u.a)(a,2),c=r[0],i=r[1],s=Object(n.useState)([]),m=Object(u.a)(s,2),d=m[0],h=m[1],g={startLoading:function(){i({type:"loading",payload:!0})},stopLoading:function(){i({type:"loading",payload:!1})},updateConfig:function(e){i({type:"config",payload:z({},c.config,{},e)})},setClient:function(e){i({type:"client",payload:e})},setCodec:function(e){i({type:"codec",payload:e})},setVideo:function(e){i({type:"video",payload:e})},setAudio:function(e){i({type:"audio",payload:e})},setScreen:function(e){i({type:"screen",payload:e})},setProfile:function(e){i({type:"profile",payload:e})},toastSuccess:function(e){h([].concat(Object(l.a)(d),[{variant:"success",message:e}]))},toastInfo:function(e){h([].concat(Object(l.a)(d),[{variant:"info",message:e}]))},toastError:function(e){h([].concat(Object(l.a)(d),[{variant:"error",message:e}]))},removeTop:function(){var e=d.filter((function(e,t){return t>0}));h(Object(l.a)(e))},setLocalStream:function(e){i({type:"localStream",payload:e})},setCurrentStream:function(e){i({type:"currentStream",payload:e})},setDevicesList:function(e){i({type:"devicesList",payload:e})},clearAllStream:function(){i({type:"clearAllStream"})},addLocal:function(e){var t=e.stream;g.setLocalStream(t),g.setCurrentStream(t)},addStream:function(e){var t=e.stream;i({type:"addStream",payload:t})},removeStream:function(e){var t=e.stream;i({type:"removeStream",stream:t})},removeStreamById:function(e){var t=e.stream;i({type:"removeStream",uid:t})},connectionStateChanged:function(e){g.toastInfo("".concat(e.curState))}};return o.a.createElement(M.Provider,{value:c},o.a.createElement(H.Provider,{value:g},o.a.createElement(L,{toasts:d}),c.loading?o.a.createElement(F,null):null,t))}),null,o.a.createElement(Ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},89:function(e,t,a){e.exports=a(102)},94:function(e,t,a){},95:function(e,t,a){}},[[89,1,2]]]);
//# sourceMappingURL=main.d7010478.chunk.js.map