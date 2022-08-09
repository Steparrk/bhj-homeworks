const numberCounter = document.getElementById('clicker__counter');
const numberSpeed = document.getElementById('clicker__speed');
const image = document.getElementById('cookie');
let f = Number(numberCounter.textContent);
let start = null;
let end = null;

function down() {

	window.start = new Date;
	f += 1;
	numberCounter.textContent = f;

	image.width = 230;
	image.height = 230;
	console.log(end - start)
}

function up() {
	window.end = new Date;
	console.log(end)
	image.width = 200;
	image.height = 200;
}

addEventListener('mousedown', down);
addEventListener('mouseup', up);