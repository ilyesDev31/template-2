const ul = document.querySelector('header .container ul');
const bars = document.querySelector('header .container i.nav');
const sliderP =document.querySelector('.section-1 .text p');
const sliderT =document.querySelector('.section-1 .text h2');
const arrows = document.querySelectorAll('.arrows i');
const bullets = document.querySelector(".section-1 .bullets");

let counter = 0;
const titles  = ["Hello World We Are Kasper We Make Art", "Hello World We Are Kasper We Make Art 2", "Hello World We Are Kasper We Make Art 3"];
const paragraphes = ["lorem 1", "lorem 2", "lorem 3"];

document.body.addEventListener('DOMContentLoaded',(function() {
    createBull();
    initializeContent();
})())


bars.onclick = function(){
    ul.classList.toggle('active');
}

arrows[0].onclick = function(){
    if(counter > 0){
        counter--;
        activeBull()
        initializeContent()
    }
}
arrows[1].onclick = function(){
    if(counter < titles.length-1){
        counter++;
        activeBull()
        initializeContent()
    }
}

// create bullets
function createBull(){
     for(let i = 0; i < titles.length; i++){
        let bull = document.createElement('div');
        i == counter && bull.classList.add('active');
        bullets.appendChild(bull)
     }
}

function initializeContent(){
    sliderP.innerHTML = paragraphes[counter];
    sliderT.innerHTML = titles[counter];
}



function removeActive(list){
list.forEach(el =>{
    el.classList.remove('active');
});
}
const bull = document.querySelectorAll('.bullets div');
function activeBull(){
    removeActive(bull)
    bull[counter].classList.add('active');
}
bull.forEach((bul, i) =>{
    bul.onclick = function(){
        removeActive(bull)
        counter = i;
    bul.classList.add('active');
    initializeContent()
    }
});
// navigation
const links = document.querySelectorAll('header li');
const sections = document.querySelectorAll('body > div');
links.forEach((link,i) =>{
    link.onclick = function(){
        window.scrollTo(0,sections[i].offsetTop);
    }
})
window.addEventListener('scroll', function(){
for(let i = 0; i < sections.length; i++){
    if(sections[i].getBoundingClientRect().top < 1){
        removeActive(links)
links[i].classList.add('active');
    }
}

});

// portfolio
const portfolioBtn = document.querySelectorAll('div.portfolio li');
const portfolioImg =Array.from( document.querySelectorAll('.portfolio .images > div'));
portfolioBtn.forEach(btn => {
    btn.onclick = function(e){
        removeActive(portfolioBtn);
        removeActive(portfolioImg);
        this.classList.add('active');
        portfolioImg.forEach(img =>{
            if(e.target.innerHTML.toLowerCase() === "all"){
                img.classList.add('active');
            }
         if(img.classList.contains(e.target.innerHTML.toLowerCase())){
            img.classList.add('active');
         }
        })
    }
})
console.log(portfolioBtn);