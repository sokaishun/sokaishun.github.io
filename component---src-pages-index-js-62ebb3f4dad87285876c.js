"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[9678],{6558:function(e,t,l){l.r(t);var a=l(7294),n=l(1597),r=l(8771),s=l(751),i=l(9357),o=l(6162),c=l(1804),m=l.n(c),u=l(3201);t.default=function(e){var t,l=e.data,c=e.location,d=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",f=l.allMarkdownRemark.nodes;return 0===f.length?a.createElement(s.Z,{location:c,title:d},a.createElement(i.Z,{title:"All posts"}),a.createElement(r.Z,null),a.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):a.createElement(s.Z,{location:c,title:d},a.createElement(i.Z,{title:"All posts"}),a.createElement(r.Z,null),a.createElement("ol",{style:{listStyle:"none"}},f.map((function(e){var t,l=e.frontmatter.title||e.fields.slug,r=null===(t=e.frontmatter.thumbnail)||void 0===t?void 0:t.childImageSharp.fluid;return a.createElement("li",{key:e.fields.slug},a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",null,a.createElement("h2",null,a.createElement(n.Link,{to:e.fields.slug,itemProp:"url"},a.createElement("span",{itemProp:"headline"},l))),a.createElement("small",null,e.frontmatter.date)),a.createElement("section",null,a.createElement("div",{className:"pb-2"},a.createElement(o.Z,{className:"object-none shadow rounded max-w-full max-h-[20rem] align-middle border-none",fluid:r,alt:"Thumbnail画像"})),e.frontmatter.tags?a.createElement("div",{className:"tags-container pb-2 flex flex-row justify-start items-center  space-x-2"},a.createElement(u.fxx,null),a.createElement("ul",{className:"taglist"},e.frontmatter.tags.map((function(e){return a.createElement("li",{key:e+"tag",className:"bg-blue-100 hover:bg-blue-200 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 dark:hover:bg-blue-300"},a.createElement(n.Link,{to:"/tags/"+m()(e)+"/"},e))})))):null,a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))}))),a.createElement("h2",{className:"flex flex-row justify-start items-center  space-x-2"},a.createElement(u.YxP,null),a.createElement("div",null,"Tags")),a.createElement("ul",{className:"flex flex-row justify-start items-center  space-x-2"},l.allMarkdownRemark.group.map((function(e){return a.createElement("li",{key:e.fieldValue,type:"button",class:"inline-flex items-center px-3 py-2 text-sm font-medium text-center  bg-blue-200 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-black-200 dark:hover:bg-black-800 dark:focus:ring-blue-800"},a.createElement(n.Link,{to:"/tags/"+m()(e.fieldValue)+"/"},e.fieldValue,a.createElement("span",{class:"inline-flex justify-center items-center ml-2 w-5 h-5 text-xs font-semibold dark:bg-blue-500 bg-yellow-500 rounded-full"},e.totalCount)))}))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-62ebb3f4dad87285876c.js.map