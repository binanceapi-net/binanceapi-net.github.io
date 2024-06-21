"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[351],{47:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var t=s(4848),n=s(8453);const a={sidebar_position:8,title:"Spot Orders"},d=void 0,c={id:"spot-orders",title:"Spot Orders",description:"CreateOrderLimit",source:"@site/docs/spot-orders.md",sourceDirName:".",slug:"/spot-orders",permalink:"/spot-orders",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Spot Orders"},sidebar:"tutorialSidebar",previous:{title:"General",permalink:"/general"},next:{title:"Margin/Isolated Orders",permalink:"/margin-isolated-orders"}},l={},i=[{value:" CreateOrderLimit",id:"-createorderlimit",level:3},{value:" CreateOrderMarket",id:"-createordermarket",level:3},{value:" PlaceOrderSpotCached",id:"-placeorderspotcached",level:3},{value:" PlaceTestOrder",id:"-placetestorder",level:3},{value:" GetOrder",id:"-getorder",level:3},{value:" GetOrders",id:"-getorders",level:3},{value:" GetOpenOrders",id:"-getopenorders",level:3},{value:" GetUserTrades",id:"-getusertrades",level:3},{value:" CancelOrder",id:"-cancelorder",level:3},{value:" CancelAllOpenOrders",id:"-cancelallopenorders",level:3}];function o(e){const r={a:"a",code:"code",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.h3,{id:"-createorderlimit",children:[(0,t.jsx)(r.img,{src:"https://i.imgur.com/3qMJlbC.png",alt:""})," ",(0,t.jsx)(r.a,{href:"https://developers.binance.com/docs/binance-spot-api-docs/rest-api#new-order-trade",children:"CreateOrderLimit"})]}),"\n",(0,t.jsx)(r.p,{children:"Create a new cachable limit order that can be used in multiple future requests"}),"\n",(0,t.jsx)(r.p,{children:"This object can be cached and reused"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cs",children:"CachableSpotRequest order = CacheClientSpot.CreateOrderLimit();\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.h3,{id:"-createordermarket",children:[(0,t.jsx)(r.img,{src:"https://i.imgur.com/3qMJlbC.png",alt:""})," ",(0,t.jsx)(r.a,{href:"https://developers.binance.com/docs/binance-spot-api-docs/rest-api#new-order-trade",children:"CreateOrderMarket"})]}),"\n",(0,t.jsx)(r.p,{children:"Create a new cachable market order that can be used in multiple future requests"}),"\n",(0,t.jsx)(r.p,{children:"This object can be cached and reused"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cs",children:"CachableSpotRequest order = CacheClientSpot.CreateOrderMarket();\n\nCachableSpotRequest order = CacheClientSpot.CreateOrderMarketQuote();\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.h3,{id:"-placeorderspotcached",children:[(0,t.jsx)(r.img,{src:"https://i.imgur.com/6W7CF1y.png",alt:""})," ",(0,t.jsx)(r.a,{href:"https://developers.binance.com/docs/binance-spot-api-docs/rest-api#new-order-trade",children:"PlaceOrderSpotCached"})]}),"\n",(0,t.jsxs)(r.p,{children:["Place a ",(0,t.jsx)(r.code,{children:"Spot Order"})," from data that can be cached"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cs",children:"CachableSpotRequest order = CacheClientSpot.CreateOrderMarket(symbolName, orderSide, orderQuantity, recvWindow);\n\nRestResult<BinancePlacedOrderSpot> result = restClient.Spot.Order.PlaceOrderSpot(ref order, CancellationToken.None);\n"})}),"\n",(0,t.jsxs)(r.p,{children:["Place a ",(0,t.jsx)(r.code,{children:"Spot Order"})," from data that can be cached and also return a copy of the raw response"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cs",children:"RestResultRaw<BinancePlacedOrderSpot> result = restClient.Spot.Order.PlaceOrderSpotRaw(ref order, default);\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.h3,{id:"-placetestorder",children:[(0,t.jsx)(r.img,{src:"https://i.imgur.com/6W7CF1y.png",alt:""})," ",(0,t.jsx)(r.a,{href:"https://developers.binance.com/docs/binance-spot-api-docs/rest-api#test-new-order-trade",children:"PlaceTestOrder"})]}),"\n",(0,t.jsx)(r.p,{children:"Places a new test order."}),"\n",(0,t.jsx)(r.p,{children:"Test orders are not actually being executed and just test the functionality."}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cs",children:'CachableSpotRequest spotRequest = CacheClientSpot.CreateOrderMarket("BTCUSDT", OrderSide.Sell, 1, 1000);\n\nRestResult<BinancePlacedOrderSpot> result = restClient.Spot.Order.PlaceTestOrder(ref spotRequest, default);\n'})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.h3,{id:"-getorder",children:[(0,t.jsx)(r.img,{src:"https://i.imgur.com/xn2XyYw.png",alt:""})," ",(0,t.jsx)(r.a,{href:"https://developers.binance.com/docs/binance-spot-api-docs/rest-api#query-order-user_data",children:"GetOrder"})]}),"\n",(0,t.jsx)(r.p,{children:"Retrieves data for a specific order."}),"\n",(0,t.jsxs)(r.p,{children:["Either ",(0,t.jsx)(r.code,{children:"orderId"})," or ",(0,t.jsx)(r.code,{children:"origClientOrderId"})," should be provided."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cs",children:"restClient.Spot.Order.GetOrder();\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.h3,{id:"-getorders",children:[(0,t.jsx)(r.img,{src:"https://i.imgur.com/xn2XyYw.png",alt:""})," ",(0,t.jsx)(r.a,{href:"https://developers.binance.com/docs/binance-spot-api-docs/rest-api#all-orders-user_data",children:"GetOrders"})]}),"\n",(0,t.jsx)(r.p,{children:"Gets all orders for the provided symbol"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cs",children:"restClient.Spot.Order.GetOrders();\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.h3,{id:"-getopenorders",children:[(0,t.jsx)(r.img,{src:"https://i.imgur.com/xn2XyYw.png",alt:""})," ",(0,t.jsx)(r.a,{href:"https://developers.binance.com/docs/binance-spot-api-docs/rest-api#current-open-orders-user_data",children:"GetOpenOrders"})]}),"\n",(0,t.jsx)(r.p,{children:"Gets a list of open orders"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cs",children:"restClient.Spot.Order.GetOpenOrders();\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.h3,{id:"-getusertrades",children:[(0,t.jsx)(r.img,{src:"https://i.imgur.com/xn2XyYw.png",alt:""})," ",(0,t.jsx)(r.a,{href:"https://developers.binance.com/docs/binance-spot-api-docs/rest-api#account-trade-list-user_data",children:"GetUserTrades"})]}),"\n",(0,t.jsx)(r.p,{children:"Gets all user trades for provided symbol"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cs",children:"restClient.Spot.Order.GetUserTrades();\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.h3,{id:"-cancelorder",children:[(0,t.jsx)(r.img,{src:"https://i.imgur.com/Odmg0pB.png",alt:""})," ",(0,t.jsx)(r.a,{href:"https://developers.binance.com/docs/binance-spot-api-docs/rest-api#cancel-order-trade",children:"CancelOrder"})]}),"\n",(0,t.jsx)(r.p,{children:"Cancels a pending order on a symbol"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cs",children:"restClient.Spot.Order.CancelOrder();\n"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsxs)(r.h3,{id:"-cancelallopenorders",children:[(0,t.jsx)(r.img,{src:"https://i.imgur.com/Odmg0pB.png",alt:""})," ",(0,t.jsx)(r.a,{href:"https://developers.binance.com/docs/binance-spot-api-docs/rest-api#cancel-all-open-orders-on-a-symbol-trade",children:"CancelAllOpenOrders"})]}),"\n",(0,t.jsx)(r.p,{children:"Cancels all open orders on a symbol"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-cs",children:"restClient.Spot.Order.CancelAllOpenOrders()\n"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://www.nuget.org/profiles/Samuel",children:(0,t.jsx)(r.img,{src:"https://i.imgur.com/JfsfrPD.png",alt:"Copyright S Christison \xa92024"})})})]})}function p(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>d,x:()=>c});var t=s(6540);const n={},a=t.createContext(n);function d(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);