//console.log('hello');
const navbar = document.querySelector('.navbar');
const headerContentSpan = document.querySelector('.header-content span');
const loading = document.querySelector('.loading');
const scrollToTop = document.querySelector('.scroll-to-top');
const about =document.querySelector('.about');
//console.log(headerContentSpan.offsetTop)
navbar.style.transition = '.4s background-color';
window.addEventListener("scroll" , function(){
    if(window.scrollY >= headerContentSpan.offsetTop){
       // console.log('hello')
        navbar.style.backgroundColor = "#fff";
        navbar.style.boxShadow = "0 0 10px #222";
    }
    else{
        console.log('tt')
        navbar.style.backgroundColor = "transparent";
        navbar.style.boxShadow = "0 0 0 #222";
    }
    if(window.scrollY > about.offsetTop){
        scrollToTop.classList.remove('opacity-0' , "invisible");
        
    }
    else{
        scrollToTop.classList.add('opacity-0' , "invisible");
    }
})

window.addEventListener('load' , function(){
    setTimeout(function(){
        loading.classList.add('opacity-0' , 'invisible');
        document.body.style.overflow = 'auto';
    } , 2000)
})


scrollToTop.addEventListener('click' , function(){
   window.scroll({
    top: 0,
    behavior: 'smooth',
    })
   
})