document.getElementById('mobile_menu_toggle').onclick = function (e) {
    e.preventDefault();
    this.classList.toggle('active');
    document.getElementById('mobile__menus').classList.toggle('active');
}

let swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


let form = document.getElementById('reg-form');
//console.log(form)
let buttonSubmit = document.getElementById('buttonSubmit');

//console.log(buttonSubmit);


function init_scripr() {
    let get_page_url = document.location.pathname;

    if (get_page_url === '/contact.html') {
        buttonSubmit.onclick = function (e) {
            e.preventDefault();

            let formFirstName = document.getElementById('firstName').value;
            //console.log(formFirstName);
            let formLastName = document.getElementById('lastName').value;
            //console.log(formLastName);

            let regex_1 = /((\+)?\b(8|38)?(0[\d]{2}))([\d-]{5,8})([\d]{2})/;
            let regex_2 = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

            if (!regex_1.test(formFirstName)) {
                document.getElementById('firstName').style.borderColor = "#ff0000";
                console.log('Не соответствует');
            } else {
                document.getElementById('firstName').style.borderColor = "#00ff00";
                console.log('Соответствует');
            }


            if (!regex_2.test(formLastName)) {
                document.getElementById('lastName').style.borderColor = "#ff0000";
                console.log('Не соответствует');
            } else {
                document.getElementById('lastName').style.borderColor = "#00ff00";
                console.log('Соответствует');
                form.submit();
            }
        }
    } else {
        return false;
    }
}

init_scripr();


/*
* Функция подсчета стоимости услуг на создания сайта
*/

// function calc() {
//     let type_site = document.getElementById("type_site"); //получаем ссылку на элемент Select (Тип сфйта)
//
//     let need_design = document.getElementById("need_design"); //получаем ссылку на чекбокс (Требуется дизайн?)
//
//     let count = document.getElementById("count"); //получаем ссылку на элемент input (Кол-во вариантов)
//
//     let result = document.getElementById("result"); //получаем ссылку на элемент span, в него будем писать стоимость дизайна
//
//     let price = 0;
//     price += parseInt(type_site.options[type_site.selectedIndex].value);
//     price += (need_design.checked == true) ? parseInt(need_design.value): 0;
//     price = count.value * price;
//
//     result.innerHTML = price;
// }




function calc_result() {
    let get_site_type = document.getElementById('type_site');
    let get_need_design = document.getElementById('need_design');
    let get_count = document.getElementById('count');

    if (get_need_design.checked === true) {
        get_need_design = get_need_design.value;
    } else {
        get_need_design = 0;
    }

    let price = (parseInt(get_site_type.value) + parseInt(get_need_design)) * parseInt(get_count.value);
    document.getElementById('result').innerHTML = price;
}

document.getElementById('type_site').onchange = function () {
    calc_result();
}
document.getElementById('need_design').onchange = function () {
    calc_result();
}
document.getElementById('count').onchange = function () {
    calc_result();
}
