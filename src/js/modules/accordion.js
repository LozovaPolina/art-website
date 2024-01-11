const accordion = (triggersSelector, itemsSelector) => {



    const accordion = document.querySelector('#accordion'),
        accordionHead = document.querySelectorAll('.accordion-heading span'),
        accordionBlock = document.querySelectorAll('.accordion-block');

    accordion.addEventListener('click', (e) => {
        if (e.target.matches('.accordion-heading span')) {
            accordionHead.forEach((item, i) => {
                if (item == e.target) {
                    if (accordionBlock[i].matches('.show')) {
                        hideAccordionBlock(i)
                    } else {
                        hideAccordionBlock()
                        accordionHead[i].classList.add('active-accordion');
                        accordionBlock[i].classList.remove('hide');
                        accordionBlock[i].classList.add('animated', 'fadeInDown', 'show');
                        console.log(accordionBlock[i]);
                    }
                }
            })
        }
    })
    function hideAccordionBlock(i) {
        if (i == 0 || i) {
            console.log(accordionBlock[i]);
            accordionHead[i].classList.remove('active-accordion');
            accordionBlock[i].classList.add('hide');
            accordionBlock[i].classList.remove('fadeInDown', 'show');
            
        } else {
            accordionHead.forEach(item => item.classList.remove('active-accordion'))
            accordionBlock.forEach((item) => {
                item.classList.add('hide');
                item.classList.remove('show');
            })
        }
    }

    hideAccordionBlock();
}
export default accordion;