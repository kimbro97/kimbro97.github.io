import{c as f}from"./ClientPage-e75c810e.js";import{_ as r,o as l,c as $,a as t,n as _,r as g,b as o,d as i,w as d,e as b,R as x}from"./index-2ad16347.js";const C={data(){return{selectedTab:"ALL"}}},T={class:"post-tabs-wrapper"},k={class:"post-tabs"},L={class:"tabs"};function S(c,s,a,p,e,u){return l(),$("div",T,[t("div",k,[t("div",L,[t("div",{class:"tab",onClick:s[0]||(s[0]=n=>e.selectedTab="ALL")},[t("button",{class:_(`${e.selectedTab==="ALL"?"tab-btn-selected":"tab-btn"}`)}," ALL ",2)]),t("div",{class:"tab",onClick:s[1]||(s[1]=n=>e.selectedTab="Spring")},[t("button",{class:_(`${e.selectedTab==="Spring"?"tab-btn-selected":"tab-btn"}`)}," Spring ",2)]),t("div",{class:"tab",onClick:s[2]||(s[2]=n=>e.selectedTab="Node")},[t("button",{class:_(`${e.selectedTab==="Node"?"tab-btn-selected":"tab-btn"}`)}," Node ",2)])])]),g(c.$slots,"default")])}const w=r(C,[["render",S]]);const y={},A=t("div",{class:"post-card-column-wrapper"},[t("div",{class:"post-card-column"},[t("div",{class:"post-card-wrapper"},[t("a",{class:"post-card"},[t("div",{class:"title"}," 테스트 코드를 왜 그리고 어떻게 작성해야 할까? "),t("p",{class:"description"},"테스트 코드가 필요한 이유와 잘 작성하는 방법에 대해 공유합니다."),t("div",{class:"info"},[t("div",{class:"date"},"April 11, 2023"),t("div",{class:"tags"},[t("div",{class:"tag"},"test"),t("div",{class:"tag"},"jest")])])])])])],-1);function N(c,s){const a=o("router-link");return l(),i(a,{to:"/post"},{default:d(()=>[A]),_:1})}const h=r(y,[["render",N]]);const B={components:{ClientPage:f,PostTabs:w,PostCard:h},data(){}},P=t("div",{class:"more-post-card"},[t("button",{class:"more-post-card-button"},"포스트 더보기")],-1);function V(c,s,a,p,e,u){const n=o("post-card"),m=o("post-tabs"),v=o("client-page");return l(),i(v,null,{default:d(()=>[b(m,null,{default:d(()=>[b(n)]),_:1}),P]),_:1})}const M=r(B,[["render",V]]),R={components:{mainSection:M,RouterView:x},computed:{}};function j(c,s,a,p,e,u){const n=o("mainSection");return l(),i(n)}const q=r(R,[["render",j]]);export{q as default};
