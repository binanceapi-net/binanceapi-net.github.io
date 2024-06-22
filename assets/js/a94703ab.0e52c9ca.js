"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[48],{2559:(e,t,n)=>{n.r(t),n.d(t,{default:()=>he});var a=n(6540),o=n(4164),i=n(1003),s=n(7559),l=n(1754),c=n(6588),d=n(1312),r=n(3104),u=n(5062);const A={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var h=n(4848);function m(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),i=(0,a.useRef)(!1),{startScroll:s,cancelScroll:l}=(0,r.gk)();return(0,r.Mq)(((e,n)=>{let{scrollY:a}=e;const s=n?.scrollY;s&&(i.current?i.current=!1:a>=s?(l(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,u.$)((e=>{e.location.hash&&(i.current=!0,o(!1))})),{shown:n,scrollToTop:()=>s(0)}}({threshold:300});return(0,h.jsx)("button",{"aria-label":(0,d.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.A)("clean-btn",s.G.common.backToTopButton,A.backToTopButton,e&&A.backToTopButtonShow),type:"button",onClick:t})}var b=n(3109),p=n(6347),x=n(4581),g=n(6342),f=n(3465);function j(e){return(0,h.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,h.jsxs)("g",{fill:"#7a7a7a",children:[(0,h.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,h.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const S={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function v(e){let{onClick:t}=e;return(0,h.jsx)("button",{type:"button",title:(0,d.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,d.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.A)("button button--secondary button--outline",S.collapseSidebarButton),onClick:t,children:(0,h.jsx)(j,{className:S.collapseSidebarButtonIcon})})}var C=n(5041),k=n(9532);const I=Symbol("EmptyContext"),N=a.createContext(I);function T(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),i=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return(0,h.jsx)(N.Provider,{value:i,children:t})}var w=n(1422),_=n(9169),B=n(8774),y=n(2303);function D(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,h.jsx)("button",{"aria-label":t?(0,d.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,d.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:a})}function E(e){let{item:t,onItemClick:n,activePath:i,level:c,index:d,...r}=e;const{items:u,label:A,collapsible:m,className:b,href:p}=t,{docs:{sidebar:{autoCollapseCategories:x}}}=(0,g.p)(),f=function(e){const t=(0,y.A)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,l.Nr)(e):void 0),[e,t])}(t),j=(0,l.w8)(t,i),S=(0,_.ys)(p,i),{collapsed:v,setCollapsed:C}=(0,w.u)({initialState:()=>!!m&&(!j&&t.collapsed)}),{expandedItem:T,setExpandedItem:E}=function(){const e=(0,a.useContext)(N);if(e===I)throw new k.dV("DocSidebarItemsExpandedStateProvider");return e}(),M=function(e){void 0===e&&(e=!v),E(e?null:d),C(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const i=(0,k.ZC)(t);(0,a.useEffect)((()=>{t&&!i&&n&&o(!1)}),[t,i,n,o])}({isActive:j,collapsed:v,updateCollapsed:M}),(0,a.useEffect)((()=>{m&&null!=T&&T!==d&&x&&C(!0)}),[m,T,d,C,x]),(0,h.jsxs)("li",{className:(0,o.A)(s.G.docs.docSidebarItemCategory,s.G.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":v},b),children:[(0,h.jsxs)("div",{className:(0,o.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":S}),children:[(0,h.jsx)(B.A,{className:(0,o.A)("menu__link",{"menu__link--sublist":m,"menu__link--sublist-caret":!p&&m,"menu__link--active":j}),onClick:m?e=>{n?.(t),p?M(!1):(e.preventDefault(),M())}:()=>{n?.(t)},"aria-current":S?"page":void 0,role:m&&!p?"button":void 0,"aria-expanded":m&&!p?!v:void 0,href:m?f??"#":f,...r,children:A}),p&&m&&(0,h.jsx)(D,{collapsed:v,categoryLabel:A,onClick:e=>{e.preventDefault(),M()}})]}),(0,h.jsx)(w.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:v,children:(0,h.jsx)(P,{items:u,tabIndex:v?-1:0,onItemClick:n,activePath:i,level:c+1})})]})}var M=n(6654),H=n(3186);const z={menuExternalLink:"menuExternalLink_NmtK"};function G(e){let{item:t,onItemClick:n,activePath:a,level:i,index:c,...d}=e;const{href:r,label:u,className:A,autoAddBaseUrl:m}=t,b=(0,l.w8)(t,a),p=(0,M.A)(r);return(0,h.jsx)("li",{className:(0,o.A)(s.G.docs.docSidebarItemLink,s.G.docs.docSidebarItemLinkLevel(i),"menu__list-item",A),children:(0,h.jsxs)(B.A,{className:(0,o.A)("menu__link",!p&&z.menuExternalLink,{"menu__link--active":b}),autoAddBaseUrl:m,"aria-current":b?"page":void 0,to:r,...p&&{onClick:n?()=>n(t):void 0},...d,children:[u,!p&&(0,h.jsx)(H.A,{})]})},u)}const R={menuHtmlItem:"menuHtmlItem_M9Kj"};function L(e){let{item:t,level:n,index:a}=e;const{value:i,defaultStyle:l,className:c}=t;return(0,h.jsx)("li",{className:(0,o.A)(s.G.docs.docSidebarItemLink,s.G.docs.docSidebarItemLinkLevel(n),l&&[R.menuHtmlItem,"menu__list-item"],c),dangerouslySetInnerHTML:{__html:i}},a)}function Q(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,h.jsx)(E,{item:t,...n});case"html":return(0,h.jsx)(L,{item:t,...n});default:return(0,h.jsx)(G,{item:t,...n})}}function F(e){let{items:t,...n}=e;const a=(0,l.Y)(t,n.activePath);return(0,h.jsx)(T,{children:a.map(((e,t)=>(0,h.jsx)(Q,{item:e,index:t,...n},t)))})}const P=(0,a.memo)(F),U={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function O(e){let{path:t,sidebar:n,className:i}=e;const l=function(){const{isActive:e}=(0,C.M)(),[t,n]=(0,a.useState)(e);return(0,r.Mq)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,h.jsx)("nav",{"aria-label":(0,d.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.A)("menu thin-scrollbar",U.menu,l&&U.menuWithAnnouncementBar,i),children:(0,h.jsx)("ul",{className:(0,o.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,h.jsx)(P,{items:n,activePath:t,level:1})})})}const W="sidebar_njMd",Y="sidebarWithHideableNavbar_wUlq",X="sidebarHidden_VK0M",Z="sidebarLogo_isFc";function V(e){let{path:t,sidebar:n,onCollapse:a,isHidden:i}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:l}}}=(0,g.p)();return(0,h.jsxs)("div",{className:(0,o.A)(W,s&&Y,i&&X),children:[s&&(0,h.jsx)(f.A,{tabIndex:-1,className:Z}),(0,h.jsx)(O,{path:t,sidebar:n}),l&&(0,h.jsx)(v,{onClick:a})]})}const J=a.memo(V);var K=n(5600),q=n(9876);const $=e=>{let{sidebar:t,path:n}=e;const a=(0,q.M)();return(0,h.jsx)("ul",{className:(0,o.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,h.jsx)(P,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function ee(e){return(0,h.jsx)(K.GX,{component:$,props:e})}const te=a.memo(ee);function ne(e){const t=(0,x.l)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,h.jsxs)(h.Fragment,{children:[n&&(0,h.jsx)(J,{...e}),a&&(0,h.jsx)(te,{...e})]})}const ae={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function oe(e){let{toggleSidebar:t}=e;return(0,h.jsx)("div",{className:ae.expandButton,title:(0,d.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,d.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,h.jsx)(j,{className:ae.expandButtonIcon})})}const ie={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function se(e){let{children:t}=e;const n=(0,c.t)();return(0,h.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function le(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:i}=e;const{pathname:l}=(0,p.zy)(),[c,d]=(0,a.useState)(!1),r=(0,a.useCallback)((()=>{c&&d(!1),!c&&(0,b.O)()&&d(!0),i((e=>!e))}),[i,c]);return(0,h.jsx)("aside",{className:(0,o.A)(s.G.docs.docSidebarContainer,ie.docSidebarContainer,n&&ie.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ie.docSidebarContainer)&&n&&d(!0)},children:(0,h.jsx)(se,{children:(0,h.jsxs)("div",{className:(0,o.A)(ie.sidebarViewport,c&&ie.sidebarViewportHidden),children:[(0,h.jsx)(ne,{sidebar:t,path:l,onCollapse:r,isHidden:c}),c&&(0,h.jsx)(oe,{toggleSidebar:r})]})})})}const ce={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function de(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,c.t)();return(0,h.jsx)("main",{className:(0,o.A)(ce.docMainContainer,(t||!a)&&ce.docMainContainerEnhanced),children:(0,h.jsx)("div",{className:(0,o.A)("container padding-top--md padding-bottom--lg",ce.docItemWrapper,t&&ce.docItemWrapperEnhanced),children:n})})}const re={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function ue(e){let{children:t}=e;const n=(0,c.t)(),[o,i]=(0,a.useState)(!1);return(0,h.jsxs)("div",{className:re.docsWrapper,children:[(0,h.jsx)(m,{}),(0,h.jsxs)("div",{className:re.docRoot,children:[n&&(0,h.jsx)(le,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:i}),(0,h.jsx)(de,{hiddenSidebarContainer:o,children:t})]})]})}var Ae=n(9682);function he(e){const t=(0,l.B5)(e);if(!t)return(0,h.jsx)(Ae.A,{});const{docElement:n,sidebarName:a,sidebarItems:d}=t;return(0,h.jsx)(i.e3,{className:(0,o.A)(s.G.page.docsDocPage),children:(0,h.jsx)(c.V,{name:a,items:d,children:(0,h.jsx)(ue,{children:n})})})}},9682:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var a=n(4164),o=n(1312),i=n(1107);const s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAA5FBMVEUAAAAAzxgAzBsAzxoA6gAA5QAA5QAA6AQA6g4A5gAAzhoA7hkA5wAP9XgAzBoA5QAA5QAA9Cxs+XgA7yJU+Hf//2Y893lV+Hhr+XRs+Xf//44A5wAA7yUA5gIA4xgA7hkA5gAA8B1s+XUA7iM693MA3gkAzhoA1xQAzhoA5QAAzhoA5QAA6w9U+HgA5QAAzhoA7BQAzRoA5QBU+HYA5gBU+HoA7hxs+XZT+HmD+nUA5AAAzRsAzhoAzxkA8CQAzhoA5gBU+HgA9HoAyxoA5QD//2YA8SJs+XcA5gAA5QAAzhpU+HjBioRSAAAASXRSTlMAfgm8DHd2/vDw7b81MTDCwRftYbwK7bt3dgl+X10Uyb2pizofD72i9fTq6ufm4+HUuLixp5d+fW1paGdiWlROS0owJyYFgFwzpxNjYwAAAutJREFUeNrt3NluFDEQheEiIZmwQ7DZZxICSdh3whr2zd3v/z6URCTf2F0Sv+muoJzbuflm5sLdqlOWo/y32dsVD3nzcHZTps+Vvk/plNBwhjqmhyhDHZNDlKFJFMIZ2UEhnKEODuEMdTAIZ2QHh3CGOjiEM9QxHeRVX3CMD/nc1xzph4yYl3XHExkxr+uOUc/e76HmWFuSMXPtctmxdkFAIAQwmkIAoykEMJpCAKMpBDCaQgCjKWRyxgFkVMZ888W3CqTC+Lq7s9+csaJf+sTpwgfxeZ8eLAofnD3Zdd2x9owaRL58kAqjAMGMAUiNUYBgRgFiMQwIYWSIzTAghJEhNsOAEEaG2AwDQhgZYjNMCGdkiM3IEM6wITZDIZRhQWwGh1xPtdxfSDGLe11nQjgjZy7FvO86G8IZOZ+kmI+dAWnMeCaVPG0NWRlinD8ulSwtAwhicAhncAhncAhnIMhIDA7hDA7hDA7hDA7hjNtbG7cwhDPOrPdpdoNCOONS36c0u4ghnKEODuEMdXAIZ2gShXBGdlAIZ6iDQzhDHQjCGdnBIZyhDgzhjOzgkLdDjM2l0pmyXpt7zIpnzc4Q5J38yfzRAOPuthSyVZ8DbUgh23cGHI8PfpFfThxe/heR1SHIufJpX3SQJwAOoYxWEMhoBmGMdhDEaAjBDA6hz0FNIYDRFAIYTSGMwSH8PYpD+HslhNjhDA7hDA7hDA7hDA7hDA7hDA7hDA4BjBEgNuPwzj3czIHczMXczAlFVn3MTRXiY46sEB9zdYX46BkoxEfvQiE+eigK8dHLUYiPnpJCfPS2FOKjx6YQH72+as8xhoGe4/K+/PNkRj99/TQGFz3YGFz0gmNw0ZOOwUVvPAYXPfoYXOwVxOBizyIGF3snXvZwvOwlednTGthb25O/ySHf4xO56mOvUSE+9jwV4mPvVSE+9oAV4mMvWiE+9sQV4mNvXiE+7hFQiI97FRTi454JN/duiPycy1Ea5zfyFHjkpofq2wAAAABJRU5ErkJggg==";var l=n(4848);function c(e){let{className:t}=e;return(0,l.jsx)("main",{className:(0,a.A)("container margin-vert--xl",t),children:(0,l.jsx)("div",{className:"row",style:{textAlign:"center"},children:(0,l.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,l.jsx)(i.A,{as:"h1",className:"hero__title",children:(0,l.jsx)(o.A,{id:"theme.NotFound.title",description:"That page does not exist",children:"Page Not Found"})}),(0,l.jsx)("p",{children:(0,l.jsx)(o.A,{id:"theme.NotFound.p1",description:"We could not find what your were looking for",children:"We could not find what you were looking for."})}),(0,l.jsx)("img",{src:s,width:"100",height:"100",style:{display:"block",marginLeft:"auto",marginRight:"auto"}}),(0,l.jsx)("p",{children:(0,l.jsx)(o.A,{id:"theme.NotFound.p2",description:"Please return Home",children:"Please return to the homepage and go from there."})})]})})})}}}]);