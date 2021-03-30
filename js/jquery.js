$('.slides-list-topo').slidesListTopo({ 
    auto:true,
    easing:'easeInOutCubic',
    useCSS:false,
    speed: 1000,
    onSlideNext: function($slideElement, oldIndex, newIndex){
        var corSlide = $('.img-slider').eq( newIndex ).data('color');
        $('.banner').css({ 'background-color': corSlide });
    }
});