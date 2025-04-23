  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // csak egyszer fusson le
      }
    });
  });

  document.querySelectorAll('.slide-in').forEach(el => {
    observer.observe(el);
  });

  console.log('JS működik!')