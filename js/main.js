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
      whyStosaCard.forEach(el => el.classList.remove('active'));
  
      // Agar o'zining kartochkasi aktiv bo'lmasa, uni aktiv qilish
      if (!isActive) {
        item.classList.add('active');
      }
      
      // Plus tugmasiga active klassini qo'shish yoki olib tashlash
      plusBtn.classList.toggle('active');
    });
  });
  


})