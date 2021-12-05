class Burger{
    constructor(){
        this.btn = document.querySelector('.prenav__burger');
        this.prenav = document.querySelector('.prenav');
        this.arrow = document.querySelector('.prenav__burger');

        this.prenav.style.transition = '0.8s all ease';
        this.arrow.style.transition = '0.8s all ease';
       

        this.btn.addEventListener('click', (e)=>{
            this.open(e);
        })
    }



    open(e){
        
       if(e.target.classList.contains('active')){
           e.target.classList.remove('active');
           this.prenav.style.minHeight = '50px';
           this.arrow.style.transform ='rotateX(0deg)'
       } else{
        this.prenav.style.minHeight = '190px';
        e.target.classList.add('active');
        this.arrow.style.transform ='rotateX(180deg)'
       }
       
    }
}

const burger = new Burger();


