const cards = document.querySelectorAll('.card-product');
const cardPopups = Array.from(document.querySelectorAll('.card-popup'));

cards.forEach((card, index) => {
    const img_card = card.querySelector('.card-product__img');
    const close_btn = cardPopups[index].querySelector('.card-popup__close-btn');
    img_card.addEventListener('click', (e) => {
        document.body.style.overflow = 'hidden';
        cardPopups[index].style.display = 'block';
    })
    close_btn.addEventListener('click', (e) => {
        cardPopups[index].style.display = 'none';
        document.body.style.overflow = 'auto';
    })
})
window.addEventListener('click', (e) => {
    if(e.target.classList.contains('card-popup')){
        e.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
})

