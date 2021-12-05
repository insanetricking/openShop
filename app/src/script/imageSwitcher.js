class ImageSwitcher {
    constructor(obj) {
        this.imageItems = [...document.querySelectorAll(obj.imageItems)];
        this.miniImages = [...document.querySelectorAll(obj.miniImages)];
        this.images = [...document.querySelectorAll(obj.images)];

        this.current = 0;

        this.imageItems.forEach(item => {

            item.addEventListener('click', (e) => {
                this.switch(e);
            })
        })

    }


    switch(e) {

        this.imageItems.forEach(item => {
            item.classList.remove('active');
        });
        this.images.forEach(item => {
            item.classList.remove('active');
        });

        this.current = this.miniImages.indexOf(e.target);

        this.imageItems[this.current].classList.add('active');
        this.images[this.current].classList.add('active');

    }
}







const imageSwitcher = new ImageSwitcher(
    {
        imageItems: '.item__box-item',
        images: '.item__mainImg',
        miniImages: '.item__miniImg',
    }
)