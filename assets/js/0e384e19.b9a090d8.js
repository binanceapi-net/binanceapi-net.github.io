"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[976],{619:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var i=t(4848),s=t(8453);const c={slug:"/",sidebar_position:1,title:"Getting Started"},r=void 0,a={id:"intro",title:"Getting Started",description:"BinanceAPI.NET is a High Performance Rest API/Websocket Wrapper for Binance.com with an emphasis on creating requests quickly and caching data when possible so requests are more responsive,",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1,title:"Getting Started"},sidebar:"tutorialSidebar",next:{title:"Market",permalink:"/market"}},o={},l=[{value:" Authentication",id:"-authentication",level:3},{value:" Create Rest Client",id:"-create-rest-client",level:3},{value:" Create Socket Client",id:"-create-socket-client",level:3},{value:" Simple Ticker Example",id:"-simple-ticker-example",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",hr:"hr",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["BinanceAPI.NET is a High Performance Rest API/Websocket Wrapper for ",(0,i.jsx)(n.a,{href:"https://www.binance.com",children:(0,i.jsx)(n.code,{children:"Binance.com"})})," with an emphasis on creating requests quickly and caching data when possible so requests are more responsive,"]}),"\n",(0,i.jsxs)(n.p,{children:["This library the best option if you want to trade ",(0,i.jsx)(n.code,{children:"Spot"})," or ",(0,i.jsx)(n.code,{children:"Margin"}),"."]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h3,{id:"-authentication",children:[(0,i.jsx)(n.img,{src:"https://i.imgur.com/6uMKm3t.png",alt:""})," Authentication"]}),"\n",(0,i.jsxs)(n.p,{children:["Create an ",(0,i.jsx)(n.code,{children:"Authentication Provider"})," that can be used by multiple ",(0,i.jsx)(n.code,{children:"Rest Clients"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:"AuthenticationProvider authenticationProvider = new AuthenticationProvider(api_key, api_secret);\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h3,{id:"-create-rest-client",children:[(0,i.jsx)(n.img,{src:"https://i.imgur.com/6uMKm3t.png",alt:""})," Create Rest Client"]}),"\n",(0,i.jsxs)(n.p,{children:["Change the ",(0,i.jsx)(n.code,{children:"Rest Client Options"})," and create a new ",(0,i.jsx)(n.code,{children:"Rest Client"})," using the ",(0,i.jsx)(n.code,{children:"Authentication Provider"})," above"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:"RestClientOptions restClientOptions = new()\n{\n    SyncUpdateTime = 5,\n    GetCacheSize = 2048,\n    PutCacheSize = 2048,\n    PostCacheSize = 2048,\n    DeleteCacheSize = 2048,\n    ReceiveWindow = TimeSpan.FromMilliseconds(1000),\n    DefaultApiController = BinanceApiController.DEFAULT\n};\n\nRestClient restClient = new RestClient(authenticationProvider, restClientOptions, CancellationToken.None);\n"})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h3,{id:"-create-socket-client",children:[(0,i.jsx)(n.img,{src:"https://i.imgur.com/6uMKm3t.png",alt:""})," Create Socket Client"]}),"\n",(0,i.jsxs)(n.p,{children:["Create a ",(0,i.jsx)(n.code,{children:"Socket Client"})," that can be used to ",(0,i.jsx)(n.code,{children:"Connect/Subscribe"})," to ",(0,i.jsx)(n.code,{children:"Websocket Streams"})]}),"\n",(0,i.jsxs)(n.p,{children:["Returns a ",(0,i.jsx)(n.code,{children:"SocketClientHost"})," that can be used to manage the connection."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:"SocketClient socketClient = new SocketClient(50);\n\nSocketClientHost example = socketClient.SymbolMiniTickerUpdates(...);\nexample.ConnectionStatusChanged += BinanceSocket_StatusChanged;\nexample.ReconnectSocket();\nexample.DestroySocket();\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"50"})," is the default number of ",(0,i.jsx)(n.code,{children:"Reconnect Attempts"})," before the socket will ",(0,i.jsx)(n.code,{children:"Fail"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.h3,{id:"-simple-ticker-example",children:[(0,i.jsx)(n.img,{src:"https://i.imgur.com/6uMKm3t.png",alt:""})," Simple Ticker Example"]}),"\n",(0,i.jsxs)(n.p,{children:["Subscribe to ",(0,i.jsx)(n.code,{children:"Real Time LastPrice Updates"})," for a particular symbol"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:"using BinanceAPI;\nusing BinanceAPI.Hosts;\n\nnamespace FullSocketExample\n{\n    public class LastPriceTicker\n    {\n        private readonly SocketClientHost TickerHost;\n\n        public decimal LastPrice = decimal.Zero;\n\n        public LastPriceTicker(string symbol, ref RestClient restClient, ref SocketClient socketClient)\n        {\n            LastPrice = restClient.Spot.Market.GetPrice(symbol).Data?.Price ?? decimal.Zero;\n\n            TickerHost = socketClient.RealTimeLastPriceUpdates(symbol, (update) =>\n            {\n                if (update != null)\n                {\n                    LastPrice = update.LastPrice;\n                }\n            });\n        }\n\n        public void Dispose()\n        {\n            TickerHost.DestroySocket();\n\n            TickerHost.Dispose();\n        }\n    }\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(6540);const s={},c=i.createContext(s);function r(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);