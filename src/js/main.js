document.getElementById('mobile_menu_toggle').onclick = function (e) {
    e.preventDefault();
    this.classList.toggle('active');
    document.getElementById('mobile__menus').classList.toggle('active');
}

// $(document.body).on('click', function (e) {
//     if (document.getElementById('mobile__menus').hasClass('active')) {
//         if (!$(e.target).closest('#mobile__menus').length) {
//             document.getElementById('mobile__menus').classList.remove('active');
//         }
//     } else {
//         return false;
//     }
// })

let btnNext = document.querySelector(".btnNext");
let slider = document.querySelectorAll(".article__info_slider > img");
let i = 0;

btnNext.addEventListener("click", function () {
    ++i
    if (i >= slider.length) {
        slider[i-1].classList.remove("active");
        i = 0;
        slider[i].classList.add("active");
    } else {
        slider[i-1].classList.remove("active");
        slider[i].classList.add("active");
    }
})