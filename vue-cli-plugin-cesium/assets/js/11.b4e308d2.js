(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{337:function(s,e,t){"use strict";t.r(e);var a=t(0),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",{attrs:{align:"left"}},[s._v("基于Vue-cli的cesium封装(Cesium encapsulation based on Vue cli)")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://www.npmjs.com/package/vue-cli-plugin-cesium",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/npm/v/vue-cli-plugin-cesium?style=plastic",alt:"npm"}}),t("OutboundLink")],1),s._v(" "),t("a",{attrs:{href:"https://www.npmjs.com/package/vue-cli-plugin-cesium",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/npm/dm/vue-cli-plugin-cesium?style=plastic",alt:"npm"}}),t("OutboundLink")],1),s._v(" "),t("a",{attrs:{href:"https://www.npmjs.com/package/vue-cli-plugin-cesium",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/npm/l/vue-cli-plugin-cesium?style=plastic",alt:"license"}}),t("OutboundLink")],1),s._v(" "),t("a",{attrs:{href:"https://github.com/isboyjc/vue-cli-plugin-cesium",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/github/stars/isboyjc/vue-cli-plugin-cesium?style=social",alt:"Github star"}}),t("OutboundLink")],1),s._v(" "),t("a",{attrs:{href:"https://github.com/isboyjc/vue-cli-plugin-cesium",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/github/forks/isboyjc/vue-cli-plugin-cesium?style=social",alt:"Github fork"}}),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),t("p",[s._v("通常情况下，我们要在vue中使用Cesium，首先要安装Cesium，然后要在vue-cli的webpack配置很多东西，对一些有经验的人来说只不过麻烦些，但是对Cesium的初学者来说会很痛苦，因为没有使用过，也不知到要怎么配置，只能搜索网上的教程，一步一步踩坑")]),s._v(" "),t("p",[s._v("作为前端，我在学习Cesium，踩坑无数，当然也经历过这些")]),s._v(" "),t("p",[s._v("其实不管是有经验或是初学者，每次写项目重复配置这些东西都很麻烦")]),s._v(" "),t("p",[s._v("vue-cli-plugin-cesium就是为了解决这个问题")]),s._v(" "),t("h2",{attrs:{id:"介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),t("p",[s._v("vue-cli-plugin-cesium是一个针对Cesium的vue-cli扩展插件，使用它将会让我们在vue-cli中零配置使用Cesium")]),s._v(" "),t("p",[s._v("它会在我们已经创建好的vue-cli中做基于Cesium的扩展，如下")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("自动安装cesium并追加至"),t("code",[s._v("package.json")]),s._v("依赖项")])]),s._v(" "),t("li",[t("p",[s._v("自动扩展vue-cli中cesium相关的webpack配置")]),s._v(" "),t("ul",[t("li",[s._v("添加一个"),t("code",[s._v("cesium")]),s._v("别名，以便我们在项目中轻松的引入它")]),s._v(" "),t("li",[s._v("使Cesium对象实例可在每个Vue模块中使用而无须import引入")]),s._v(" "),t("li",[s._v("使webpack可正常打包Cesium")]),s._v(" "),t("li",[s._v("允许webpack友好地在Cesium中使用require，解决require引入警告")]),s._v(" "),t("li",[s._v("开发环境生成sourcemap，生产环境取消sourcemap")]),s._v(" "),t("li",[s._v("生产环境抽取公共模块执行压缩")]),s._v(" "),t("li",[s._v("生产环境loader切换到优化模式")])])]),s._v(" "),t("li",[t("p",[s._v("自动在全局main.js中引入"),t("code",[s._v("Widgets.css")]),s._v("，可选")])]),s._v(" "),t("li",[t("p",[s._v("自动在"),t("code",[s._v("components/")]),s._v("文件夹下生成示例文件，可选")])])]),s._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),t("p",[s._v("vue-cli-plugin-cesium是基于vue-cli的扩展插件，所以在使用前要先安装vue-cli，并使用vue-cli创建一个vue项目")]),s._v(" "),t("p",[s._v("如果您不了解vue-cli的使用，请移步官网 "),t("a",{attrs:{href:"https://cli.vuejs.org/zh/guide/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vue-cli-官网"),t("OutboundLink")],1)]),s._v(" "),t("p",[s._v("当前插件只支持"),t("code",[s._v("vue-cli3.0+")]),s._v("版本哦")]),s._v(" "),t("p",[s._v("创建好一个vue项目后就可以按照以下步骤使用该插件了")]),s._v(" "),t("h3",{attrs:{id:"使用方式一"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方式一"}},[s._v("#")]),s._v(" 使用方式一")]),s._v(" "),t("p",[s._v("首先是安装vue-cli-plugin-cesium插件，推荐使用yarn安装，因为它更简洁")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// npm")]),s._v("\nnpm install "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("save"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("dev vue"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cli"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plugin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cesium\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// yarn")]),s._v("\nyarn add vue"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cli"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plugin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cesium\n")])])]),t("p",[s._v("安装完成后我们要使用 "),t("code",[s._v("vue invoke")]),s._v(" 来初始化这个插件")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("vue invoke vue"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cli"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plugin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cesium\n")])])]),t("h3",{attrs:{id:"使用方式二"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方式二"}},[s._v("#")]),s._v(" 使用方式二")]),s._v(" "),t("p",[s._v("如果您觉得使用方式一两步有些麻烦，您可以使用"),t("code",[s._v("vue add")]),s._v("的方式安装使用，即可一步到位")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("vue add vue"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cli"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("plugin"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("cesium\n")])])]),t("h3",{attrs:{id:"安装过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装过程"}},[s._v("#")]),s._v(" 安装过程")]),s._v(" "),t("p",[s._v("在"),t("code",[s._v("vue invoke")]),s._v("或"),t("code",[s._v("vue add")]),s._v("的过程中会有两个询问")]),s._v(" "),t("h4",{attrs:{id:"询问一"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#询问一"}},[s._v("#")]),s._v(" 询问一")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("Whether to "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" styles globally"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" This operation will automatically "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" widgets"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("css "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n是否全局引入样式"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("该操作将自动在main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js引入widgets"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("css？\n")])])]),t("p",[s._v("此项默认为yes，该操作将自动在main.js引入widgets.css，即全局引入cesium的css样式")]),s._v(" "),t("p",[s._v("如果此项设置为no，那么将来开发时我们要手动引入"),t("code",[s._v("widgets.css")]),s._v("样式文件，引入命令如下")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cesium/Widgets/widgets.css'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h4",{attrs:{id:"询问二"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#询问二"}},[s._v("#")]),s._v(" 询问二")]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[s._v("Whether to add sample components to the project components directory"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n是否添加示例组件到项目components目录"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),s._v("\n")])])]),t("p",[s._v("此选项默认为yes，该操作会自动在"),t("code",[s._v("src/components")]),s._v("文件夹下生成"),t("code",[s._v("CesiumExample")]),s._v("文件夹，此文件夹中包含一些Cesium的使用示例供参考")]),s._v(" "),t("p",[s._v("如果此项设置为no，则不生成示例文件")]),s._v(" "),t("p",[s._v("生成的示例中每个文件为一个模块，可直接模块引入至项目中查看")]),s._v(" "),t("h2",{attrs:{id:"gui中安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gui中安装"}},[s._v("#")]),s._v(" GUI中安装")]),s._v(" "),t("p",[s._v("如果我们使用"),t("code",[s._v("vue ui")]),s._v("创建项目，也可以直接在项目创建后的插件选项里搜索vue-cli-plugin-cesium并安装")]),s._v(" "),t("p",[s._v("如下所示：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/isboyjc/PictureBed/master/vue-cli-plugin-cesium/gui005.png",alt:"gui001"}})]),s._v(" "),t("p",[s._v("选中插件点击安装")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/isboyjc/PictureBed/master/vue-cli-plugin-cesium/gui002.png",alt:"gui002"}})]),s._v(" "),t("h2",{attrs:{id:"使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[s._v("#")]),s._v(" 使用")]),s._v(" "),t("p",[s._v("开发时如下，直接在模块中使用Cesium对象即可")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/isboyjc/PictureBed/master/vue-cli-plugin-cesium/code01.png",alt:"code01"}})]),s._v(" "),t("p",[s._v("查看示例组件，模块引入即可，如下")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://raw.githubusercontent.com/isboyjc/PictureBed/master/vue-cli-plugin-cesium/code02.png",alt:"code02"}})]),s._v(" "),t("h2",{attrs:{id:"结束"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结束"}},[s._v("#")]),s._v(" 结束")]),s._v(" "),t("p",[s._v("安装完成后，就可以在vue项目中任意模块中使用Cesium了")]),s._v(" "),t("p",[s._v("你可以在每个Vue模块中直接使用Cesium对象实例而无须import引入")]),s._v(" "),t("p",[s._v("如果你想引入cesium包下的文件，我们为cesium包的目录设置了别名，就叫"),t("code",[s._v("cesium")])]),s._v(" "),t("p",[s._v("所以在引入"),t("code",[s._v("Widgets.css")]),s._v("时引入路径为"),t("code",[s._v("cesium/Widgets/widgets.css")])]),s._v(" "),t("p",[s._v("如果对您有所帮助，那么这将是我的荣幸")]),s._v(" "),t("p",[s._v("后期我会慢慢的完善此插件，并不停迭代，也欢迎大家提出建议")]),s._v(" "),t("p",[s._v("如果您觉得还行，点个star再走哟")])])}),[],!1,null,null,null);e.default=r.exports}}]);