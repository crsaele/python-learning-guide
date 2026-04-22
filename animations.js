  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); }
    });
  }, { threshold: 0.1 });
  reveals.forEach(el => observer.observe(el));

  // Nav dots active
  const sections = document.querySelectorAll('section[id], section.hero');
  const dots = document.querySelectorAll('.nav-dot');
  window.addEventListener('scroll', () => {
    let current = 0;
    sections.forEach((sec, i) => {
      if (window.scrollY >= sec.offsetTop - 200) current = i;
    });
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  });