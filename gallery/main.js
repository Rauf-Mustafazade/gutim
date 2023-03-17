
/////// dataFilter ////////

const nav = [{
    id: 'ALL GALLERY',
    num: '1'
},
{
    id: 'FITNESS',
    num: '2'
},
{
    id: 'COACHING',
    num: '3'
},
{
    id: 'EVENT',
    num: '4'
},
{
    id: 'OTHER',
    num: '5'
},
];

///////

const data = [{
    url: 'https://preview.colorlib.com/theme/gutim/img/gallery/gallery-1.jpg',
    id: 'FITNESS'

},
{
    url: 'https://static.toiimg.com/photo/75126749.cms',
    id: 'COACHING'

},  {
    url: 'https://preview.colorlib.com/theme/gutim/img/gallery/gallery-4.jpg',
   
    id: 'COACHING'

},  {
    url: 'https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    
    id: 'FITNESS'

}, {
    url: 'https://preview.colorlib.com/theme/gutim/img/gallery/gallery-7.jpg',
    
    id: 'EVENT'

}, {
    url: 'https://preview.colorlib.com/theme/gutim/img/classes/classes-3.jpg.webp',
   
    id: 'COACHING'

}, {
    url: 'https://preview.colorlib.com/theme/gutim/img/classes/classes-2.jpg.webp',
   
    id: 'OTHER'

},  {
    url: 'https://preview.colorlib.com/theme/gutim/img/classes/classes-4.jpg.webp',
    
    id: 'OTHER'

}, {
    url: 'https://preview.colorlib.com/theme/gutim/img/classes/classes-5.jpg.webp',
   
    id: 'OTHER'

}, {
    url: 'https://preview.colorlib.com/theme/gutim/img/classes/classes-6.jpg.webp',
    
    id: 'OTHER'

}, {
    url: 'https://preview.colorlib.com/theme/gutim/img/classes/classes-8.jpg.webp',
    
    id: 'FITNESS'

}, {
    url: 'https://preview.colorlib.com/theme/gutim/img/classes/classes-7.jpg.webp',
   
    id: 'FITNESS'

},

]
let filterContent = data
const cardsCountener = document.querySelector('.product_carts')
const createProduct = () =>{
cardsCountener.innerHTML = ""
filterContent.map((data) => {
const countener = document.createElement('div')
countener.classList.add('product__box')
const quick = document.createElement('div')
quick.classList.add('quick')
const quickBtn = document.createElement('button')
quickBtn.classList.add('quick__btn')
quick.append(quickBtn)
const quickBtnText = document.createElement('p')
// quickBtnText.classList.add('quick__btn-text')
// quickBtnText.textContent = 'Quick View'
quickBtn.append(quickBtnText)
const productImg = document.createElement('div')
productImg.classList.add('productImg')
const img = document.createElement('img')
img.src = data.url
img.classList.add('product__box-image')
productImg.append(img)
productImg.append(quick)
const p1 = document.createElement('p')
p1.textContent = data.text
p1.classList.add('product__box-title')
const p2 = document.createElement('p')
p2.textContent = data.price
p2.classList.add('product__box-price')
const a = document.createElement('a')
// a.href = ''
a.classList.add('product__box-icon')
const i1 = document.createElement('img')
i1.classList.add('product__box-heart1')
i1.src = 'https://preview.colorlib.com/theme/cozastore/images/icons/icon-heart-01.png'
a.append(i1)
const i2 =document.createElement('img')
i2.classList.add('product__box-heart2')
i2.classList.add('hidden')
i2.src = 'https://preview.colorlib.com/theme/cozastore/images/icons/icon-heart-02.png'
a.append(i2)
countener.append(productImg)
countener.append(p1)
countener.append(p2)
countener.append(a)
cardsCountener.append(countener)

})
}
createProduct()

////
const productLists = document.querySelector('.product__lists')
const ul = document.createElement('ul')
ul.classList.add('product__list')
nav.map((nav)=>{
const li = document.createElement('li')
li.classList.add('product__list-info')
li.textContent = nav.id
ul.append(li)
productLists.append(ul)
li.addEventListener('click',()=>{
if(nav.id == 'ALL GALLERY'){
    filterContent = data
    createProduct()

}else{
    filterContent = data.filter((x)=> x.id == nav.id)
    createProduct()
}
})

})

/////// dataFilter ////////
var btna = $('#button');
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btna.addClass('show');
  
    } else {
      btna.removeClass('show');
    }
  });
  
  btna.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0},'300');
  });