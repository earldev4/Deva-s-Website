$(document).ready(()=>{
    
    let hamburger = $('.hbg-menu')
    let ham_click = ()=>{
        let nav = $('.navigation-menu').toggleClass('navi-anim')
    }

    hamburger.on('click', ham_click)
})