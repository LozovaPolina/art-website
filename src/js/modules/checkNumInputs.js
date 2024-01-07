
const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);
    numInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            input.value = input.value.replace(/\D/, '');
            if (input.value.length > 12) {
                input.value = input.value.slice(0, 12);

            }
        });
    });

}

export default checkNumInputs;