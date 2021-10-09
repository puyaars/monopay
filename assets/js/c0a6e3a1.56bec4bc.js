"use strict";(self.webpackChunkpolypay_docs=self.webpackChunkpolypay_docs||[]).push([[173],{9557:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={sidebar_position:2,title:"Payment Procedure"},u=void 0,l={unversionedId:"payment-procedure",id:"payment-procedure",isDocsHomePage:!1,title:"Payment Procedure",description:"If you wanna implement a payment system in your node.js app, first, you should know how payment gateways work.",source:"@site/docs/payment-procedure.md",sourceDirName:".",slug:"/payment-procedure",permalink:"/docs/payment-procedure",editUrl:"https://github.com/alitnk/polypay.js/edit/main/documentation/docs/payment-procedure.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Payment Procedure"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Installation",permalink:"/docs/installation"}},c=[{value:"1. Requesting A Payment",id:"1-requesting-a-payment",children:[]},{value:"2. Sending User To Payment Page",id:"2-sending-user-to-payment-page",children:[]},{value:"3. Callback Verification",id:"3-callback-verification",children:[]}],d={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you wanna implement a payment system in your node.js app, first, you should know how payment gateways work."),(0,i.kt)("h2",{id:"1-requesting-a-payment"},"1. Requesting A Payment"),(0,i.kt)("p",null,'You send a request to the payment service"s API, including your credentials (mostly a "merchant ID"), a callback URL, the amount of transaction and some optional fields like description and phone number.'),(0,i.kt)("p",null,'The API returns you either a "reference ID", which you\'ll use to send your user to the payment page.'),(0,i.kt)("h2",{id:"2-sending-user-to-payment-page"},"2. Sending User To Payment Page"),(0,i.kt)("p",null,"This step depends on the service you're working with, and it'll probably fall into one of the below:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You just redirect your user to the payment page"),(0,i.kt)("li",{parentName:"ol"},"You'll need to create a form on the frontend and send a POST request on the client")),(0,i.kt)("h2",{id:"3-callback-verification"},"3. Callback Verification"),(0,i.kt)("p",null,"Once the user is finished with the payment, the payment service will redirect them back to the URL you provided them earlier. in this step you check the returned info against their API to make sure it's a legit callback and it's actually coming from the payment service."),(0,i.kt)("p",null,"If the verification was successful, you'll get a ",(0,i.kt)("inlineCode",{parentName:"p"},"transactionId")," that you can show to the user."))}p.isMDXComponent=!0}}]);