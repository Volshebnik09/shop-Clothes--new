information__FAQ__cards = document.querySelectorAll('.information__FAQ__card')

function d(){
    information__FAQ__cards.forEach(el=>{
        el.removeAttribute('active')
    })
}
information__FAQ__cards.forEach((card)=>{
    card.addEventListener('click',(e)=>{
        e.stopPropagation()
        d()
        card.setAttribute('active','')
    })
})

document.addEventListener('click',()=>{
    d();
})