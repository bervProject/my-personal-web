"use strict";(self["webpackChunkmy_personal_web"]=self["webpackChunkmy_personal_web"]||[]).push([[594],{9629:(a,s,e)=>{e.d(s,{A:()=>d});var n,t=e(4761),c=e(4335),i="https://parseapi.back4app.com",l="X-Parse-Application-Id",o="mJqu2PabcrwWlV529oobL5aITjjUUCJjJyROVGmb",r="X-Parse-REST-API-Key",u="hsGjDoh8YgE0GqexWhsc0J18viEuOPJr8EeT7MqK";const d=c.A.create({baseURL:i,headers:(n={},(0,t.A)(n,l,o),(0,t.A)(n,r,u),(0,t.A)(n,"accept","application/json"),n)})},8322:(a,s,e)=>{e.r(s),e.d(s,{default:()=>g});var n=e(641),t=e(33),c={class:"card"},i={class:"card-content"},l={class:"columns"},o={class:"column"},r={class:"content"},u={class:"buttons are-small"},d={href:"mailto:bervianto.leo@gmail.com",class:"button is-dark is-outlined"},p={class:"icon"},v=["href"],k={class:"icon"};function h(a,s,e,h,b,m){var L=(0,n.g2)("o-icon");return(0,n.uX)(),(0,n.CE)("div",null,[(0,n.Lk)("div",c,[s[3]||(s[3]=(0,n.Lk)("div",{class:"card-header"},[(0,n.Lk)("div",{class:"card-header-title"},[(0,n.Lk)("p",{class:"title"},"Contact")])],-1)),(0,n.Lk)("div",i,[(0,n.Lk)("div",l,[s[2]||(s[2]=(0,n.Fv)('<div class="column"><div class="columns"><div class="column"><div class="content"><h3 class="title">Short Bio</h3><h5>Current Job</h5><p>Software Engineer</p><h5>Interest Technology / Interest Topic</h5><ul><li>Web Development</li><li>Backend Development</li><li>Microservices</li><li>Cloud Computing</li><li>Cyber Security</li></ul></div></div></div></div>',1)),(0,n.Lk)("div",o,[(0,n.Lk)("div",r,[s[1]||(s[1]=(0,n.Lk)("h3",{class:"title"},"Social Media",-1)),(0,n.Lk)("p",u,[(0,n.Lk)("a",d,[(0,n.Lk)("span",p,[(0,n.bF)(L,{pack:"fa",icon:"envelope"})]),s[0]||(s[0]=(0,n.Lk)("span",null,"Email",-1))]),((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(a.contacts,(function(a){return(0,n.uX)(),(0,n.CE)("a",{key:a.id,href:a.address,target:"_blank",class:"button is-dark is-outlined"},[(0,n.Lk)("span",k,[(0,n.bF)(L,{pack:"fab",icon:a.icon},null,8,["icon"])]),(0,n.Lk)("span",null,(0,t.v_)(a.title),1)],8,v)})),128))])])])])])])])}e(5086);var b=e(9629);const m=(0,n.pM)({name:"AboutPage",metaInfo:{title:"About Me"},data:function(){return{contacts:[],isLoading:!1}},mounted:function(){var a=this;this.isLoading=!0,b.A.get("classes/Contact").then((function(s){a.contacts=s.data.results}))["catch"]((function(a){console.error(a)}))["finally"]((function(){a.isLoading=!1}))}});var L=e(6262);const f=(0,L.A)(m,[["render",h]]),g=f}}]);
//# sourceMappingURL=about.ef6e1695.js.map