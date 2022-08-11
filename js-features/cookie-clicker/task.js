const numberCounter = document.getElementById('clicker__counter');
const numberSpeed = document.getElementById('clicker__speed');
const image = document.getElementById('cookie');
let f = Number(numberCounter.textContent);

class Clicker {
	constuctor(start, end) {
		this.start = start;
		this.end = end;
	}
	down() {
		let date = new Date();
		this.start = (date.getMinutes() * 60) + (date.getSeconds() * 1000) + date.getMilliseconds();
		f += 1;
		numberCounter.textContent = f;

		image.width = 230;
		image.height = 230;
		
		if(f > 1) {
		numberSpeed.textContent = (1000 /((this.start - this.end))).toFixed(2);
		}
	}
	up() {
		let date = new Date();
		this.end = (date.getMinutes() * 60) + (date.getSeconds() * 1000) + date.getMilliseconds();
			console.log(this.end)
		image.width = 200;
		image.height = 150;
	}
}
let clicker = new Clicker();

image.addEventListener('mousedown', clicker.down);
image.addEventListener('mouseup', clicker.up);