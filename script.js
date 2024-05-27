function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  function toggleResume() {
    var resume = document.querySelector('.old-resume');
    resume.classList.toggle('expanded');
    
    var expandButton = document.querySelector('.expand-button');
    if (resume.classList.contains('expanded')) {
      expandButton.textContent = 'Hide';
    } else {
      expandButton.textContent = 'Other Work Experiences';
    }
  }