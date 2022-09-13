const buttonAdd = document.getElementById('tasks__add');
const input = document.getElementById('task__input');
const task = document.querySelector('.task');
const taskList = document.getElementById('tasks__list');

buttonAdd.addEventListener('click', (event) => {
	addTask(event);
});

taskList.addEventListener('click', (e) => {
	e.preventDefault();
	if(e.target.className === 'task__remove'){
		e.target.parentElement.remove();
	}
});

function addTask(event) {
	taskList.insertAdjacentHTML('beforeEnd', '<div class="task"><div class="task__title""></div><a href="#" class="task__remove">&times;</a></div>');
	taskList.lastChild.querySelector('.task__title').insertAdjacentHTML('afterBegin', input.value.trim());
	input.value = "";
	event.preventDefault();
}