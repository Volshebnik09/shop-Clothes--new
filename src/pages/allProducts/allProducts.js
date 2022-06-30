const numbersPages = document.querySelector('.allProducts__products__numbers-pages');
const listNumbers = document.querySelectorAll('.allProducts__products__numbers-pages__item');
numbersPages.addEventListener('click', (e) => {
    listNumbers.forEach(el => {
        if(el.classList.contains('allProducts__products__numbers-pages__item__active') && e.target !== el){
            el.classList.remove('allProducts__products__numbers-pages__item__active')
        }
    })
    if(e.target.classList.contains('allProducts__products__numbers-pages__item')){
        e.target.classList.add('allProducts__products__numbers-pages__item__active');
    }
})



