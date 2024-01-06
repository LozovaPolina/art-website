const sliders = (slides, dir, prev, next, time) => {
    let slideIndex = 1,
        paused = false;
    const items = document.querySelectorAll(slides);


    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        } else if (n < 1) {
            slideIndex = items.length;
        }
        items.forEach(item => {
            item.classList.add('animated');
            item.style.display = 'none';
        });

        items[slideIndex - 1].style.display = 'block';
    }
    showSlides(slideIndex);

    function changeSlides(n) {
        showSlides(slideIndex += n);
    }
    try {
        const prevBtn = document.querySelector(prev),
            nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', (e) => {
            changeSlides(-1);
            items[slideIndex - 1].classList.remove('slideInLeft');
            items[slideIndex - 1].classList.add('slideInRight');
        });
        nextBtn.addEventListener('click', (e) => {
            changeSlides(1);
            items[slideIndex - 1].classList.remove('slideInRight');
            items[slideIndex - 1].classList.add('slideInLeft');
        });

    } catch (e) { }
    function activateAnimation() {
        if (dir === 'vertical') {
            paused = setInterval(() => {
                changeSlides(1);
                items[slideIndex - 1].classList.add('slideInDown');
            }, time);
        } else {
            paused = setInterval(() => {
                changeSlides(1);
                items[slideIndex - 1].classList.remove('slideInRight');
                items[slideIndex - 1].classList.add('slideInLeft');
            }, time);
        }
    }
    activateAnimation();
    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    items[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    })
    

};
export default sliders;
