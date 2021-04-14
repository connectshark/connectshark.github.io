(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{428:function(t,s,a){"use strict";a.r(s);var n=a(21),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_02-js-and-css-clock"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_02-js-and-css-clock"}},[t._v("#")]),t._v(" 02 - JS and CSS Clock")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://connectshark.github.io/JavaScript30/02%20-%20JS%20and%20CSS%20Clock/index-Chambers.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("展示"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"內容概要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#內容概要"}},[t._v("#")]),t._v(" 內容概要")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://i.imgur.com/zkv3FBT.gif",alt:"實作效果"}})]),t._v(" "),a("p",[t._v("使用css製作時鐘指針,純js計算時間和轉動角度")]),t._v(" "),a("h2",{attrs:{id:"重點整理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重點整理"}},[t._v("#")]),t._v(" 重點整理")]),t._v(" "),a("ul",[a("li",[t._v("指針位置調整")]),t._v(" "),a("li",[t._v("各指針角度計算")]),t._v(" "),a("li",[t._v("計時器選用")])]),t._v(" "),a("h3",{attrs:{id:"指針位置調整"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指針位置調整"}},[t._v("#")]),t._v(" 指針位置調整")]),t._v(" "),a("p",[t._v("範例中的指針定位方式有稍微調整過")]),t._v(" "),a("p",[t._v("將各指針大小重新調整")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".hand")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" transform 0.05s ease-in-out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("各指針的使用"),a("code",[t._v("::before")]),t._v("製作")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".second-hand::before")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("position")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" absolute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("-50%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" white"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("這樣調整的優點是在"),a("code",[t._v("transform")]),t._v("的中心點就是整個"),a("code",[t._v(".hand")]),t._v("的中心")]),t._v(" "),a("p",[t._v("也不用調整"),a("code",[t._v("transform-origin")]),t._v("的位置")]),t._v(" "),a("h3",{attrs:{id:"各指針角度計算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#各指針角度計算"}},[t._v("#")]),t._v(" 各指針角度計算")]),t._v(" "),a("p",[t._v("簡單的數學題目\n秒針和分針每走一格是 360/60="),a("strong",[t._v("6")]),t._v("(deg)")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" now "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" second "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" now"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSeconds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" secondDeg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" second "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),t._v("\n")])])]),a("p",[t._v("時針則是 360/12="),a("strong",[t._v("30")]),t._v("(deg)")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hour "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" now"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getHours")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hourDeg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" hour "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("\n")])])]),a("h3",{attrs:{id:"計時器選用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#計時器選用"}},[t._v("#")]),t._v(" 計時器選用")]),t._v(" "),a("p",[t._v("範例使用"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setInterval",target:"_blank",rel:"noopener noreferrer"}},[t._v("setInterval"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("這裡使用"),a("a",{attrs:{href:"https://developer.mozilla.org/zh-TW/docs/Web/API/Window.requestAnimationFrame",target:"_blank",rel:"noopener noreferrer"}},[t._v("requestAnimationFrame"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("個人對這兩個的差異分析如下")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("計時器名稱")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("說明")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("是否設定時間")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("setInterval")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("標準的計時器,設定固定時間重複調用function")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("是")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("requestAnimationFrame")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("根據使用者螢幕的更新頻率刷新,相當於不用設定時間的"),a("code",[t._v("setTimeout")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("否")])])])]),t._v(" "),a("p",[t._v("對我來說"),a("code",[t._v("requestAnimationFrame")]),t._v("是專門用於頁面刷新的計時器")]),t._v(" "),a("p",[t._v("而"),a("code",[t._v("setInterval")]),t._v("則使用於程式內的計時器")]),t._v(" "),a("p",[t._v("應用於程式內如下")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("animationHandler")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setNowTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//設定指針走動的function")]),t._v("\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("animationHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requestAnimationFrame")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("animationHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);