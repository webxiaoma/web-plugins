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
        this.imgEles = []; // 存储所有图片对象
        this.clientHeight = null;

        this.init() // 调用初始化方法
        return this;
    }
    ImgLazy.prototype.startTime = null; // 页面滚动时函数节流起始时间

    ImgLazy.prototype.init = function (params) {

        // 初始化数据
        this.options.beforeDistance = this.options.beforeDistance ? this.options.beforeDistance:300;

        this.monitorResize()
        this.monitorImg()
        this.monitorScroll()
    }


    //添加要监听图片
    ImgLazy.prototype.monitorImg = function() {
        var imgEles = document.getElementsByTagName('img')  // 存储页面img dom

        for(var i = 0,len=imgEles.length;i<len;i++){
            this.imgEles.push(
                new Img(imgEles[i],this) // 传入img元素节点，this指ImgLazy的实例
            )
        }
    }

    // 监听页面滚动
    ImgLazy.prototype.monitorScroll = function() {
        var runTime = 300; // 函数节流时间间隔
        var slef = this;
        window.addEventListener("scroll",function() {
            var now = new Date();
            
            if (!slef.startTime){
                slef.startTime = now;
            }

            if (now - slef.startTime > runTime){
                //为了保证兼容性，这里取两个值，哪个有值取哪一个
                //scrollTop就是触发滚轮事件时滚轮的高度
                slef.mapImg();
                slef.startTime = now;
            }         

        })
    }

    // 监听页面尺寸变化
    ImgLazy.prototype.monitorResize = function(){
        var D = document;
        var slef = this;
        this.clientHeight = D.documentElement.clientHeight
        window.addEventListener("resize",function () {
            slef.clientHeight = D.documentElement.clientHeight
        })
    }


    // 遍历检测图片
    ImgLazy.prototype.mapImg = function () {
        // 滚动距离

        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        
        for(var i = 0,len=this.imgEles.length;i<len;i++){
            var imgTop = this.getElementToPageTop(this.imgEles[i].el)

            console.log(imgTop)
            if (imgTop - scrollTop - this.options.beforeDistance < this.clientHeight){ // 加载区

            }
             

        }

        console.log(this.clientHeight)
        console.log("滚动距离" + scrollTop);
    }

    // 获取元素距离文档顶部的高度
    ImgLazy.prototype.getElementToPageTop = function(el) {
        if (el.offsetParent) {
            return this.getElementToPageTop(el.offsetParent) + el.offsetTop
        }
        return el.offsetTop
    }
 

    /**
     * @msg  图片构造函数
     **/
    function Img(imgNode,parent) {
        this.el = imgNode; // 图片元素节点
        this.url = ""; // 图片路径
        this.status = ""; // 图片状态 loading success error
        this.parent = parent; // ImgLazy的实例
        this.options = parent.options;
        this.init()
    }

    // 初始化
    Img.prototype.init = function () {
        this.url = this.el.getAttribute("data-url");
    }

    // load img
    Img.prototype.load = function (params) {
        this.el.setAttribute("src",this.url)
    }

    Img.prototype.addEvent = function (params) {
        // this.imgNode.addEleventLisenter
        // load error
    }

    // 是否在可加载区
    Img.prototype.isInSigh = function(){

    }

    return ImgLazy
});
