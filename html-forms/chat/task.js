const widgetActive = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
const conteinerMessages = document.querySelector('.chat-widget__messages-container');
this.timerId = null;

input.addEventListener('keydown', function(e) {
	if (e.keyCode === 13 && input.value.length > 0) {
		let stop = window.timerId;
		clearTimeout(stop);
		processingMessages();
	}
})

function timer() {
	if(this.timerId === null) {
		this.timerId = setTimeout(generatorBotMessage, 5000);
	}
}

widgetActive.onclick = () => {
	widgetActive.className = 'chat-widget chat-widget_active';
	timer();
}

function processingMessages() {
	let valueClient = input.value;
	clientMessage(valueClient);
	generatorBotMessage();
	scrollToBottom(conteinerMessages);
	input.value = "";
}

function generatorBotMessage() {
	messages.innerHTML += `
		<div class="message">
			<div class="message__time">${this.currentTime()}</div>
			<div class="message__text">
				${this.getMessages()}
			</div>
		</div>
	`;
}

function clientMessage(value) {
	messages.innerHTML += `
		<div class="message message_client">
			<div class="message__time">${this.currentTime()}</div>
			<div class="message__text">
				${value}
			</div>
		</div>
	`;
}

function currentTime() {
	var time = new Date();
	var timeStr = time.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
	return timeStr;
}

function getMessages() {
    const botMessage = [
        'Мы ещё не проснулись. Позвоните через 10 лет',
        'Ну что ты пристал',
        'I remembered! I don`t know Russian',
        'Опять ты',
        'Пока'
      ],
      index = Math.floor(Math.random() * botMessage.length);

    return botMessage[index];
  }

function scrollToBottom(element) {
    element.scrollTop = element.scrollHeight;
}