/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/accordion.js":
/*!*************************************!*\
  !*** ./src/js/modules/accordion.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const accordion = (triggersSelector, itemsSelector) => {
  const accordion = document.querySelector('#accordion'),
    accordionHead = document.querySelectorAll('.accordion-heading span'),
    accordionBlock = document.querySelectorAll('.accordion-block');
  accordion.addEventListener('click', e => {
    if (e.target.matches('.accordion-heading span')) {
      accordionHead.forEach((item, i) => {
        if (item == e.target) {
          if (accordionBlock[i].matches('.show')) {
            hideAccordionBlock(i);
          } else {
            hideAccordionBlock();
            accordionHead[i].classList.add('active-accordion');
            accordionBlock[i].classList.remove('hide');
            accordionBlock[i].classList.add('animated', 'fadeInDown', 'show');
            console.log(accordionBlock[i]);
          }
        }
      });
    }
  });
  function hideAccordionBlock(i) {
    if (i == 0 || i) {
      console.log(accordionBlock[i]);
      accordionHead[i].classList.remove('active-accordion');
      accordionBlock[i].classList.add('hide');
      accordionBlock[i].classList.remove('fadeInDown', 'show');
    } else {
      accordionHead.forEach(item => item.classList.remove('active-accordion'));
      accordionBlock.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show');
      });
    }
  }
  hideAccordionBlock();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const burger = (menuSelector, burgerSelector) => {
  const menuElem = document.querySelector(menuSelector),
    burgerElem = document.querySelector(burgerSelector);
  menuElem.style.display = 'none';
  burgerElem.addEventListener('click', () => {
    if (menuElem.style.display == 'none' && window.screen.availWidth < 993) {
      menuElem.style.display = 'block';
    } else {
      menuElem.style.display = 'none';
    }
  });
  window.addEventListener('resize', () => {
    if (window.screen.availWidth > 992) {
      menuElem.style.display = 'none';
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);

/***/ }),

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calcObj: () => (/* binding */ calcObj),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms */ "./src/js/modules/forms.js");

let calcObj = {};
const calc = () => {
  function calcFormInputs(input, eventType, nameValue) {
    const elem = document.querySelector(input);
    calcObj[nameValue] = '';
    elem.addEventListener(eventType, e => {
      if (elem.getAttribute('name') === 'upload') {
        const fileList = elem.files;
        fileList.length > 0 ? calcObj[nameValue] = true : calcObj[nameValue] = false;
        calcPrice();
        cheakToSubmit('.calc_form .button-order');
      } else {
        calcObj[nameValue] = elem.value;
        calcPrice();
        cheakToSubmit('.calc_form .button-order');
      }
    });
  }
  function cheakToSubmit(button) {
    if (calcObj.size > 0 && calcObj.material > 0 && calcObj.upload == true) {
      (0,_forms__WEBPACK_IMPORTED_MODULE_0__.buttonToggleDisable)(button, false);
    }
  }
  function calcPrice() {
    const priceBox = document.querySelector('.calc-price');
    if (calcObj.size > 0 && calcObj.material > 0) {
      calcObj.price = +calcObj.size * +calcObj.material;
      if (calcObj.options > 0) {
        calcObj.price += +calcObj.options;
      }
      if (calcObj.promocode == 'IWANTPOPART') {
        calcObj.price *= 0.3;
      }
      priceBox.textContent = `Общая сумма ${calcObj.price}грн`;
    } else {
      priceBox.textContent = `Для расчета нужно выбрать размер картины и материал картины`;
    }
  }
  calcFormInputs('[id="size"]', 'change', 'size');
  calcFormInputs('[id="material"]', 'change', 'material');
  calcFormInputs('[id="options"]', 'change', 'options');
  calcFormInputs('.calc_form [name="upload"]', 'input', 'upload');
  calcFormInputs('.promocode', 'input', 'promocode');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);


/***/ }),

