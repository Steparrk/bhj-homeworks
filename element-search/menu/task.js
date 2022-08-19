const menuSub = document.querySelectorAll('.menu_sub');
const menuSubListArr = Array.from(menuSub);
let p = null;

menuSubListArr.forEach((item) => {
	item.closest('li').addEventListener('click', (event) => {
		if(event.target === item.closest('li').querySelector('.menu__link')) {
			event.preventDefault();
		}
		if(p !== item.closest('li').querySelector('.menu__link')) {
			menuSubListArr.filter(el => el.classList.remove('menu_active'));
			p = item.closest('li').querySelector('.menu__link');
			item.classList.add('menu_active');
		}else{
			if(item.classList.contains('menu_active')){
				menuSubListArr.filter(el => el.classList.remove('menu_active'));
			}else{
				item.classList.add('menu_active');
			}
		}
	})
})



