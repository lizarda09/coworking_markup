let menu = document.getElementById('menu');
let main_menu = document.getElementById('main-menu');
main_menu.style.visibility = 'hidden';
menu.addEventListener('click', function (){
if(main_menu.style.visibility === 'hidden'){
    main_menu.style.visibility = 'visible';
}
else main_menu.style.visibility = 'hidden';
});