/***/ "./src/js/modules/checkTextInputs.js":
/*!*******************************************!*\
  !*** ./src/js/modules/checkTextInputs.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkTextInputs = selector => {
  const textInputs = document.querySelectorAll(selector);
  textInputs.forEach(input => {
    input.addEventListener('keypress', e => {
      if (e.key.match(/[^а-яё 0-9]/ig)) {
        e.preventDefault();
      }
    });
    input.addEventListener('input', e => {
      input.value = input.value.replace(/[^а-яё 0-9]/ig, '');
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkTextInputs);

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const filter = () => {
  const tabBox = document.querySelector('.portfolio-menu'),
    tabs = document.querySelectorAll('li'),
    portfolioNo = document.querySelector('.portfolio-no'),
    all = document.querySelectorAll('.portfolio-wrapper .all');
  all.forEach(item => {
    item.classList.add('animated', 'fadeInUp');
  });
  let filterName = '';
  tabBox.addEventListener('click', e => {
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
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);

/***/ }),

/***/ "./src/js/modules/forms.js":
/*!*********************************!*\
  !*** ./src/js/modules/forms.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buttonToggleDisable: () => (/* binding */ buttonToggleDisable),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modals */ "./src/js/modules/modals.js");
/* harmony import */ var _calc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calc */ "./src/js/modules/calc.js");



function buttonToggleDisable(button, boolean) {
  const btn = document.querySelector(button);
  if (boolean) {
    btn.setAttribute('disabled', boolean);
  } else {
    btn.removeAttribute('disabled');
  }
}
const forms = () => {
  const form = document.querySelectorAll('form'),
    inputs = document.querySelectorAll('input'),
    upload = document.querySelectorAll('[name="upload"]');
  const message = {
    loading: 'Загрузка',
    success: 'Спасибо! Скоро мы с Вами свяжемся',
    failure: 'Что-то пошло не так...',
    spinner: 'assets/img/spinner.gif',
    ok: 'assets/img/ok.png',
    fail: 'assets/img/fail.png'
  };
  const path = {
    disiner: 'assets/server.php',
    question: 'assets/question.php'
  };
  upload.forEach(item => {
    item.addEventListener('input', () => {
      console.log(item.files);
      let dots;
      const arr = item.files[0].name.split('.');
      arr[0].length > 10 ? dots = '...' : dots = '.';
      const name = arr[0].substring(0, 10) + dots + arr[1];
      item.previousElementSibling.textContent = name;
    });
  });
  form.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault();
      let statusMessege = document.createElement('div');
      statusMessege.classList.add('status');
      item.parentNode.append(statusMessege);
      item.classList.add('animated', 'fadeOutUp');
      setTimeout(() => {
        item.style.display = 'none';
      }, 400);
      let statusImg = document.createElement('img');
      statusImg.setAttribute('src', message.spinner);
      statusImg.classList.add('animated', 'fadeInUp');
      statusMessege.append(statusImg);
      let textMessage = document.createElement('div');
      textMessage.textContent = message.loading;
      statusMessege.append(textMessage);
      const formData = new FormData(item);
      let api;
      item.closest('.popup-design') || item.matches('.calc_form') ? api = path.disiner : api = path.question;
      console.log(api);
      if (item.matches('.calc_form')) {
        for (let key in _calc__WEBPACK_IMPORTED_MODULE_2__.calcObj) {
          formData.append(key, _calc__WEBPACK_IMPORTED_MODULE_2__.calcObj[key]);
          delete _calc__WEBPACK_IMPORTED_MODULE_2__.calcObj[key];
        }
        console.log(formData);
        document.querySelector('.calc-price').textContent = `
                    Для расчета нужно выбрать размер картины и материал картины
                `;
        buttonToggleDisable('.calc_form .button-order', true);
      }
      (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__.postData)(api, formData).then(res => {
        console.log(res);
        statusImg.setAttribute('src', message.ok);
        textMessage.textContent = message.success;
      }).catch(() => {
        statusImg.setAttribute('src', message.fail);
        textMessage.textContent = message.failure;
      }).finally(() => {
        item.reset();
        setTimeout(() => {
          upload.forEach(item => {
            item.previousElementSibling.textContent = 'Файл не выбран';
          });
          statusMessege.remove();
          item.style.display = 'block';
          item.classList.remove('fadeOutUp');
          item.classList.add('fadeInUp');
          (0,_modals__WEBPACK_IMPORTED_MODULE_1__.windowClose)();
        }, 3000);
      });
    });
  });
  buttonToggleDisable('.calc_form .button-order', true);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);


