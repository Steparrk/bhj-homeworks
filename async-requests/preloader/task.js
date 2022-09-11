const loader = document.getElementById('loader');
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com', false);
xhr.send();
console.log(xhr.responseText);

xhr.addEventListener('readystatechange', () => {
	if(xhr.readyState === xhr.DONE) {
		loader.className = 'loader';
	}
})