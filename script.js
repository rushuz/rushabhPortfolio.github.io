const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
}, {
  threshold: 0.2
});

// Observe each project card
document.querySelectorAll('.project-card').forEach(card => {
  observer.observe(card);
});

// Also observe the entire projects section
const projectSection = document.querySelector('#projects');
if (projectSection) {
  observer.observe(projectSection);
}
