const imgListArr = Array.from(document.querySelectorAll('.slider__item'));
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
const dotArr = Array.from(document.querySelectorAll('.slider__dot'));


dotArr.forEach(function(dot) {
	dot.addEventListener('click', () => {
	let changeIndex = dotArr.indexOf(dot);
	let index = imgListArr.findIndex(e => e === (imgListArr.find(item => item.classList.contains('slider__item_active'))));
	imgListArr[index].classList.remove('slider__item_active');
	imgListArr[changeIndex].classList.add('slider__item_active');

	dotArr[index].classList.remove('slider__dot_active');
	dotArr[changeIndex].classList.add('slider__dot_active');
	});
})

function previouClick() {
	let index = imgListArr.findIndex(e => e === (imgListArr.find(item => item.classList.contains('slider__item_active'))));
	imgListArr[index].classList.remove('slider__item_active');
	if(index === 0){
		index = imgListArr.length;
	}
	index--;
	imgListArr[index].classList.add('slider__item_active');
}

function nextClick() {
	let index = imgListArr.findIndex(e => e === (imgListArr.find(item => item.classList.contains('slider__item_active'))));
	imgListArr[index].classList.remove('slider__item_active');
	if(index === imgListArr.length - 1){
		index = -1;
	}
	index++;
	imgListArr[index].classList.add('slider__item_active');
	}

prev.onclick = previouClick;

next.onclick = nextClick;

