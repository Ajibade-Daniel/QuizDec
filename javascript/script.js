function toggleMenu() {
    var navLinks = document.querySelector('nav ul');
    navLinks.classList.toggle('active');
  }
  
  function handleTap(card) {
    
    document.querySelectorAll('.card').forEach(c => c.classList.remove('active'));
    
    
    card.classList.add('active');
  }
  
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }
  
  if (isTouchDevice()) {
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', function () {
       
        document.querySelectorAll('.card').forEach(c => {
          if (c !== card) c.classList.remove('active');
        });
  

        card.classList.toggle('active');
      });
    });
  
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.card')) {
        document.querySelectorAll('.card.active').forEach(card => {
          card.classList.remove('active');
        });
      }
    });
  }
  