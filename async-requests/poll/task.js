let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();

xhr.addEventListener('readystatechange', () => {
	if(xhr.readyState === xhr.DONE) {
		let dateJSON = JSON.parse(xhr.responseText);
		renderQuestion(dateJSON.data.title, dateJSON.data.answers);
		listener();
	}
})

function renderQuestion(title, answers) {
	const pollTitle = document.getElementById('poll__title');
	pollTitle.textContent = title;
	answers.forEach(item => {
		const pollAnswers = document.getElementById('poll__answers');
		const buttonConteiner = document.createElement('button');
		buttonConteiner.classList.add('poll__answer');
		pollAnswers.append(buttonConteiner);

		pollAnswers.lastChild.textContent = item;
	});

}

function listener() {
	const buttonList = Array.from(document.querySelectorAll('.poll__answer'));
	buttonList.forEach((item) => item.addEventListener ('click', () => {
		alert('Спасибо, ваш голос засчитан!')
	})
	);
}

