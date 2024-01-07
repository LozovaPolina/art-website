import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    modals();
    sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn', 3000);
    sliders('.main-slider-item', 'vertical', '', '', 6000);
    forms();
    
})