const menuSubList = document.querySelectorAll('.menu_sub')
const menuSubListArr = Array.from(menuSubList)

for (let i of menuSubListArr) {
	const subParent = i.closest('.menu__item')
	const subChild = subParent.querySelectorAll('.menu__link')
	const subChildArr = Array.from(subChild)
	for (let item of subChildArr) {
		item.onclick = () => {
			if(i.classList.contains('menu_active')) {
				i.classList.remove('menu_active');
				return false;
			}
			console.log(i.closest('.menu_main'))
			if (i.closest('.menu_main').querySelector('.menu_active')) {
				i.closest('.menu_main').querySelector('.menu_active').classList.remove('menu_active');
			}
			i.classList.add('menu_active');
			return false;
		}
	}
}