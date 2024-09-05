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

})