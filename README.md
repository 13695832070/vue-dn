#### 懂牛科技 vue 项目模版 + sdk （适用懂牛软件页面开发）

##### 配置 webpack 打包方式，使其符合 cms 系统管理方式。

##### 大图片必须通过 调用全局组件 Images 来展示。 并通过 src 参数传入图片的相对路径；

#### 安装依赖

> <code> npm install </code>

#### 启动项目

> <code> npm run dev </code>

### 注意事项：

1. 如果小于 100000 byte 的图片，会自动打包成 base64。 使用原生的 img 标签引入图片即可。大于 97kb 的图片需要引入 全局组件 Images 进行显示。
2. 用户信息通过 SDK init 方法进行初始化。并且将信息记录在 window 全局对象下的 uerAuthorizeInfo 字段。该字段为 只读 属性。
