const getValue = document.querySelector('.dropdown__value');
const itemArr = Array.from(document.querySelectorAll('.dropdown__link'));
const dropList = document.querySelector('.dropdown__list');

document.querySelector('.dropdown__value').onclick = function() {
	dropList.classList.toggle('dropdown__list_active');
};

itemArr.forEach((el) => {
	el.closest('li').addEventListener('click', (event) => {
		event.preventDefault();
		getValue.textContent = el.textContent;
		dropList.classList.remove('dropdown__list_active');
	});
});
