const reveal = Array.from(document.querySelectorAll('.reveal'));

document.addEventListener('scroll', function() {
    reveal.forEach(item => {
        if (isInViewarea(item)){
            item.classList.remove('reveal_active');
            return;
        }
        item.classList.add('reveal_active');
    });
});

const isInViewarea = function(element) {
    const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    return (elementTop > viewportHeight || elementBottom < 0) ? true : false;
};