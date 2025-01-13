
setInterval(function(){
    const loading = document.querySelector("#circle");
    const mainContent = document.querySelector(".mainBox");
    loading.style.display = "none";
    mainContent.style.display = "block";
    }, 1000);
    //country---------------------------------------------------------------------------------
    const tabheader = document.querySelector(".tabheader__items");
    let mamlakat = document.querySelector('.country');
    tabheader.addEventListener('click', (events) => {
        if (events.target.matches('.tabheader__item')) {
            tabheader.querySelectorAll('.tabheader__item').forEach(item => item.classList.remove('tabheader__item_active'));
            events.target.classList.add('tabheader__item_active');
            const text = events.target.textContent.trim(); 
            mamlakat.textContent = text;
        }
    });
    
    
    //QOLGAN VAQT
    
    const day = document.querySelector("#days");
    const hour = document.querySelector("#hours");
    const minut = document.querySelector("#minutes");
    const sekund = document.querySelector("#seconds");
    const eventDate = new Date("2025-01-31T23:00:00");
    
    function updateCountdown() {
    const now = new Date();
    const diff = eventDate - now; // Millisekundlar farqi
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff /(1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff /(1000 * 60)) % 60);
    const seconds = Math.floor((diff /1000) % 60);
    
    
     document.querySelector("#days").innerHTML = `${days}`;
     document.querySelector("#hours").innerHTML = `${hours}`;
     document.querySelector("#minutes").innerHTML = `${minutes}`;
     document.querySelector("#seconds").innerHTML = `${seconds}`;
    
    }
    setInterval(updateCountdown, 1000); //Har bir soniyada yangilanadi
    
    function openmodel() {
        document.querySelector(".modalll").style.display = "block";
        document.body.style.overflow = 'hidden';
    }
    
    function closemodel() {
        document.querySelector(".modalll").style.display = "none";
        document.body.style.overflow = 'visible';
    }