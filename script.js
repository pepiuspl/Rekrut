function countdown() {
    const targetDate = new Date("2023-07-17T00:00:00Z");
    setInterval(() => {
     const currentDate = new Date();
     const timeDifference = targetDate - currentDate;
     
        let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
    }, 1000); 
  }
  countdown();

  const karty = document.querySelectorAll('.karta, .karta2');

  karty.forEach(function(karta) {
    const serce = karta.querySelector('.serce');
    
    serce.addEventListener('click', function() {
      serce.classList.toggle('full');
    });
  });
  const emailInput = document.getElementById('email');
  const telefonInput = document.getElementById('telefon');
  const dołączBtn = document.getElementById('dołącz');
  
  dołączBtn.addEventListener('click', function() {
    if (!validateEmail(emailInput.value) || !validatePhone(telefonInput.value)) {
      emailInput.classList.toggle('error', !validateEmail(emailInput.value));
      telefonInput.classList.toggle('error', !validatePhone(telefonInput.value));
      return;
    }
  
    console.log("Dziękujęmy!");
  });
  
  function changeSlide() {
    var slideIndex = 0;
    var slides = document.getElementsByClassName("slide");
    var arrows = document.getElementsByClassName("arrow");
  
    function showSlide(index) {
      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[index].style.display = "block";
    }
  
    function nextSlide() {
      slideIndex++;
      if (slideIndex >= slides.length) {
        slideIndex = 0;
      }
      showSlide(slideIndex);
    }
  
    function prevSlide() {
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = slides.length - 1;
      }
      showSlide(slideIndex);
    }
  
    arrows[0].addEventListener("click", nextSlide);
    arrows[1].addEventListener("click", prevSlide);
  }
  
  if (window.innerWidth < 768) {
    window.addEventListener("load", changeSlide);
  } else {
    var slide = document.querySelector(".slide");
    var arrows = document.querySelector(".arrow2");
  
    function nextSlide() {
      slide.style.left = "-100%";
      setTimeout(function() {
        slide.style.left = "0%";
      }, 500);
    }
  
    function prevSlide() {
      slide.style.left = "100%";
      setTimeout(function() {
        slide.style.left = "0%";
      }, 500);
    }
  
    arrows.addEventListener("click", nextSlide);
    arrows.addEventListener("click", prevSlide);
  }
  
  slides.length = slides.length + 1;
  /*
  $(document).ready(function(){
    $('.karuzela').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      prevArrow: '#arrow',
      nextArrow: '#arrow2',
    });
  */
 