/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mask = selector => {
  let setCursorPosition = (pos, elem) => {
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  };
  function createMask(event) {
    let matrix = '+380 (__) ___ __ __',
      i = 0,
      def = matrix.replace(/\D/g, ''),
      val = this.value.replace(/\D/g, '');
    if (def.length >= val.length) {
      val = def;
    }
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });
    if (event.type === 'blur') {
      if (this.value.length == 4) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }
  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
    input.addEventListener('keypress', createMask);
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mask);

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   windowClose: () => (/* binding */ windowClose)
/* harmony export */ });
function windowClose() {
  const windows = document.querySelectorAll('[data-modal]');
  windows.forEach(item => {
    item.style.display = 'none';
    document.body.style.overflow = '';
    document.body.style.marginRight = `${0}px`;
  });
}
const modals = () => {
  let triggerState = false;
  function bindModal(triggerSelectors, modalSelector, closeSelector, destroy = false) {
    const trigger = document.querySelectorAll(triggerSelectors),
      modal = document.querySelector(modalSelector),
      close = document.querySelector(closeSelector),
      windows = document.querySelectorAll('[data-modal]');
    trigger.forEach(item => {
      item.addEventListener('click', e => {
        if (e.target) {
          e.preventDefault();
        }
        windowClose();
        windows.forEach(item => {
          item.classList.add('animated', 'fadeIn');
        });
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
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        windowClose();
      }
    });
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
        const modal = document.querySelector(selector);
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
    `;
    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }
  function showModalByScroll(selector) {
    window.addEventListener('scroll', () => {
      let scrollHeigth = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
      if (!triggerState && window.scrollY + document.documentElement.clientHeight >= scrollHeigth - 1) {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);

/***/ }),

/***/ "./src/js/modules/pictureSize.js":
/*!***************************************!*\
  !*** ./src/js/modules/pictureSize.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pictureSize = () => {
  const block = document.querySelectorAll('.sizes-block');
  const imgNew = document.createElement('img');
  block.forEach((item, i) => {
    item.addEventListener('mouseenter', e => {
      if (e.target == item) {
        imgNew.setAttribute(`src`, `assets/img/sizes-${i + 1}-1.png`);
        imgNew.classList.add(`size-${i + 1}`, `animated`, `fadeInUp`);
        imgNew.style.cssText = `
                    position: absolute;
                    z-index: 10;
                    top: 0%;
                `;
        block[i].append(imgNew);
      }
    });
    item.addEventListener('mouseleave', e => {
      imgNew.remove();
    });
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pictureSize);

/***/ }),

/***/ "./src/js/modules/scrolling.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrolling.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const scrolling = upSelector => {
  const upElem = document.querySelector(upSelector);
  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1650) {
      upElem.classList.add('animated', 'fadeInDown');
      upElem.classList.remove('fadeOutUp');
    } else {
      upElem.classList.add('fadeOutUp');
      upElem.classList.remove('fadeInDown');
    }
  });
  let links = document.querySelectorAll('[href^="#"]'),
    speed = 0.3;
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      let higthTop = document.documentElement.scrollTop,
        hash = this.hash,
        toBlock = document.querySelector(hash).getBoundingClientRect().top,
        start = null;
      requestAnimationFrame(step);
      function step(time) {
        if (start === null) {
          start = time;
        }
        let progress = time - start,
          r = toBlock < 0 ? Math.max(higthTop - progress / speed, higthTop + toBlock) : Math.min(higthTop + progress / speed, higthTop + toBlock);
        document.documentElement.scrollTo(0, r);
        if (r !== higthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });

  // const element = document.documentElement,
  //     body = document.body;

  // const calcScroll = () => {
  //     upElem.addEventListener('click', function(e) {
  //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

  //         if (this.hash !== '') {
  //             e.preventDefault();
  //             let hashElement = document.querySelector(this.hash),
  //                 hashElementTop = 0;

  //             while (hashElement.offsetParent) {
  //                 hashElementTop += hashElement.offsetTop;
  //                 hashElement = hashElement.offsetParent;
  //             }

  //             hashElementTop = Math.round(hashElementTop);
  //             smoothScroll(scrollTop, hashElementTop, this.hash);

  //         }
  //     });
  // };
  // const smoothScroll = (from, to, hash) => {
  //     let timeInterval = 1,
  //         prevScrollTop,
  //         speed;
  //     if (to > from) {
  //         speed = 30;
  //     } else {
  //         speed = -30;
  //     }

  //     let move = setInterval(function() {
  //         let scrollTop = Math.round(body.scrollTop || element.scrollTop);

  //         if (
  //             prevScrollTop === scrollTop ||
  //             (to > from && scrollTop >= to) ||
  //             (to < from && scrollTop <= to)
  //         ) {
  //             clearInterval(move);
  //             history.replaceState(history.state, document.title, location.href.replace(/#.*$/g, '') + hash)
  //         } else {
  //             body.scrollTop += speed;
  //             element.scrollTop += speed;
  //             prevScrollTop = scrollTop;
  //         }
  //     }, timeInterval);
  // };
  // calcScroll();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrolling);

/***/ }),

/***/ "./src/js/modules/showMoreStyles.js":
/*!******************************************!*\
  !*** ./src/js/modules/showMoreStyles.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_requests__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/requests */ "./src/js/services/requests.js");

const showMoreStyles = (trigger, wrapper) => {
  const btn = document.querySelector(trigger);
  btn.addEventListener('click', function () {
    (0,_services_requests__WEBPACK_IMPORTED_MODULE_0__.getResource)('assets/db.json').then(res => createCards(res.styles)).catch(error => console.log(error));
    this.remove();
  });
  function createCards(response) {
    response.forEach(({
      src,
      title,
      link
    }) => {
      let card = document.createElement('div');
      card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
      card.innerHTML = `
                <div class="styles-block">
                    <img src=${src} alt>
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;
      document.querySelector(wrapper).append(card);
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showMoreStyles);

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
    prevBtn.addEventListener('click', e => {
      changeSlides(-1);
      items[slideIndex - 1].classList.remove('slideInLeft');
      items[slideIndex - 1].classList.add('slideInRight');
    });
    nextBtn.addEventListener('click', e => {
      changeSlides(1);
      items[slideIndex - 1].classList.remove('slideInRight');
      items[slideIndex - 1].classList.add('slideInLeft');
    });
  } catch (e) {}
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
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliders);

