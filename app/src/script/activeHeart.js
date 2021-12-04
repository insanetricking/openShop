
class Heart {
    constructor() {
        this.hearts = [...document.querySelectorAll('.cards__heart')];

       
        this.hearts.forEach(heart =>{
            heart.addEventListener('click', (e) => {
                this.change(e, heart);
            })
        })
    }

    change(e) {
        
        
        if(e.target.dataset.flag === 'true'){
            e.target.src= '../images/heart.svg'
            e.target.dataset.flag = false;
        }else{
            e.target.setAttribute('data-flag', true)
            e.target.src= '../images/heartRed.svg'
        }
        
    }
}


const heart = new Heart();
