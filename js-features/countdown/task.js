const time = document.getElementById("timer");

function timer() {
	const stopwatch = setInterval(() => {
		time.textContent -= 1;
		if(time.textContent == 0) {
			clearInterval(stopwatch);
			return alert("«Вы победили в конкурсе!»");
		}
	}, 1000);
}
timer();