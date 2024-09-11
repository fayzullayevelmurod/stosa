window.addEventListener('DOMContentLoaded', () => {
  "use strict";



  // fixed header
  const header = document.querySelector('header');
  const sticky = header.offsetTop;
  window.addEventListener('scroll', (e) => {
    if (window.pageYOffset > sticky) {
      header.classList.add('fixed')
    } else {
      header.classList.remove('fixed')
    }
  })

  // media menu
  const headerMenu = document.querySelector('.header-nav__right');
  const openHeaderMenuBtn = document.querySelector('.header-menu__btn');

  openHeaderMenuBtn.addEventListener('click', () => {
    if (window.pageYOffset === 0) {
      header.classList.toggle('fixed');
    } else if (!header.classList.contains('fixed')) {
      header.classList.add('fixed');
    }
    headerMenu.classList.toggle('active');
    openHeaderMenuBtn.classList.toggle('active');
    document.body.classList.toggle('hidden');
  })

  // why-stosa__card
  const whyStosaCard = document.querySelectorAll('.why-stosa__card');

  whyStosaCard.forEach(item => {
    const plusBtn = item.querySelector('.plus-btn');

    plusBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      whyStosaCard.forEach(el => {
        el.classList.remove('active');
        plusBtn.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
        plusBtn.classList.add('active');
      }
    });
  });


  // news-events__swiper
  // Swiperni initsializatsiya qilish
  const swiper = new Swiper('.news-events__swiper', {
    slidesPerView: 3.5,
    spaceBetween: 40,
    navigation: {
      nextEl: '.news-events__swiper-next',
      prevEl: '.news-events__swiper-prev',
    },
    speed: 700,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });

  // stosa-palio__swiper
  const swiper2 = new Swiper('.stosa-palio__swiper', {
    slidesPerView: 3,
    spaceBetween: 40,
    speed: 700,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'custom',
      renderCustom: function (swiper, current, total) {
        let paginationHTML = '';
        for (let i = 1; i <= total; i++) {
          if (i === current) {
            paginationHTML += '<span class="swiper-pagination-bullet swiper-pagination-bullet-active">0' + i + '</span>';
          } else {
            paginationHTML += '<span class="swiper-pagination-bullet">0' + i + '</span>';
          }
        }
        return paginationHTML;
      },
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });

  // tabs
  // Barcha .tabs elementlarini tanlash
  try {
    const allTabs = document.querySelectorAll('.tabs');
    console.log(allTabs);

    // Har bir tabs guruhi uchun alohida event qo'shamiz
    allTabs.forEach(tabs => {
      const tabItems = tabs.querySelectorAll('.tab-item');
      const tabContents = tabs.querySelectorAll('.tab-content');

      function hideTabContent() {
        tabContents.forEach(content => content.classList.remove('show'));
        tabItems.forEach(item => item.classList.remove('active'));
      }

      function showTabContent(index) {
        tabContents[index].classList.add('show');
        tabItems[index].classList.add('active');
      }

      hideTabContent();
      showTabContent(0); // Birinchi tabni ochish

      // Har bir tab-itemga click hodisasini biriktirish
      tabItems.forEach((tab, index) => {
        tab.addEventListener('click', function () {
          hideTabContent();
          showTabContent(index);
        });
      });
    });

  } catch (error) {
    console.log(error);
  }
  try {
    AOS.init();
  } catch {

  }

  // intro-swiper
  const introSwiper = new Swiper('.intro-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 700,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
})