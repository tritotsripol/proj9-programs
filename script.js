function changeLanguage(language) {
  document.querySelectorAll('[data-' + language + ']').forEach(function(element) {
    element.textContent = element.getAttribute('data-' + language);
  });
}

changeLanguage('en');

// theme
const themeToggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const prismTheme = document.getElementById('prism-theme');

// ตรวจสอบธีมที่บันทึกไว้
let savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
  document.body.classList.add('light');
  document.body.classList.remove('dark');
  themeIcon.src = 'sun-icon.png'; // ไอคอนพระอาทิตย์ (สว่าง)
} else {
  document.body.classList.add('dark');
  document.body.classList.remove('light');
  themeIcon.src = 'moon-icon.png'; // ไอคอนพระจันทร์ (มืด)
}

// ฟังก์ชันเปลี่ยนธีม
themeToggleButton.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light');
  document.body.classList.toggle('dark', !isLight);

  if (isLight) {
    localStorage.setItem('theme', 'light');
    themeIcon.src = 'sun-icon.png'; 
  } else {
    localStorage.setItem('theme', 'dark');
    themeIcon.src = 'moon-icon.png'; 
  }
});


//gotop
const gotop = document.querySelector('.gotop');
gotop.addEventListener('click',function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

//--hori scroll
const tabsList = document.querySelectorAll('.green-block, .blue-block, .scroll-container');

tabsList.forEach(tabs => {
  tabs.addEventListener('wheel', (e) => {
    e.preventDefault(); 
    tabs.scrollLeft += e.deltaY *0.5;
  });
});

//infinite-scroll
const container = document.querySelector('.scroll-container');
const CARD_WIDTH = 200 + 15; // ความกว้างการ์ด + gap
const originalCards = 13; // จำนวนการ์ดต้นฉบับ
const oneSetWidth = CARD_WIDTH * originalCards;
const centerPoint = oneSetWidth;

let isResetting = false;

// ฟังก์ชันเช็คและรีเซ็ต
container.addEventListener('scroll', () => {
  if (isResetting) return;
  
  const scrollLeft = container.scrollLeft;
  
  // ถ้าเลื่อนไปใกล้สุดขวา
  if (scrollLeft >= oneSetWidth * 1.9) {
    isResetting = true;
    container.style.scrollBehavior = 'auto';
    container.scrollLeft = centerPoint;
    setTimeout(() => {
      container.style.scrollBehavior = 'auto';
      isResetting = false;
    }, 50);
  }
  
  // ถ้าเลื่อนไปใกล้สุดซ้าย
  if (scrollLeft <= oneSetWidth * 0.1) {
    isResetting = true;
    container.style.scrollBehavior = 'auto';
    container.scrollLeft = centerPoint;
    setTimeout(() => {
      container.style.scrollBehavior = 'auto';
      isResetting = false;
    }, 50);
  }
});

// ตั้งค่าเริ่มต้นให้อยู่ชุดกลาง
container.scrollLeft = centerPoint;