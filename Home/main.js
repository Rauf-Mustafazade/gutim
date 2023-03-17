
const trening = [
    {
        url: 'https://preview.colorlib.com/theme/gutim/img/trainer/trainer-1.jpg.webp',
        names: 'Patrick Cortez',
        status: 'Leader',
        inform: 'non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    },
    {
        url: 'https://preview.colorlib.com/theme/gutim/img/trainer/trainer-2.jpg',
        names: 'Gregory Powers',
        status: 'Gym coach',
        inform: 'non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
        url: 'https://preview.colorlib.com/theme/gutim/img/trainer/trainer-3.jpg.webp',
        names: 'Walter Wagner',
        status: 'Dance trainer',
        inform: 'non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
]
const trenerPhoto = document.querySelector('.trener--photo')

trening.map(trener => {
    console.log(trener)
    const trenerItem = document.createElement('div')
    trenerItem.classList.add('trener-item')
    const trenerImg = document.createElement('img')
    trenerImg.classList.add('trener-img')
    trenerImg.src = trener.url
    const trenerText = document.createElement('div')
    trenerText.classList.add('trener-text')
    const h3 = document.createElement('h3')
    h3.innerText = trener.names
    const span = document.createElement('span')
    span.innerText = trener.status
    const ul = document.createElement('ul')
    const li1 = document.createElement('li')
    li1.classList.add('li-text')
    const p = document.createElement('p')
    p.innerText = trener.inform
    const li2 = document.createElement('li')
    li2.classList.add('li-icon')
    const iconF = document.createElement('i')
    iconF.classList.add('fa')
    iconF.classList.add('fa-facebook')
    const iconI = document.createElement('i')
    iconI.classList.add('fa')
    iconI.classList.add('fa-instagram')
    const iconT = document.createElement('i')
    iconT.classList.add('fa')
    iconT.classList.add('fa-twitter')
    const iconP = document.createElement('i')
    iconP.classList.add('fa')
    iconP.classList.add('fa-pinterest')
    li1.append(p)
    li2.append(iconF)
    li2.append(iconI)
    li2.append(iconP)
    li2.append(iconT)
    ul.append(li1)
    ul.append(li2)
    trenerText.append(h3)
    trenerText.append(span)
    trenerText.append(ul)
    trenerItem.append(trenerImg)
    trenerItem.append(trenerText)
    trenerPhoto.append(trenerItem)
    console.log(trenerPhoto);


})

//Zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
const gallery = [
  {
    url: 'https://preview.colorlib.com/theme/gutim/img/classes/classes-1.jpg',
    names: 'Patrick Cortez',
    status: 'Leader',
    
},
{
  url: 'https://preview.colorlib.com/theme/gutim/img/classes/classes-2.jpg',
  names: 'Patrick Cortez',
  status: 'Leader',
  
},
{
  url: 'https://preview.colorlib.com/theme/gutim/img/classes/classes-3.jpg',
  names: 'Patrick Cortez',
  status: 'Leader',
  
},
{
  url: 'https://preview.colorlib.com/theme/gutim/img/classes/classes-4.jpg',
  names: 'Patrick Cortez',
  status: 'Leader',
  
},
{
  url: 'https://preview.colorlib.com/theme/gutim/img/classes/classes-5.jpg',
  names: 'Patrick Cortez',
  status: 'Leader',
  
},
{
  url: 'https://preview.colorlib.com/theme/gutim/img/classes/classes-6.jpg',
  names: 'Patrick Cortez',
  status: 'Leader',
  
},
{
  url: 'https://preview.colorlib.com/theme/gutim/img/classes/classes-7.jpg',
  names: 'Patrick Cortez',
  status: 'Leader',
  
},
{
  url: 'https://preview.colorlib.com/theme/gutim/img/classes/classes-8.jpg',
  names: 'Patrick Cortez',
  status: 'Leader',
  
},
]
const dup = gallery







const slideContainer = document.querySelector('.slides')
const slides = [...document.querySelectorAll('.slider-row')]

slides.map((slide, index)=> {
  slide.style.left = index*33.5 + '%'
})
let curr = 0 

const content = document.querySelector('.slides')
const arr = [...content.children]
console.log(arr);
setInterval(()=>{
  // if(curr==0) {
  //   curr++
  //   slides.map((x, index)=> {
  //     x.style.left = `${33.5*(index-curr)}%`
  //   })
  // }
  // else {
  //   curr--
  //   slides.map((x, index)=> {
  //     x.style.left = `${33.5*(index-curr)}%`
  //   })
  // }

    curr++
    slides.map((x, index)=> {
      x.style.left = `${33.5*(index-curr)}%`
    })


},2000)

let loader = document.querySelector('.loader')
    window.addEventListener("load", () => {
  loader.style.display = 'none'
});
///////////////////////////////////////
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