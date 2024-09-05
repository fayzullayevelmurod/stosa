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

  // why-stosa__card
  const whyStosaCard = document.querySelectorAll('.why-stosa__card');

  whyStosaCard.forEach(item => {
    const plusBtn = item.querySelector('.plus-btn');

    plusBtn.addEventListener('click', () => {
      // Faqat o'zining kartochkasiga active klassini qo'shish yoki olib tashlash
      const isActive = item.classList.contains('active');

      // Barcha kartochkalardagi active klassini o'chirish
      whyStosaCard.forEach(el => {
        el.classList.remove('active');
        plusBtn.classList.remove('active');
      });

      // Agar o'zining kartochkasi aktiv bo'lmasa, uni aktiv qilish
      if (!isActive) {
        item.classList.add('active');
        plusBtn.classList.add('active');
      }
    });
  });


  // news-events__swiper
  // Swiperni initsializatsiya qilish
  const swiper = new Swiper('.news-events__swiper', {
    slidesPerView: 3.5, // Bir vaqtda ko'rsatiladigan slaydlar soni
    spaceBetween: 40, // Slaydlar o'rtasidagi masofa (px)
    navigation: {
      nextEl: '.news-events__swiper-next',
      prevEl: '.news-events__swiper-prev',
    },
    speed: 700,
    // Qo'shimcha sozlamalar (masalan, responsive)
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });

  // stosa-palio__swiper
  const swiper2 = new Swiper('.stosa-palio__swiper', {
    slidesPerView: 3, // Bir vaqtda ko'rsatiladigan slaydlar soni
    spaceBetween: 40, // Slaydlar o'rtasidagi masofa (px)
    speed: 700, // Slayder tezligi
    // centeredSlides: true, // Slayder markazlash
    pagination: {
      el: '.swiper-pagination', // Paginatsiya elementini belgilash
      clickable: true, // Paginatsiyani bosiladigan qilish
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
      }
    },
  });

  // tabs
  try {
    const tabItems = document.querySelectorAll('.tab-item');
    const tabContents = document.querySelectorAll('.tab-content');

    function hideTabContent() {
      tabContents.forEach(tabContent => tabContent.classList.remove('show'));
      tabItems.forEach(tabItem => tabItem.classList.remove('active'));
    }
    function showTabContent(idx = 0) {
      tabContents[idx].classList.add('show');
      tabItems[idx].classList.add('active');
    }
    hideTabContent();
    showTabContent();

    tabContents.forEach((el, index) => {
      tabItems.forEach((btn, idx) => {
        btn.addEventListener('click', (e) => {
          if (index == idx) {
            hideTabContent();
            showTabContent(idx);
          }
        })
      })
    })

  } catch (error) {
    console.log(error);

  }
})