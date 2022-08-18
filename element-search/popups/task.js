const modalCloseArr = Array.from(document.getElementsByClassName("modal__close_times"));
const modalActive = document.getElementById("modal_main");
const modalBtn = document.getElementsByClassName("show-success");
const modalSuccess = document.getElementById("modal_success");

modalActive.className = "modal modal_active";

modalCloseArr.forEach((item) => {
	item.addEventListener('click', () => {
	modalActive.className = 'modal';
	modalSuccess.className = 'modal';
	})
})

modalActive.addEventListener('click', e => {
	let target = e.target;
	if(target === modalBtn[0]) {
		modalActive.className = 'modal';
		modalSuccess.className = "modal modal_active";
	}
});