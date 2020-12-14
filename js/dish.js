let btns = document.getElementsByClassName("navButton");
for(let i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", function(){
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace(' active', "");
        this.className += ' active';
        current[0].style.transition = '0.8s ease';
    });
}

let descOfDish = document.getElementById('descOfDish');
let buttonsContainer = document.getElementById('buttonsContainer');
let navButtonContainer = document.getElementById('navButtonContainer');
let rightPart = document.getElementById('rightPart');
window.onscroll = () => {
    if(window.scrollY >= 500){
        descOfDish.style.position = 'fixed'; 
        navButtonContainer.style.position = 'fixed';
        rightPart.style.position = 'fixed';
        descOfDish.style.top = '0%';
        navButtonContainer.style.top = '16%';
        rightPart.style.top = '24%';  
        rightPart.style.right = '2%';
        buttonsContainer.style.display = 'none';
        
    }
    else if(window.scrollY <= 500){
        descOfDish.style.position = 'relative';
        navButtonContainer.style.position = 'relative';
        rightPart.style.position = 'relative';
        rightPart.style.right = '0%';
        buttonsContainer.style.display = 'flex';
        buttonsContainer.style.animationPlayState = 'paused';
    }
}
