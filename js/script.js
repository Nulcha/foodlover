
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
    class ProductCard {
        constructor(imgSrc, name, title, oldPrice, price) {
          this.imgSrc = imgSrc;
          this.name = name;
          this.title = title;
          this.oldPrice = oldPrice;
          this.price = price;
        }
      
        render() {
          // Card container yaratish
          const card = document.createElement('div');
          card.className = 'product-card';
      
          // Rasm elementini yaratish
          const img = document.createElement('img');
          img.src = this.imgSrc;
          img.alt = this.name;
          img.id = 'img';
      
          // Mahsulot nomi
          const nameElem = document.createElement('h3');
          nameElem.id = 'name';
          nameElem.textContent = this.name;
      
          // Mahsulot ta'rifi
          const titleElem = document.createElement('p');
          titleElem.id = 'title';
          titleElem.textContent = this.title;
      
          // Narx ko'rsatish
          const priceContainer = document.createElement('p');
          const oldPriceElem = document.createElement('del');
          oldPriceElem.id = 'oldPrice';
          oldPriceElem.textContent = this.oldPrice;
      
          const priceElem = document.createElement('span');
          priceElem.className = 'primary-text';
          priceElem.id = 'price';
          priceElem.textContent = this.price;
      
          priceContainer.appendChild(oldPriceElem);
          priceContainer.appendChild(priceElem);
      
          // Elementlarni containerga qo'shish
          card.appendChild(img);
          card.appendChild(nameElem);
          card.appendChild(titleElem);
          card.appendChild(priceContainer);
      
          return card;
        }
      }
      // OUR special menu
      // Ma'lumotlar massivini yaratish
const menuItems = [
  { src: './img/food1.png', alt: 'LASAL Cheese', title: 'LASAL CHEESE', price: 18.0, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.' },
  { src: './img/food2.png', alt: 'JUMBO CRAB SHRIMP', title: 'JUMBO CRAB SHRIMP', price: 24.0, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.' },
  { src: './img/food3.png', alt: 'KOKTAIL JUCIE', title: 'KOKTAIL JUCIE', price: 12.0, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.' },
  { src: './img/food4.png', alt: 'CAPO STEAK', title: 'CAPO STEAK', price: 60.0, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.' },
  { src: './img/food5.png', alt: 'ORGANIC FRUIT SALAD', title: 'ORGANIC FRUIT SALAD', price: 8.0, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.' },
  { src: './img/food6.png', alt: 'CHEESE PIZZA', title: 'CHEESE PIZZA', price: 18.0, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.' },
  { src: './img/food7.jpeg', alt: 'KOFTA MEAT', title: 'KOFTA MEAT', price: 40.0, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.' },
  { src: './img/food8.jpeg', alt: 'SPANISH PIES', title: 'SPANISH PIES', price: 14.0, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.' },
  { src: './img/food9.jpeg', alt: 'CHEESE TOST', title: 'CHEESE TOST', price: 6.0, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.' },
  { src: './img/food10.jpeg', alt: 'FRUIT SALAD', title: 'FRUIT SALAD', price: 14.0, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.' },
  { src: './img/food11.jpeg', alt: 'CHICKEN SHAWARMA', title: 'CHICKEN SHAWARMA', price: 20.0, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.' },
  { src: './img/food12.jpeg', alt: 'MEGA CHEESE PIZZA', title: 'MEGA CHEESE PIZZA', price: 30.0, desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At, explicabo.' },
];

// HTML-ga  elementlarni qo'shish
const menuContainer = document.querySelector('.menu-items');

const createMenuSection = (items) => {
  const section = document.createElement('div');
  section.classList.add('menu-items-left');

  items.forEach(item => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    menuItem.innerHTML = `
      <img src="${item.src}" alt="${item.alt}">
      <div>
        <h3>${item.title} <span class="primary-text">$${item.price.toFixed(2)}</span></h3>
        <p>${item.desc}</p>
      </div>
    `;
    section.appendChild(menuItem);
  });

  return section;
};

// Chap va o'ng qismlarni yaratish
const leftItems = menuItems.slice(0, 6);
const rightItems = menuItems.slice(6);

const leftSection = createMenuSection(leftItems);
const rightSection = createMenuSection(rightItems);
rightSection.classList.replace('menu-items-left', 'menu-items-right');

// Sahifaga qo'shish
menuContainer.appendChild(leftSection);
menuContainer.appendChild(rightSection);
