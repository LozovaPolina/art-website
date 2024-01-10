const filter = () => {
    const tabBox = document.querySelector('.portfolio-menu'),
        tabs = document.querySelectorAll('li'),
        portfolioNo = document.querySelector('.portfolio-no'),
        all = document.querySelectorAll('.portfolio-wrapper .all');
    all.forEach(item => {
        item.classList.add('animated', 'fadeInUp');
    })
    let filterName = '';
    tabBox.addEventListener('click', (e) => {
        if (e.target.matches('.active')) return;
        if (e.target.matches('li')) {
            console.log(e.target);
            filterName = e.target.className;
            hideActiveTab();
            showActiveTab(filterName);
            e.target.classList.add('active');
        }
    });


    function hideActiveTab() {
        tabs.forEach(element => {
            element.classList.remove('active');
        });
        all.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show');
        });
    }

    function showActiveTab(filterName) {
        const filteredElem = document.querySelectorAll(`.portfolio-wrapper .${filterName}`);
        
        if (filteredElem.length > 0) {
            portfolioNo.classList.remove('show');
            filteredElem.forEach(item => {
                item.classList.add('show');
                item.classList.remove('hide');
            });
        } else {
            portfolioNo.classList.add('show');
        }

    }
}

export default filter;