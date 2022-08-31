const rotator = document.querySelectorAll('.rotator__case');
const rotatorArr = Array.from(rotator);
let index = 0;

this.time = function(i) {
	this.timer(rotatorArr[i].getAttribute('data-speed'));
};

let remove = function() {
    let el = rotatorArr.find(items => items.classList.contains('rotator__case_active'));
    el.classList.remove('rotator__case_active');
};

let add = function() {
    remove();
    index++;
    if (index > rotatorArr.length - 1) {
        index = 0;
    }
    rotatorArr[index].style.color = rotatorArr[index].getAttribute('data-color');
    rotatorArr[index].classList.add('rotator__case_active');
    clearInterval(this.timerId);
    this.time(index);
};

this.timer = function (time) {
	this.timerId = setInterval(add, time);
};

this.timer();