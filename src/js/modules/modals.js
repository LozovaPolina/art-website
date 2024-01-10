function windowClose() {
    const windows = document.querySelectorAll('[data-modal]');
    windows.forEach(item => {
        item.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `${0}px`     
    })
}

const modals = () => {
    let triggerState = false;
    function bindModal(triggerSelectors, modalSelector, closeSelector, destroy = false) {
        const trigger = document.querySelectorAll(triggerSelectors),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');


        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                windowClose();
                windows.forEach(item => {
                    item.classList.add('animated', 'fadeIn'); 
                })
                showModal(modal);
                triggerState = true;
                if (destroy) {
                    item.remove();
                }
            });
        });
        close.addEventListener('click', () => {
            windowClose();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                windowClose();
            }
        })

    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            let display;
            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = 'block';
                }
            });
            if (!display) {
                const modal = document.querySelector(selector)
                showModal(modal);
            }
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.cssText = `
        width: 50px;
        height: 50px;
        overflow-y: scroll;
        visibility: hidden;
    `
        document.body.append(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        return scrollWidth;
    }

    function showModalByScroll(selector) {
        window.addEventListener('scroll', () => {
            let scrollHeigth = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)
            if (!triggerState &&
                (window.scrollY + document.documentElement.clientHeight >= scrollHeigth - 1)) {
                document.querySelector(selector).click();
            }
        });
    }

    function showModal(modal) {
        const scroll = calcScroll();
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
    }




    // function 
    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    showModalByScroll('.fixed-gift');
    // showModalByTime('.popup-consultation', 5000);
};
export { windowClose };
export default modals;