(()=>{"use strict";var e,r,t,n,i,a={7291:(e,r,t)=>{var n=t(5893),i=t(7294),a=(t(6505),t(743)),o=t(4268),s=t(848),c=t(5673),l=(0,s.LC)({reducerPath:"PostAPI",baseQuery:(0,c.ni)({baseUrl:"https://my-json-server.typicode.com/YaroslavlProhodimec/test-json/posts"}),endpoints:function(e){return{fetchAllPosts:e.query({query:function(e){return"?limit=5&skip=".concat(e)}}),fetchPostById:e.query({query:function(e){return"/".concat(e)}})}}}),u=l.useFetchAllPostsQuery,d=l.useFetchPostByIdQuery,f=t(4184),m=t.n(f);var h=function(e){var r=e.className;return(0,n.jsx)("svg",{className:r,xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",width:"40",height:"40",version:"1.0",children:(0,n.jsxs)("g",{children:[(0,n.jsx)("path",{fill:"transparent",stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"4",d:"M2 20c0 9.941 8.059 18 18 18s18-8.059 18-18S29.941 2 20 2c-2.325 0-4.546.44-6.586 1.243"}),(0,n.jsx)("animateTransform",{attributeName:"transform",dur:"1800ms",from:"0 20 20",repeatCount:"indefinite",to:"360 20 20",type:"rotate"})]})})};function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var v,j,y,g=function(e){var r,t,i=e.id,a=e.component,o=d(i.toString()),s=o.isLoading,c=o.error,l=o.data||{title:"Loading..",description:""},u=l.description.length>79?l.description.substring(0,79)+"...":l.description;return(0,n.jsxs)("article",{className:m()((r={},p(r,"ui__mycard--QOfRF",!0),p(r,"ui__loading--A6uD0",s),p(r,"error",Boolean(c)),r)),children:[(0,n.jsx)("h3",{className:"ui__title--fBwig",children:l.title}),(0,n.jsxs)("span",{className:"ui__number--FEZd6",children:[i,"."]}),(0,n.jsx)("p",{className:"ui__descr--NeWi_",children:u}),a&&(0,n.jsx)("div",{className:m()((t={},p(t,"ui__btn--WQMg5",!0),p(t,"disabled",s),t)),children:a(i)}),s&&(0,n.jsx)(h,{className:"ui__preloader--SA_6q"})]})},b=(0,o.xC)({reducer:(v={},j=l.reducerPath,y=l.reducer,j in v?Object.defineProperty(v,j,{value:y,enumerable:!0,configurable:!0,writable:!0}):v[j]=y,v),middleware:function(e){return e().concat(l.middleware)},devTools:!0}),x=t(9250),_=function(){return(0,n.jsx)("header",{className:"display-3",children:"Медицинский Центр - Оазис Гармонии ."})};var N=t(9142),w=t(173),O=function(e){var r=e.totalItems,t=e.itemHeight,i=e.listHeight,a=e.listWidth,o=e.renderComponent,s=function(e,r){var t=new Array(e).fill(!0).map((function(){return r}));return{getItemSize:function(e){return t[e]}}}(r,t).getItemSize;return(0,n.jsx)(N.ZP,{style:{display:"contents"},children:function(){return(0,n.jsx)(w.S_,{className:"ui__virt--EfQPy",height:i,itemCount:r,itemSize:s,width:a||"100%",children:(e=o,function(r){var t=r.index,i=r.style;return(0,n.jsx)("div",{style:i,children:e(t)})})});var e}})},S=t(9655),A=function(e){var r=e.children,t=e.className,i=e.href,a=e.type,o=e.onClickHandler;return i?(0,n.jsx)(S.rU,{to:i,className:t,children:r}):(0,n.jsx)("button",{type:a||"button",className:t,onClick:o,children:r})},C=function(e){return(0,n.jsx)(A,{className:"btn btn-outline-danger",href:"/service/".concat(e.productId),children:"Просмотр"})},P=function(){document.title="Harmony Oasis Center Clinic - Медицинский Центр Оазис Гармонии";var e=u("0").data;return(0,n.jsx)("section",{className:"ui__expand--KzV4U",children:e&&(0,n.jsx)(O,{totalItems:17,listHeight:700,itemHeight:230,renderComponent:function(e){var r=e+1;return(0,n.jsx)(g,{id:r,component:function(){return(0,n.jsx)(C,{productId:r})}})}})})},k=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("main",{className:"container py-4",children:[(0,n.jsx)(_,{}),(0,n.jsx)(P,{})]})})};var E=t(4960),I=t(6823),T=t(1052),L=t(9844),H=[{value:"#b6a179"},{value:"#272425"},{value:"#6389cb"},{value:"#f2c758"},{value:"#ffffff"}];function M(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var U=function(e){var r=e.post;document.title="Harmony Oasis Center Clinic - Медицинский Центр Оазис Гармонии";var t,a,o=(t=(0,i.useState)(!0),a=2,function(e){if(Array.isArray(e))return e}(t)||function(e,r){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,i,a=[],o=!0,s=!1;try{for(t=t.call(e);!(o=(n=t.next()).done)&&(a.push(n.value),!r||a.length!==r);o=!0);}catch(e){s=!0,i=e}finally{try{o||null==t.return||t.return()}finally{if(s)throw i}}return a}}(t,a)||function(e,r){if(e){if("string"==typeof e)return M(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?M(e,r):void 0}}(t,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=o[0],c=o[1],l=(0,E.c)(0),u=(0,E.c)(0),d=(0,I.H)(u,[-100,100],[30,-30]),f=(0,I.H)(l,[-100,100],[-30,30]);return(0,n.jsx)("div",{className:"ui__cardContainer--WxROd",children:(0,n.jsxs)(T.E.div,{style:{x:l,y:u,rotateX:d,rotateY:f,z:100},drag:!0,dragElastic:.18,dragConstraints:{top:0,left:0,right:0,bottom:0},whileTap:{cursor:"grabbing"},className:"ui__card--VdWik",children:[(0,n.jsxs)(T.E.div,{variants:("right",.4,{hidden:{y:0,opacity:0,x:-80},show:{y:0,x:0,opacity:1,transition:{type:"tween",duration:1.2,delay:.4,ease:[.25,.25,.25,.75]}}}),initial:"hidden",whileInView:"show",viewport:{once:!1,amount:.7},className:"ui__containerSpan--MMxJw",children:[(0,n.jsx)("span",{className:"ui__span--kXK1H",children:"Пошевели 😀 "}),(0,n.jsx)(L.e,{style:{color:"#ff0000"},sequence:["меня",2e3,"",2e3],speed:50})]}),(0,n.jsx)("h1",{className:"ui__cardTitle--XVvQH",children:r.title}),(0,n.jsx)("p",{className:"ui__cardSubtitle--jbZsr",children:r.description}),(0,n.jsxs)("div",{className:"ui__priceWrapper--Ntk4F",children:[(0,n.jsxs)(S.rU,{to:"/",children:[" ",(0,n.jsx)(A,{className:"btn btn-outline-danger m-lg-1 ",children:"To back"})]}),(0,n.jsx)("div",{className:"ui__price--VlfiO",children:r.price})]}),(0,n.jsx)("ul",{className:"ui__colors--R4a3G",children:H.map((function(e,r){return(0,n.jsx)("div",{style:{backgroundColor:e.value},className:"ui__color--NMU8k"},r)}))}),(0,n.jsx)(T.E.div,{style:{x:l,y:u,rotateX:d,rotateY:f,z:1e5},className:"ui__cardImage--3xKnT",children:s?(0,n.jsx)("img",{width:300,className:"ui__img--JvS2b",src:"https://github.com/YaroslavlProhodimec/medical-center-oazis/raw/main/src/shared/assets/img/scare.png",draggable:"false",alt:"",onLoad:function(){return c(!0)},onError:function(){return c(!1)}}):(0,n.jsx)(h,{})})]})})},B=function(){var e=(0,x.UO)().serviceId,r=d(e?e.toString():""),t=r.isLoading,i=r.data;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("main",{className:"ui__centeredContainer--dEjtj",children:[t?(0,n.jsx)("h2",{children:(0,n.jsx)(h,{})}):"",i&&(0,n.jsx)(U,{post:i})]})})},F=function(){return(0,n.jsxs)(x.Z5,{children:[(0,n.jsx)(x.AW,{path:"/",element:(0,n.jsx)(k,{})}),(0,n.jsx)(x.AW,{path:"/service/:serviceId",element:(0,n.jsx)(B,{})})]})},W=function(){return(0,n.jsx)(a.zt,{store:b,children:(0,n.jsx)(F,{})})},z=t(745),q=t(405),D=(0,n.jsx)(i.StrictMode,{children:(0,n.jsx)(q.B6,{children:(0,n.jsx)(S.UT,{children:(0,n.jsx)(W,{})})})}),Q=document.getElementById("root");(0,z.s)(Q).render(D)}},o={};function s(e){var r=o[e];if(void 0!==r)return r.exports;var t=o[e]={exports:{}};return a[e](t,t.exports,s),t.exports}s.m=a,e=[],s.O=(r,t,n,i)=>{if(!t){var a=1/0;for(u=0;u<e.length;u++){for(var[t,n,i]=e[u],o=!0,c=0;c<t.length;c++)(!1&i||a>=i)&&Object.keys(s.O).every((e=>s.O[e](t[c])))?t.splice(c--,1):(o=!1,i<a&&(a=i));if(o){e.splice(u--,1);var l=n();void 0!==l&&(r=l)}}return r}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[t,n,i]},s.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return s.d(r,{a:r}),r},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var i=Object.create(null);s.r(i);var a={};r=r||[null,t({}),t([]),t(t)];for(var o=2&n&&e;"object"==typeof o&&!~r.indexOf(o);o=t(o))Object.getOwnPropertyNames(o).forEach((r=>a[r]=()=>e[r]));return a.default=()=>e,s.d(i,a),i},s.d=(e,r)=>{for(var t in r)s.o(r,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((r,t)=>(s.f[t](e,r),r)),[])),s.u=e=>e+".c7d4ff33f01d1d54d0c9.js",s.miniCssF=e=>{},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n={},i="rtk:",s.l=(e,r,t,a)=>{if(n[e])n[e].push(r);else{var o,c;if(void 0!==t)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==i+t){o=d;break}}o||(c=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",i+t),o.src=e),n[e]=[r];var f=(r,t)=>{o.onerror=o.onload=null,clearTimeout(m);var i=n[e];if(delete n[e],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((e=>e(t))),r)return r(t)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),c&&document.head.appendChild(o)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="/",(()=>{var e={179:0};s.f.j=(r,t)=>{var n=s.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var i=new Promise(((t,i)=>n=e[r]=[t,i]));t.push(n[2]=i);var a=s.p+s.u(r),o=new Error;s.l(a,(t=>{if(s.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;o.message="Loading chunk "+r+" failed.\n("+i+": "+a+")",o.name="ChunkLoadError",o.type=i,o.request=a,n[1](o)}}),"chunk-"+r,r)}},s.O.j=r=>0===e[r];var r=(r,t)=>{var n,i,[a,o,c]=t,l=0;if(a.some((r=>0!==e[r]))){for(n in o)s.o(o,n)&&(s.m[n]=o[n]);if(c)var u=c(s)}for(r&&r(t);l<a.length;l++)i=a[l],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(u)},t=self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var c=s.O(void 0,[216],(()=>s(7291)));c=s.O(c)})();