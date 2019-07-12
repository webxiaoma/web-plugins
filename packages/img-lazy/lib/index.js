/**
 * @name    img-lazy 图片懒加载
 * @vesion  v1.0.0    
 * @author  webwangjia 
 * @author  webxiaoma
 */

;(function(root,f){
    // 环境判断
    if (typeof define === 'function' && define.amd) { //AMD/CMD标准
        define([], f(root))
    } else if (typeof exports === 'object') { //commonjs规范
        module.exports = f(root)
    } else { // 浏览器
        root.ImgLazy = f(root) // 挂载全局
    }

})(this, function (root){
  
    /**
     * @msg  ImgLazy构造函数
     **/
    function ImgLazy(option){
        this.options = option || {};// 全局配置
        this.imgEle = []; // 存储所有图片对象

        this.init() // 调用初始化方法
        return this;
    }

    ImgLazy.prototype.init = function (params) {
        this.monitorImg()
    }

    //监听图片
    ImgLazy.prototype.monitorImg = function() {
        var D = document, // 存储document
        imgEles = D.getElementsByTagName('img')  // 存储页面img dom

        for(var i = 0,len=imgEles.length;i<len;i++){
            this.imgEle.push(
                new Img(imgEles[i],this) // 传入img元素节点，this指ImgLazy的实例
            )
        }
    }

    /**
     * @msg  图片构造函数
     **/
    function Img(imgNode,parent) {
        this.imgNode = imgNode; // 图片元素节点
        this.url = ""; // 图片路径
        this.status = ""; // 图片状态 loading success error
        this.parent = parent; // ImgLazy的实例
        this.options = parent.options;
        this.init()
    }

    // 初始化
    Img.prototype.init = function () {
        this.url = this.imgNode.getAttribute("data-url");
    }

    // load img
    Img.prototype.load = function (params) {
        this.imgNode.setAttribute("src",this.url)
    }

    Img.prototype.addEvent = function (params) {
        // this.imgNode.addEleventLisenter
        // load error
    }

   

    return ImgLazy
});
