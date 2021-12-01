const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);




// Load Featured Product by Array
const FeaturedProductList = $('.feature__product__slides_wrapper');
const FeaturedProduct = {
    products: [
        {
            image: './assets/img/product/featured/1.png',
            name: 'Cantilever chair',
            code: 'Code - Y523201',
            price: '$42.00'
        },
        {
            image: './assets/img/product/featured/2.png',
            name: 'Cantilever chair',
            code: 'Code - Y523201',
            price: '$42.00'
        },
        {
            image: './assets/img/product/featured/3.png',
            name: 'Cantilever chair',
            code: 'Code - Y523201',
            price: '$42.00'
        },
        {
            image: './assets/img/product/featured/4.png',
            name: 'Cantilever chair',
            code: 'Code - Y523201',
            price: '$42.00'
        }
    ],
    load: function(){   
        let htmls =      
        this.products.map(function(product,index){ 
            return `<!-- Product ${index+1} -->
                    <div class="c-3 gutter swiper-slide">
                        <div class="feature__product__slide mb-53">
                            <div class="feature__product__slide__img__wrapper">
                                <ul class="user__contact__options">
                                    <li class="user__contact__option">
                                        <i class="ti-shopping-cart user__contact__option__icon"></i>
                                    </li>
                                    <li class="user__contact__option">
                                        <i class="far fa-heart user__contact__option__icon"></i>
                                    </li>
                                    <li class="user__contact__option">
                                        <i class="fas fa-search-plus user__contact__option__icon"></i>
                                    </li>
                                </ul>
                                <a href="#" class="view__detail__button">View Details</a>
                                <img src=${product.image} alt="" class="feature__product__slide__img">
                            </div>
                            <div class="feature__product__slide__data">
                                <h2 class="feature__product__slide__product__name mb-12">${product.name}</h2>
                                <ul class="feature__product__slide__product__color__options mb-12">
                                    <li class="feature__product__slide__product__color__option green"></li>
                                    <li class="feature__product__slide__product__color__option red"></li>
                                    <li class="feature__product__slide__product__color__option blue"></li>
                                </ul>
                                <p class="featured__product__slide__product__code mb-12">${product.code}</p>
                                <p class="featured__product__slide__product__price">${product.price}</p>
                            </div>
                        </div>
                    </div>`
        })
        FeaturedProductList.innerHTML = htmls
    },
    start: function(){
        this.load();
    }
   
    
}
FeaturedProduct.start()


// Load Last Product by Array
const lastProductList = $('.last__products')
const LastProduct = {
    products: [
        {
            image: './assets/img/product/lastProduct/1.png',
            name: 'Comfort Handy Craft',
            oldPrice: '$42.00',
            newPrice: '$65.00'
        },
        {
            image: './assets/img/product/lastProduct/6.png',
            name: 'Comfort Handy Craft',
            oldPrice: '$42.00',
            newPrice: '$65.00'
        },
        {
            image: './assets/img/product/lastProduct/3.png',
            name: 'Comfort Handy Craft',
            oldPrice: '$42.00',
            newPrice: '$65.00'
        },
        {
            image: './assets/img/product/lastProduct/4.png',
            name: 'Comfort Handy Craft',
            oldPrice: '$42.00',
            newPrice: '$65.00'
        },
        {
            image: './assets/img/product/lastProduct/5.png',
            name: 'Comfort Handy Craft',
            oldPrice: '$42.00',
            newPrice: '$65.00'
        },
        {
            image: './assets/img/product/lastProduct/6.png',
            name: 'Comfort Handy Craft',
            oldPrice: '$42.00',
            newPrice: '$65.00'
        }
    ],
    load: function(){
        let htmls = 
        this.products.map(function(product,index){
            return `<!-- Product ${index+1} -->
                    <div class="c-4 gutter">
                        <div class="last__product__item mb-120">
                            <div class="last__product__img__wrapper">
                                <img src="./assets/img/product/lastProduct/decor.png" alt="" class="last__product__decor__img">
                                <img src=${product.image} alt="" class="last__product__img">
                                <ul class="last__product__user__action__list">
                                    <li class="last__product__user__item">
                                        <i class="ti-shopping-cart last__product__user__item__icon"></i>
                                    </li>
                                    <li class="last__product__user__item">
                                        <i class="far fa-heart last__product__user__item__icon"></i>
                                    </li>
                                    <li class="last__product__user__item">
                                        <i class="fas fa-search-plus last__product__user__item__icon"></i>
                                    </li>
                                </ul>
                            </div>
                            <div class="last__product__data">
                                <h1 class="last__product__name">${product.name}</h1>
                                <div class="last__product__price">
                                    <p class="last__product__old__price">${product.oldPrice}</p>
                                    <p class="last__product__new__price">${product.newPrice}</p>
                                </div>
                            </div>
                        </div>
                    </div>`
        })
        lastProductList.innerHTML = htmls.join('')
    },
    start: function(){
        this.load()
    }
}
LastProduct.start()

// Load Top Categories
let TopCategoryList = $('.top__categories__slides__wrapper')
const TopCategories = {
    products: [
        {
            image:  './assets/img/product/lastProduct/1.png',
            option1: 'Mini',
            option2: 'LCW',
            option3: 'Chair',
            price: '$56.00'
        },
        {
            image:  './assets/img/product/lastProduct/1.png',
            option1: 'Mini',
            option2: 'LCW',
            option3: 'Chair',
            price: '$56.00'
        },
        {
            image:  './assets/img/product/lastProduct/1.png',
            option1: 'Mini',
            option2: 'LCW',
            option3: 'Chair',
            price: '$56.00'
        },
        {
            image:  './assets/img/product/lastProduct/1.png',
            option1: 'Mini',
            option2: 'LCW',
            option3: 'Chair',
            price: '$56.00'
        }
    ],
    load: function(){
        let htmls = 
        this.products.map(function(product,index){
            return `<!-- Product 1 -->
                    <div class="c-3 gutter">
                        <div class="top__categories__slide">
                            <div class="top__categories__img__wrapper mb-20">
                                <img src="./assets/img/TopCategories/1.png" alt="" class="top__categories__img">
                                <a href="#" class="top__categories__button">View Shop</a>
                            </div>
                            <div class="top__categories__data">
                                <ul class="top__categories__options mb-13">
                                    <li class="top__categories__option">Mini</li>
                                    <li class="top__categories__option">LCW</li>
                                    <li class="top__categories__option">Chair</li>
                                </ul>
                                <p class="top__categories__price">$56.00</p>
                            </div>
                        </div>
                    </div>`
        })
        TopCategoryList.innerHTML = htmls.join('')
    },
    start: function(){
        this.load()
    }
}
TopCategories.start()

// Slider 
var swiper = new Swiper(".slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
