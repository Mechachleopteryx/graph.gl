(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{464:function(n,r,e){var t=e(465);function o(n){return{ladder:r,complete:function(r){if(!r||r<1)throw new Error("At least two nodes are expected for complete graph");var e,t,o=n();for(e=0;e<r;++e)for(t=e+1;t<r;++t)e!==t&&o.addLink(e,t);return o},completeBipartite:function(r,e){if(!r||!e||r<0||e<0)throw new Error("Graph dimensions are invalid. Number of nodes in each partition should be greater than 0");var t,o,i=n();for(t=0;t<r;++t)for(o=r;o<r+e;++o)i.addLink(t,o);return i},balancedBinTree:function(r){if(r<0)throw new Error("Invalid number of nodes in balanced tree");var e,t=n(),o=Math.pow(2,r);0===r&&t.addNode(1);for(e=1;e<o;++e){var i=e,a=2*i,f=2*i+1;t.addLink(i,a),t.addLink(i,f)}return t},path:function(r){if(!r||r<0)throw new Error("Invalid number of nodes");var e,t=n();for(t.addNode(0),e=1;e<r;++e)t.addLink(e-1,e);return t},circularLadder:function(n){if(!n||n<0)throw new Error("Invalid number of nodes");var e=r(n);return e.addLink(0,n-1),e.addLink(n,2*n-1),e},grid:function(r,e){if(r<1||e<1)throw new Error("Invalid number of nodes in grid graph");var t,o,i=n();if(1===r&&1===e)return i.addNode(0),i;for(t=0;t<r;++t)for(o=0;o<e;++o){var a=t+o*r;t>0&&i.addLink(a,t-1+o*r),o>0&&i.addLink(a,t+(o-1)*r)}return i},grid3:function(r,e,t){if(r<1||e<1||t<1)throw new Error("Invalid number of nodes in grid3 graph");var o,i,a,f=n();if(1===r&&1===e&&1===t)return f.addNode(0),f;for(a=0;a<t;++a)for(o=0;o<r;++o)for(i=0;i<e;++i){var u=a*r*e,d=o+i*r+u;o>0&&f.addLink(d,o-1+i*r+u),i>0&&f.addLink(d,o+(i-1)*r+u),a>0&&f.addLink(d,o+i*r+(a-1)*r*e)}return f},noLinks:function(r){if(r<0)throw new Error("Number of nodes should be >= 0");var e,t=n();for(e=0;e<r;++e)t.addNode(e);return t},wattsStrogatz:function(r,t,o,i){if(t>=r)throw new Error("Choose smaller `k`. It cannot be larger than number of nodes `n`");var a,f,u=e(467).random(i||42),d=n();for(a=0;a<r;++a)d.addNode(a);for(var c=Math.floor(t/2+1),l=1;l<c;++l)for(a=0;a<r;++a)f=(l+a)%r,d.addLink(a,f);for(l=1;l<c;++l)for(a=0;a<r;++a)if(u.nextDouble()<o){var s=a;f=(l+a)%r;var h=u.next(r),v=h===s||d.hasLink(s,h);if(v&&d.getLinks(s).length===r-1)continue;for(;v;)h=u.next(r),v=h===s||d.hasLink(s,h);var p=d.hasLink(s,f);d.removeLink(p),d.addLink(s,h)}return d},cliqueCircle:function(r,e){if(r<1)throw new Error("Invalid number of cliqueCount in cliqueCircle");if(e<1)throw new Error("Invalid number of cliqueSize in cliqueCircle");for(var t=n(),o=0;o<r;++o)i(e,o*e),o>0&&t.addLink(o*e,o*e-1);return t.addLink(0,t.getNodesCount()-1),t;function i(n,r){for(var e=0;e<n;++e)t.addNode(e+r);for(var e=0;e<n;++e)for(var o=e+1;o<n;++o)t.addLink(e+r,o+r)}}};function r(r){if(!r||r<0)throw new Error("Invalid number of nodes");var e,t=n();for(e=0;e<r-1;++e)t.addLink(e,e+1),t.addLink(r+e,r+e+1),t.addLink(e,r+e);return t.addLink(r-1,2*r-1),t}}n.exports=o(t),n.exports.factory=o},465:function(n,r,e){e(44),e(3),e(4),e(1),e(8),n.exports=function(n){"uniqueLinkId"in(n=n||{})&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n","\n","Note: there is also change in default behavior: From now on each graph\nis considered to be not a multigraph by default (each edge is unique)."),n.multigraph=n.uniqueLinkId);void 0===n.multigraph&&(n.multigraph=!1);var r="function"==typeof Object.create?Object.create(null):{},e=[],d={},c=0,l=0,s=Object.keys?D:S,h=n.multigraph?function(n,r,e){var t=u(n,r),o=d.hasOwnProperty(t);if(o||q(n,r)){o||(d[t]=0);var i="@"+ ++d[t];t=u(n+i,r+i)}return new f(n,r,e,t)}:function(n,r,e){var t=u(n,r);return new f(n,r,e,t)},v=[],p=O,k=O,g=O,w=O,b={addNode:x,addLink:function(n,r,t){g();var o=I(n)||x(n),i=I(r)||x(r),f=h(n,r,t);e.push(f),a(o,f),n!==r&&a(i,f);return p(f,"add"),w(),f},removeLink:N,removeNode:E,getNode:I,getNodesCount:function(){return c},getLinksCount:function(){return e.length},getLinks:function(n){var r=I(n);return r?r.links:null},forEachNode:s,forEachLinkedNode:function(n,e,t){var o=I(n);if(o&&o.links&&"function"==typeof e)return t?function(n,e,t){for(var o=0;o<n.length;++o){var i=n[o];if(i.fromId===e&&t(r[i.toId],i))return!0}}(o.links,n,e):function(n,e,t){for(var o=0;o<n.length;++o){var i=n[o],a=i.fromId===e?i.toId:i.fromId;if(t(r[a],i))return!0}}(o.links,n,e)},forEachLink:function(n){var r,t;if("function"==typeof n)for(r=0,t=e.length;r<t;++r)n(e[r])},beginUpdate:g,endUpdate:w,clear:function(){g(),s(function(n){E(n.id)}),w()},hasLink:q,hasNode:I,getLink:q};return t(b),m=b.on,b.on=function(){return b.beginUpdate=g=j,b.endUpdate=w=C,p=L,k=y,b.on=m,m.apply(b,arguments)},b;var m;function L(n,r){v.push({link:n,changeType:r})}function y(n,r){v.push({node:n,changeType:r})}function x(n,e){if(void 0===n)throw new Error("Invalid node identifier");g();var t=I(n);return t?(t.data=e,k(t,"update")):(t=new i(n,e),c++,k(t,"add")),r[n]=t,w(),t}function I(n){return r[n]}function E(n){var e=I(n);if(!e)return!1;g();var t=e.links;if(t){e.links=null;for(var o=0;o<t.length;++o)N(t[o])}return delete r[n],c--,k(e,"remove"),w(),!0}function N(n){if(!n)return!1;var r=o(n,e);if(r<0)return!1;g(),e.splice(r,1);var t=I(n.fromId),i=I(n.toId);return t&&(r=o(n,t.links))>=0&&t.links.splice(r,1),i&&(r=o(n,i.links))>=0&&i.links.splice(r,1),p(n,"remove"),w(),!0}function q(n,r){var e,t=I(n);if(!t||!t.links)return null;for(e=0;e<t.links.length;++e){var o=t.links[e];if(o.fromId===n&&o.toId===r)return o}return null}function O(){}function j(){l+=1}function C(){0===(l-=1)&&v.length>0&&(b.fire("changed",v),v.length=0)}function D(n){if("function"==typeof n)for(var e=Object.keys(r),t=0;t<e.length;++t)if(n(r[e[t]]))return!0}function S(n){var e;if("function"==typeof n)for(e in r)if(n(r[e]))return!0}};var t=e(466);function o(n,r){if(!r)return-1;if(r.indexOf)return r.indexOf(n);var e,t=r.length;for(e=0;e<t;e+=1)if(r[e]===n)return e;return-1}function i(n,r){this.id=n,this.links=null,this.data=r}function a(n,r){n.links?n.links.push(r):n.links=[r]}function f(n,r,e,t){this.fromId=n,this.toId=r,this.data=e,this.id=t}function u(n,r){return n.toString()+"👉 "+r.toString()}},466:function(n,r){n.exports=function(n){!function(n){if(!n)throw new Error("Eventify cannot use falsy object as events subject");for(var r=["on","fire","off"],e=0;e<r.length;++e)if(n.hasOwnProperty(r[e]))throw new Error("Subject cannot be eventified, since it already has property '"+r[e]+"'")}(n);var r=function(n){var r=Object.create(null);return{on:function(e,t,o){if("function"!=typeof t)throw new Error("callback is expected to be a function");var i=r[e];return i||(i=r[e]=[]),i.push({callback:t,ctx:o}),n},off:function(e,t){var o=void 0===e;if(o)return r=Object.create(null),n;if(r[e]){var i="function"!=typeof t;if(i)delete r[e];else for(var a=r[e],f=0;f<a.length;++f)a[f].callback===t&&a.splice(f,1)}return n},fire:function(e){var t,o=r[e];if(!o)return n;arguments.length>1&&(t=Array.prototype.splice.call(arguments,1));for(var i=0;i<o.length;++i){var a=o[i];a.callback.apply(a.ctx,t)}return n}}}(n);return n.on=r.on,n.off=r.off,n.fire=r.fire,n}},467:function(n,r){function e(n){return new t("number"==typeof n?n:+new Date)}function t(n){this.seed=n}function o(){var n=this.seed;return n=4294967295&(3042594569^(n=(n=4294967295&((n=(n=4294967295&(3345072700^(n=n+2127912214+(n<<12)&4294967295)^n>>>19))+374761393+(n<<5)&4294967295)+3550635116^n<<9))+4251993797+(n<<3)&4294967295)^n>>>16),this.seed=n,(268435455&n)/268435456}n.exports=e,n.exports.random=e,n.exports.randomIterator=function(n,r){var t=r||e();if("function"!=typeof t.next)throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:function(r){var e,o,i;for(e=n.length-1;e>0;--e)o=t.next(e+1),i=n[o],n[o]=n[e],n[e]=i,r(i);n.length&&r(n[0])},shuffle:function(){var r,e,o;for(r=n.length-1;r>0;--r)e=t.next(r+1),o=n[e],n[e]=n[r],n[r]=o;return n}}},t.prototype.next=function(n){return Math.floor(this.nextDouble()*n)},t.prototype.nextDouble=o,t.prototype.uniform=o,t.prototype.gaussian=function(){var n,r,e;do{r=2*this.nextDouble()-1,e=2*this.nextDouble()-1,n=r*r+e*e}while(n>=1||0===n);return r*Math.sqrt(-2*Math.log(n)/n)}}}]);
//# sourceMappingURL=14-9b51e2720d0b66f8832b.js.map