(function ActiveLang(){
    const activeEn = document.querySelector('.link-en');
    const activeRu = document.querySelector('.link-ru');
    activeRu.addEventListener('click', () => {
        activeRu.classList.add('active');
});
activeEn.addEventListener('click', () => {
    activeEn.classList.add('active');
});
}());

(function ChangeNav(){
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.nav');
    const menuLinks = document.querySelectorAll('.nav-link');
    const menuCloseItem = document.querySelector('.header-nav-close');
    burgerItem.addEventListener('click', () => {
menu.classList.add('nav-active');
});
menuCloseItem.addEventListener('click', () => {
    menu.classList.remove('nav-active');
});
if (window.innerWidth <= 768){
for (let i=0; i<menuLinks.length;i++){
    menuLinks[i].addEventListener('click',()=>{
menu.classList.remove('nav-active');
    });
}
}
}())

(function(){
    const BtnWinter = document.querySelector('.button-winter');
    const BtnSpring = document.querySelector('.button-spring');
    const BtnSummer = document.querySelector('.button-summer');
    const BtnAutumn = document.querySelector('.button-autumn');
    const portfolioBtn = document.querySelectorAll('.black-button');
const portfolioImage = document.querySelectorAll('.portfolio-img');

BtnWinter.addEventListener('click', () => {
    portfolioImage.forEach((img, index) => img.src = `images/winter/${index + 1}.jpg`);
    BtnWinter.classList.add('active');
    BtnSpring.classList.remove('active');
    BtnSummer.classList.remove('active');
    BtnAutumn.classList.remove('active');
});
BtnSpring.addEventListener('click', () => {
    portfolioImage.forEach((img, index) => img.src = `images/spring/${index + 1}.jpg`);
    BtnWinter.classList.remove('active');
    BtnSpring.classList.add('active');
    BtnSummer.classList.remove('active');
    BtnAutumn.classList.remove('active');
});
BtnSummer.addEventListener('click', () => {
    portfolioImage.forEach((img, index) => img.src = `images/summer/${index + 1}.jpg`);
    BtnWinter.classList.remove('active');
    BtnSpring.classList.remove('active');
    BtnSummer.classList.add('active');
    BtnAutumn.classList.remove('active');
});
BtnAutumn.addEventListener('click', () => {
    portfolioImage.forEach((img, index) => img.src = `images/autumn/${index + 1}.jpg`);
    BtnWinter.classList.remove('active');
    BtnSpring.classList.remove('active');
    BtnSummer.classList.remove('active');
    BtnAutumn.classList.add('active');
});
}())
