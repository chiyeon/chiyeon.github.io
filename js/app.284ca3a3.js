(function(t){function e(e){for(var n,o,c=e[0],r=e[1],l=e[2],u=0,d=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);m&&m(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,c=1;c<i.length;c++){var r=i[c];0!==a[r]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},a={app:0},s=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var m=r;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"0769":function(t,e,i){"use strict";i("61bf")},"1a3c":function(t,e,i){"use strict";i("50cc")},"2b00":function(t,e,i){t.exports=i.p+"media/cat.75a90ee8.mp4"},"50cc":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[t._m(0),i("div",{attrs:{id:"static-elements"}},[t._m(1),i("div",{attrs:{id:"nav"}},[i("p",{staticClass:"nav-element selected",attrs:{id:"home-nav"},on:{click:function(e){return t.ScrollToPage("home")}}},[t._v("home")]),i("p",{staticClass:"nav-element",attrs:{id:"about-nav"},on:{click:function(e){return t.ScrollToPage("about")}}},[t._v("about")]),i("p",{staticClass:"nav-element",attrs:{id:"games-nav"},on:{click:function(e){return t.ScrollToPage("games")}}},[t._v("games")]),i("p",{staticClass:"nav-element",attrs:{id:"apps-nav"},on:{click:function(e){return t.ScrollToPage("apps")}}},[t._v("apps")]),i("p",{staticClass:"nav-element",attrs:{id:"videos-nav"},on:{click:function(e){return t.ScrollToPage("videos")}}},[t._v("videos")])])]),i("Home"),i("About"),i("GamesShowcase",{ref:"games",attrs:{title:"Games",height:"862px",id:"games",items:t.games}}),i("AppsShowcase",{ref:"apps",attrs:{title:"Apps",height:"862px",id:"apps",items:t.apps}}),i("VideosShowcase",{ref:"videos",attrs:{title:"Videos",height:"1136px",id:"videos",items:t.videos}})],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("video",{staticStyle:{width:"100%"},attrs:{controls:""}},[n("source",{attrs:{src:i("2b00"),type:"video/mp4"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"title"}},[i("h2",[t._v("benji")]),i("h2",{attrs:{id:"colored-title"}},[t._v("benji")])])}],o=(i("159b"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page",attrs:{id:"home"}},[i("div",{staticClass:"container"},[i("h1",[t._v("Hello. I'm "),i("b",[t._v("Benjamin")]),t._v(".")]),i("p",[t._v("Nice to meet you.")])])])}],r={name:"About",props:{}},l=r,m=(i("ba12"),i("2877")),u=Object(m["a"])(l,o,c,!1,null,"1717d1dd",null),d=u.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page",attrs:{id:"about"}},[i("div",{staticClass:"container"},[i("h1",[t._v("About Me")]),t._m(0),t._m(1),t._m(2),i("br"),i("br"),i("p",[t._v(" I'm a student who likes "),i("b",[t._v("making things")]),t._v(". "),i("br"),i("br"),t._v(" I have "),i("b",[t._v("experience")]),t._v(" in: "),i("br"),i("br"),i("Expandable",{attrs:{title:"Game Development",rate:100,color:"#f4a9a8",items:["Godot","Unity"]}}),i("Expandable",{attrs:{title:"Web Design",rate:100,color:"#94d0cc",items:["HTML/CSS/JS","VueJS"]}}),i("Expandable",{attrs:{title:"Misc Programming",rate:100,color:"#7b6079",items:["NodeJS","Lua","Python"]}}),i("Expandable",{attrs:{title:"Video Production",rate:100,color:"#798777",items:["After Effects","Premiere"]}}),i("br"),t._v(" Check out the "),i("b",[t._v("things")]),t._v(" I've made "),i("b",[t._v("below.")]),i("br"),i("br"),t._v(" Feel free to reach out! "),i("br"),i("a",{attrs:{href:"mailto:benjaminvyong@gmail.com"}},[t._v("benjaminvyong@gmail.com")])],1)])])},g=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{attrs:{href:"https://www.youtube.com/channel/UCBVL47vTpeikCpBKAq6uPNg",target:"_blank"}},[i("img",{staticClass:"link-icon",attrs:{src:"https://i.imgur.com/TbSK055.png",alt:"youtube"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{attrs:{href:"https://github.com/chiyeon",target:"_blank"}},[i("img",{staticClass:"link-icon",attrs:{src:"https://i.imgur.com/KxrDlSb.png",alt:"github"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{attrs:{href:"https://chiyeon.itch.io/",target:"_blank"}},[i("img",{staticClass:"link-icon",attrs:{src:"https://i.imgur.com/DRcnLaA.png",alt:"itch.io"}})])}],h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"expandable"},[i("p",{staticClass:"expandable-category-title"},[t._v(t._s(t.title))]),i("div",{staticClass:"expandable-items-container"},[i("svg",{staticClass:"arrow",attrs:{id:t.title+"-arrow",xmlns:"http://www.w3.org/2000/svg",width:"13",height:"20",viewBox:"0 0 24 16"},on:{click:t.ToggleItems}},[i("path",{attrs:{d:"M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"}})]),i("transition-group",{staticClass:"expanded-container",attrs:{name:"item",tag:"p"}},t._l(t.items_instance,(function(e){return i("p",{key:e,staticClass:"expanded-item"},[t._v(t._s(e))])})),0)],1)])},f=[],v=(i("a9e3"),i("cb29"),{name:"Expandable",props:{title:String,items:Array,rate:Number,color:String},data:function(){return{items_instance:[],expanded:!1,isMoving:!1,isMobile:!1}},mounted:function(){window.innerWidth<=750&&!this.isMobile?(this.isMobile=!0,this.ExpandItems(0,null),document.getElementsByClassName("arrow").forEach((function(t){t.style.pointerEvents="none"}))):window.innerWidth>750&&this.isMobile&&(this.isMobile=!1,document.getElementsByClassName("arrow").forEach((function(t){t.style.pointerEvents=""})))},created:function(){var t=this;this.$nextTick((function(){document.getElementById("".concat(t.title,"-arrow")).style.fill=t.color}))},methods:{ToggleItems:function(t){if(!this.isMoving){var e=this.rate,i=t.target;"path"==i.localName&&(i=t.target.parentNode),this.isMoving=!0,this.expanded?this.ContractItems(e,i):this.ExpandItems(e,i)}},ExpandItems:function(t,e){var i=this;if(!this.expanded){null!=e&&e.classList.add("flipped-symbol");var n=0;this.items_instance=[];var a=setInterval((function(){i.items_instance.push(i.items[n]),n==i.items.length-1?(clearInterval(a),i.expanded=!0,i.isMoving=!1):i.items_instance[n]+=",",n++}),t)}},ContractItems:function(t,e){var i=this;if(this.expanded){e.classList.remove("flipped-symbol");var n=this.items_instance.length,a=setInterval((function(){i.items_instance.pop(),1==n&&(clearInterval(a),i.items_instance=[],i.expanded=!1,i.isMoving=!1),n--}),t)}}}}),w=v,b=(i("f4d3"),Object(m["a"])(w,h,f,!1,null,"bccbeb6a",null)),k=b.exports,y={name:"About",components:{Expandable:k},props:{}},_=y,S=(i("0769"),Object(m["a"])(_,p,g,!1,null,"7548447d",null)),E=S.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"showcase-page page",style:{height:t.height},attrs:{id:t.id}},[i("div",{staticClass:"showcase-container"},[i("h1",{staticClass:"hidden",attrs:{id:t.id+"-title"}},[t._v(t._s(t.title))]),i("transition-group",{staticClass:"items-container",attrs:{name:"showcaseitem",id:t.id+"-items-container"}},t._l(t.items_instance,(function(e){return i("ShowcaseItem",{key:e.name,attrs:{item:e,id:e.name,imageSrc:e.image},nativeOn:{click:function(i){return t.SelectItem(e)}}})})),1)],1)])},j=[],C=(i("b0c0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item"},[i("img",{attrs:{src:t.imageSrc,alt:t.item.image}}),i("div",{staticClass:"label"},[i("h3",[t._v(t._s(t.item.name))]),i("p",{staticClass:"tagline"},[t._v(t._s(t.item.tagline))])]),i("div",{staticClass:"awards hidden",attrs:{id:t.item.name+"-awards"}},t._l(t.item.awards,(function(e){return i("div",{key:e.name,staticClass:"award"},[i("svg",{staticClass:"award-icon",style:{fill:e.color},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"17",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"#ffffff","stroke-width":"1.75","stroke-linecap":"round","stroke-linejoin":"round"}},[i("polygon",{attrs:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}})]),i("p",[t._v(t._s(e.award))])])})),0),i("div",{staticClass:"links hidden",attrs:{id:t.item.name+"-links"}},t._l(t.item.links,(function(t){return i("div",{key:t.link,staticClass:"link"},[i("a",{attrs:{href:t.link,target:"_blank"}},[i("img",{attrs:{src:t.icon}})])])})),0)])}),I=[],A={name:"Showcase-Item",props:{item:Object,imageSrc:String},data:function(){return{hover:!1}}},B=A,L=(i("e431"),Object(m["a"])(B,C,I,!1,null,"aa53fa0c",null)),T=L.exports,M={name:"Showcase",props:{title:String,id:String,items:Array,height:String},components:{ShowcaseItem:T},data:function(){return{items_instance:[],expanded:!1,selectedItem:null}},methods:{GetHeight:function(){return 142*this.items.length},ShowItems:function(t){var e=this;if(!this.expanded){document.getElementById("".concat(this.id,"-title")).classList.remove("hidden");var i=0,n=setInterval((function(){e.items_instance.push(e.items[i]),i>=e.items.length-1&&(clearInterval(n),e.expanded=!0),i++}),t)}},SelectItem:function(t){document.getElementsByClassName("selected-showcase-item").forEach((function(t){t.classList.remove("selected-showcase-item")})),document.getElementsByClassName("awards").forEach((function(t){t.classList.add("hidden")})),document.getElementsByClassName("links").forEach((function(t){t.classList.add("hidden")})),document.getElementById(t.name).classList.add("selected-showcase-item"),0!=document.getElementById("".concat(t.name,"-awards")).childElementCount&&document.getElementById("".concat(t.name,"-awards")).classList.remove("hidden"),document.getElementById("".concat(t.name,"-links")).classList.remove("hidden"),document.getElementsByClassName("showcase-page").forEach((function(t){t.style.paddingBottom=""}));var e=130,i=393;document.getElementById(this.id).style.paddingBottom="".concat(i-e,"px")}}},O=M,D=(i("1a3c"),Object(m["a"])(O,x,j,!1,null,"757f6af7",null)),P=D.exports,K={name:"App",data:function(){return{pages:["home","about","games","apps","videos"],isMobileVersion:!1,games:[{name:"raft",tagline:"an infinite runner",image:"https://i.imgur.com/23PrRJk.png",links:[{link:"https://chiyeon.itch.io/raft",icon:"https://i.imgur.com/DRcnLaA.png"}],awards:[{award:"Entry to 12th Alakajam !",color:"blue"}]},{name:"Hook, Line, Key",tagline:"a fishing sim",image:"https://i.imgur.com/lWpwYkJ.gif",links:[{link:"https://chiyeon.itch.io/hook-line-key",icon:"https://i.imgur.com/DRcnLaA.png"},{link:"https://ldjam.com/events/ludum-dare/48/hook-line-key",icon:"https://i.imgur.com/jPCS59Y.png"}],awards:[{award:"11th in Mood: Ludum Dare 48",color:"peru"}]},{name:"ANIMA",tagline:"a walking-sim adventure",image:"https://i.imgur.com/emwkcm1.jpg",links:[{link:"https://chiyeon.itch.io/anima",icon:"https://i.imgur.com/DRcnLaA.png"}],awards:[{award:"1st Overall, Audio, Art: MajorJam 2020",color:"gold"}]},{name:"drink",tagline:"a story about acceptance",image:"https://i.imgur.com/kGOes6R.jpg",links:[{link:"https://chiyeon.itch.io/drink",icon:"https://i.imgur.com/DRcnLaA.png"}],awards:[{award:"1st in Art: Geta Game Jam 8",color:"gold"}]},{name:"Winding String",tagline:"a swinging platformer",image:"https://i.imgur.com/vyzpGGa.jpg",links:[{link:"https://chichu.itch.io/winding-string",icon:"https://i.imgur.com/DRcnLaA.png"}],awards:[{award:"Entry to Brackeys Jam 2020.2",color:"blue"}]},{name:"Lt. Shield",tagline:"shielding a ship",image:"https://i.imgur.com/pjUcHk7.jpg",links:[{link:"https://chichu.itch.io/lt-shield",icon:"https://i.imgur.com/DRcnLaA.png"}],awards:[{award:"Entry to GMTK Game Jam 2020",color:"blue"}]}],apps:[{name:"F1",tagline:"a speedrun timer",image:"https://i.imgur.com/IjDHz5f.jpg",links:[{link:"https://github.com/chiyeon/F1",icon:"https://i.imgur.com/KxrDlSb.png"}]},{name:"Qki",tagline:"a typing benchmark",image:"https://i.imgur.com/5VwOPn2.jpg",links:[{link:"https://github.com/chiyeon/qki",icon:"https://i.imgur.com/KxrDlSb.png"},{link:"http://qki.herokuapp.com/",icon:"https://i.imgur.com/KBD63fv.png"}]},{name:"snowfall",tagline:"falling snow in your terminal",image:"https://i.imgur.com/qj4fLxs.jpg",links:[{link:"https://github.com/chiyeon/snowfall",icon:"https://i.imgur.com/KxrDlSb.png"}]},{name:"To-do List",tagline:"a way to stay organized",image:"https://i.imgur.com/tRU4dya.jpg",links:[{link:"https://www.benjibenji.com/apps/todo-list/",icon:"https://i.imgur.com/KxrDlSb.png"}]},{name:"kuuztu",tagline:"a personality test",image:"https://i.imgur.com/JFXOWmk.jpg",links:[{link:"https://www.benjibenji.com/apps/kuuztu/",icon:"https://i.imgur.com/KxrDlSb.png"}]},{name:"KLOWI",tagline:"a 'slowed to perfection' video creator",image:"https://i.imgur.com/4FzkH9d.jpg",links:[{link:"https://github.com/chiyeon/klowi",icon:"https://i.imgur.com/KxrDlSb.png"}]}],videos:[{name:"You are You",tagline:"psa",image:"https://i.imgur.com/swlcWFd.jpg",links:[{link:"https://www.youtube.com/watch?v=ZJoaCvSmqDA",icon:"https://i.imgur.com/TbSK055.png"}],awards:[{award:"1st: Directing Change 2020 (Culture - Mental Health)",color:"gold"},{award:"SEVA Finalist 2020 (PSA 9-12)",color:"peru"}]},{name:"Automation & the Industry",tagline:"documentary (collaboration)",image:"https://i.imgur.com/4SVMKzM.jpg",links:[{link:"https://www.youtube.com/watch?v=yn8qQTt-bO8",icon:"https://i.imgur.com/TbSK055.png"}],awards:[{award:"SEVA Award 2020 (Documentary 9-12)",color:"gold"},{award:"NATAS Certificate of Merit 2020",color:"lightgray"}]},{name:"INDIGO",tagline:"music video",image:"https://i.imgur.com/9C8emPb.jpg",links:[{link:"https://www.youtube.com/watch?v=CWaM6kuG8aU",icon:"https://i.imgur.com/TbSK055.png"}]},{name:"sanctuary",tagline:"music video",image:"https://i.imgur.com/k7P4alm.jpg",links:[{link:"https://www.youtube.com/watch?v=cmDOEzepK3M",icon:"https://i.imgur.com/TbSK055.png"}]},{name:"shoota",tagline:"music video",image:"https://i.imgur.com/72Eo6ja.jpg",links:[{link:"https://www.youtube.com/watch?v=wBR36EJGgAQ",icon:"https://i.imgur.com/TbSK055.png"}]},{name:"fantasy",tagline:"music video",image:"https://i.imgur.com/wvHT2L4.jpg",links:[{link:"https://www.youtube.com/watch?v=DDU8BJHVfuc",icon:"https://i.imgur.com/TbSK055.png"}]},{name:"u say im in luv",tagline:"music video",image:"https://i.imgur.com/8jXAQ2Z.jpg",links:[{link:"https://www.youtube.com/watch?v=VHBsB96DAAw",icon:"https://i.imgur.com/TbSK055.png"}]},{name:"onigiri",tagline:"cooking video",image:"https://i.imgur.com/dxZQUGQ.jpg",links:[{link:"https://www.youtube.com/watch?v=ThNS7Bo2_s4",icon:"https://i.imgur.com/TbSK055.png"}]}]}},components:{Home:d,About:E,GamesShowcase:P,AppsShowcase:P,VideosShowcase:P},mounted:function(){var t=this,e=this.pages,i=[],n=[];e.forEach((function(t){i.push(document.getElementById(t).clientHeight)})),n.push(i[0]);for(var a=1;a<i.length;a++)n.push(i[a]+n[a-1]);document.onscroll=function(){var i=window.scrollY||window.scrollTop;e.forEach((function(a){i>=n[e.indexOf(a)-1]-document.getElementById(a).clientHeight/4?(document.getElementsByClassName("selected").forEach((function(t){t.classList.remove("selected")})),document.getElementById("".concat(a,"-nav")).classList.add("selected"),document.getElementById(a).classList.add("visible"),"games"!=a&&"apps"!=a&&"videos"!=a||t.$refs[a].expanded||(t.$refs[a].ShowItems(150),t.$refs[a].expanded=!0)):(void 0==i||i<100)&&(document.getElementsByClassName("selected").forEach((function(t){t.classList.remove("selected")})),document.getElementById("home-nav").classList.add("selected"),document.getElementById("home").classList.add("visible"))}))}},methods:{ScrollToPage:function(t){document.getElementById(t).scrollIntoView({behavior:"smooth"})}}},N=K,G=(i("034f"),Object(m["a"])(N,a,s,!1,null,null,null)),$=G.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t($)}}).$mount("#app")},"61bf":function(t,e,i){},"747c":function(t,e,i){},"81e9":function(t,e,i){},"85ec":function(t,e,i){},ba12:function(t,e,i){"use strict";i("81e9")},c7cc:function(t,e,i){},e431:function(t,e,i){"use strict";i("747c")},f4d3:function(t,e,i){"use strict";i("c7cc")}});
//# sourceMappingURL=app.284ca3a3.js.map