/***/ }),

/***/ "./src/js/services/requests.js":
/*!*************************************!*\
  !*** ./src/js/services/requests.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getResource: () => (/* binding */ getResource),
/* harmony export */   postData: () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => {
  let res = await fetch(url, {
    method: 'POST',
    body: data
  });
  return await res.text();
};
const getResource = async url => {
  let res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Could not featch ${url}, status ${res.status}`);
  }
  return await res.json();
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/forms */ "./src/js/modules/forms.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkTextInputs */ "./src/js/modules/checkTextInputs.js");
/* harmony import */ var _modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showMoreStyles */ "./src/js/modules/showMoreStyles.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");
/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/filter */ "./src/js/modules/filter.js");
/* harmony import */ var _modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/pictureSize */ "./src/js/modules/pictureSize.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/accordion */ "./src/js/modules/accordion.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/scrolling */ "./src/js/modules/scrolling.js");












window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn', 3000);
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item', 'vertical', '', '', 6000);
  (0,_modules_forms__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])('[name="phone"]');
  (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="name"]');
  (0,_modules_checkTextInputs__WEBPACK_IMPORTED_MODULE_4__["default"])('[name="message"]');
  (0,_modules_showMoreStyles__WEBPACK_IMPORTED_MODULE_5__["default"])('.button-styles', '#styles .row');
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])();
  (0,_modules_filter__WEBPACK_IMPORTED_MODULE_7__["default"])();
  (0,_modules_pictureSize__WEBPACK_IMPORTED_MODULE_8__["default"])();
  (0,_modules_accordion__WEBPACK_IMPORTED_MODULE_9__["default"])();
  (0,_modules_burger__WEBPACK_IMPORTED_MODULE_10__["default"])('.burger-menu', '.burger');
  (0,_modules_scrolling__WEBPACK_IMPORTED_MODULE_11__["default"])('.pageup');
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map