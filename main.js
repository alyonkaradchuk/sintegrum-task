const courseItems = document.querySelectorAll('.program__course-text');

courseItems.forEach(function(courseItem) {
  courseItem.addEventListener('click', function() {
    const courseInfo = this.parentNode.querySelectorAll('.program__course-info');
    courseInfo.forEach(function(info) {
      info.style.display = 'none';
    });
  });
});
