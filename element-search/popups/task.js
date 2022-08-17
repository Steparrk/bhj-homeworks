const modalClose = document.getElementsByClassName("modal__close_times");
const modalActive = document.getElementById("modal_main");
const modalBtn = document.getElementsByClassName("show-success");
const modalSuccess = document.getElementById("modal_success");


modalActive.className = "modal modal_active";

function close(el) {
	el.addEventListener('click', e => {
		let target = e.target;
		
		if(target === modalClose.item(0) || target === modalClose.item(1)) {
			modalActive.className = "modal";
			modalSuccess.className = "modal";
		}
	});
}

modalActive.addEventListener('click', e => {
	let target = e.target;
	if(target === modalBtn[0]) {
		window.close(modalActive);
		modalSuccess.className = "modal modal_active";
	}
});
close(modalActive);
close(modalSuccess);