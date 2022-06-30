const cards = document.querySelectorAll('.card-product');
const cardPopups = Array.from(document.querySelectorAll('.card-popup'));
cards.forEach((card, index) => {
    const img_card = card.querySelector('.card-product__img');
    img_card.addEventListener('click', (e) => {

        cardPopups[index].style.display = 'fixed';
    })
})