"use strict";(self.webpackChunkpolypay_docs=self.webpackChunkpolypay_docs||[]).push([[698],{8315:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return r},metadata:function(){return s},toc:function(){return u},default:function(){return l}});var i=n(7462),o=n(3366),c=(n(7294),n(3905)),a=["components"],p={sidebar_position:4,title:"\u06af\u0631\u0641\u062a\u0646 \u0627\u0633\u062a\u062b\u0646\u0627 \u0647\u0627 (\u062e\u0637\u0627 \u0647\u0627)"},r=void 0,s={unversionedId:"usage/catching-exceptions",id:"usage/catching-exceptions",isDocsHomePage:!1,title:"\u06af\u0631\u0641\u062a\u0646 \u0627\u0633\u062a\u062b\u0646\u0627 \u0647\u0627 (\u062e\u0637\u0627 \u0647\u0627)",description:"\u0627\u0633\u062a\u062b\u0646\u0627 \u0647\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u0646\u062f \u062f\u0631 \u0645\u0631\u0627\u062d\u0644 \u0645\u062e\u062a\u0644\u0641 \u067e\u0631\u062f\u0627\u062e\u062a \u0627\u062a\u0641\u0627\u0642 \u0628\u06cc\u0641\u062a\u0646\u062f. \u0628\u0631\u0627\u06cc \u062f\u0627\u062f\u0646 \u0628\u0627\u0632\u062e\u0648\u0631\u062f \u0628\u0647 \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u0648\u0642\u062a\u06cc \u0627\u0634\u062a\u0628\u0627\u0647\u06cc \u0631\u062e \u0645\u06cc \u062f\u0647\u062f\u060c \u0627\u06cc\u0646 \u0627\u0633\u062a\u062b\u0646\u0627 \u0647\u0627 \u0631\u0627 \u0628\u06af\u06cc\u0631\u06cc\u062f.",source:"@site/i18n/fa/docusaurus-plugin-content-docs/current/usage/catching-exceptions.md",sourceDirName:"usage",slug:"/usage/catching-exceptions",permalink:"/polypay.js/fa/docs/usage/catching-exceptions",editUrl:"https://github.com/alitnk/polypay.js/edit/main/documentation/docs/usage/catching-exceptions.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u06af\u0631\u0641\u062a\u0646 \u0627\u0633\u062a\u062b\u0646\u0627 \u0647\u0627 (\u062e\u0637\u0627 \u0647\u0627)"},sidebar:"tutorialSidebar",previous:{title:"\u062a\u0627\u06cc\u06cc\u062f \u067e\u0631\u062f\u0627\u062e\u062a",permalink:"/polypay.js/fa/docs/usage/verify-payment"},next:{title:"\u067e\u06cc\u06a9\u0631\u0628\u0646\u062f\u06cc",permalink:"/polypay.js/fa/docs/advanced/configuration"}},u=[{value:"Request Exception",id:"request-exception",children:[]},{value:"Payment Exception",id:"payment-exception",children:[]},{value:"Verification Exception",id:"verification-exception",children:[]},{value:"Bad Config Exception",id:"bad-config-exception",children:[]}],d={toc:u};function l(e){var t=e.components,n=(0,o.Z)(e,a);return(0,c.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u0627\u0633\u062a\u062b\u0646\u0627 \u0647\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u0646\u062f \u062f\u0631 \u0645\u0631\u0627\u062d\u0644 \u0645\u062e\u062a\u0644\u0641 \u067e\u0631\u062f\u0627\u062e\u062a \u0627\u062a\u0641\u0627\u0642 \u0628\u06cc\u0641\u062a\u0646\u062f. \u0628\u0631\u0627\u06cc \u062f\u0627\u062f\u0646 \u0628\u0627\u0632\u062e\u0648\u0631\u062f \u0628\u0647 \u06a9\u0627\u0631\u0628\u0631\u0627\u0646 \u0648\u0642\u062a\u06cc \u0627\u0634\u062a\u0628\u0627\u0647\u06cc \u0631\u062e \u0645\u06cc \u062f\u0647\u062f\u060c \u0627\u06cc\u0646 \u0627\u0633\u062a\u062b\u0646\u0627 \u0647\u0627 \u0631\u0627 \u0628\u06af\u06cc\u0631\u06cc\u062f."),(0,c.kt)("h2",{id:"request-exception"},"Request Exception"),(0,c.kt)("p",null,"\u0627\u06af\u0631 \u062e\u0637\u0627\u06cc\u06cc \u062f\u0631 \u0645\u0631\u062d\u0644\u0647 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u067e\u0631\u062f\u0627\u062e\u062a \u0627\u062a\u0641\u0627\u0642 \u0628\u06cc\u0641\u062a\u062f\u060c \u0627\u0633\u062a\u062b\u0646\u0627 ",(0,c.kt)("inlineCode",{parentName:"p"},"RequestException")," \u0627\u0646\u062f\u0627\u062e\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,c.kt)("h2",{id:"payment-exception"},"Payment Exception"),(0,c.kt)("p",null,"\u0627\u06af\u0631 \u062e\u0637\u0627\u06cc\u06cc \u062f\u0631 \u0645\u0631\u062d\u0644\u0647 \u0628\u0627\u0632\u06af\u0634\u062a \u06a9\u0627\u0631\u0628\u0631 \u0627\u062a\u0641\u0627\u0642 \u0628\u06cc\u0641\u062a\u062f\u060c \u0627\u0633\u062a\u062b\u0646\u0627 ",(0,c.kt)("inlineCode",{parentName:"p"},"PaymentException")," \u0627\u0646\u062f\u0627\u062e\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,c.kt)("h2",{id:"verification-exception"},"Verification Exception"),(0,c.kt)("p",null,"\u0627\u06af\u0631 \u062e\u0637\u0627\u06cc\u06cc \u062f\u0631 \u0645\u0631\u062d\u0644\u0647 \u062a\u0627\u06cc\u06cc\u062f \u06a9\u0631\u062f\u0646 \u067e\u0631\u062f\u0627\u062e\u062a \u0627\u062a\u0641\u0627\u0642 \u0628\u06cc\u0641\u062a\u062f\u060c \u0627\u0633\u062a\u062b\u0646\u0627 ",(0,c.kt)("inlineCode",{parentName:"p"},"VerificationException")," \u0627\u0646\u062f\u0627\u062e\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."),(0,c.kt)("h2",{id:"bad-config-exception"},"Bad Config Exception"),(0,c.kt)("p",null,"\u0627\u06af\u0631 \u067e\u06cc\u06a9\u0631\u0628\u0646\u062f\u06cc \u0645\u0631\u0628\u0648\u0637 \u0628\u0647 \u062f\u0631\u0627\u06cc\u0648\u0631 \u0627\u0634\u062a\u0628\u0627\u0647 \u0628\u0648\u062f\u060c \u0627\u0633\u062a\u062b\u0646\u0627 ",(0,c.kt)("inlineCode",{parentName:"p"},"BadConfigException")," \u0627\u0646\u062f\u0627\u062e\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f."))}l.isMDXComponent=!0}}]);