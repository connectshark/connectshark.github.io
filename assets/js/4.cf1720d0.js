(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{337:function(t,n,e){"use strict";var r=e(185),a=e(7),i=e(16),s=e(26),c=e(189),o=e(187);r("match",1,(function(t,n,e){return[function(n){var e=s(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,e):new RegExp(n)[t](String(e))},function(t){var r=e(n,t,this);if(r.done)return r.value;var s=a(t),u=String(this);if(!s.global)return o(s,u);var l=s.unicode;s.lastIndex=0;for(var f,p=[],h=0;null!==(f=o(s,u));){var d=String(f[0]);p[h]=d,""===d&&(s.lastIndex=c(u,i(s.lastIndex),l)),h++}return 0===h?null:p}]}))},339:function(t,n,e){var r=e(8),a=e(4),i=e(103),s=e(343),c=e(9).f,o=e(71).f,u=e(188),l=e(186),f=e(191),p=e(17),h=e(3),d=e(35).set,g=e(190),v=e(5)("match"),m=a.RegExp,x=m.prototype,w=/a/g,S=/a/g,y=new m(w)!==w,E=f.UNSUPPORTED_Y;if(r&&i("RegExp",!y||E||h((function(){return S[v]=!1,m(w)!=w||m(S)==S||"/a/i"!=m(w,"i")})))){for(var R=function(t,n){var e,r=this instanceof R,a=u(t),i=void 0===n;if(!r&&a&&t.constructor===R&&i)return t;y?a&&!i&&(t=t.source):t instanceof R&&(i&&(n=l.call(t)),t=t.source),E&&(e=!!n&&n.indexOf("y")>-1)&&(n=n.replace(/y/g,""));var c=s(y?new m(t,n):m(t,n),r?this:x,R);return E&&e&&d(c,{sticky:e}),c},b=function(t){t in R||c(R,t,{configurable:!0,get:function(){return m[t]},set:function(n){m[t]=n}})},I=o(m),_=0;I.length>_;)b(I[_++]);x.constructor=R,R.prototype=x,p(a,"RegExp",R)}g("RegExp")},340:function(t,n,e){"use strict";var r=e(17),a=e(7),i=e(3),s=e(186),c=RegExp.prototype,o=c.toString,u=i((function(){return"/a/b"!=o.call({source:"a",flags:"b"})})),l="toString"!=o.name;(u||l)&&r(RegExp.prototype,"toString",(function(){var t=a(this),n=String(t.source),e=t.flags;return"/"+n+"/"+String(void 0===e&&t instanceof RegExp&&!("flags"in c)?s.call(t):e)}),{unsafe:!0})},343:function(t,n,e){var r=e(6),a=e(104);t.exports=function(t,n,e){var i,s;return a&&"function"==typeof(i=n.constructor)&&i!==e&&r(s=i.prototype)&&s!==e.prototype&&a(t,s),t}},363:function(t,n,e){},394:function(t,n,e){"use strict";var r=e(185),a=e(7),i=e(26),s=e(395),c=e(187);r("search",1,(function(t,n,e){return[function(n){var e=i(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,e):new RegExp(n)[t](String(e))},function(t){var r=e(n,t,this);if(r.done)return r.value;var i=a(t),o=String(this),u=i.lastIndex;s(u,0)||(i.lastIndex=0);var l=c(i,o);return s(i.lastIndex,u)||(i.lastIndex=u),null===l?-1:l.index}]}))},395:function(t,n){t.exports=Object.is||function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n}},396:function(t,n,e){"use strict";e(363)},420:function(t,n,e){"use strict";e.r(n);e(339),e(47),e(340),e(394),e(70),e(193),e(27),e(337),e(11),e(109);var r={name:"searchWord",data:function(){return{search:"",comments:[{text:"Love this!",id:523423},{text:"Super good",id:823423},{text:"You are the best",id:2039842},{text:"Ramen is my fav food ever",id:123523},{text:"Nice Nice Nice!",id:542328}]}},methods:{highlight:function(t,n){var e=new RegExp(this.search,"gi"),r=t.replace(e,'<span class="hl">'.concat(this.search,"</span>")),a=n.replace(e,'<span class="hl">'.concat(this.search,"</span>"));return""===this.search?'<span class="title">'.concat(t,'</span><span class="comment-id">').concat(n,"</span>"):'<span class="title">'.concat(r,'</span><span class="comment-id">').concat(a,"</span>")}},computed:{matchWord:function(){var t=new RegExp(this.search,"gi");return this.comments.filter((function(n){return n.text.match(t)||n.id.toString().match(t)}))}}},a=(e(396),e(21)),i=Object(a.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"search-word"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"search",attrs:{type:"text",maxlength:"20",placeholder:"要搜尋的評論"},domProps:{value:t.search},on:{input:function(n){n.target.composing||(t.search=n.target.value)}}}),t._v(" "),e("ul",{staticClass:"comments"},t._l(t.matchWord,(function(n){return e("li",{key:n.id,staticClass:"comment"},[e("div",{staticClass:"content",domProps:{innerHTML:t._s(t.highlight(n.text,n.id.toString()))}})])})),0)])}),[],!1,null,"508f974b",null);n.default=i.exports}}]);