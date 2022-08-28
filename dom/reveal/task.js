const reveal = Array.from(document.getElementsByClassName('reveal'));

document.addEventListener('scroll', function() {
    reveal.forEach(item => {
        if (isInViewarea(item)){
        item.classList.add('reveal_active');
        }
    });
});

const isInViewarea = function(element) {
    const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    return elementTop < viewportHeight ? true : false;
};