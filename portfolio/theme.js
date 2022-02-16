let html = document.querySelector('.skills');
window.addEventListener('unload',() => {
    localStorage.setItem('light', html.classList.contains('light') ? 1 : 0);
});
 
if (localStorage.getItem('light') == 1) {
    html.classList.add("light");
}
 
document.querySelector('.toggleTheme').addEventListener('click',function() {
    html.classList.toggle("light");
});

let portfolio = document.querySelector('.portfolio');
window.addEventListener('unload',() => {
    localStorage.setItem('light', portfolio.classList.contains('light') ? 1 : 0);
});
 
if (localStorage.getItem('light') == 1) {
    portfolio.classList.add("light");
}
 
document.querySelector('.toggleTheme').addEventListener('click',function() {
    portfolio.classList.toggle("light");
});

let video = document.querySelector('.video');
window.addEventListener('unload',() => {
    localStorage.setItem('light', video.classList.contains('light') ? 1 : 0);
});
 
if (localStorage.getItem('light') == 1) {
    video.classList.add("light");
}
 
document.querySelector('.toggleTheme').addEventListener('click',function() {
    video.classList.toggle("light");
});

let price = document.querySelector('.price');
window.addEventListener('unload',() => {
    localStorage.setItem('light', price.classList.contains('light') ? 1 : 0);
});
 
if (localStorage.getItem('light') == 1) {
    price.classList.add("light");
}
 
document.querySelector('.toggleTheme').addEventListener('click',function() {
    price.classList.toggle("light");
});


let skills = document.querySelector('.skills-items');
window.addEventListener('unload',() => {
    localStorage.setItem('light', skills.classList.contains('light') ? 1 : 0);
});
 
if (localStorage.getItem('light') == 1) {
    skills.classList.add("light");
}
 
document.querySelector('.toggleTheme').addEventListener('click',function() {
    skills.classList.toggle("light");
});

let title = document.querySelector('.title-video');
window.addEventListener('unload',() => {
    localStorage.setItem('light', title.classList.contains('light') ? 1 : 0);
});
 
if (localStorage.getItem('light') == 1) {
    title.classList.add("light");
}
 
document.querySelector('.toggleTheme').addEventListener('click',function() {
    title.classList.toggle("light");
});

let titlePortfolio = document.querySelector('.title-portfolio');
window.addEventListener('unload',() => {
    localStorage.setItem('light', titlePortfolio.classList.contains('light') ? 1 : 0);
});
 
if (localStorage.getItem('light') == 1) {
    titlePortfolio.classList.add("light");
}
 
document.querySelector('.toggleTheme').addEventListener('click',function() {
    titlePortfolio.classList.toggle("light");
});

let titleSkills = document.querySelector('.title-skills');
window.addEventListener('unload',() => {
    localStorage.setItem('light', titleSkills.classList.contains('light') ? 1 : 0);
});
 
if (localStorage.getItem('light') == 1) {
    titleSkills.classList.add("light");
}
 
document.querySelector('.toggleTheme').addEventListener('click',function() {
    titleSkills.classList.toggle("light");
});

let priceTitle = document.querySelector('.price-title');
window.addEventListener('unload',() => {
    localStorage.setItem('light', priceTitle.classList.contains('light') ? 1 : 0);
});
 
if (localStorage.getItem('light') == 1) {
    priceTitle.classList.add("light");
}
 
document.querySelector('.toggleTheme').addEventListener('click',function() {
    priceTitle.classList.toggle("light");
});



    let winter = document.querySelector('.button-winter');
window.addEventListener('unload',() => {
    localStorage.setItem('light', winter.classList.contains('light') ? 1 : 0);
});
 
if (localStorage.getItem('light') == 1) {
    winter.classList.add("light");
}
 
document.querySelector('.toggleTheme').addEventListener('click',function() {
    winter.classList.toggle("light");
});

let spring = document.querySelector('.button-spring');
window.addEventListener('unload',() => {
    localStorage.setItem('light', spring.classList.contains('light') ? 1 : 0);
});
 
if (localStorage.getItem('light') == 1) {
    spring.classList.add("light");
}
 
document.querySelector('.toggleTheme').addEventListener('click',function() {
    spring.classList.toggle("light");
});

let summer = document.querySelector('.button-summer');
window.addEventListener('unload',() => {
    localStorage.setItem('light', summer.classList.contains('light') ? 1 : 0);
});
 
if (localStorage.getItem('light') == 1) {
    summer.classList.add("light");
}
 
document.querySelector('.toggleTheme').addEventListener('click',function() {
    summer.classList.toggle("light");
});

let autumn = document.querySelector('.button-autumn');
window.addEventListener('unload',() => {
    localStorage.setItem('light', autumn.classList.contains('light') ? 1 : 0);
});
 
if (localStorage.getItem('light') == 1) {
    autumn.classList.add("light");
}
 
document.querySelector('.toggleTheme').addEventListener('click',function() {
    autumn.classList.toggle("light");
});

