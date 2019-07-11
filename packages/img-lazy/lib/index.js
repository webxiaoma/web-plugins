/**
 * @name    img-lazy 图片懒加载
 * @vesion  v1.0.0    
 * @author  webwangjia
 */

!(function(root,f){
    if (typeof define === 'function' && define.amd) { //AMD/CMD标准
        define([], f(root))
    } else if (typeof exports === 'object') { //commonjs规范
        module.exports = f(root)
    } else {
        root.imgLazy = f(root) // 挂载全局
    }

})(this, function (root){



    /**
     * @msg  imgLazy构造函数
     **/
    function imgLazy(option){
            this.options = option || {};// 全局配置
            this.imgEle = [];
           
            
            return this;
    }

    imgLazy.prototype.init = function (params) {
        
    }
    imgLazy.prototype.monitorImg = function() {
        var D = document, // 存储document
        imgEles = D.getElementsByTagName('img')  // 存储页面img dom

        for(var i = 0,len=imgEles.length;i<len;i++){
            this.imgEle.push(
                new Img(imgEles[i],this)
            )
        }
    }

    /**
     * @msg  图片构造函数
     **/
    function Img(node,parent) {
        this.imgNode = node; // 图片节点
        this.url = ""; // 图片路径
        this.status = "loading"; // 图片状态 loading success error
        this.parent = parent;
    }

    // 初始化
    Img.prototype.init = function () {
        this.url = this.imgNode.getAttribute("data-url");
    }


    // load img
    Img.prototype.load = function (params) {
        
    }

    ImgPrototype.addEvent = function (params) {
        // this.imgNode.addEleventLisenter
        // load error
    }

   

    return imgLazy
})

