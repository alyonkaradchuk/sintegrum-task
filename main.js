const courseItems = document.querySelectorAll('.program__course-item');

courseItems.forEach(function(courseItem) {
  const courseText = courseItem.querySelector('.program__course-text');
  const courseInfo = courseItem.querySelectorAll('.program__course-info');

  courseText.addEventListener('click', function() {
    courseInfo.forEach(function(info) {
      info.style.display = info.style.display === 'none' ? 'block' : 'none';
    });

    courseText.classList.toggle('active');
  });
});

var swiper = new Swiper(".mySwiper", {
  effect: "flip",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const parallaxContainer = document.querySelector('.parallax-container');

document.addEventListener('mousemove', function(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const parallaxOffsetX = (mouseX / windowWidth - 0.5) * windowWidth * 0.1; // Изменение по горизонтали
  const parallaxOffsetY = (mouseY / windowHeight - 0.5) * windowHeight * 0.1; // Изменение по вертикали

  parallaxContainer.style.transform = `translate(${parallaxOffsetX}px, ${parallaxOffsetY}px)`;
});

