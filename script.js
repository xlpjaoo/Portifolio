const botaoMenu = document.getElementById('botaoMenu');
const menu = document.getElementById('menuLateral');
const links = menu.querySelectorAll('a'); 


botaoMenu.addEventListener('click', function () {
  menu.classList.toggle('aberto');
});


links.forEach(function (link) {
  link.addEventListener('click', function () {
    menu.classList.remove('aberto');
  });
});

