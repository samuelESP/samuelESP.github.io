
function menuMobile(){
    
    const menu = document.querySelector('.mobile_menu');

    const openIcon =document.querySelector('.openIcon');
    const closeIcon = document.querySelector('.closeIcon');
    
    if(menu.classList.contains('open')){
        menu.classList.remove('open');
        openIcon.style.display='block';
        closeIcon.style.display='none';
    }else{
        menu.classList.add('open');
        openIcon.style.display='none';
        closeIcon.style.display='block';
    }
}
