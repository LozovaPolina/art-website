/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/madals.js":
/*!**********************************!*\
  !*** ./src/js/modules/madals.js ***!
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
  showModalByTime('.popup-consultation', 5000);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);

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
/* harmony import */ var _modules_madals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/madals */ "./src/js/modules/madals.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");


window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  (0,_modules_madals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn', 3000);
  (0,_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item', 'vertical', '', '', 6000);
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map