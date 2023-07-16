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
  
    console.log("Formularz jest poprawny. Możesz wykonać akcję dołączenia.");
  });
  
  function validateEmail(email) {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  }
  
  function validatePhone(telefon) {
    const phoneRegex = /^\d{9}$/;
    return phoneRegex.test(telefon);
  }
  
  
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
 