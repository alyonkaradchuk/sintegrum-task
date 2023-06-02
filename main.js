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
