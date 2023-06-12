const right=document.querySelector('.page_right_arrow')
const left=document.querySelector('.page_left_arrow')
const page_now=document.querySelector('.page__now')
const page_max=document.querySelector('.page__all')
const item=document.querySelector('.slider__item')

const burger=document.querySelector('.burger')
const modal=document.querySelector('.modal')

/* SLIDER */
let page=1;
right.addEventListener('click',(e)=>{
   
    if (page_max.textContent>page) {
        page++
        item.style.marginLeft=`-${page-1}00%`
        page_now.innerHTML=page
    }
})

left.addEventListener('click',()=>{
    
    if (1<page) {
        page--
        item.style.marginLeft=`-${page-1}00%`
    page_now.innerHTML=page
    }
})




/* BURGER */

burger.addEventListener('click',()=>{
    burger.classList.toggle('click')
    setTimeout(()=>{
        modal.classList.toggle('open')
    },200)
    
})

modal.addEventListener('click',(e)=>{
    if (e.target.classList.contains('open')) {
        burger.classList.toggle('click')
        modal.classList.toggle('open')
    }
})