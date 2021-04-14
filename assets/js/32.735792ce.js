(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{442:function(s,t,a){"use strict";a.r(t);var n=a(21),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"用vue專案打包phaser吧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用vue專案打包phaser吧"}},[s._v("#")]),s._v(" 用Vue專案打包phaser吧")]),s._v(" "),a("p",[s._v("在先前的文章中有提到")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"/phaser3/phaserInWebpack"}},[s._v("如何在Webpack中打包phaser")])])]),s._v(" "),a("p",[s._v("有的時候我們的遊戲只是大專案中的一部分\n甚至是某一頁的內容")]),s._v(" "),a("p",[s._v("一個小品遊戲能夠增進使用者對網站的好感(?")]),s._v(" "),a("p",[s._v("那就在vue專案中把phaser遊戲打包進去吧\n甚至把phaser製作成一個元件能夠有更好的運用空間")]),s._v(" "),a("p",[s._v("本篇文章會將vue專案中打包phaser的一些問題手把手排除")]),s._v(" "),a("p",[s._v("那就馬上開始吧~")]),s._v(" "),a("h2",{attrs:{id:"包進vue"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包進vue"}},[s._v("#")]),s._v(" 包進Vue")]),s._v(" "),a("h3",{attrs:{id:"初始化一個vue專案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#初始化一個vue專案"}},[s._v("#")]),s._v(" 初始化一個vue專案")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提醒")]),s._v(" "),a("p",[s._v("這裡只介紹最基礎的設定\n若專案有其他需要可以自己多安裝套件包")])]),s._v(" "),a("p",[s._v("使用"),a("code",[s._v("vue cli")]),s._v("起一個vue的專案")]),s._v(" "),a("blockquote",[a("p",[s._v("目前版本為"),a("code",[s._v("2.6.11")])])]),s._v(" "),a("p",[s._v("在專案中安裝phaser")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("npm i phaser\n")])])]),a("p",[s._v("到這裡該準備的套件包都準備好了")]),s._v(" "),a("h3",{attrs:{id:"建立phaser"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建立phaser"}},[s._v("#")]),s._v(" 建立"),a("code",[s._v("phaser")])]),s._v(" "),a("p",[s._v("新增一個資料夾並且新增一個"),a("code",[s._v("index.js")]),s._v("內容如下")]),s._v(" "),a("blockquote",[a("p",[s._v("src/game/index.js")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Phaser "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'phaser'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" config "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./config'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Game")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Phaser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Game")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("constructor")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("此"),a("code",[s._v("index.js")]),s._v("檔用途是給vue專案引入"),a("code",[s._v("new Game()")]),s._v("使用")]),s._v(" "),a("p",[s._v("相當於在先前遊戲中使用的"),a("code",[s._v("new Phaser.Game(config)")]),s._v("一樣")]),s._v(" "),a("p",[s._v("config的內容還有遊戲的檔案切分皆可沿用"),a("a",{attrs:{href:"/phaser3/phaserInWebpack"}},[s._v("用webpack打包phaser")]),s._v("的寫法和用法")]),s._v(" "),a("p",[s._v("以下為大略內容配置")]),s._v(" "),a("blockquote",[a("p",[s._v("src/game")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("game\n|\n|- assets/ 遊戲素材\n|\n|- object/ 遊戲物件\n|\n|- scenes/ 遊戲場景\n|\n|- config.js 遊戲設定檔\n|\n|- index.js 初始化遊戲檔\n")])])]),a("p",[s._v("簡單來說有關於phaser的內容皆放在同一個資料夾裡即可\n方便管理")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("遊戲的素材尤其是圖片")]),s._v(" "),a("p",[s._v("不建議放入"),a("code",[s._v("src/assets")]),s._v("中")]),s._v(" "),a("p",[s._v("因vue在打包過程中會壓縮圖片內容\n會造成遊戲內讀取的檔名與生產版本不符\n還有圖片畫質不夠清晰等等問題")])]),s._v(" "),a("h3",{attrs:{id:"建立一個屬於phaser的原件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#建立一個屬於phaser的原件"}},[s._v("#")]),s._v(" 建立一個屬於phaser的原件")]),s._v(" "),a("blockquote",[a("p",[s._v("src/components/game.vue")])]),s._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("div")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')]),s._v("game"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Game "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../game'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'game'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mounted")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Phaser "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Game")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("destroyed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Phaser"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("destroy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("</")]),s._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\n")])])]),a("p",[s._v("將剛剛建好的"),a("code",[s._v("index.js")]),s._v("引入進來")]),s._v(" "),a("p",[a("code",[s._v("#game")]),s._v("的div可以作為phaser的父層方便定位使用")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("window.Phaser")]),s._v(" "),a("p",[s._v("在較複雜的遊戲中")]),s._v(" "),a("p",[s._v("有時會需要與外部元件溝通或是"),a("code",[s._v("websocket")]),s._v("資料傳遞")]),s._v(" "),a("p",[s._v("若這時將變數儲存在該元件內的data會造成日後傳遞困難")]),s._v(" "),a("p",[s._v("故作者這裡都把"),a("code",[s._v("phaser")]),s._v("的變數存在"),a("code",[s._v("window")]),s._v("底下方便任位置的資料傳遞")])]),s._v(" "),a("p",[s._v("做到這邊只要在"),a("code",[s._v("App.vue")]),s._v("中引入並放在畫面上就完成了嗎?")]),s._v(" "),a("p",[a("strong",[s._v("不還差臨門一腳")])]),s._v(" "),a("p",[s._v("接下來是作者先前卡關甚久的地方")]),s._v(" "),a("h2",{attrs:{id:"遇到的問題"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遇到的問題"}},[s._v("#")]),s._v(" 遇到的問題")]),s._v(" "),a("h3",{attrs:{id:"遊戲圖片讀不到"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#遊戲圖片讀不到"}},[s._v("#")]),s._v(" 遊戲圖片讀不到")]),s._v(" "),a("p",[s._v("初始化遊戲\n把該讀取的素材放進去開始製作的時候就會發現")]),s._v(" "),a("p",[a("strong",[s._v("怎麼連一個圖都讀不到")])]),s._v(" "),a("p",[s._v("作者這裡嘗試了很多方式")]),s._v(" "),a("p",[s._v("其中一種有解的方法就是把遊戲素材資料夾放在根目錄的"),a("code",[s._v("public")]),s._v("中\n遊戲可以正常讀取\n但是此作法vue官方不推薦\n而且也不是一個長久之計")]),s._v(" "),a("p",[s._v("後來花了很多時間研究才有心得")]),s._v(" "),a("p",[s._v("原來vue打包的時候根本沒把"),a("code",[s._v("game")]),s._v("資料夾底下的"),a("code",[s._v("assets")]),s._v("打包進去")]),s._v(" "),a("p",[a("strong",[s._v("既然沒打包 那就我來打包")])]),s._v(" "),a("h3",{attrs:{id:"設定複製遊戲素材資料夾"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#設定複製遊戲素材資料夾"}},[s._v("#")]),s._v(" 設定複製遊戲素材資料夾")]),s._v(" "),a("p",[s._v("在根目錄底下建"),a("code",[s._v("vue.config.js")])]),s._v(" "),a("p",[s._v("並且加入以下內容")]),s._v(" "),a("blockquote",[a("p",[s._v("vue.config.js")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" CopyWebpackPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'copy-webpack-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  configureWebpack"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("CopyWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'src/game/assets'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" to"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'assets'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("這裡使用webpack複製檔案的插件\n直接設定要複製的檔案位置和目的地位置即可")]),s._v(" "),a("p",[s._v("使用此方式的"),a("strong",[s._v("優點")]),s._v("在於")]),s._v(" "),a("p",[s._v("我們的遊戲素材不會被壓縮而導致遊戲畫面模糊")]),s._v(" "),a("p",[s._v("也不用在webpack中設定很多針對"),a("code",[s._v("phaser")]),s._v("略過的內容")]),s._v(" "),a("p",[s._v("遊戲相關的內容可以在相同資料夾下易於管理")]),s._v(" "),a("h2",{attrs:{id:"大功告成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大功告成"}},[s._v("#")]),s._v(" 大功告成")]),s._v(" "),a("p",[s._v("在前端框架中引用"),a("code",[s._v("phaser")]),s._v("利大於弊")]),s._v(" "),a("p",[s._v("甚至能讓"),a("code",[s._v("phaser")]),s._v("使用更好的資料管理系統")]),s._v(" "),a("p",[s._v("此篇的內容就先不上github")]),s._v(" "),a("p",[s._v("有設定上困難的可以tg訊息給我一起討論")]),s._v(" "),a("hr")])}),[],!1,null,null,null);t.default=e.exports}}]);