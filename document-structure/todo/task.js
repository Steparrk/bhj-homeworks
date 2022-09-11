const buttonAdd = document.getElementById('tasks__add');
const input = document.getElementById('task__input');
const task = document.querySelector('.task');
const taskList = document.getElementById('tasks__list');
const taskRemove = document.querySelector('.task__remove');

buttonAdd.setAttribute('type', 'button');

buttonAdd.onclick = () => {
	if(input.value.length > 0) {
		addTask();
	}
};

input.addEventListener('keydown', (e) => {
	if (e.keyCode === 13 && input.value.length > 0) {
		addTask();
	}
});

taskList.addEventListener('click', (e) => {
		e.preventDefault();
		e.target.parentElement.remove();
});

function addTask() {
	taskList.insertAdjacentHTML('beforeEnd', '<div class="task"><div class="task__title""></div><a href="#" class="task__remove">&times;</a></div>');
	taskList.lastChild.insertAdjacentHTML('afterBegin', input.value);
	input.value = "";
}