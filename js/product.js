document.addEventListener("DOMContentLoaded", function () {
    const man_back = document.querySelectorAll('.img__solut_items');
    const fon__back = document.querySelector('.logo__back');
    const logo__main = document.querySelector('.logo__main');

    setTimeout(() => {
        for (let i = 0; i < 3; i++) {
            man_back[i].classList.add("active")
        }
        setTimeout(() => {
            fon__back.classList.add("active");
        }, 1600)
        setTimeout(() => {
            logo__main.classList.add("active");
        }, 2100)
    }, 300)

    const functional__image = document.querySelector(".functional__image");
    functional__image.addEventListener("click", () => {
        functional__image.classList.toggle("active");
    })
});