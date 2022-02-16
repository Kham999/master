
  const activeEn = document.querySelector('.link-en');
  const activeRu = document.querySelector('.link-ru');
  activeRu.addEventListener('click', () => {
      activeRu.classList.add('active');
      activeRu.classList.remove('.nav-link:after');
});
activeEn.addEventListener('click', () => {
  activeEn.classList.add('active');
});
