require('../../sections/information__FAQ/index')

let id_product = 321;
let qty_product = 2; 
let answer = {};

console.log(123)
// Первым аргументом кладем путь, + строку как и в любом другом запросе, ключ=значение&ключ=значение 
fetch('./content/information.json',
 
// Второй аргумент это объект с указаниями, методаи заголовка 
    { 
	method: "GET", 
	headers:{"content-type":"application/x-www-form-urlencoded"} 
	})
   
.then( response => {
	if (response.status !== 200) {
		
        return Promise.reject(); 
  }
    return response.json()
})
.then(i => f(i))
.catch(() => console.log('ошибка'));  

function f(i) {
	let data = i
	console.log(data)
	document.querySelector('.information__prescreen__title').innerHTML = data['prescreen']['title']
	document.querySelector('.information__prescreen__subtitle').innerHTML = data['prescreen']['subtitle']

	let block = document.querySelector('.information__info-blocks .container')
	block.innerHTML = ''

	data['FAQ']['blocks'].forEach((data)=>{
		let el = document.createElement('div')
		let title = document.createElement('h3')
		let inner = document.createElement('div')

		el.classList = 'information__info-block'

		title.classList='information__info-block__title'

		inner.classList = 'information__info-block__content'

		title.innerHTML = data['title']
		inner.innerHTML = data['text']

		el.appendChild(title)
		el.appendChild(inner)
		block.appendChild(el)
	})

	block = document.querySelector('.information__FAQ .container')
	block.innerHTML =''

	data['FAQ']['FAQ'].forEach((data)=>{
		let el = document.createElement('div')
		let title = document.createElement('h3')
		let inner = document.createElement('div')

		el.classList = 'information__FAQ__card'

		title.classList='information__FAQ__card__title'

		inner.classList = 'information__FAQ__card__content'

		title.innerHTML = data['title']
		inner.innerHTML = data['text']

		el.appendChild(title)
		el.appendChild(inner)
		block.appendChild(el)
	})

	document.querySelector('.information__cantacts__email').innerHTML = data['FAQ']['contacts']['mail']
	document.querySelector('.information__cantacts__phone').innerHTML = data['FAQ']['contacts']['number']
} 