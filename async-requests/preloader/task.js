const loader = document.getElementById('loader');
const items = document.getElementById('items');

const arr = [];

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();

xhr.addEventListener('readystatechange', () => {
	if(xhr.readyState === xhr.DONE) {
		sortDate();
		loader.className = 'loader';
	}
})

function sortDate() {
	let dateJSON = JSON.parse(xhr.responseText);
	let recipeMap = Object.entries(dateJSON.response.Valute);
	recipeMap.forEach(el => {
		arr.push([el[1].CharCode, el[1].Value]);
	})
	render();
}

function addConteiner() {
	const itemConteiner = document.createElement('div');
	itemConteiner.classList.add('item');
	items.append(itemConteiner);

	const codeConteiner = document.createElement('div');
	codeConteiner.classList.add('item__code');
	items.lastChild.append(codeConteiner);

	const valueConteiner = document.createElement('div');
	valueConteiner.classList.add('item__value');
	items.lastChild.append(valueConteiner);

	const currencyConteiner = document.createElement('div');
	currencyConteiner.classList.add('item__currency');
	items.lastChild.append(currencyConteiner);
}

function render() {
	arr.forEach(el => {
		this.addConteiner();

		const code = items.lastChild.querySelector('.item__code');
		const value = items.lastChild.querySelector('.item__value');
		const currency = items.lastChild.querySelector('.item__currency');

		code.innerHTML = el[0];
		value.innerHTML = el[1];
		currency.innerHTML = 'руб';
});
}