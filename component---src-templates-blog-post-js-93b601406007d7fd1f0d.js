(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.__esModule=!0,e.exports.default=e.exports},6132:function(e,t,n){"use strict";var a=n(5318);t.__esModule=!0,t.default=void 0;var r=a(n(1506)),i=a(n(5354)),o=a(n(9713)),l=a(n(7294)),u=a(n(5697)),c=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return t=e.call.apply(e,[this].concat(a))||this,(0,o.default)((0,r.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},n.toggleTheme=function(e){window.__setPreferredTheme(e)},n.render=function(){return l.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(l.default.Component);c.propTypes={children:u.default.func.isRequired};var f=c;t.default=f},3071:function(e,t,n){"use strict";var a=n(5318)(n(6132));t.L=a.default},8771:function(e,t,n){"use strict";var a=n(7294),r=n(1597),i=n(396);t.Z=function(){var e,t,o=(0,r.useStaticQuery)("3257411868"),l=null===(e=o.site.siteMetadata)||void 0===e?void 0:e.author;null===(t=o.site.siteMetadata)||void 0===t||t.social;return a.createElement("div",{className:"bio"},a.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:n(1550)}),(null==l?void 0:l.name)&&a.createElement("p",null,(null==l?void 0:l.summary)||null," "))}},8678:function(e,t,n){"use strict";var a=n(7294),r=n(1597),i=n(3071);t.Z=function(e){var t,n=e.location,o=e.title,l=e.children,u="/"===n.pathname;return t=u?a.createElement("h1",{className:"main-heading"},a.createElement(r.Link,{to:"/"},o)):a.createElement(r.Link,{className:"header-link-home",to:"/"},o),a.createElement("div",{className:"global-wrapper","data-is-root-path":u},a.createElement(i.L,null,(function(e){var t=e.theme,n=e.toggleTheme;return a.createElement("div",{className:"flex items-center justify-center w-full mb-12"},a.createElement("label",{for:"toogleA",className:"flex items-center cursor-pointer"},a.createElement("div",{class:"mr-3 text-sm"},"Light"),a.createElement("div",{className:"relative"},a.createElement("input",{id:"toogleA",type:"checkbox",className:"sr-only",onChange:function(e){return n(e.target.checked?"dark":"light")},checked:"dark"===t}),a.createElement("div",{className:"w-10 h-4 bg-gray-400 rounded-full shadow-inner"}),a.createElement("div",{className:"dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"})),a.createElement("div",{className:"ml-3  text-sm"},"Dark")))})),a.createElement("header",{className:"global-header"},t),a.createElement("main",null,l),a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",a.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},9357:function(e,t,n){"use strict";var a=n(7294),r=n(5414),i=n(1597),o=function(e){var t,n,o,l=e.description,u=e.lang,c=e.meta,f=e.title,s=(0,i.useStaticQuery)("2841359383").site,d=l||s.siteMetadata.description,m=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(r.q,{htmlAttributes:{lang:u},title:f,titleTemplate:m?"%s | "+m:null,meta:[{name:"description",content:d},{property:"og:title",content:f},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(n=s.siteMetadata)||void 0===n||null===(o=n.social)||void 0===o?void 0:o.twitter)||""},{name:"twitter:title",content:f},{name:"twitter:description",content:d}].concat(c)})};o.defaultProps={lang:"en",meta:[],description:""},t.Z=o},4982:function(e,t,n){"use strict";n.r(t);var a=n(7294),r=n(1597),i=n(8771),o=n(8678),l=n(9357),u=n(1804),c=n.n(u);t.default=function(e){var t,n=e.data,u=e.location,f=n.markdownRemark,s=(null===(t=n.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",d=n.previous,m=n.next;return a.createElement(o.Z,{location:u,title:s},a.createElement(l.Z,{title:f.frontmatter.title,description:f.frontmatter.description||f.excerpt}),a.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h1",{itemProp:"headline"},f.frontmatter.title),a.createElement("p",null,f.frontmatter.date),f.frontmatter.tags?a.createElement("div",{className:"tags-container"},a.createElement("ul",{className:"taglist"},f.frontmatter.tags.map((function(e){return a.createElement("li",{key:e+"tag",className:"bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"},a.createElement(r.Link,{to:"/tags/"+c()(e)+"/"},e))})))):null),a.createElement("section",{dangerouslySetInnerHTML:{__html:f.html},itemProp:"articleBody"}),a.createElement("hr",null),a.createElement("footer",null,a.createElement(i.Z,null))),a.createElement("nav",{className:"blog-post-nav"},a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},a.createElement("li",null,d&&a.createElement(r.Link,{to:d.fields.slug,rel:"prev"},"← ",d.frontmatter.title)),a.createElement("li",null,m&&a.createElement(r.Link,{to:m.fields.slug,rel:"next"},m.frontmatter.title," →")))))}},2705:function(e,t,n){var a=n(5639).Symbol;e.exports=a},9932:function(e){e.exports=function(e,t){for(var n=-1,a=null==e?0:e.length,r=Array(a);++n<a;)r[n]=t(e[n],n,e);return r}},2663:function(e){e.exports=function(e,t,n,a){var r=-1,i=null==e?0:e.length;for(a&&i&&(n=e[++r]);++r<i;)n=t(n,e[r],r,e);return n}},9029:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},4239:function(e,t,n){var a=n(2705),r=n(9607),i=n(2333),o=a?a.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?r(e):i(e)}},8674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},531:function(e,t,n){var a=n(2705),r=n(9932),i=n(1469),o=n(3448),l=a?a.prototype:void 0,u=l?l.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return r(t,e)+"";if(o(t))return u?u.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},5393:function(e,t,n){var a=n(2663),r=n(3816),i=n(8748),o=RegExp("['’]","g");e.exports=function(e){return function(t){return a(i(r(t).replace(o,"")),e,"")}}},9389:function(e,t,n){var a=n(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=a},1957:function(e,t,n){var a="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=a},9607:function(e,t,n){var a=n(2705),r=Object.prototype,i=r.hasOwnProperty,o=r.toString,l=a?a.toStringTag:void 0;e.exports=function(e){var t=i.call(e,l),n=e[l];try{e[l]=void 0;var a=!0}catch(u){}var r=o.call(e);return a&&(t?e[l]=n:delete e[l]),r}},3157:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,n){var a=n(1957),r="object"==typeof self&&self&&self.Object===Object&&self,i=a||r||Function("return this")();e.exports=i},2757:function(e){var t="\\u2700-\\u27bf",n="a-z\\xdf-\\xf6\\xf8-\\xff",a="A-Z\\xc0-\\xd6\\xd8-\\xde",r="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",i="["+r+"]",o="\\d+",l="[\\u2700-\\u27bf]",u="["+n+"]",c="[^\\ud800-\\udfff"+r+o+t+n+a+"]",f="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",d="["+a+"]",m="(?:"+u+"|"+c+")",p="(?:"+d+"|"+c+")",b="(?:['’](?:d|ll|m|re|s|t|ve))?",g="(?:['’](?:D|LL|M|RE|S|T|VE))?",v="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",x="[\\ufe0e\\ufe0f]?",h=x+v+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",f,s].join("|")+")"+x+v+")*"),y="(?:"+[l,f,s].join("|")+")"+h,E=RegExp([d+"?"+u+"+"+b+"(?="+[i,d,"$"].join("|")+")",p+"+"+g+"(?="+[i,d+m,"$"].join("|")+")",d+"?"+m+"+"+b,d+"+"+g,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",o,y].join("|"),"g");e.exports=function(e){return e.match(E)||[]}},3816:function(e,t,n){var a=n(9389),r=n(9833),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,o=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=r(e))&&e.replace(i,a).replace(o,"")}},1469:function(e){var t=Array.isArray;e.exports=t},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,n){var a=n(4239),r=n(7005);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==a(e)}},1804:function(e,t,n){var a=n(5393)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=a},9833:function(e,t,n){var a=n(531);e.exports=function(e){return null==e?"":a(e)}},8748:function(e,t,n){var a=n(9029),r=n(3157),i=n(9833),o=n(2757);e.exports=function(e,t,n){return e=i(e),void 0===(t=n?void 0:t)?r(e)?o(e):a(e):e.match(t)||[]}},1550:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/a84a3524ecb6f30aba9a36edd26b8d35/e5610/profile-pic.png","srcSet":"/static/a84a3524ecb6f30aba9a36edd26b8d35/e5610/profile-pic.png 50w,\\n/static/a84a3524ecb6f30aba9a36edd26b8d35/e9b55/profile-pic.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/a84a3524ecb6f30aba9a36edd26b8d35/d4bf4/profile-pic.avif 50w,\\n/static/a84a3524ecb6f30aba9a36edd26b8d35/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/a84a3524ecb6f30aba9a36edd26b8d35/3faea/profile-pic.webp 50w,\\n/static/a84a3524ecb6f30aba9a36edd26b8d35/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-93b601406007d7fd1f0d.js.map