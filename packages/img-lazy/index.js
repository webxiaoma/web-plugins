var imgList = [{
    url: "",
    imgUrl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1181679303,474549214&fm=27&gp=0.jpg",
}, {
    url: "",
    imgUrl: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2887789243,2048380160&fm=27&gp=0.jpg",
}, {
    url: "",
    imgUrl: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3928911940,769051781&fm=27&gp=0.jpg",
}, {
    url: "",
    imgUrl: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2692188675,4084165957&fm=27&gp=0.jpg",
}, {
    url: "",
    imgUrl: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2069099295,1295724631&fm=27&gp=0.jpg",
}, {
    url: "",
    imgUrl: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1441660647,1920724672&fm=27&gp=0.jpg",
}, {
    url: "",
    imgUrl: "https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=832082262,2317068098&fm=85&app=63&f=JPEG?w=121&h=75&s=1404D11428E1D4942F14BD57030080E2",
}, {
    url: "",
    imgUrl: "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1777573870,2946191175&fm=85&app=63&f=JPEG?w=121&h=75&s=ADBC50957C483E474E36C8DC0300C0A8",
}, {
    url: "",
    imgUrl: "https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1777573870,2946191175&fm=85&app=63&f=JPEG?w=121&h=75&s=ADBC50957C483E474E36C8DC0300C0A8",
}, {
    url: "",
    imgUrl: "https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=1055397855,4145485269&fm=85",
}, {
    url: "",
    imgUrl: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1009428747,3033228559&fm=27&gp=0.jpg",
}, {
    url: "",
    imgUrl: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3578319078,1874142836&fm=27&gp=0.jpg",
}, {
    url: "",
    imgUrl: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3701837456,2619828461&fm=27&gp=0.jpg",
}, {
    url: "",
    imgUrl: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2442276820,3637057900&fm=27&gp=0.jpg",
}, {
    url: "",
    imgUrl: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3593003870,3556195279&fm=27&gp=0.jpg",
}, {
    url: "",
    imgUrl: "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=51181103,3927861887&fm=85&app=63&f=JPEG?w=121&h=75&s=E0ABBD575443A70F2E1F75770300E038",
}]





window.onload = function() {

    function img(url) { //创建函数
        this.url = url
        console.log(url)
        var img = document.createElement('img');
        img.setAttribute("src", url);
        document.querySelector('.photoWarpC').appendChild(img);
    }

    for (var i = 0; i < imgList.length; i++) {
        new img(imgList[i].url)
    }

    var img = document.getElementsByTagName("img"); //获取所有的img
    var imgNum = document.getElementsByTagName('img').length;

    console.log(img[5].offsetTop)

    lazyload() //进入页面加载可见区的图片

    window.onscroll = lazyload

    function lazyload() {
        var seeHeight = document.documentElement.clientHeight; //可见区域高度
        var scrollTop = document.documentElement.scrollTop //滚动条高度
        console.log("可见区域高度" + seeHeight)
        console.log("滚动条高度" + scrollTop)
        for (var i = 0; i < imgNum; i++) {
            if (img[i].offsetTop < seeHeight + scrollTop) {
                img[i].src = imgList[i].imgUrl
            }
        }
    }
}