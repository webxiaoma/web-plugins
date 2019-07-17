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
     * @msg  ImgLazy构造函数 **************************************
     **/
    function ImgLazy(options){
        this.options = objAssign({
            loadingLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAOVBMVEUAAABwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHCwizOmAAAAEnRSTlMA8BDQsDBQoCBggJBw38B/v0AcgxLZAAAA2ElEQVQ4y72T2xKDIAxECQZQtFr3/z+2uMX7IE/tjjM+5AgnEUyDxzQGlZj0PORngJ8m/wBYNva2RUAB1USUgBbijHGCuQB46PLqES+AOwPxCvToti1amvoT4AG4FZVpeqE5SVqB4GUJWOVfOrepGNOimjXmGC+D8su+TjAURt1+S13WuAMjxqxHDY776DCwsZREaq4fR90KW2YhayhEEFaA9jmOGgHiknLMAMTuVkPSCEBH5S4Dfq/za9ZJOAL97biEjSVgL+dBwrZa9dg3NcD+6eJUUr3+HxW1GKFZCQaQAAAAAElFTkSuQmCC", // 图片加载前路径绝对路径
            errorLogo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAOVBMVEUAAABwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHCwizOmAAAAEnRSTlMA8BDQsDBQoCBggJBw38B/v0AcgxLZAAAA2ElEQVQ4y72T2xKDIAxECQZQtFr3/z+2uMX7IE/tjjM+5AgnEUyDxzQGlZj0PORngJ8m/wBYNva2RUAB1USUgBbijHGCuQB46PLqES+AOwPxCvToti1amvoT4AG4FZVpeqE5SVqB4GUJWOVfOrepGNOimjXmGC+D8su+TjAURt1+S13WuAMjxqxHDY776DCwsZREaq4fR90KW2YhayhEEFaA9jmOGgHiknLMAMTuVkPSCEBH5S4Dfq/za9ZJOAL97biEjSVgL+dBwrZa9dg3NcD+6eJUUr3+HxW1GKFZCQaQAAAAAElFTkSuQmCC",   // 绝对路径
            baseUrl: "",
            beforeDistance: 300, // 提前加载距离
            polling:true, // 可为对象
        },options)// 全局配置
        this.imgEles = []; // 存储所有图片对象
        this.clientHeight = null; // 存储浏览器可视高度
        this.startTime = null; // 页面滚动时函数节流起始时间

        this.init() // 调用初始化方法
        return this;
    }

    ImgLazy.prototype.init = function () {
        // 初始化数据
        this.monitorResize() // 监听窗口
        this.monitorImg()    // 加载监听img
        this.monitorScroll() // 监听滚动轮 
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
        var start = true;
        window.addEventListener("scroll",function() {
            // 刚进入页面时执行一遍mapImg()
            if (start){ // 有问题，待解决
                slef.mapImg();
                start = false;
            }

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
        // 存储浏览器可是高度
        this.clientHeight = D.documentElement.clientHeight
        // 窗口大小变化时存储浏览器可是高度
        window.addEventListener("resize",function () {
            slef.clientHeight = D.documentElement.clientHeight
        })
    }

    // 遍历检测图片是否到达可视区域
    ImgLazy.prototype.mapImg = function () {
        // 滚动距离
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        for(var i = 0,len=this.imgEles.length;i<len;i++){
            var imgEl = this.imgEles[i]
            var imgTop = this.getElementToPageTop(imgEl.el) // 图片顶部距离可视区顶部的距离
            if (imgTop - scrollTop - this.options.beforeDistance < this.clientHeight){ // 加载区
                imgEl.load()
            }
             
        }
    }

    // 获取元素距离文档顶部的高度
    ImgLazy.prototype.getElementToPageTop = function(el) {
        if (el.offsetParent) {
            return this.getElementToPageTop(el.offsetParent) + el.offsetTop
        }
        return el.offsetTop
    }
 

    /**
     * @msg  图片构造函数 **************************************
     **/
    function Img(imgNode,imgLazy) {
        this.el = imgNode; // 图片元素节点
        this.url = ""; // 图片路径
        this.status = ""; // 图片状态 loading success error
        this.imgLazy = imgLazy; // ImgLazy的实例
        this.loadEvent = null; // 存储加载时的监听函数
        this.errorEvent = null; // 存储失败时的监听函数
        this.pollingTimer = null; // 存储轮询定时器
        this.errorLogo = "";
        this.options = imgLazy.options;
        this.isRemoved = false; // 是否移除该img对象
        this.init()
    }

    // 初始化
    Img.prototype.init = function () {
        // 数据初始化
        this.url = this.options.baseUrl
                   ? this.options.baseUrl + this.el.getAttribute("data-url")
                   : this.el.getAttribute("data-url");
        
   
        this.el.src = this.options.loadingLogo; // 添加占位图片
        this.monitorStatus();
    }

    // 加载 img
    Img.prototype.load = function () {
        this.el.setAttribute("src", this.url)
        this.el.setAttribute("status","loading")
    }
    
    // 启用监听图片状态
    Img.prototype.monitorStatus = function(){

        // 加载成功时回调
        this.loadEvent = function() {
            // 当目标图片加载成功时清除各个定时与监听
            if(this.url === this.el.src){
                this.destoryInterval()
                this.destroyMonitor()
                this.removeImg();
                this.el.setAttribute("status", "success")
            }
        }.bind(this);
        
        // 加载失败时回调
        this.errorEvent = function () {
            // 图片对象未移除时进行移除操作
            (!this.isRemoved)&&this.removeImg();

            if (this.options.polling) { // 是否启用定时轮询
                if (!this.pollingTimer) { // 防止重复定时
                    this.setIntervalLoadImg() // 开启定时
                }
            }
            this.el.src = this.options.errorLogo // 添加失败图片
            this.el.setAttribute("status", "error")
        }.bind(this);


        this.el.addEventListener('load', this.loadEvent)
        this.el.addEventListener('error', this.errorEvent)
    }
    // 定时加载图片
    Img.prototype.setIntervalLoadImg = function () {
        var self = this;
        var time,number,sum = 0;
        if (typeof this.options.polling === 'boolean'){
            time = 5000;
            number = 5;
        }else{
            time = this.options.polling.time 
            number = this.options.polling.number
        }
        this.pollingTimer = setInterval(function(){
            sum++;
            if(sum > number){
                self.destoryInterval()
            }else{
                self.load()
            }
        },time)
    }

    // 销毁定时器
    Img.prototype.destoryInterval = function(){
        if (this.pollingTimer){
            clearInterval(this.pollingTime)
        }
    }

    // 销毁监听器
    Img.prototype.destroyMonitor = function (type) {
        if (type === "load"){
            this.el.removeEventListener("load", this.loadEvent)
        } else if (type === "error"){
            this.el.removeEventListener("error", this.errorEvent)
        }else{
            this.el.removeEventListener("load", this.loadEvent)
            this.el.removeEventListener("error", this.errorEvent)
        }
        
    }


    // 移除图片对象
    Img.prototype.removeImg = function(){
        var index = this.imgLazy.imgEles.indexOf(this);
        this.imgLazy.imgEles.splice(index, 1) // 删除图片对象
        this.isRemoved = true;
    }


   /**
    * 公用方法
    */

    // 合并对象
   function objAssign(obj1,obj2){
       var obj = JSON.parse(JSON.stringify(obj1));

       var map = function (o1,o2){
           for (key in o2) {
               if (typeof o1[key] === 'object') {
                   map(o1[key],o2[key])
               } else {
                   if (o2[key] !== ""){
                       o1[key] = o2[key];
                   }
               }
           }

       }
       map(obj,obj2)
      
       return obj;
   }



    return ImgLazy
});

