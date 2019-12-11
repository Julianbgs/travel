import './index.sass';
import Swiper from 'swiper/js/swiper.min';
import 'swiper/css/swiper.css';

export default () => {
  const gallerySwiper = new Swiper('.gallery__slider', {
    loop: true,
    pagination: {
      el: '.gallery__pagination',
      clickable: false,
      type: 'custom',
      renderCustom(swiper, current, total) {
        setTimeout(() => {
          if (current === 1) {
            const $firstPage = $('.gallery__first-page');
            $firstPage.css('color', '#c5c5c5');
          }
        }, 10);
        return `<span class="gallery__first-page">0${current} /</span> 0${total}`;
      },
    },
    navigation: {
      nextEl: '.gallery__next',
      prevEl: '.gallery__prev',
    },
  });
};
