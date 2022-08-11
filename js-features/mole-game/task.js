const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

for(let index = 1; index < 10; index++) {

	const hole = index => document.getElementById(`hole${index}`);

	hole(index).addEventListener('click', ()=> {

		if(hole(index).classList.contains('hole_has-mole')) {
			dead.innerText++;
		}else{
			lost.innerText++;
		}
	changeWin();
	})
function changeWin() {
	if(dead.innerText == 10) {
		reset();
		return alert('Победа!');
	}
	if(lost.innerText == 10) {
		reset();
		return alert('Попробуй победить!');
	}
}
function reset() {
	dead.innerText = 0;
	lost.innerText = 0;
}
}



