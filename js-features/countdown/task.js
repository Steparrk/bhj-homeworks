
const time = document.getElementById("timer");

/*function timer() {
	const stopwatch = setInterval(() => {
		time.textContent -= 1;
		if(time.textContent == 0) {
			clearInterval(stopwatch);
			return alert("«Вы победили в конкурсе!»");
		}
	}, 1000);
}
timer();
*/


time.textContent = '00:01:01';
let setTime = time.textContent;

function convertTime(data) {
	const newData = setTime.split(':');
	return ((+newData[0] * 3600) + (+newData[1] * 60) + +newData[2]);
}

setTime = convertTime(setTime);

const timerId = setInterval(() => {
	setTime -= 1;
	let hours = Math.trunc(setTime / 3600);
	let minutes = Math.trunc((setTime - 3600 * hours) / 60);
	let seconds = Math.trunc(setTime - 3600 * hours - 60 * minutes);

	if(hours < 10) hours = '0' + hours;
	if(minutes < 10) minutes = '0' + minutes;
	if(seconds < 10) seconds = '0' + seconds;

	time.textContent = `${hours}:${minutes}:${seconds}`;

	if((+hours === 0) && (+minutes ===0) && (+seconds === 0)) {
		clearInterval(timerId);
		alert('«Вы победили в конкурсе!»')
	}
}, 1000)