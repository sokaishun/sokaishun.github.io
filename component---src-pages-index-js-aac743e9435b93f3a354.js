"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{8771:function(e,t,a){var i=a(7294),l=a(1597),n=a(396);t.Z=function(){var e,t,r=(0,l.useStaticQuery)("3257411868"),o=null===(e=r.site.siteMetadata)||void 0===e?void 0:e.author;null===(t=r.site.siteMetadata)||void 0===t||t.social;return i.createElement("div",{className:"bio"},i.createElement(n.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(1550)}),(null==o?void 0:o.name)&&i.createElement("p",null,(null==o?void 0:o.summary)||null," "))}},9357:function(e,t,a){var i=a(7294),l=a(5414),n=a(1597),r=function(e){var t,a,r,o=e.description,c=e.lang,s=e.meta,d=e.title,p=(0,n.useStaticQuery)("2841359383").site,m=o||p.siteMetadata.description,u=null===(t=p.siteMetadata)||void 0===t?void 0:t.title;return i.createElement(l.q,{htmlAttributes:{lang:c},title:d,titleTemplate:u?"%s | "+u:null,meta:[{name:"description",content:m},{property:"og:title",content:d},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(a=p.siteMetadata)||void 0===a||null===(r=a.social)||void 0===r?void 0:r.twitter)||""},{name:"twitter:title",content:d},{name:"twitter:description",content:m}].concat(s)})};r.defaultProps={lang:"en",meta:[],description:""},t.Z=r},6558:function(e,t,a){a.r(t);var i=a(7294),l=a(1597),n=a(8771),r=a(2230),o=a(9357);t.default=function(e){var t,a=e.data,c=e.location,s=(null===(t=a.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",d=a.allMarkdownRemark.nodes;return 0===d.length?i.createElement(r.Z,{location:c,title:s},i.createElement(o.Z,{title:"All posts"}),i.createElement(n.Z,null),i.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):i.createElement(r.Z,{location:c,title:s},i.createElement(o.Z,{title:"All posts"}),i.createElement(n.Z,null),i.createElement("ol",{style:{listStyle:"none"}},d.map((function(e){var t=e.frontmatter.title||e.fields.slug;return i.createElement("li",{key:e.fields.slug},i.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},i.createElement("header",null,i.createElement("h2",null,i.createElement(l.Link,{to:e.fields.slug,itemProp:"url"},i.createElement("span",{itemProp:"headline"},t))),i.createElement("small",null,e.frontmatter.date)),i.createElement("section",null,i.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))))}},1550:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/a84a3524ecb6f30aba9a36edd26b8d35/e5610/profile-pic.png","srcSet":"/static/a84a3524ecb6f30aba9a36edd26b8d35/e5610/profile-pic.png 50w,\\n/static/a84a3524ecb6f30aba9a36edd26b8d35/e9b55/profile-pic.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/a84a3524ecb6f30aba9a36edd26b8d35/d4bf4/profile-pic.avif 50w,\\n/static/a84a3524ecb6f30aba9a36edd26b8d35/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/a84a3524ecb6f30aba9a36edd26b8d35/3faea/profile-pic.webp 50w,\\n/static/a84a3524ecb6f30aba9a36edd26b8d35/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-pages-index-js-aac743e9435b93f3a354.js.map