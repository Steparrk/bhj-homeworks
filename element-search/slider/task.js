const imgListArr = Array.from(document.querySelectorAll('.slider__item'));
const prev = document.querySelector('.slider__arrow_prev');
const next = document.querySelector('.slider__arrow_next');
const dotArr = Array.from(document.querySelectorAll('.slider__dot'));
let slide = 0;

console.log(slide)
function sliderDot() {
	imgListArr
}

dotArr.forEach(function(dot) {
	dot.addEventListener('click', () => {
		slide = dotArr.indexOf(dot);
		
	});
});

function previouClick(slide) {
	for(let i = imgListArr.length - 1; i >= 0; i--) {
		if(imgListArr[i].classList.contains('slider__item_active')) {
			imgListArr[i].classList.remove('slider__item_active');
			if(i === 0) {
				i = imgListArr.length - 1;
				imgListArr[i].classList.add('slider__item_active');
			}else{
				i--
				imgListArr[i].classList.add('slider__item_active');
			}
		}
	}
}

function nextClick(slide) {
	for(let i = 0; i <= imgListArr.length - 1; i++) {
		if(imgListArr[i].classList.contains('slider__item_active')) {
			imgListArr[i].classList.remove('slider__item_active');
			if(i === imgListArr.length - 1) {
				i = 0;
				imgListArr[i].classList.add('slider__item_active');
			}else{
				i++
				imgListArr[i].classList.add('slider__item_active');
			}
		}
	}
	}

prev.onclick = previouClick;

next.onclick = nextClick;

