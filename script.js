let menu = document.getElementById('menu');
let main_menu = document.getElementById('main-menu');
main_menu.style.visibility = 'hidden';
menu.addEventListener('click', function (){
if(main_menu.style.visibility === 'hidden'){
    main_menu.style.visibility = 'visible';
}
else main_menu.style.visibility = 'hidden';
});

function bookButton() {
    $('.modal_window, .overlay').fadeIn();
    setTimeout(()=>{
        $('.modal_window, .overlay').fadeOut();}
        , 5000)
}


$('#page1_form_button').click(bookButton);
$('.office1-button').click(bookButton);
$('.page4_button').click(bookButton);
$('.page8_button').click(bookButton);
