
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

    // start offer-items
    const offer = [
        {
            image: "./img/offer1.png",
            title: "Quattro Pasta",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam.",
            oldPrice: "$ 55.00",
            price: "$ 18.00"
        },
        {
            image: "./img/offer2.png",
            title: "Quattro Pasta",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam.",
            oldPrice: "$ 55.00",
            price: "$ 18.00"
        },
        {
            image: "./img/offer3.png",
            title: "Quattro Pasta",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quibusdam.",
            oldPrice: "$ 55.00",
            price: "$ 18.00"
        },
    ];
    
    const offeritems = document.querySelector('.offers-items');
    offeritems.innerHTML = ""; 
    offer.forEach((item) => {
        const menuItem  = document.createElement("div");
        menuItem.className = "menu-item"; 
      
        menuItem.innerHTML = `
          <img src="${item.image}" alt="${item.title}" class="menu-image" />
          <h3 class="menu-title">${item.title}</h3>
          <p class="menu-description">${item.description}</p>
          <div class="menu-price">
            <del >${item.oldPrice}</del> 
            <span class="primary-text">${item.price}</span> 
          </div>
        `;
        offeritems.appendChild(menuItem); 
    });
    const dels = document.getElementsByTagName('del');
    for (let i = 0; i < dels.length; i++) {
        dels[i].style.color = "white";
    }