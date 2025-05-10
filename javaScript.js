
document.querySelectorAll('nav a[href^="#"]').forEach(enlace => {
    enlace.addEventListener('click', function (e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute('href'));
      destino.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });
  
  window.addEventListener('scroll', () => {
    const secciones = document.querySelectorAll('section[id]');
    const scrollY = window.scrollY + window.innerHeight / 3;
  
    secciones.forEach(sec => {
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      const id = sec.getAttribute('id');
      const navLink = document.querySelector(`nav a[href="#${id}"]`);
  
      if (scrollY >= top && scrollY < bottom) {
        navLink.classList.add('activo');
      } else {
        navLink.classList.remove('activo');
      }
    });
  }); 