const fontSizeArr = Array.from(document.querySelectorAll('.font-size'));

fontSizeArr.forEach(item => {
	item.addEventListener('click', (event) => {
		event.preventDefault();
		fontSizeArr.find(el => el.classList.contains('font-size_active')).classList.remove('font-size_active');
		item.classList.add('font-size_active');

		if(item.classList.contains('font-size_small')){
			item.closest('.book').classList.remove('book_fs-big');
			item.closest('.book').classList.add('book_fs-small');
			return;
		}
		if(item.classList.contains('font-size_big')){
			item.closest('.book').classList.remove('book_fs-small');
			item.closest('.book').classList.add('book_fs-big');
			return;
		}
		item.closest('.book').className = 'book';
	});
});
