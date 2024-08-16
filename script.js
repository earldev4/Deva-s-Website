$(document).ready(()=>{
    
    let hamburger = $('.hbg-menu')
    let ham_click = ()=>{
        let nav = $('.navigation-menu').toggleClass('navi-anim')
    }

    hamburger.on('click', ham_click)

    let theme_switch = $("#theme-switch")
    let darkmode = localStorage.getItem('dark-mode')

    let  enable_darkmode =() =>{
        document.body.classList.add('dark-mode')
        localStorage.setItem('dark-mode', 'active')
    }

    let  disable_darkmode =() =>{
        document.body.classList.remove('dark-mode')
        localStorage.setItem('dark-mode', null)
    }

    if (darkmode === "active") enable_darkmode()

    let darkmode_click = () =>{
        darkmode = localStorage.getItem('dark-mode')
        darkmode !== "active" ? enable_darkmode() : disable_darkmode()
    }

    theme_switch.on('click', darkmode_click)
})