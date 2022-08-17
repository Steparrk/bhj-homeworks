const imgListArr = Array.from(document.querySelectorAll('.slider__item'));
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
const dotArr = Array.from(document.querySelectorAll('.slider__dot'));

dotArr[0].classList.add('slider__dot_active');


function removeOldActiveSlide() {
	let index = imgListArr.findIndex(e => e === (imgListArr.find(item => item.classList.contains('slider__item_active'))));
	imgListArr[index].classList.remove('slider__item_active');
	dotArr[index].classList.remove('slider__dot_active');

	return index;
}

function addActiveSlide(index) {
	imgListArr[index].classList.add('slider__item_active');
	dotArr[index].classList.add('slider__dot_active');
}

function previouClick() {
	index = removeOldActiveSlide();
	if(index === 0){
		index = imgListArr.length;
	}
	index--;
	addActiveSlide(index);
}

function nextClick() {
	index = removeOldActiveSlide();
	if(index === imgListArr.length - 1){
		index = -1;
	}
	index++;
	addActiveSlide(index);
	}

prev.onclick = previouClick;

next.onclick = nextClick;

dotArr.forEach(function(dot) {
	dot.addEventListener('click', () => {
	let index = dotArr.indexOf(dot);
	removeOldActiveSlide();
	addActiveSlide(index);
	});
})
