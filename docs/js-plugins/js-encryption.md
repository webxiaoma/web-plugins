---
sidebarDepth: 2
meta:
  - name: keywords
    content: js-encryption, 前端加密, md5加密， sha1加密，sha256加密，base64加密
  - name: description
    content: 本文主要讲解git的配置文件，了解配置文件的作用以及如何自定义git常用命令，来方便我们使用git管理项目
---

# js-encryption 前端加密插件

---

[插件仓库地址访问这里](https://github.com/webxiaoma/web-plugins/tree/master/packages/js-encryption)


## 版本

当前版本`v1.0.0"` 

## 安装使用

1. **使用`npm` 安装**

```js
// 安装
npm i @web-plugin/js-encryption -S

```

 以下引入的`md5`加密方式（还可以引入的加密方法见下面） 

```js
import { md5 } from '@web-plugins/js-encryption';
```

使用`md5`加密方式
```js
md5("12345") //827ccb0eea8a706c4c34a16891f84e7b
```


2. **浏览器中直接引入**

```html
<!-- 以下引入的md5加密方式（还可以引入的加密方法见下面） -->
<script src="https://cdn.jsdelivr.net/npm/@web-plugins/js-encryption@1.0.0/lib/md5.min.js"></script>

<script>
// 使用
md5("12345") //827ccb0eea8a706c4c34a16891f84e7b
</script>
```

## 加密方法

上面提到的实例中展示了`MD5`的加密方法，在该库中目前含有的的加密方  法如下：

- `sha1`加密方法 
- `hmacSha1`加密方法
- `sha256`加密方法
- `md5`加密方法
- `btoa` base64加密方法
- `atob` base64解密方法


## 实例

<iframe src="https://webxiaoma.github.io/web-plugins/packages/js-encryption/example/index.html" width="100%" height="400px"></iframe>

## 更新说明


暂无 