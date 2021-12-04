
class Slider {
    constructor() {
        this.sliderInner = document.querySelector('.slider__inner');
        this.sliderLine = this.sliderInner.querySelector('.slider__line');
        this.sliderSlides = [...this.sliderLine.querySelectorAll('.slider__slide')];
        this.sliderPagination = this.sliderInner.querySelector('.slider__pagination');
        this.sliderRounds = [...this.sliderInner.querySelectorAll('.slider__round')];

        this.count = 0;

        this.x1 = null;
        this.y1 = null;



        //////////////////////// Click//////////////////////////
        this.init()


        window.addEventListener('resize', () => {
            this.init()
        })

        this.sliderPagination.addEventListener('click', (e) => {
            this.change(e)
        })


        //////////////////////// Interval//////////////////////////

        this.intervalId = this.interval(); 


        this.sliderPagination.addEventListener('mouseover', () => {
            clearInterval(this.intervalId);
        })
        this.sliderPagination.addEventListener('mouseout', () => {
            this.intervalId = setInterval(() => {
                this.autoClick();
            }, 3000);
        })


        //////////////////////// Touch//////////////////////////

        this.sliderInner.addEventListener('touchstart', (e) => {
            this.handleTouchStart(e);
            clearInterval(this.intervalId);
        }, false);

        this.sliderInner.addEventListener('touchmove', (e) => {
            this.handleTouchMove(e);
        }, false);

    }



    init() {
        this.width = this.sliderInner.offsetWidth;
        this.sliderLine.style.width = this.width * this.sliderSlides.length + 'px';

        this.sliderSlides.forEach(item => {
            
            item.style.width = this.width + 'px';
            item.style.height = 'auto';

        })
    }

    change(e) {
        if (e.target != this.sliderPagination) {


            this.sliderRounds.forEach((btn, index) => {
                btn.classList.remove('active');

                if (e.target === btn) {
                    this.count = index;
                    this.translate();

                }
            })
        }

    }

    translate() {

        this.sliderRounds[this.count].classList.add('active');

        this.sliderLine.style.transform = `translateX(-${this.count * this.width}px)`;
    }


    autoClick() {
        this.sliderRounds.forEach(btn => {
            btn.classList.remove('active');
        });
        this.count++;

        if (this.count >= this.sliderRounds.length) {
            this.count = 0;
            this.translate();
        } else {
            this.translate();
        }

    }

    handleTouchStart(e) {

        let touch = e.touches[0];
        this.x1 = touch.clientX;
        this.y1 = touch.clientY;


    }

    handleTouchMove(e) {

        if (!(this.x1 || this.y1)) {
            return false;
        }
        let touch = e.touches[0];

        let x2 = touch.clientX;
        let y2 = touch.clientY;



        let xDiff = x2 - this.x1;
        let yDiff = y2 - this.y1;

        // console.log(this.x1, x2);

        if (xDiff > 0) {
            //r

            this.sliderRounds.forEach(btn => {
                btn.classList.remove('active');
            })

            this.count--;
            if (this.count < 0) {
                this.count = this.sliderRounds.length - 1;

                this.sliderRounds[this.count].classList.add('active');
                this.sliderLine.style.transform = `translateX(-${this.count * this.width}px)`;

            }
            this.sliderRounds[this.count].classList.add('active');
            this.sliderLine.style.transform = `translateX(-${this.count * this.width}px)`;


        } else {
            //l

            this.autoClick();
        }


        this.x1 = null;
        this.y1 = null;
        
        this.intervalId = this.interval();
    }


    interval(){
      let id = setInterval(() => {
            this.autoClick();
        }, 3000);

        return id;
    }
}

let slider = new Slider();