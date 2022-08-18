const menuLink = document.querySelectorAll('.menu_sub');
const menuSubListArr = Array.from(menuLink);
console.log(menuSubListArr)

menuSubListArr.forEach((item) => {
	item.closest('li').addEventListener('click', (event) => {
		if(event.target === item.closest('li').querySelector('.menu__link')) {
			event.preventDefault();
}
		if(item.closest('li').classList.contains('menu_active')) {
			item.closest('li').classList.remove('menu_active');
		}
	console.log( menuSubListArr.find(i => i.closest('li').querySelector('.menu__link')))
		if (item.closest('.menu_main').querySelector('.menu_active')) {
			item.closest('.menu_main').querySelector('.menu_active').classList.remove('menu_active');
		}
		item.classList.add('menu_active');

	})
})



