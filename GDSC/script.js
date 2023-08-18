let menubtn = document.querySelectorAll('menu-Btn')
let navbar = document .queryselector('.header .flex .navbar');

menubtn.onclick = () =>{
	menuBtn.classlist.toggle('fa-times');
	navbar.classlist.toggle('active');
}

   var swiper = new Swiper(".course-slider", {
   	spaceBetween: 20,
   	grabCursor:true,
   	loop:true,
      pagination: {
        el: ".swiper-pagination",
         clickable: true,
      },
      breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2, 
        },
        1024: {
          slidesPerView: 3,          
        },
    },
});


   var swiper = new Swiper(".member-slider", {
   	spaceBetween: 20,
   	grabCursor:true,
   	loop:true,
      pagination: {
        el: ".swiper-pagination",
         clickable: true,
      },
      breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2, 
        },
        1024: {
          slidesPerView: 3,          
        },
    },
});


   var swiper = new Swiper(".reviews-slider", {
   	spaceBetween: 20,
   	grabCursor:true,
   	loop:true,
      pagination: {
        el: ".swiper-pagination",
         clickable: true,
      },
      breakpoints: {
        540: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2, 
        },
        1024: {
          slidesPerView: 3,          
        },
    },
});

