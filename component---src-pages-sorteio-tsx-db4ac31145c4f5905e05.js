"use strict";(self.webpackChunkfaq=self.webpackChunkfaq||[]).push([[833],{72:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,n=!1,r=0;r<e.length;r++){var i=e[r];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,r)+"-"+e.slice(r),t=!1,n=a,a=!0,r++):a&&n&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,r-1)+"-"+e.slice(r-1),n=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,n=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},5532:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var n=a(2982),r=a(7294),i=a(5414),s=a(4165),c=a(5769),o=a(4207),d=a.p+"static/iphones-c93b6da365fe075a440a0b4491a25729.svg",l=a.p+"static/review-1-52b6456b1d6c5a2099525d4562c90135.svg",p=a.p+"static/review-2-fbaca57c02ffb1b55f6ebda83a219764.svg",u=a.p+"static/review-3-bb31299048ce4fce19818e307ada9fb4.svg",m=a.p+"static/review-4-3ceeac8c9cfa8040e7a35c6d01b9d0c9.svg",f=a.p+"static/review-5-6bbab252347942ac2db5c1b25ab68f07.svg",b=a(3851),g=function(e){var t=e.participants,i=e.group,g=e.showFriendOnClick,w=(0,r.useState)([]),h=w[0],v=w[1],y=(0,r.useState)([]),E=y[0],S=y[1];(0,r.useEffect)((function(){S(function(e){for(var t=(0,n.Z)(e),a=t.length-1;a>0;a--){var r=Math.floor(Math.random()*(a+1)),i=t[a];t[a]=t[r],t[r]=i}return t}(t.others.filter((function(e){return e.name.trim()!==t.current.friend.trim()})))),v(t.others.find((function(e){return e.name.trim()===t.current.friend.trim()})))}),[]);var N=(0,r.useState)(0),x=N[0],z=N[1],k=(0,r.useState)(1),C=k[0],L=k[1],I=(0,r.useRef)(null),_=(0,r.useRef)(0);(0,r.useEffect)((function(){var e=setInterval((function(){z(x+220*C),x>=660?L(-1):x<=0&&L(1)}),2e3);return function(){return clearInterval(e)}}),[x]);var T=function(e){var t=20*(e.clientX-_.current);z(x+t),_.current=e.clientX},O=function e(){document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",e)};return r.createElement(r.Fragment,null,r.createElement("section",{className:"banner"},r.createElement("div",{className:"hero"},r.createElement("div",{className:"valueProposition"},"Amigo secreto sem dobrar papelzinho"),r.createElement("img",{src:d,alt:"Imagem de Iphones",className:"iphones desktop"}),window.innerWidth<769&&r.createElement(b.S,{src:"https://raw.githubusercontent.com/papelzinho/assets/main/iphones.png",alt:"Imagem de Iphones",className:"iphones globalMobile",__imageData:a(3304)}))),r.createElement("div",{className:"page-container"},r.createElement("div",{className:"pageContent"},r.createElement("section",{className:"mb-4"},r.createElement("div",{className:"groupInfoContainer"},r.createElement("p",{className:"welcomeText"},"Olá ",t.current.name,","),r.createElement("div",{className:"groupNameAndMembersNumber"},r.createElement("div",{className:"groupTextName"},"Você está no ",r.createElement("span",{className:"groupName"},i.name)),r.createElement("span",{className:"group__participants"},t.others.length+1," participantes")),r.createElement("p",{className:"group__description"},i.comments),r.createElement("div",{className:"showFriendButtonContainer"},r.createElement("button",{className:"show-friend-btn",onClick:g},"Revelar meu amigo secreto")))),r.createElement("div",{className:"groupFriendAndYouRow",id:"giftList"},r.createElement(o.Qc,{participant:h,isSecretFriend:!0}),r.createElement(o.A3,{participant:t.current})),r.createElement(c.MS,{href:"https://meliuz.onelink.me/2657008059/lfxerda1",target:"_blank",onClick:function(){(0,s.R)("home-acesso-méliuz","clique","banner-méliuz")}},r.createElement("div",{className:"adSeparator"},r.createElement(b.S,{src:"https://raw.githubusercontent.com/papelzinho/assets/main/banner-meliuz.png",alt:"Banner da Méliuz",__imageData:a(1606)})),r.createElement("div",{className:"adSeparatorMobileContainer"},r.createElement(b.S,{src:"https://raw.githubusercontent.com/papelzinho/assets/main/banner-meliuz.png",alt:"Banner da Méliuz",className:"adSeparatorMobile",__imageData:a(1606)}))),r.createElement("div",{className:"separator"}),r.createElement("p",{className:"othersParticipantsChoicesTitle"},"As escolhas dos outros participantes"),r.createElement("div",{className:"row otherParticipants"},E.map((function(e,t){return r.createElement(o.Qc,{key:t,participant:e})})))),r.createElement("div",{className:"reviewsContainer"},r.createElement("div",{className:"reviewsTitle"},"Veja as avaliações dos usuários"),r.createElement("div",{className:"reviews-carousel-container",onMouseDown:function(e){_.current=e.clientX,document.addEventListener("mousemove",T),document.addEventListener("mouseup",O)},onTouchStart:function(e){_.current=e.touches[0].clientX},onTouchMove:function(e){var t=e.touches[0].clientX-_.current;z(x+t),_.current=e.touches[0].clientX}},r.createElement("div",{className:"reviews",style:{transform:"translateX("+x+"px)"},ref:I},r.createElement("img",{src:l,className:"reviewImg desktop",width:"384",height:"144"}),r.createElement("img",{src:p,className:"reviewImg desktop",width:"384",height:"145"}),r.createElement("img",{src:u,className:"reviewImg desktop",width:"384",height:"145"}),r.createElement("img",{src:m,className:"reviewImg desktop",width:"383",height:"152"}),r.createElement("img",{src:f,className:"reviewImg desktop",width:"383",height:"124"}),r.createElement("div",{className:"mobileReviews globalMobile"},r.createElement(b.S,{src:"https://raw.githubusercontent.com/papelzinho/assets/main/review-1.png",className:"reviewImg",width:383,__imageData:a(2777)}),r.createElement(b.S,{src:"https://raw.githubusercontent.com/papelzinho/assets/main/review-2.png",className:"reviewImg",width:420,__imageData:a(5083)}),r.createElement(b.S,{src:"https://raw.githubusercontent.com/papelzinho/assets/main/review-3.png",className:"reviewImg",width:383,__imageData:a(725)}),r.createElement(b.S,{src:"https://raw.githubusercontent.com/papelzinho/assets/main/review-4.png",className:"reviewImg",width:420,__imageData:a(9996)}),r.createElement(b.S,{src:"https://raw.githubusercontent.com/papelzinho/assets/main/review-5.png",className:"reviewImg",width:420,__imageData:a(1531)})))))))},w=function(){var e=(0,r.useState)({loading:!0}),t=e[0],a=e[1],n=(0,r.useState)(!1),c=n[0],d=n[1],l=(0,r.useState)(!1),p=l[0],u=l[1],m=function(){d(!1);var e=document.getElementById("giftList");e&&e.scrollIntoView({behavior:"smooth"})};return(0,r.useEffect)((function(){var e=new URLSearchParams(window.location.search),t=e.get("g"),n=e.get("p");fetch("https://lm4ipcuu6k.execute-api.us-west-2.amazonaws.com/prd/participant/"+t+"/"+n).then((function(e){return e.json()})).then((function(e){if("Group not found"!==e.message)if(""!==e.message){var n=e.participants.reduce((function(e,a){var n=e;return a.current?n.current=Object.assign({},a,{groupId:t}):n.others?n.others.push(a):n.others=[a],n}),{});a({loading:!1,participants:n,group:{name:e.name,comments:e.comments}}),d(!0)}else alert("Participante não encontrado. Entre em contato com o suporte através do meajuda@papelzinho.com.br ou pelo chat na nossa página do facebook.");else alert("Aparentemente o seu grupo de amigo secreto foi deletado pelo organizador no app. Caso esta mensagem esteja errada e seu grupo não tenha sido excluído, entre em contato com o suporte através do meajuda@papelzinho.com.br ou pelo chat na nossa página do facebook.")})).catch((function(){alert("Sistema fora do ar. Estamos trabalhando para corrigir o problema o mais rápido possível. Tente acessar novamente mais tarde.")}))}),[!1]),r.createElement(o.Ar,null,r.createElement(i.q,null,r.createElement("title",null,"Sorteio | Papelzinho ™")),t.loading?r.createElement(o.a_,null):r.createElement(g,{showFriendOnClick:function(){u(!0),d(!0)},group:t.group,participants:t.participants}),c&&r.createElement(o.GI,{message:'"'+t.participants.current.friend+'"',action2:function(){(0,s.R)("cancel-button","clique","Campanha Méliuz"),setTimeout((function(){m()}),10)},showSecretFriend:p,goToGiftList:function(){(0,s.R)("home-modal-revelação","clique","botão-lista-presentes"),setTimeout((function(){m()}),10)}}))}},3851:function(e,t,a){a.d(t,{L:function(){return f},M:function(){return E},P:function(){return y},S:function(){return A},_:function(){return c},a:function(){return s},b:function(){return d},g:function(){return l},h:function(){return o}});var n=a(7294),r=(a(72),a(5697)),i=a.n(r);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(a=i[n])>=0||(r[a]=e[a]);return r}var o=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function d(e,t,a,n,r){return void 0===r&&(r={}),s({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:s({},r,{opacity:t?1:0})})}function l(e,t,a,n,r,i,c,o){var d={};i&&(d.backgroundColor=i,"fixed"===a?(d.width=n,d.height=r,d.backgroundColor=i,d.position="relative"):("constrained"===a||"fullWidth"===a)&&(d.position="absolute",d.top=0,d.left=0,d.bottom=0,d.right=0)),c&&(d.objectFit=c),o&&(d.objectPosition=o);var l=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},d)});return l}var p,u=["children"],m=function(e){var t=e.layout,a=e.width,r=e.height;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){var t=e.children,a=c(e,u);return n.createElement(n.Fragment,null,n.createElement(m,s({},a)),t,null)},b=["src","srcSet","loading","alt","shouldLoad"],g=["fallback","sources","shouldLoad"],w=function(e){var t=e.src,a=e.srcSet,r=e.loading,i=e.alt,o=void 0===i?"":i,d=e.shouldLoad,l=c(e,b);return n.createElement("img",s({},l,{decoding:"async",loading:r,src:d?t:void 0,"data-src":d?void 0:t,srcSet:d?a:void 0,"data-srcset":d?void 0:a,alt:o}))},h=function(e){var t=e.fallback,a=e.sources,r=void 0===a?[]:a,i=e.shouldLoad,o=void 0===i||i,d=c(e,g),l=d.sizes||(null==t?void 0:t.sizes),p=n.createElement(w,s({},d,t,{sizes:l,shouldLoad:o}));return r.length?n.createElement("picture",null,r.map((function(e){var t=e.media,a=e.srcSet,r=e.type;return n.createElement("source",{key:t+"-"+r+"-"+a,type:r,media:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,sizes:l})})),p):p};w.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},h.displayName="Picture",h.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};var v=["fallback"],y=function(e){var t=e.fallback,a=c(e,v);return t?n.createElement(h,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",s({},a))};y.displayName="Placeholder",y.propTypes={fallback:r.string,sources:null==(p=h.propTypes)?void 0:p.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var E=function(e){return n.createElement(n.Fragment,null,n.createElement(h,s({},e)),n.createElement("noscript",null,n.createElement(h,s({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=h.propTypes;var S,N,x=function(e,t,a){for(var n=arguments.length,r=new Array(n>3?n-3:0),s=3;s<n;s++)r[s-3]=arguments[s];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(r)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},z={image:i().object.isRequired,alt:x},k=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],C=["style","className"],L=new Set,I=function(e){var t=e.as,r=void 0===t?"div":t,i=e.image,d=e.style,l=e.backgroundColor,p=e.className,u=e.class,m=e.onStartLoad,f=e.onLoad,b=e.onError,g=c(e,k),w=i.width,h=i.height,v=i.layout,y=function(e,t,a){var n={},r="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:n}}(w,h,v),E=y.style,x=y.className,z=c(y,C),I=(0,n.useRef)(),_=(0,n.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);u&&(p=u);var T=function(e,t,a){var n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(v,w,h);return(0,n.useEffect)((function(){S||(S=Promise.all([a.e(774),a.e(29)]).then(a.bind(a,1029)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return N=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,n=I.current.querySelector("[data-gatsby-image-ssr]");return n&&o()?(n.complete?(null==m||m({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==m||m({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((function(){n.removeAttribute("data-gatsby-image-ssr")}),0)})),void L.add(_)):N&&L.has(_)?void 0:(S.then((function(a){var n=a.renderImageToString,r=a.swapPlaceholderImage;I.current.innerHTML=n(s({isLoading:!0,isLoaded:L.has(_),image:i},g)),L.has(_)||(e=requestAnimationFrame((function(){I.current&&(t=r(I.current,_,L,d,m,f,b))})))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,n.useLayoutEffect)((function(){L.has(_)&&N&&(I.current.innerHTML=N(s({isLoading:L.has(_),isLoaded:L.has(_),image:i},g)),null==m||m({wasCached:!0}),null==f||f({wasCached:!0}))}),[i]),(0,n.createElement)(r,s({},z,{style:s({},E,d,{backgroundColor:l}),className:x+(p?" "+p:""),ref:I,dangerouslySetInnerHTML:{__html:T},suppressHydrationWarning:!0}))},_=(0,n.memo)((function(e){return e.image?(0,n.createElement)(I,e):null}));_.propTypes=z,_.displayName="GatsbyImage";var T,O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],M=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),r=2;r<a;r++)n[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},R=new Set(["fixed","fullWidth","constrained"]),q={src:i().string.isRequired,alt:x,width:M,height:M,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!R.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},A=(T=_,function(e){var t=e.src,a=e.__imageData,r=e.__error,i=c(e,O);return r&&console.warn(r),a?n.createElement(T,s({image:a},i)):(console.warn("Image not loaded",t),null)});A.displayName="StaticImage",A.propTypes=q},1531:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/15b7764d2e0c3e5d350787b4499a4ead/b7442/review-5.png","srcSet":"/static/15b7764d2e0c3e5d350787b4499a4ead/27529/review-5.png 105w,\\n/static/15b7764d2e0c3e5d350787b4499a4ead/11d93/review-5.png 210w,\\n/static/15b7764d2e0c3e5d350787b4499a4ead/b7442/review-5.png 420w","sizes":"(min-width: 420px) 420px, 100vw"},"sources":[{"srcSet":"/static/15b7764d2e0c3e5d350787b4499a4ead/e24dd/review-5.webp 105w,\\n/static/15b7764d2e0c3e5d350787b4499a4ead/ffbf3/review-5.webp 210w,\\n/static/15b7764d2e0c3e5d350787b4499a4ead/d1246/review-5.webp 420w","type":"image/webp","sizes":"(min-width: 420px) 420px, 100vw"}]},"width":420,"height":166}')},725:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/d726fb926c1e7a5d4d6f45ec12efd6ed/03cfb/review-3.png","srcSet":"/static/d726fb926c1e7a5d4d6f45ec12efd6ed/72d22/review-3.png 96w,\\n/static/d726fb926c1e7a5d4d6f45ec12efd6ed/ae916/review-3.png 192w,\\n/static/d726fb926c1e7a5d4d6f45ec12efd6ed/03cfb/review-3.png 383w,\\n/static/d726fb926c1e7a5d4d6f45ec12efd6ed/8ce5e/review-3.png 766w","sizes":"(min-width: 383px) 383px, 100vw"},"sources":[{"srcSet":"/static/d726fb926c1e7a5d4d6f45ec12efd6ed/c2e8b/review-3.webp 96w,\\n/static/d726fb926c1e7a5d4d6f45ec12efd6ed/bbaca/review-3.webp 192w,\\n/static/d726fb926c1e7a5d4d6f45ec12efd6ed/5acf3/review-3.webp 383w,\\n/static/d726fb926c1e7a5d4d6f45ec12efd6ed/cdb24/review-3.webp 766w","type":"image/webp","sizes":"(min-width: 383px) 383px, 100vw"}]},"width":383,"height":144}')},9996:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/f885db88f105683bbd55e348f745d5f2/43fdb/review-4.png","srcSet":"/static/f885db88f105683bbd55e348f745d5f2/5250d/review-4.png 105w,\\n/static/f885db88f105683bbd55e348f745d5f2/07032/review-4.png 210w,\\n/static/f885db88f105683bbd55e348f745d5f2/43fdb/review-4.png 420w","sizes":"(min-width: 420px) 420px, 100vw"},"sources":[{"srcSet":"/static/f885db88f105683bbd55e348f745d5f2/ba2e3/review-4.webp 105w,\\n/static/f885db88f105683bbd55e348f745d5f2/2faa6/review-4.webp 210w,\\n/static/f885db88f105683bbd55e348f745d5f2/6cba0/review-4.webp 420w","type":"image/webp","sizes":"(min-width: 420px) 420px, 100vw"}]},"width":420,"height":137}')},1606:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8e8f8","images":{"fallback":{"src":"/static/8ed3ac023a7be60c1a77b11a377f756c/1ba25/banner-meliuz.png","srcSet":"/static/8ed3ac023a7be60c1a77b11a377f756c/3af75/banner-meliuz.png 288w,\\n/static/8ed3ac023a7be60c1a77b11a377f756c/47abc/banner-meliuz.png 576w,\\n/static/8ed3ac023a7be60c1a77b11a377f756c/1ba25/banner-meliuz.png 1152w","sizes":"(min-width: 1152px) 1152px, 100vw"},"sources":[{"srcSet":"/static/8ed3ac023a7be60c1a77b11a377f756c/15a32/banner-meliuz.webp 288w,\\n/static/8ed3ac023a7be60c1a77b11a377f756c/aa90c/banner-meliuz.webp 576w,\\n/static/8ed3ac023a7be60c1a77b11a377f756c/86e10/banner-meliuz.webp 1152w","type":"image/webp","sizes":"(min-width: 1152px) 1152px, 100vw"}]},"width":1152,"height":280}')},5083:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/b16c1ae9d5816973319598b2b166f126/43fdb/review-2.png","srcSet":"/static/b16c1ae9d5816973319598b2b166f126/5250d/review-2.png 105w,\\n/static/b16c1ae9d5816973319598b2b166f126/07032/review-2.png 210w,\\n/static/b16c1ae9d5816973319598b2b166f126/43fdb/review-2.png 420w","sizes":"(min-width: 420px) 420px, 100vw"},"sources":[{"srcSet":"/static/b16c1ae9d5816973319598b2b166f126/ba2e3/review-2.webp 105w,\\n/static/b16c1ae9d5816973319598b2b166f126/2faa6/review-2.webp 210w,\\n/static/b16c1ae9d5816973319598b2b166f126/6cba0/review-2.webp 420w","type":"image/webp","sizes":"(min-width: 420px) 420px, 100vw"}]},"width":420,"height":137}')},2777:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/5eb3655e71f454d8331a27f361d89d89/03cfb/review-1.png","srcSet":"/static/5eb3655e71f454d8331a27f361d89d89/72d22/review-1.png 96w,\\n/static/5eb3655e71f454d8331a27f361d89d89/ae916/review-1.png 192w,\\n/static/5eb3655e71f454d8331a27f361d89d89/03cfb/review-1.png 383w","sizes":"(min-width: 383px) 383px, 100vw"},"sources":[{"srcSet":"/static/5eb3655e71f454d8331a27f361d89d89/c2e8b/review-1.webp 96w,\\n/static/5eb3655e71f454d8331a27f361d89d89/bbaca/review-1.webp 192w,\\n/static/5eb3655e71f454d8331a27f361d89d89/5acf3/review-1.webp 383w","type":"image/webp","sizes":"(min-width: 383px) 383px, 100vw"}]},"width":383,"height":144}')},3304:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/80777d714583e5de44b5ff2a5b8bf0ea/a01b8/iphones.png","srcSet":"/static/80777d714583e5de44b5ff2a5b8bf0ea/c02da/iphones.png 108w,\\n/static/80777d714583e5de44b5ff2a5b8bf0ea/e3b92/iphones.png 215w,\\n/static/80777d714583e5de44b5ff2a5b8bf0ea/a01b8/iphones.png 430w","sizes":"(min-width: 430px) 430px, 100vw"},"sources":[{"srcSet":"/static/80777d714583e5de44b5ff2a5b8bf0ea/49ac4/iphones.webp 108w,\\n/static/80777d714583e5de44b5ff2a5b8bf0ea/ecfa0/iphones.webp 215w,\\n/static/80777d714583e5de44b5ff2a5b8bf0ea/b8c18/iphones.webp 430w","type":"image/webp","sizes":"(min-width: 430px) 430px, 100vw"}]},"width":430,"height":562}')}}]);
//# sourceMappingURL=component---src-pages-sorteio-tsx-db4ac31145c4f5905e05.js.map