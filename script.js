const hero = document.querySelector('.hero');
const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fCb1RRQgrka05IdkDTAJd9vXnF7AtXxZJg&s',
    'https://amoveisplanejadoscampinas.com.br/wp-content/uploads/2022/01/moveis-planejados-para-cozinha-campinas-e-regiao-600x300.jpg.webp',
    'https://marcenariafalone.com.br/wp-content/uploads/2022/02/JEF_2502-HDR-Large-1024x683.jpeg'
];

let currentIndex = 0;

function changeBackground() {
    hero.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}



// Muda a imagem a cada 5 segundos
setInterval(changeBackground, 5000);

// Inicia o slideshow com a primeira imagem
changeBackground();
