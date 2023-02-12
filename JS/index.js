window.onload = function() {
    const header = document.getElementById("topnav");
  
    window.onscroll = function() {
      if (window.pageYOffset > 10) {
        header.classList.add("shrink");
      } else {
        header.classList.remove("shrink");
      }
    };
  };

document.querySelector('.navbar h1').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });