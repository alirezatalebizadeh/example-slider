const $ = document;
const prev = $.querySelector(".prev");
const next = $.querySelector(".next");
let sliderItem = $.querySelector(".slider-item");
let imgElem = $.querySelector('img')
let index = 0;
// console.log(sliderItem);
let srcArray = ['/image/1.jpg', '/image/2.jpg', '/image/3.jpg', '/image/4.jpg', '/image/5.jpg']



function prevItem() {
  index--
  if (index < 0) {
    index = srcArray.length - 1
  }
  sliderItem.classList.remove('active')
  imgElem.setAttribute('src', `${srcArray[index]}`)
  setTimeout(() => {
    sliderItem.classList.add('active')
  }, 100)
}


function nextItem() {
  index++
  if (index > srcArray.length - 1) {
    index = 0
  }
  sliderItem.classList.remove('active')
  imgElem.setAttribute('src', `${srcArray[index]}`)
  setTimeout(() => {
    sliderItem.classList.add('active')
  }, 100)
}


setInterval(nextItem, 3000)
prev.addEventListener("click", prevItem);
next.addEventListener("click", nextItem);




