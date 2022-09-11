const hasTooltipArray = Array.from(document.getElementsByClassName('has-tooltip'));

hasTooltipArray.forEach((el) => {
	el.addEventListener('click', showTooltip);
});

function showTooltip() {
	const hintDelete = document.querySelector('.tooltip');

	event.preventDefault();

	if (hintDelete) {
		if (this.getAttribute('title') === hintDelete.textContent) {
			hintDelete.remove();
			return;
		}
		hintDelete.remove();
}

	const hint = document.createElement('div');
	hint.classList.add('tooltip');

	hint.style.top = this.getBoundingClientRect().bottom + 'px';
	hint.style.left = this.getBoundingClientRect().left + 'px';
	hint.style.display = 'block';
	hint.textContent = this.getAttribute('title');

	document.body.append(hint);
};