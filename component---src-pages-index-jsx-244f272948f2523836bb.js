webpackJsonp([0xc23565d713b7],{47:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=a(2),u=n(s),c=a(14),i=n(c),f=a(83),d=n(f);a(59);var p=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.data.node.frontmatter,t=e.title,a=e.category,n=e.description,r=this.props.data.node.fields,o=r.slug,l=r.categorySlug,s=r.date;return u.default.createElement("div",{className:"post"},u.default.createElement("div",{className:"post__meta"},u.default.createElement("time",{className:"post__meta-time",dateTime:(0,d.default)(s).format("MMMM D, YYYY")},(0,d.default)(s).format("MMMM YYYY")),u.default.createElement("span",{className:"post__meta-divider"}),u.default.createElement("span",{className:"post__meta-category",key:l},u.default.createElement(i.default,{to:l,className:"post__meta-category-link"},a))),u.default.createElement("h2",{className:"post__title"},u.default.createElement(i.default,{className:"post__title-link",to:o},t)),u.default.createElement("p",{className:"post__description"},n),u.default.createElement(i.default,{className:"post__readmore",to:o},"Read"))},t}(u.default.Component);t.default=p,e.exports=t.default},59:function(e,t){},251:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var s=a(2),u=n(s),c=a(21),i=n(c),f=a(47),d=n(f),p=a(23),m=n(p),_=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=[],t=this.props.data.site.siteMetadata,a=t.title,n=t.subtitle,r=this.props.data.allMarkdownRemark.edges;return r.forEach(function(t){e.push(u.default.createElement(d.default,{data:t,key:t.node.fields.slug}))}),u.default.createElement("div",null,u.default.createElement(i.default,null,u.default.createElement("title",null,a),u.default.createElement("meta",{name:"description",content:n})),u.default.createElement(m.default,{siteMetadata:this.props.data.site.siteMetadata}),u.default.createElement("div",{className:"content"},u.default.createElement("div",{className:"content__inner"},e)))},t}(u.default.Component);t.default=_;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-jsx-244f272948f2523836bb.js.map