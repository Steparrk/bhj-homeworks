const tabArr = Array.from(document.querySelectorAll('.tab'));
const contentArr = Array.from(document.querySelectorAll('.tab__content'));
let cash = tabArr.findIndex(el => el.classList.contains('tab_active'));

tabArr.forEach(item => {
	item.addEventListener('click', () => {
		let index = tabArr.indexOf(item);
		if(cash !== index) {
			tabArr[cash].classList.remove('tab_active');
			contentArr[cash].classList.remove('tab__content_active');
		}
		if(!item.classList.contains('tab_active')){
			item.classList.add('tab_active');
			contentArr[index].classList.add('tab__content_active');
			cash = index;
		}
	})
})