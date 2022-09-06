const checkFood = document.querySelector('.interest__check');
const checkItemFood = document.querySelector('.interests_active').querySelectorAll('.interest__check');
const checkPet = document.querySelector('.interest').nextElementSibling.querySelector('.interest__check');
const checkItemPet = document.querySelector('.interest').nextElementSibling.querySelectorAll('.interest__check');

checkFood.onchange = () => {
	if(checkFood.checked) {
		checkItemFood.forEach(item => item.checked = true);
		return;
	}
	checkItemFood.forEach(item => item.checked = false);
}

checkPet.onchange = () => {
	if(checkPet.checked) {
		checkItemPet.forEach(item => item.checked = true);
		return;
	}
	checkItemPet.forEach(item => item.checked = false);
}