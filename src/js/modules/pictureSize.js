const pictureSize = () => {
    const block = document.querySelectorAll('.sizes-block');

    const imgNew = document.createElement('img');

    block.forEach((item, i) => {
        item.addEventListener('mouseenter',  (e) => {
            if (e.target == item) {
                imgNew.setAttribute(`src`, `assets/img/sizes-${i + 1}-1.png`);
                imgNew.classList.add(`size-${i + 1}`, `animated`, `fadeInUp`);
                imgNew.style.cssText = `
                    position: absolute;
                    z-index: 10;
                    top: 0%;
                `
                block[i].append(imgNew);    
            }
        })
        item.addEventListener('mouseleave', (e) => {
            imgNew.remove();
        })
    });
};

export default pictureSize;