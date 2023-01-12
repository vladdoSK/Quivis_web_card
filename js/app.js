document.addEventListener("DOMContentLoaded", function () {

    const animation__title = document.querySelector('.animation__title');
    setTimeout(() => {
        animation__title.classList.add("active");
    }, 300)

    setTimeout(() => {
        animation__title.classList.remove("active");
    }, 9000)

    const video = document.querySelector(".video__item");
    const sub_video_block = document.querySelector('.sup__video');

    let mas_video = ["./video/analize_traffic.mp4",
        "./video/security.mp4",
        "./video/restricted_areas.mp4",
        "./video//analize_traffic.webm",
        "./video/security.webm",
        "./video/restricted_areas.webm"];

    let sup__video = ["аналітики трафіку",
        "охоронних агенцій",
        "територій з обмеженим доступом"]

    let i_video = 0;



    if (this.documentElement.clientWidth < 750) {

        video.innerHTML =
            `<video muted autoplay loop src="./video/mob_video.mp4">
        </video>`;

        const video__item = document.getElementsByTagName("video");

        setInterval(() => {
            if ((video__item[0].currentTime < 9.7 && video__item[0].currentTime > 9.2) 
            || (video__item[0].currentTime < 19.7 && video__item[0].currentTime > 19.2) 
            || (video__item[0].currentTime < 29.7 && video__item[0].currentTime > 29.2)) {
                ++i_video;
                sub_video_block.innerHTML = `Рішення для <span class="blue__text solution__for">${sup__video[i_video]}</span>
                                        <div class="animation__title"></div>`
                setTimeout(() => {
                    const animation__title = document.querySelector('.animation__title');
                    animation__title.classList.add("active");
                }, 500)

                setTimeout(() => {
                    const animation__title = document.querySelector('.animation__title');
                    animation__title.classList.remove("active");
                }, 9200)
            }

            if (i_video == 2) {
                i_video = -1;
            }
        }, 500)
    } else {
        setInterval(() => {
            ++i_video;
            sub_video_block.innerHTML = `Рішення для <span class="blue__text solution__for">${sup__video[i_video]}</span>
                                        <div class="animation__title"></div>`

            if (this.documentElement.clientWidth > 750) {
                video.innerHTML =
                    `<video muted autoplay loop>
                        <source src="${mas_video[i_video + 3]}" type="video/webm">
                        <source src="${mas_video[i_video]}" type="video/mp4">
                    </video>`
            }

            setTimeout(() => {
                const animation__title = document.querySelector('.animation__title');
                animation__title.classList.add("active");
            }, 300)

            setTimeout(() => {
                const animation__title = document.querySelector('.animation__title');
                animation__title.classList.remove("active");
            }, 9000)


            if (i_video == 2) {
                i_video = -1;
            }
        }, 10000)
    }


    window.addEventListener("touchstart", (e) => {

        const description__block = document.querySelectorAll('.description__block');

        console.log(e.target.classList.contains("open__close"))
        if (e.target.classList.contains("open__close")) {
            e.target.parentElement.classList.add("active");
        } else{
            console.log(description__block.length);
            for(let i=0; i<description__block.length; i++){
                description__block[i].classList.remove("active");
            }
        }
    })

});
