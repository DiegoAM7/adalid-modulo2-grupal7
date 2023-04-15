$(document).ready(function () {
  $('[data-fancybox="gallery"]').fancybox({
    thumbs : {
      autoStart : true
    },
    iframe: {
      preload: true,
      tpl: '<iframe id="fancybox-frame{rnd}"  name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen allow="autoplay; fullscreen" src="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    }
  }); 
 
});
