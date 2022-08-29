var home = window.document.getElementById('home')
var evento = window.document.getElementById('evento')
var conta = window.document.getElementById('conta')
var about = window.document.getElementById('about')

var slide = window.document.getElementById('myTabContent')
var cards = window.document.getElementById('cards')

window.onscroll = function(){
    focusMenu()
}

function focusMenu(){
    if(document.documentElement.scrollTop > 700){
        home.style.borderTop = "none"
        home.style.textShadow = "none"
    }else{
        home.style.borderTop = "1px solid #fff"
        home.style.textShadow = "2px 1px 15px #fff"
    }

    if( document.documentElement.scrollTop > 700 && document.documentElement.scrollTop < 1600){
        evento.style.borderTop = "1px solid #fff"
        evento.style.textShadow = "2px 1px 15px #fff"
    }else{
        evento.style.borderTop = "none"
        evento.style.textShadow = "none"
    } 

    if(document.documentElement.scrollTop > 1610){
        conta.style.borderTop = "1px solid #fff"
        conta.style.textShadow = "2px 1px 15px #fff"
    }else{
        conta.style.borderTop = "none"
        conta.style.textShadow = "none"
    }

}
