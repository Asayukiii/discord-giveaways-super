import{d as e,c as t,o as a,b as s,f as n,t as l,w as r,g as o,e as i,p,F as u,h as c,q as y,y as d,s as k}from"./vendor.5101602c.js";import{b as m,u as b}from"./index.313bd831.js";import{m as f}from"./SourceButton.vue_vue&type=script&setup=true&lang.d52f1bf2.js";function h(e,t){const a=/\{@link\s+(.+?)(?:\s+(.+?))?\s*\}/i.exec(e);a&&(e=a[1]);const s=a?a[2]:null,n=e.split(/(\.|#)/);return t.links[n[0]]?{text:null!=s?s:e,link:"object"==typeof t.links[n[0]]?{name:t.links[n[0]].name,params:t.links[n[0]].params,query:{scrollTo:n[1]?`${"."===n[1]?"s-":""}${n[2]}`:void 0}}:t.links[n[0]]}:/^https?:\/\//i.exec(e)?{text:null!=s?s:e,link:e}:{text:null!=s?s:e}}function x(e,t,a,s){if(!e)return null;const n=/\{@link\s+(.+?)(?:\s+(.+?))?\s*\}/gi;let l,r="",o=0;for(;l=n.exec(e);){r+=e.slice(o,l.index);const n=h(l[0],t);if(n.link){let e;"object"==typeof n.link?(n.link.params||(n.link.params={}),n.link.params.source=s.params.source,n.link.params.tag=s.params.tag,e=a.resolve(n.link).href):e=n.link,r+=`[${n.text}](${e})`}else r+=n.text;o=l.index+l[0].length}return r?(r+=e.slice(o),r):e}function v(e){return"string"==typeof e?e:e.join("-")}const g={key:0},w={key:3};var j=e({expose:[],props:{type:{type:[String,Array],required:!0}},setup(e){const y=e,d=b(),k=t((()=>d.state.docs)),f=t((()=>"function"===y.type[0]?"Function":y.type[0])),h=t((()=>{var e;return(null==(e=k.value)?void 0:e.links[y.type[0]])?k.value.links[y.type[0]]:null}));return(t,y)=>{const d=c("router-link"),k=m;return a(),s(u,null,[n(h)?"object"==typeof n(h)?(a(),s(d,{key:1,to:n(h)},{default:r((()=>[o(l(n(f)),1)])),_:1},8,["to"])):(a(),s("a",{key:2,href:n(h),target:"_blank",rel:"noopener"},[o(l(n(f))+" ",1),i(k,{class:"h-5 w-5 inline-block mb-1","aria-hidden":"true"})],8,["href"])):(a(),s("span",g,l(n(f)),1)),e.type[1]?(a(),s("span",w,l(e.type[1]),1)):p("",!0)],64)}}});const A={class:"docs-type inline-block whitespace-pre-wrap"},q={class:"font-semibold"},M={key:0};var _=e({expose:[],props:{names:{type:[String,Array,Array],required:!0},nullable:{type:Boolean,required:!1},variable:{type:Boolean,required:!1}},setup:e=>(t,r)=>(a(),s("div",A,[i("span",q,l(e.nullable?"?":"")+l(e.variable?"...":""),1),Array.isArray(e.names)?(a(),s("span",M,[(a(!0),s(u,null,y(e.names,(e=>(a(),s(j,{key:n(v)(e),type:e},null,8,["type"])))),128))])):p("",!0)]))});const T={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},$=i("g",{fill:"none"},[i("path",{d:"M9 12l2 2l4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806a3.42 3.42 0 0 1 4.438 0a3.42 3.42 0 0 0 1.946.806a3.42 3.42 0 0 1 3.138 3.138a3.42 3.42 0 0 0 .806 1.946a3.42 3.42 0 0 1 0 4.438a3.42 3.42 0 0 0-.806 1.946a3.42 3.42 0 0 1-3.138 3.138a3.42 3.42 0 0 0-1.946.806a3.42 3.42 0 0 1-4.438 0a3.42 3.42 0 0 0-1.946-.806a3.42 3.42 0 0 1-3.138-3.138a3.42 3.42 0 0 0-.806-1.946a3.42 3.42 0 0 1 0-4.438a3.42 3.42 0 0 0 .806-1.946a3.42 3.42 0 0 1 3.138-3.138z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var B={render:function(e,t){return a(),s("svg",T,[$])}};const H={class:"grid"},L={class:"overflow-x-auto lg:custom-scroll border dark:border-gray-600 rounded-md mt-2 mb-8"},S={class:"!text-base !text-center !my-0 min-w-max lg:min-w-0"},D={class:"bg-discord-blurple-500 !text-gray-200"},F={class:"!uppercase"},z=i("th",{class:"!p-4 w-2/12"},"Parameter",-1),C=i("th",{class:"!p-4 w-2/12"},"Type",-1),O={key:0,class:"!p-4 w-2/12"},P={key:1,class:"!p-4 w-2/12"},R=i("th",{class:"!p-4 lg:w-4/12"},"Description",-1),Y={class:"!pl-2.5 !py-5"},E={class:"!py-5"},G={key:0,class:"!py-5"},I=i("span",{class:"sr-only"},"True",-1),J={key:1,class:"!py-5"},K={key:0};var N=e({expose:[],props:{parameters:{type:Array,required:!0}},setup(e){const r=e,o=d(),c=k(),m=b(),h=t((()=>m.state.docs)),g=t((()=>r.parameters.some((e=>e.optional)))),w=e=>f(x(e.description,h.value,o,c)),j=e=>e.optional?`<code>${e.default}</code>`:"";return(t,r)=>{const o=B;return a(),s("div",H,[i("div",L,[i("table",S,[i("thead",D,[i("tr",F,[z,C,n(g)?(a(),s("th",O,"Optional")):p("",!0),n(g)?(a(),s("th",P,"Default")):p("",!0),R])]),i("tbody",null,[(a(!0),s(u,null,y(e.parameters,(e=>(a(),s("tr",{key:e.name},[i("td",Y,l(e.name),1),i("td",E,[i("div",null,[(a(!0),s(u,null,y(e.type,(t=>(a(),s(_,{key:n(v)(t),names:t,variable:e.variable,nullable:e.nullable},null,8,["names","variable","nullable"])))),128))])]),n(g)?(a(),s("td",G,[I,e.optional?(a(),s(o,{key:0,class:"h-5 w-5 mx-auto","aria-hidden":"true"})):p("",!0)])):p("",!0),n(g)?(a(),s("td",J,[e.optional&&void 0===e.default?(a(),s("em",K,"none")):(a(),s("span",{key:1,innerHTML:j(e)},null,8,["innerHTML"]))])):p("",!0),i("td",{class:"!pr-2.5 !py-0",innerHTML:w(e)},null,8,["innerHTML"])])))),128))])])])])}}});const Q={class:"break-words-legacy mt-4"},U=o(" See also: "),V={key:0},W={key:2},X={key:1},Z={key:2};var ee=e({expose:[],props:{see:{type:Array,required:!0}},setup(e){const p=e,d=b(),k=t((()=>d.state.docs)),f=t((()=>{const e=new Array(p.see.length);for(let t=0;t<p.see.length;t++)e[t]=h(p.see[t],k.value);return e}));return(t,p)=>{const d=c("router-link"),k=m;return a(),s("div",Q,[U,e.see.length>1?(a(),s("ul",V,[(a(!0),s(u,null,y(n(f),(e=>(a(),s("li",{key:e.text},["object"==typeof e.link?(a(),s(d,{key:0,to:e.link},{default:r((()=>[o(l(e.text),1)])),_:2},1032,["to"])):"string"==typeof e.link?(a(),s("a",{key:1,href:e.link,target:"_blank",rel:"noopener"},[o(l(e.text)+" ",1),i(k,{class:"h-5 w-5 inline-block mb-1","aria-hidden":"true"})],8,["href"])):(a(),s("span",W,l(e.text),1))])))),128))])):(a(),s("span",X,["object"==typeof n(f)[0].link?(a(),s(d,{key:0,to:n(f)[0].link},{default:r((()=>[o(l(n(f)[0].text),1)])),_:1},8,["to"])):"string"==typeof n(f)[0].link?(a(),s("a",{key:1,href:n(f)[0].link,target:"_blank",rel:"noopener"},[o(l(n(f)[0].text)+" ",1),i(k,{class:"h-5 w-5 inline-block mb-1","aria-hidden":"true"})],8,["href"])):(a(),s("span",Z,l(n(f)[0].text),1))]))])}}});export{N as _,_ as a,ee as b,x as c,j as d,h as p,v as t};
