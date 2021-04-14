(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{455:function(t,a,s){"use strict";s.r(a);var n=s(21),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"陣列運用筆記-findindex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#陣列運用筆記-findindex"}},[t._v("#")]),t._v(" 陣列運用筆記 "),s("code",[t._v("findIndex()")])]),t._v(" "),s("blockquote",[s("p",[t._v("繼上一篇 "),s("a",{attrs:{href:"/teach/arrayfind"}},[t._v("陣列運用筆記 "),s("code",[t._v("find()")])]),t._v("同一系列")])]),t._v(" "),s("p",[t._v("說到"),s("code",[t._v("find()")]),t._v("一定不可或缺的就是同家族的"),s("code",[t._v("findIndex()")])]),t._v(" "),s("h2",{attrs:{id:"方法介紹"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法介紹"}},[t._v("#")]),t._v(" 方法介紹")]),t._v(" "),s("blockquote",[s("p",[t._v("findIndex() 方法將依據提供的測試函式，尋找陣列中符合的元素，並返回其 index（索引）。如果沒有符合的對象，將返回 -1 。"),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex",target:"_blank",rel:"noopener noreferrer"}},[t._v("mdn"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("沿用上一個範例")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" names "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Bob'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Ivy'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Mike'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'John'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" answer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" names"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findIndex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" item "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("Ivy")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("answer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1")]),t._v("\n")])])]),s("p",[t._v("和"),s("code",[t._v("find()")]),t._v("一樣可以在全是物件的陣列中找到符合條件的第一個")]),t._v(" "),s("h2",{attrs:{id:"方法運用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法運用"}},[t._v("#")]),t._v(" 方法運用")]),t._v(" "),s("h3",{attrs:{id:"比較多會使用的狀況是在陣列中移除指定項目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#比較多會使用的狀況是在陣列中移除指定項目"}},[t._v("#")]),t._v(" 比較多會使用的狀況是在陣列中移除指定項目")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("情境")]),t._v(" "),s("p",[t._v("在陣列中移除"),s("code",[t._v("age: 65")]),t._v("的項目")])]),t._v(" "),s("p",[t._v("作法會先檢查該項的索引值再進行移除")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" people "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    age"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Bob'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    age"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Ivy'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    age"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Mike'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    age"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'John'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" targetIndex "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" people"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findIndex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" item"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("targetIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newArray "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("people"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" targetIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("people"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("slice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("targetIndex"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newArray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//0: {age: 20, name: "Bob"} 1: {age: 12, name: "Ivy"} 2: {age: 12, name: "John"}')]),t._v("\n")])])]),s("h3",{attrs:{id:"和indexof-比較"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#和indexof-比較"}},[t._v("#")]),t._v(" 和"),s("code",[t._v("indexOf()")]),t._v("比較")]),t._v(" "),s("p",[t._v("概念和大家常用的"),s("code",[t._v("indexOf()")]),t._v("有些類似")]),t._v(" "),s("p",[t._v("都是用來比對陣列的元素並回傳索引值")]),t._v(" "),s("p",[t._v("若沒找到則回傳-1")]),t._v(" "),s("p",[t._v("不同之處是"),s("code",[t._v("indexOf()")]),t._v("找的是指定元素")]),t._v(" "),s("p",[t._v("而"),s("code",[t._v("findIndexOf()")]),t._v("則是可以找指定物件或是使用"),s("code",[t._v("function")]),t._v("來進行比對")]),t._v(" "),s("p",[t._v("這裡延續上面的例子作為範例")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("範例")]),t._v(" "),s("p",[t._v("兩種方法在物件陣列中尋找元素的差異 "),s("code",[t._v("age: 65")])])]),t._v(" "),s("p",[s("code",[t._v("indexOf()")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" correctIndex1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" people"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("man")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" man"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("code",[t._v("findIndex()")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" correctIndex2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" people"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findIndex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("man")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" man"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("最後整理一個簡單的表格")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("方法名稱")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[s("code",[t._v("indexOf()")])]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[s("code",[t._v("findIndex()")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("找到指定元素")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("回傳索引值")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("回傳索引值")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("未找到指定元素")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("回傳-1")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("回傳-1")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("物件陣列")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("搭配"),s("code",[t._v("map()")]),t._v("使用")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("撰寫"),s("code",[t._v("function")])])])])]),t._v(" "),s("h2",{attrs:{id:"結語"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#結語"}},[t._v("#")]),t._v(" 結語")]),t._v(" "),s("p",[t._v("在個人使用上"),s("code",[t._v("indexOf()")]),t._v("比較會用來確認陣列是否有值的情況")]),t._v(" "),s("p",[t._v("而"),s("code",[t._v("findIndex()")]),t._v("則是用在對陣列操作")])])}),[],!1,null,null,null);a.default=e.exports}}]);