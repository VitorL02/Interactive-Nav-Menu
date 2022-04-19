const list = document.querySelectorAll('.list');


function activeIcon(){
    list.forEach((element)=>{
        element.classList.remove('active');
        this.classList.add('active');
    });
}

list.forEach((element) => {
    element.addEventListener('click',activeIcon);
    
})