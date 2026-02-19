const tabs = document.querySelectorAll('.menu-tab');
const panels = document.querySelectorAll('.menu-panel');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // remove active state
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));

        // activate selected
        tab.classList.add('active');
        document.getElementById(tab.dataset.target).classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.testimonials-swiper');
  if (!slider) return;

 new Swiper('.testimonials-swiper', {
  autoHeight: true,
  loop: true,
  speed: 600,
  autoplay: { delay: 2500 },
  pagination: { el: '.swiper-pagination', clickable: true }
});
});


document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.events-swiper', {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 5,
    loop: true,
    speed: 600,
    loopFillGroupWithBlank: true,

    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },

    pagination: {
      el: '.swiper-pagination-event', // MUST match your HTML
      clickable: true,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.gallery-swiper', {
    loop: true,
    speed: 600,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.gallery-pagination',
      clickable: true
    },
    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 3, spaceBetween: 20 },
      1200: { slidesPerView: 5, spaceBetween: 20 }
    }
  });
});

window.addEventListener('load', () => {
  AOS.refresh();
});



  let scrollTop = document.querySelector('.scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  
  document.addEventListener("DOMContentLoaded", () => {

  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("#navmenu .nav-link");
  const header = document.querySelector("#header");

  function activateNav() {
    const scrollY = window.pageYOffset;
    const headerHeight = header ? header.offsetHeight : 0;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - headerHeight - 40;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove("active");

          if (link.getAttribute("href") === "#" + sectionId) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", activateNav);
  activateNav();

});



AOS.init({
  once: true,
  duration: 800,
  easing: 'ease-in-out'
});

window.addEventListener('load', () => {
  AOS.refresh();
});


const lazySections = document.querySelectorAll(".lazy-section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("loaded");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

lazySections.forEach(section => observer.observe(section));
