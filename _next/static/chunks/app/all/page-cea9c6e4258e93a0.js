(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[396],{5848:function(e,t,i){Promise.resolve().then(i.bind(i,5075))},5075:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return n}});var s=i(7437),l=i(3822);function n(){return(0,s.jsx)(l.Z,{userInput:{},all:!0})}},3822:function(e,t,i){"use strict";i.d(t,{Z:function(){return u}});var s=i(7437),l=i(7138),n=i(5736);function r(e){return(0,s.jsxs)("div",{className:"card lg:card-side lg:grid lg:grid-cols-3 bg-base-100 shadow-xl p-2 "+(e.bestfit?"border-4 border-amber-500":null),children:[(0,s.jsx)("figure",{children:(0,s.jsx)("img",{className:"lg:object-cover lg:h-full",src:"."+e.image,alt:"Movie"})}),(0,s.jsxs)("div",{className:"card-body lg:col-span-2",children:[(0,s.jsx)("h2",{className:"card-title",children:e.title}),(0,s.jsx)("p",{className:"text-left",children:e.description}),(0,s.jsx)(n.Z,{title:"\uD83D\uDCC8 Productivity",value:e.productivity,max:3}),(0,s.jsx)(n.Z,{title:"\uD83D\uDCB0 Money",value:e.money,max:3}),(0,s.jsx)(n.Z,{title:"\uD83D\uDD52 Time",value:e.time,max:3}),(0,s.jsxs)("div",{className:"card-actions justify-end mt-2",children:[!e.details&&(0,s.jsx)("a",{className:"btn btn-outline invisible",children:"More"}),e.details&&(0,s.jsx)(l.default,{className:"btn btn-outline",href:"/details/"+e.title.toLowerCase().split(" ").join("_"),target:"_blank",children:"More"})]})]})]})}var a=i(2265),c=i(2554),o=i(90);function u(e){let[t,i]=(0,a.useState)([]);return(0,a.useEffect)(()=>{if(e.all){i(o.U.map(e=>({activity:e,score:0})));return}let t=[];console.log(o.U.length),o.U.forEach(i=>{let s;s=0+1.5*i.moods.filter(t=>e.userInput.moods[t]).length+1.75*i.interests.filter(t=>e.userInput.interests[t]).length,i.productivity>=e.userInput.productive&&(s+=i.productivity-e.userInput.productive+1),i.money<=e.userInput.money?s+=e.userInput.money-i.money+1:s-=i.money-e.userInput.money+1,i.time<=e.userInput.time?s+=e.userInput.time-i.time+1:s-=i.time-e.userInput.time+1,t.push({activity:i,score:s})}),console.log(t),i(t.sort((e,t)=>t.score-e.score).slice(0,12))},[e.userInput]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.Z,{}),(0,s.jsx)("div",{className:"hero min-h-screen",children:(0,s.jsx)("div",{className:"hero-content text-center",children:(0,s.jsxs)("div",{className:"max-w-2xl",children:[(0,s.jsx)("h1",{className:"text-5xl font-bold",children:"What to do? \uD83E\uDD14"}),(0,s.jsxs)("h2",{className:"text-l font-semibold mt-2",children:[(0,s.jsx)("span",{className:"text-white bg-neutral p-1",children:"Hand curated."})," No AI bullshittery!"]}),(0,s.jsx)("div",{className:"divider"}),!e.all&&(0,s.jsx)("button",{className:"btn btn-primary px-9",onClick:()=>window.location.reload(),children:"← Back"}),e.all&&(0,s.jsx)(l.default,{href:"/",children:(0,s.jsx)("button",{className:"btn btn-primary px-9",children:"← Back"})}),(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)("div",{className:"flex flex-row justify-center mb-6",children:(0,s.jsx)("div",{className:"badge badge-outline text-2xl p-4 font-semibold",children:e.all?"All activites":"Results"})}),(0,s.jsx)("div",{className:"flex flex-col gap-5",children:t.map((e,t)=>(0,s.jsx)(r,{title:e.activity.name,description:e.activity.description,productivity:e.activity.productivity,money:e.activity.money,time:e.activity.time,image:e.activity.image,details:e.activity.details,bestfit:0===t},t))})]})})})]})}}},function(e){e.O(0,[138,125,971,23,744],function(){return e(e.s=5848)}),_N_E=e.O()}]);