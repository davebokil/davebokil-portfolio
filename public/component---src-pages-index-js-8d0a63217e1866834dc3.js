(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+7A0":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("h4O3");Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var o=r("NBI0");Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}));var i=r("uG3I");Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})}))},"6vc4":function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.NewsArticleJsonLd=t.BlogPostJsonLd=t.ArticleJsonLd=void 0;var o=n(r("pVnL")),i=n(r("QILm")),a=n(r("lSNA")),c=n(r("q1tI")),u=r("Bcl6");function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(e){var t=e.url,r=e.headline,n=e.title,o=e.images,i=void 0===o?[]:o,a=e.datePublished,s=e.dateCreated,d=e.dateModified,f=void 0===d?a:d,p=e.authorType,b=void 0===p?"Person":p,y=e.authorName,O=e.description,v=e.publisherName,g=e.publisherLogo,m=e.body,j=e.overrides,h=e.keywords,P=e.speakable,w=e.defer,k=void 0!==w&&w,E=l({"@context":"https://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":t},headline:null!=r?r:n,image:i,datePublished:a,dateModified:f,dateCreated:s,author:{"@type":b,name:y},publisher:{"@type":"Organization",name:v,logo:{"@type":"ImageObject",url:g}},description:O,articleBody:m,speakable:P?P.map((function(e){return l({"@type":"SpeakableSpecification"},e)})):void 0,keywords:Array.isArray(h)?h.join(", "):h},j);return c.default.createElement(u.JsonLd,{defer:k,json:E})};t.ArticleJsonLd=d;t.BlogPostJsonLd=function(e){var t=e.overrides,r=e.defer,n=void 0!==r&&r,a=e.publisherLogo,u=void 0===a?"":a,s=e.publisherName,f=void 0===s?"":s,p=(0,i.default)(e,["overrides","defer","publisherLogo","publisherName"]);return c.default.createElement(d,(0,o.default)({defer:n,publisherName:f,publisherLogo:u},p,{overrides:l(l({},t),{},{"@type":"BlogPosting"})}))};t.NewsArticleJsonLd=function(e){var t=e.overrides,r=e.section,n=e.defer,a=void 0!==n&&n,u=(0,i.default)(e,["overrides","section","defer"]);return c.default.createElement(d,(0,o.default)({defer:a},u,{overrides:l(l({articleSection:r},t),{},{"@type":"NewsArticle"})}))}},Bcl6:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.JsonLd=void 0;var o=n(r("q1tI")),i=r("rid2");t.JsonLd=function(e){var t=e.defer,r=e.json;return o.default.createElement(i.Helmet,{defer:t},o.default.createElement("script",{type:"application/ld+json"},JSON.stringify(r,null,2)))}},EDuE:function(e,t,r){},HBJX:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.FAQJsonLd=void 0;var o=n(r("lSNA")),i=n(r("q1tI")),a=r("Bcl6");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.FAQJsonLd=function(e){var t,r=e.questions,n=e.overrides,u=void 0===n?{}:n,s=e.defer,l=void 0!==s&&s,d=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"FAQPage",mainEntity:(t=r,t.map((function(e){var t=e.question;return{"@type":"Question",acceptedAnswer:{"@type":"Answer",text:e.answer},name:t}})))},u);return i.default.createElement(a.JsonLd,{defer:l,json:d})}},NBI0:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("6vc4");Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var o=r("uTMJ");Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}));var i=r("lAea");Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})}));var a=r("jA7+");Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})}));var c=r("r+KM");Object.keys(c).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return c[e]}})}));var u=r("SKRr");Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})}));var s=r("HBJX");Object.keys(s).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})}));var l=r("Bcl6");Object.keys(l).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})}));var d=r("yBkl");Object.keys(d).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return d[e]}})}));var f=r("ujHY");Object.keys(f).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return f[e]}})}));var p=r("ye2j");Object.keys(p).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return p[e]}})}));var b=r("krMq");Object.keys(b).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return b[e]}})}));var y=r("clPB");Object.keys(y).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return y[e]}})}))},RXBc:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return a}));var n=r("q1tI"),o=r.n(n),i=(r("EDuE"),r("+7A0"));function a(){return o.a.createElement("main",null,o.a.createElement(i.GatsbySeo,{title:"Dave Bokil - Web Developer",description:"Dave Bokil is a powerful full stack javascript developer with the innate gift of spotting potential optimizations in UX design and implementing improvements at a rapid pace."}),o.a.createElement("div",{class:"frame"},o.a.createElement("div",{class:"frame__links"},o.a.createElement("a",{href:"https://www.linkedin.com/in/davebokil/",target:"_blank",rel:"noreferrer"},"LinkedIn"),o.a.createElement("a",{href:"https://github.com/davebokil",target:"_blank",rel:"noreferrer"},"GitHub"),o.a.createElement("a",{href:"mailto:bokild@gmail.com"},"Contact"))),o.a.createElement("div",{class:"content"},o.a.createElement("h2",{class:"content__title"},o.a.createElement("span",null,"Dave Bokil"),o.a.createElement("em",null,"Web Developer")),o.a.createElement("p",null,"Dave Bokil is a powerful Full Stack Javascript Developer with the innate gift of spotting potential optimizations in UX design and implementing solutions and improvements at a rapid pace."),o.a.createElement("p",null,"He is currently Senior Full Stack Developer at the ",o.a.createElement("a",{href:"https://www.nbpa.com/",target:"blank"},"National Basketball Player's Association"))))}},SKRr:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.CourseJsonLd=void 0;var o=n(r("lSNA")),i=n(r("q1tI")),a=r("Bcl6");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.CourseJsonLd=function(e){var t=e.name,r=e.courseName,n=e.description,u=e.providerName,s=e.providerUrl,l=e.overrides,d=void 0===l?{}:l,f=e.defer,p=void 0!==f&&f,b=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"Course",name:null!=t?t:r,description:n,provider:u?{"@type":"Organization",name:u,sameAs:s}:void 0},d);return i.default.createElement(a.JsonLd,{defer:p,json:b})}},alxG:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.GatsbySeo=void 0;var o=n(r("q1tI")),i=r("2+in");t.GatsbySeo=function(e){var t=e.metaTags,r=e.linkTags,n=e.canonical,a=e.description,c=e.facebook,u=e.language,s=e.languageAlternates,l=e.mobileAlternate,d=e.nofollow,f=e.noindex,p=e.openGraph,b=e.title,y=e.titleTemplate,O=e.twitter;return o.default.createElement(i.BaseSeo,{metaTags:t,linkTags:r,canonical:n,description:a,facebook:c,language:u,languageAlternates:s,mobileAlternate:l,nofollow:d,noindex:f,openGraph:p,title:b,titleTemplate:y,twitter:O})}},clPB:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.SpeakableJsonLd=void 0;var o=n(r("lSNA")),i=n(r("q1tI")),a=r("Bcl6");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.SpeakableJsonLd=function(e){var t=e.xpath,r=e.cssSelector,n=e.overrides,u=void 0===n?{}:n,s=e.defer,l=void 0!==s&&s;if(t&&r)throw new Error("Speakable should use either xpath or the cssSelector, not both.");var d=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"SpeakableSpecification",cssSelector:r,xpath:t},u);return i.default.createElement(a.JsonLd,{defer:l,json:d})}},h4O3:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("2+in");Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var o=r("alxG");Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}))},"jA7+":function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.BreadcrumbJsonLd=void 0;var o=n(r("lSNA")),i=n(r("q1tI")),a=r("Bcl6");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.BreadcrumbJsonLd=function(e){var t=e.itemListElements,r=void 0===t?[]:t,n=e.overrides,u=void 0===n?{}:n,s=e.defer,l=void 0!==s&&s,d=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:r.map((function(e){return{"@type":"ListItem",position:e.position,item:{"@id":e.item,name:e.name,"@type":"Thing"}}}))},u);return i.default.createElement(a.JsonLd,{defer:l,json:d})}},krMq:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.SocialProfileJsonLd=void 0;var o=n(r("q1tI")),i=r("rid2");t.SocialProfileJsonLd=function(e){var t=e.type,r=e.name,n=e.url,a=e.sameAs,c=void 0===a?[]:a,u=e.defer,s=void 0!==u&&u,l='{\n    "@context": "http://schema.org",\n    "@type": "'.concat(t,'",\n    "name": "').concat(r,'",\n    "url": "').concat(n,'",\n    "sameAs": [\n      ').concat(c.map((function(e){return'"'.concat(e,'"')})).toString(),"\n     ]\n  }");return o.default.createElement(i.Helmet,{defer:s},o.default.createElement("script",{type:"application/ld+json"},l))}},lAea:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.BookJsonLd=void 0;var o=n(r("QILm")),i=n(r("lSNA")),a=n(r("q1tI")),c=r("Bcl6");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.BookJsonLd=function(e){var t=e.name,r=e.author,n=e.url,i=e.workExample,u=void 0===i?[]:i,l=e.id,d=e.sameAs,f=e.overrides,p=void 0===f?{}:f,b=e.defer,y=void 0!==b&&b,O=s({"@context":"https://schema.org","@type":"Book",name:t,url:n,"@id":l,sameAs:d,author:s({"@type":"Person"},r),workExample:u.map((function(e){var t,r=e.bookFormat,n=e.potentialAction,i=e.author,a=(0,o.default)(e,["bookFormat","potentialAction","author"]);return s(s({"@type":"Book",bookFormat:(t=r,t?"https://schema.org/".concat(t):void 0)},a),{},{person:s({"@type":"Person"},i),potentialAction:s({"@type":"ReadAction"},n)})}))},p);return a.default.createElement(c.JsonLd,{defer:y,json:O})}},"r+KM":function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.CorporateContactJsonLd=void 0;var o=n(r("q1tI")),i=r("rid2"),a=function(e){return Array.isArray(e)?"[".concat(e.map((function(e){return'"'.concat(e,'"')})).toString(),"]"):'"'.concat(e,'"')};t.CorporateContactJsonLd=function(e){var t=e.url,r=e.logo,n=e.contactPoint,c=e.defer,u=void 0!==c&&c,s='{\n    "@context": "https://schema.org",\n    "@type": "Organization",\n    "url": "'.concat(t,'",\n    ').concat(r?'"logo": "'.concat(r,'",'):"",'\n    "contactPoint": [').concat(function(e){return e.map((function(e){return'{\n    "@type": "ContactPoint",\n    "telephone": "'.concat(e.telephone,'",\n    "contactType": "').concat(e.contactType,'"').concat(e.areaServed?',\n    "areaServed": '.concat(a(e.areaServed)):"").concat(e.availableLanguage?',\n    "availableLanguage": '.concat(a(e.availableLanguage)):"").concat(e.contactOption?',\n    "contactOption": "'.concat(e.contactOption.toString(),'"'):"","\n    }")}))}(n).toString(),"]\n  }");return o.default.createElement(i.Helmet,{defer:u},o.default.createElement("script",{type:"application/ld+json"},s))}},uG3I:function(e,t,r){},uTMJ:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.BlogJsonLd=void 0;var o=n(r("lSNA")),i=n(r("q1tI")),a=r("Bcl6");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.BlogJsonLd=function(e){var t=e.url,r=e.headline,n=e.title,o=e.images,c=void 0===o?[]:o,s=e.datePublished,l=e.dateModified,d=void 0===l?null:l,f=e.authorName,p=e.authorType,b=void 0===p?"Person":p,y=e.keywords,O=e.description,v=e.publisherName,g=e.publisherLogo,m=e.posts,j=void 0===m?[]:m,h=e.issn,P=e.overrides,w=void 0===P?{}:P,k=e.defer,E=void 0!==k&&k,S=u({"@context":"https://schema.org","@type":"Blog",mainEntityOfPage:{"@type":"Blog","@id":t},headline:null!=r?r:n,keywords:y,issn:h,image:c,datePublished:s,dateModified:null!=d?d:s,description:O,author:f?{"@type":b,name:f}:void 0,publisher:v?{"@type":"Organization",name:v,logo:g?{"@type":"ImageObject",url:g}:void 0}:void 0,blogPost:j.map((function(e){return u({"@type":"BlogPosting"},e)}))},w);return i.default.createElement(a.JsonLd,{defer:E,json:S})}},ujHY:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.LogoJsonLd=void 0;var o=n(r("lSNA")),i=n(r("q1tI")),a=r("Bcl6");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.LogoJsonLd=function(e){var t=e.url,r=e.logo,n=e.overrides,u=void 0===n?{}:n,s=e.defer,l=void 0!==s&&s,d=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({"@context":"https://schema.org","@type":"Organization",url:t,logo:r},u);return i.default.createElement(a.JsonLd,{defer:l,json:d})}},yBkl:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.LocalBusinessJsonLd=void 0;var o=n(r("lSNA")),i=n(r("QILm")),a=n(r("q1tI")),c=r("Bcl6");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={Mon:"Monday",Tues:"Tuesday",Wed:"Wednesday",Thurs:"Thursday",Fri:"Friday",Sat:"Saturday",Sun:"Sunday"},d=function(e){var t;return"http://schema.org/".concat(null!==(t=l[e])&&void 0!==t?t:e)},f=function(e){return e?Array.isArray(e)?e.map(d):d(e):void 0},p=function(e){if(e)return Array.isArray(e)?e.map((function(e){var t=e.dayOfWeek,r=(0,i.default)(e,["dayOfWeek"]);return s({"@type":"OpeningHoursSpecification",dayOfWeek:f(t)},r)})):s(s({"@type":"OpeningHoursSpecification"},e),{},{dayOfWeek:f(e.dayOfWeek)})};t.LocalBusinessJsonLd=function(e){var t=e.type,r=e.id,n=e.name,o=e.description,i=e.url,u=e.telephone,l=e.address,d=e.geo,f=e.images,b=e.openingHours,y=e.rating,O=e.priceRange,v=e.overrides,g=void 0===v?{}:v,m=e.defer,j=void 0!==m&&m,h=s({"@context":"https://schema.org","@type":t,"@id":r,name:n,description:o,url:i,telephone:u,priceRange:O,image:f,geo:s({"@type":"GeoCoordinates"},d),address:s({"@type":"PostalAddress"},l),aggregateRating:y?s({"@type":"AggregateRating"},y):void 0,openingHoursSpecification:p(b)},g);return a.default.createElement(c.JsonLd,{defer:j,json:h})}},ye2j:function(e,t,r){"use strict";var n=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.ProductJsonLd=void 0;var o=n(r("QILm")),i=n(r("lSNA")),a=n(r("q1tI")),c=r("Bcl6");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={Discontinued:"http://schema.org/Discontinued",InStock:"http://schema.org/InStock",InStoreOnly:"http://schema.org/InStoreOnly",LimitedAvailability:"http://schema.org/LimitedAvailability",OnlineOnly:"http://schema.org/OnlineOnly",OutOfStock:"http://schema.org/OutOfStock",PreOrder:"http://schema.org/PreOrder",PreSale:"http://schema.org/PreSale",SoldOut:"http://schema.org/SoldOut"},d={DamagedCondition:"http://schema.org/DamagedCondition",NewCondition:"http://schema.org/NewCondition",RefurbishedCondition:"http://schema.org/RefurbishedCondition",UsedCondition:"http://schema.org/UsedCondition"};t.ProductJsonLd=function(e){var t,r,n,i=e.name,u=e.productName,f=e.images,p=void 0===f?[]:f,b=e.description,y=e.sku,O=e.gtin12,v=e.gtin,g=e.gtin8,m=e.gtin13,j=e.gtin14,h=e.mpn,P=e.brand,w=e.reviews,k=void 0===w?[]:w,E=e.aggregateRating,S=e.offers,_=e.offersType,L=void 0===_?"Offer":_,A=e.overrides,D=void 0===A?{}:A,J=e.defer,M=void 0!==J&&J,B=s({"@context":"https://schema.org","@type":"Product",name:null!=i?i:u,image:p,sku:y,gtin:v,gtin8:g,gtin12:O,gtin13:m,gtin14:j,mpn:h,brand:P?{"@type":"Brand",name:P}:void 0,description:b,review:k.map((function(e){var t=e.reviewRating;return s(s({"@type":"Review"},(0,o.default)(e,["reviewRating"])),{},{reviewRating:s({"@type":"Rating"},t)})})),aggregateRating:E?s({"@type":"AggregateRating"},E):void 0,offers:S?s(s({"@type":L},S),{},{availability:(n=S.availability,n?l[n]:void 0),itemCondition:(r=S.itemCondition,r?d[r]:void 0),seller:S.seller?{"@type":null!==(t=S.seller.type)&&void 0!==t?t:"Organization",name:S.seller.name}:void 0}):void 0},D);return a.default.createElement(c.JsonLd,{defer:M,json:B})}}}]);
//# sourceMappingURL=component---src-pages-index-js-8d0a63217e1866834dc3.js.map