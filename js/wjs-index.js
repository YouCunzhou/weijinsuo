/**
 * Created by itcast.
 */
$(function(){
    /*获取当前所有item*/
    var items=$(".carousel-inner .item");
    /*监听屏幕的大小改变*/
   $(window).on('resize',function () {
       var width=$(window).width();
   /*判断屏幕宽度*/
       if(width>=768){
           $(items).each(function () {
               var item=$(this);
               // var imgSrc=item.data("largeImage");
               // var imgSrc=item[0].getAttribute("data-large-image");
               var imgSrc=item.attr("data-large-image");
               // console.log(imgSrc);
               item.html($("<a href='javascript:;' class='pcImg hidden-xs' style='background-image: url("+imgSrc+");'></a>"))
           })
       }else{
           $(items).each(function () {
               var item=$(this);
               var imgSrc=item.data("smallImage");
               item.html($('<a href="javascript:;" class="mobleImg hidden-sm hidden-lg hidden-md"><img src="'+imgSrc+'" alt="..."></a>'));
           })
       }
   }).trigger('resize');

    var startX,endX;
    var carousel=$(".carousel");
    var carousel_inner=$('.carousel-inner')[0];
    carousel_inner.addEventListener('touchstart',function (e) {
       startX=e.targetTouches[0].clientX;
    });
    carousel_inner.addEventListener('touchend',function (e) {
        endX=e.changedTouches[0].clientX;
        if(endX-startX>0){
            carousel.carousel('prev');
        }
        if(endX-startX<0){
            carousel.carousel('next');
        }
    });

    var boxWidth=$('.wjs_product').width();
    var totalWidth=0;
    $('.wjs_product .nav').find('li').each(function (index,value) {
        totalWidth=totalWidth+$(this).outerWidth(true)
    });
    $('.wjs_product .nav').css('width',totalWidth)
    var myScroll = new IScroll('.box',{
        scrollX: true, scrollY: false
    });
});