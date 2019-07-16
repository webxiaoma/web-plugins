# js-encryption 

`js`加密库, 本仓库收集了常见的前端加密库


## 说明

本仓库为前端加密库，会不定时更新

其它相关信息请访问[js-encryption 相关的使用文档](https://webxiaoma.github.io/web-plugins/web-plugins/docs/blogs/js-plugins/js-encryption.html)


## 安装使用

1. 使用`npm` 安装

```js
// 安装
npm i @web-plugin/js-encryption -S

// 引入
import { md5 } from '@web-plugins/js-encryption';

// 使用
md5("12345") //827ccb0eea8a706c4c34a16891f84e7b
```

2. 浏览器中直接引入

```html
<!-- 以下引入的md5加密方式 -->
<script src="https://cdn.jsdelivr.net/npm/@web-plugins/js-encryption@1.0.0/lib/md5.min.js"></script>

<script>
// 使用
md5("12345") //827ccb0eea8a706c4c34a16891f84e7b
</script>
```

## 加密方法

上面提到的实例中展示了`MD5`的加密方法，在该库中目前含有的的加密方法如下：

- `sha1`加密方法 
- `hmacSha1`加密方法
- `sha256`加密方法
- `md5`加密方法
- `btoa` base64加密方法
- `atob` base64解密方法
