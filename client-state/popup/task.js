const modal = document.getElementById("subscribe-modal");
const close = document.querySelector(".modal__close");

if(getCookie('user') == undefined) {
	modal.classList.add('modal_active');
}

function setCookie(name, value) {
	value = encodeURIComponent(value)
	let updatedCookie = name + "=" + value
	document.cookie = updatedCookie
}

function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
	"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	))
	return matches ? decodeURIComponent(matches[1]) : undefined
}

close.addEventListener('click', () => {
	modal.classList.remove('modal_active');
	setCookie('user', 'saw');
});