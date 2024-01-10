import { buttonToggleDisable } from "./forms";
let calcObj = {};
const calc = () => {

    function calcFormInputs(input, eventType, nameValue) {
        const elem = document.querySelector(input);
        calcObj[nameValue] = '';
        elem.addEventListener(eventType, (e) => {
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
            buttonToggleDisable(button, false);
        }
    }
    function calcPrice() {
        const priceBox = document.querySelector('.calc-price');
  
        if (calcObj.size > 0 && calcObj.material > 0) {
            calcObj.price = (+calcObj.size) * (+calcObj.material);
            if (calcObj.options > 0) {
                calcObj.price += (+calcObj.options);
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
}

export default calc;
export { calcObj };