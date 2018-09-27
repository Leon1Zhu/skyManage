(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{149:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"主机配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主机配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 主机配置")]),t._v(" "),s("ol",[s("li",[t._v("api/deploy/newtask/hostConfig/testLink(用于对用户添加的主机进行连接测试)")])]),t._v(" "),s("p",[t._v("method: Get")]),t._v(" "),s("ul",[s("li",[t._v("传入：\n"),s("ul",[s("li",[t._v("userInfo:{} // 用户信息")]),t._v(" "),s("li",[t._v("testHostInfo: {} // 主机配置信息")])])]),t._v(" "),s("li",[t._v("返回结果："),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("testResult"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 测试结果")]),t._v("\nerrorMessgae "),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("''")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 测试信息，用于报错的时候对用户进行提示")]),t._v("\n")])])])])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("api/deploy/newtask/saveTaskConfig(用于对用户添加的主机配置信息进行保存)")])]),t._v(" "),s("p",[t._v("method: Post")]),t._v(" "),s("ul",[s("li",[t._v("传入：\n"),s("ul",[s("li",[t._v("userInfo: {} // 用户信息")]),t._v(" "),s("li",[t._v("taskConfig: {} // 任务、主机配置信息")])])]),t._v(" "),s("li",[t._v("返回结果："),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("saveResult"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 测试结果")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"选择模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择模块","aria-hidden":"true"}},[t._v("#")]),t._v(" 选择模块")]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("api/deploy/newtask/selectedComponent/getComponents(获取系统的模块以及组件信息)")])]),t._v(" "),s("p",[t._v("method: Get")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("传入：")])]),t._v(" "),s("li",[s("p",[t._v("返回结果：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v(" modulesInfo"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 模块信息")]),t._v("\n   "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{attrs:{class:"token operator"}},[t._v("...")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n     componentsInfo"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 组件信息 ，应包含是否具有必配项和是否已配置")]),t._v("\n   "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n "),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" \n")])])])])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("保存直接调用api/deploy/newtask/saveTaskConfig")])]),t._v(" "),s("h2",{attrs:{id:"选择组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择组件","aria-hidden":"true"}},[t._v("#")]),t._v(" 选择组件")]),t._v(" "),s("ol",[s("li",[t._v("api/deploy/selectedComponent/getComponentRelyInfo(获取当前系统的组件依赖信息)")])]),t._v(" "),s("p",[t._v("method: Get")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("传入：")])]),t._v(" "),s("li",[s("p",[t._v("返回结果：")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("componentRelyInfo"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("//组件的依赖关系数据")]),t._v("\n")])])])])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("保存直接调用api/deploy/newtask/saveTaskConfig")])]),t._v(" "),s("h2",{attrs:{id:"组件配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件配置")]),t._v(" "),s("ol",[s("li",[t._v("api/deploy/newtask/componentConfig/getComponentConfig(获取单个组件的配置)")])]),t._v(" "),s("p",[t._v("method: Get")]),t._v(" "),s("ul",[s("li",[t._v("传入：\n"),s("ul",[s("li",[t._v("userInfo: {} // 用户信息")]),t._v(" "),s("li",[t._v("componentId: '' // 需要获取详细配置信息的组件id")])])]),t._v(" "),s("li",[t._v("返回结果："),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("componentConfig"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 组件配置信息，其中配置需要按必配、高级、一般、进行分类")]),t._v("\n")])])])])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("保存直接调用api/deploy/newtask/saveTaskConfig")])]),t._v(" "),s("h2",{attrs:{id:"预览界面"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预览界面","aria-hidden":"true"}},[t._v("#")]),t._v(" 预览界面")]),t._v(" "),s("ul",[s("li",[t._v("暂时不需要额外的接口调用")])])])}],!1,null,null,null);e.options.__file="newTask.md";a.default=e.exports}}]);