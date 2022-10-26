(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[245],{32218:function(t,e,n){var i={"./NoOp":56864,"./NoOp.tsx":56864};function r(t){return n(o(t))}function o(t){if(!n.o(i,t)){var e=Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id=32218},58208:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/notes/[id]",function(){return n(34479)}])},96411:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var i=n(85893);n(67294);var r=n(9008),o=n.n(r),s=n(25935);function a(t){var e=t.content,n=(0,s.ZP)(e);return(0,i.jsx)(o(),{children:n})}},70520:function(t,e,n){"use strict";n.d(e,{Z:function(){return z}});var i,r=n(47568),o=n(828),s=n(20414),a=n(85893),c=n(25903),u=n(4604),d=n(6348),l=n(6226),f=n(96486),$=n.n(f),m=n(67294),p=n(42336),x=n(41664),g=n.n(x),h=n(99490);function v(t){var e,n,i,r,o,s=t.note,c=t.noteIndex,u=(0,p.gt)({note:s,noteIndex:c});try{o=$().get(s,"custom.date",!1)?(e=s.custom.date,n=h.DateTime.DATE_SHORT,h.DateTime.fromISO(e).toLocaleString(n)):(i=s.created,r=h.DateTime.DATE_SHORT,h.DateTime.fromMillis(i).toLocaleString(r))}catch(d){throw Error("no date found for note ".concat(s.id))}return(0,a.jsx)("div",{children:(0,a.jsxs)("article",{itemScope:!0,itemType:"https://schema.org/CreativeWork",children:[(0,a.jsx)("h2",{itemProp:"headline",children:(0,a.jsx)(g(),{href:u,children:s.title})}),!$().isUndefined(o)&&(0,a.jsx)("p",{children:o}),$().has(s,"custom.excerpt")&&(0,a.jsx)("p",{itemProp:"description",children:s.custom.excerpt})]})})}var j=n(96411),Z=n(2962),_=n(1512),N=function(t){var e=t.sitePath,n=t.seoProps,i=t.siteConfig;return n.canonicalBaseUrl?[i.siteUrl,e].join(""):n.canonicalUrl?n.canonicalUrl:[i.canonicalBaseUrl?i.canonicalBaseUrl:(0,p.N0)(i),e].join("")},y=function(t){return c.Time.DateTime.fromMillis($().toInteger(t)).setZone("utc").toLocaleString("yyyy-LL-dd")};function L(t){var e=t.note,n=t.config,i=(0,_.vm)().router.asPath;if($().some(["403"],function(t){return i==="/notes/".concat(t,"/")}))return null;var r,o=c.PublishUtils.getSEOPropsFromConfig(n),s=c.PublishUtils.getSEOPropsFromNote(e),u=$().defaults(s,o),d=u.title,l=u.description,f=(null==u?void 0:u.image)?[u.image]:[],m=c.ConfigUtils.getPublishing(n),p=N({sitePath:i,seoProps:u,siteConfig:m}),x=u.twitter?{handle:u.twitter,site:u.twitter,cardType:"summary_large_image"}:void 0;return(0,a.jsx)(Z.PB,{title:d,description:l,canonical:p,noindex:u.noindex,twitter:x,openGraph:{title:d,description:l,url:p,images:f,type:"article",article:{publishedTime:y(u.created),modifiedTime:y(u.updated),tags:(r=e).tags?Array.isArray(r.tags)?r.tags:[r.tags]:[]}}})}var T=n(56052),U=n(41799),E=n(69396),S=n(99534),P=n(88351),C=P.Z.Link,b=function(t){t=(t=t.replace(/_/g,"-")).replace(/--/g,"-");var e=[];return t.split("-").forEach(function(t){e.push(t.substr(0,1).toUpperCase()+t.substr(1))}),e.join(" ")},B=function(t){var e,n=t.note,i=(0,S.Z)(t,["note"]);return(0,a.jsx)(P.Z,(0,E.Z)((0,U.Z)({style:{zIndex:1},className:"dendron-toc"},i),{children:Object.entries(null==n?void 0:n.anchors).map(function(t){var n=(0,o.Z)(t,2),i=n[0],r=n[1];return(0,a.jsx)(m.Fragment,{children:(null==r?void 0:r.type)==="header"?(0,a.jsx)(C,{href:"#".concat(i),title:null!==(e=null==r?void 0:r.text)&&void 0!==e?e:b(null==r?void 0:r.value)}):null},i)})}))},O=n(54856),w=n(85416),D=n(45875),F=n(4298),I=n.n(F),k=function(t){var e=(0,o.Z)(m.useState(!1),2),n=e[0],i=e[1],r=t.noteBody;return((0,m.useEffect)(function(){void 0===window.mermaid&&r.includes('class="mermaid"')&&i(!0)},[r]),n)?((0,u.createLogger)("MermaidScript").info({ctx:"loading mermaid"}),(0,a.jsx)(I(),{id:"initmermaid",src:"https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js",onLoad:function(){var t=window.mermaid;window._mermaid=t,t.initialize({startOnLoad:!1}),t.init()}})):(0,a.jsx)(a.Fragment,{})},A=n(37870),H=function(t){var e,n=t.note,i=t.config,r=c.ConfigUtils.getGiscusConfig(i),o=n.id;if(void 0===r||(null===(e=n.custom)||void 0===e?void 0:e.enableGiscus)===void 0)return null;var s,u,d=r.repo;if(u=(s=d).match("^[a-zA-Z0-9_-]*[/][a-zA-Z0-9_-]*$"),$().isNull(u))return null;var l=(0,E.Z)((0,U.Z)({},r),{repo:d,term:o});return(0,a.jsx)(A.Z,(0,U.Z)({},l))},G=D.b.HEADER;function z(t){var e,f=t.note,p=t.body,x=t.collectionChildren,g=t.noteIndex,h=t.customHeadContent,Z=t.config,N=(0,u.createLogger)("Note"),y=(0,_.vm)().getActiveNoteId,U=(0,o.Z)(m.useState(void 0),2),E=U[0],S=U[1],P=y();"root"===P&&(P=g.id),m.useEffect(function(){var t="custom"===c.ConfigUtils.getPublishing(Z).siteBanner?"BannerAlert.tsx":"NoOp";N.info({ctx:"loading banner",BannerFile:t}),i=n(32218)("./".concat(t)).default},[]);var C=(0,O.$s)();N.info({ctx:"enter",id:P}),m.useEffect(function(){var t;if(N.info({ctx:"updateNoteBody:enter",id:P}),$().isUndefined(P)){N.info({ctx:"updateNoteBody:exit",id:P,state:"id undefined"});return}if(P===f.id){C(w.w.Nw.setLoadingStatus(u.LoadingStatus.FULFILLED)),N.info({ctx:"updateNoteBody:exit",id:P,state:"id = note.id"});return}N.info({ctx:"updateNoteBody:fetch:pre",id:P}),fetch("/data/notes/".concat(P,".html")).then((t=(0,r.Z)(function(t){var e,n;return(0,s.__generator)(this,function(i){switch(i.label){case 0:return e={},N.info((e.ctx="updateNoteBody:fetch:post",e.id=P,e)),[4,t.text()];case 1:return S(n=i.sent()),C(w.w.Nw.setLoadingStatus(u.LoadingStatus.FULFILLED)),[2]}})}),function(e){return t.apply(this,arguments)}))},[P]);var b=P===f.id?p:E;if($().isUndefined(b))return(0,a.jsx)(T.Z,{});var D=(null===(e=f.custom)||void 0===e?void 0:e.has_collection)&&!$().isNull(x)?x.map(function(t){return(0,a.jsx)(v,{note:t,noteIndex:g},t.id)}):null;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(k,{noteBody:b}),(0,a.jsx)(L,{note:f,config:Z}),h&&(0,a.jsx)(j.Z,{content:h}),(0,a.jsx)(d.Z,{children:(0,a.jsx)(l.Z,{span:24,children:(0,a.jsxs)(d.Z,{gutter:20,children:[(0,a.jsxs)(l.Z,{xs:24,md:18,children:[i&&(0,a.jsx)(i,{}),(0,a.jsx)(u.DendronNote,{noteContent:b}),D,(0,a.jsx)(H,{note:f,config:Z})]}),(0,a.jsx)(l.Z,{xs:0,md:6,children:(0,a.jsx)(B,{note:f,offsetTop:G.HEIGHT})})]})})})]})}},56864:function(t,e,n){"use strict";function i(){return null}n.r(e),n.d(e,{default:function(){return i}})},34479:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return r}});var i=n(70520),r=!0;e.default=i.Z}},function(t){t.O(0,[935,6,774,888,179],function(){return t(t.s=58208)}),_N_E=t.O()}]);