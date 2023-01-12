document.addEventListener("DOMContentLoaded", function () {
    const solution = document.querySelector(".solution");
    const navigation_solution = document.querySelector('.navigation__item');

    const solution_mob = document.querySelector(".solution__mob");
    const navigation_solution_mob = document.querySelector('.navigation__item_mob');
    const arrow = document.querySelector(".arrow__mob");
    const burder = document.querySelector(".burger");
    const navigation__mob = document.querySelector(".navigation__mob");
    const lan_mob = document.querySelector(".current_lang");

    window.addEventListener("click", (e) => {
        if (e.target.className != "navigation__item" && e.target.className != "navigation__item_mob") {
            solution.classList.remove("active");
            arrow.classList.remove("active");
        }
    })

    navigation_solution.addEventListener("click", () => {
        solution.classList.toggle("active");
    })

    navigation_solution_mob.addEventListener("click", () => {
        arrow.classList.toggle("active");
        solution_mob.classList.toggle("active");
    })

    burder.addEventListener("click", () => {
        burder.classList.toggle("active");
        navigation__mob.classList.toggle("active");
    })

    lan_mob.addEventListener("click", () => {
        lan_mob.classList.toggle("active");
    })


    /*_____________HOVER_________________*/

    const lan = document.querySelector(".language")

    lan.addEventListener("click", () => {
        console.log("new");
        console.log(arrow.parentElement);
        lan.classList.toggle("active");
    })

});

