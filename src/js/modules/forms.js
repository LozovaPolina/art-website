import { postData } from "../services/requests";
import { windowClose } from "./modals";
import { calcObj} from "./calc";

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

        item.addEventListener('submit', (e) => {

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
                for (let key in calcObj) {
                    formData.append(key, calcObj[key])
                    delete calcObj[key];
                }

                console.log(formData);

                document.querySelector('.calc-price').textContent = `
                    Для расчета нужно выбрать размер картины и материал картины
                `
                buttonToggleDisable('.calc_form .button-order', true);
            }

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
};

export default forms;
export { buttonToggleDisable };