# 监控系统 #
基于vue.js + vue-router + vuex + element-ui 构建

## 目录结构介绍 ##

	|-- build                            // webpack配置文件
	|-- src                              // 源码目录
    |   |-- api                          // 后端api请求
    |   |-- assets                       // 静态文件
    |       |-- fonts                    // 字体
    |       |-- icons                    // 图标
    |       |-- images                   // 图片
    |       |-- styles                   // 样式
    |   |-- common                       // 通用文件
    |       |-- directives               // vuejs自定义指令
    |       |-- filters                  // vuejs filter
    |       |-- util                     // 工具函数
    |   |-- components                   // 公共组件
    |   |-- mockdata                     // 本地调试数据
    |   |-- page                         // 主要路由页面
    |   |-- store                        // 应用的状态
    |       |-- index.js                 // store入口
    |       |-- actions.js               // 根级别的 action
    |       |-- mutations.js             // 根级别的 mutation
    |       |-- modules                  // 模块级store    
    |   |-- http.js                      // vue-resouce 配置文件
    |   |-- router.js                    // vue-router 配置文件
    |   |-- elementui.js                 // element-ui 配置文件
    |   |-- index.html                   // 入口html文件
	|   |-- main.js                      // 程序入口文件
	|-- .babelrc                         // babel编译配置
	|-- .gitignore                       // git忽略的文件
	|-- package.json                     // 项目及工具的依赖配置文件
	|-- README.md                        // 说明


## 本地开发 ##

	// 开启服务器，浏览器访问 http://localhost:8080
	npm run dev

## 构建生产 ##

	// 执行构建命令，生成的dist文件夹放在服务器下即可访问
	npm run build
