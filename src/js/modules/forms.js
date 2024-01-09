
import { windowClose } from "./modals";
const forms = () => {

    const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        upload = document.querySelectorAll('[name="upload"]');
    
    let calcObj = {};

    function calcFormInputs(input, eventType, nameValue) {
        const elem = document.querySelector(input);
        elem.addEventListener(eventType, () => {
            if (elem.getAttribute('name') === 'upload') {
                const fileList = elem.files;
                fileList.length > 0 ? calcObj[nameValue] = true : calcObj[nameValue] = false;
                cheakToSubmit('.calc_form .button-order');
            } else {
                calcObj[nameValue] = true
                cheakToSubmit('.calc_form .button-order');
            }
            
        }); 
    }
  

    function cheakToSubmit(button) {
        if (calcObj.size == true && calcObj.material == true && calcObj.upload == true) {
            buttonToggleDisable(button, false);
        }
    }
    
  
    function buttonToggleDisable(button, boolean) {
        const btn = document.querySelector(button);
        
        if (boolean) {
            btn.setAttribute('disabled', boolean);
        } else {
            btn.removeAttribute('disabled');
        }
    }


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

    const postData = async (url, data) => {

        let res = await fetch(url, {
            method: 'POST',
            body: data
        });
        return await res.text();
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

        item.addEventListener('submit', (e) => {
            if (e.target.matches('.calc_form')) {
                for (let key in calcObj) {
                    delete calcObj[key];
                }
                buttonToggleDisable('.calc_form .button-order', true);
            }

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

            postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                })
                .finally(() => {
                    item.reset();
                    setTimeout(() => {
                        upload.forEach(item => {
                            item.previousElementSibling.textContent = 'Файл не выбран';
                        })
                        statusMessege.remove();
                        item.style.display = 'block';
                        item.classList.remove('fadeOutUp');
                        item.classList.add('fadeInUp');
                        windowClose();
                    }, 3000);

                });
        });
    });

    buttonToggleDisable('.calc_form .button-order', true);
    calcFormInputs('[id="size"]', 'change', 'size');
    calcFormInputs('[id="material"]', 'change', 'material');
    calcFormInputs('.calc_form [name="upload"]', 'input', 'upload');
};

export default forms;