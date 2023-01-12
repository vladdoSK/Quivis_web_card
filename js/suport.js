document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById('form');
    const opacity__block = document.querySelector('.opacity__block');
    const loading__img = document.querySelector('.loading__img');
    const error__message = document.querySelector('.error__message')

    form.addEventListener("submit", formSend);

    async function formSend(e){
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if(error === 0){
            error__message.classList.remove('active')
            opacity__block.classList.add("_sending");
            loading__img.classList.add("_sending");
            let response = await fetch('../sendmail.php',{
                method: 'POST',
                body: formData,
                dataType: 'html',
            })
            if(response.ok){
                let result = response.json();
                alert(result.message);
                formPreview.innerHTML = "";
                form.requestFullscreen();
                opacity__block.classList.remove("_sending");
                loading__img.classList.remove("_sending");
            }else{
                alert("Помилка");
                opacity__block.classList.remove("_sending");
                loading__img.classList.remove("_sending");
            }
        } else{
            error__message.classList.add('active')
        }

    }

    function formValidate(form){
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for(let i=0; i<formReq.length; i++){
            const input = formReq[i];
            formRemoveError(input);

            /*if(input.classList.contains('_phone')){
                if(phoneTest(input)){
                    formAddError(input);
                    error++;
                }
            }*/

            if(input.classList.contains('_email')){
                if(emailTest(input)){
                    formAddError(input);
                    error++;
                }
            } else if (input.getAttribute("type") === "checkbox" && input.checked === false){
                formAddError(input);
                error++;
            } else {
                if(input.value===''){
                    formAddError(input);
                    error++;
                }
            }

        }

        return error;
    }

    function formAddError(input){
        input.parentElement.classList.add("_error");
        input.classList.add("_error");
    }

    function formRemoveError(input){
        input.parentElement.classList.remove("_error");
        input.classList.remove("_error");
    }

    /*function phoneTest(input){
        return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(input.value);
    }*/

    function emailTest(input){
        return !/^\w+([\.-]&\w+)*@\w+([\.-]&\w+)*(\.\w{2,8})+$/.test(input.value);
    }

});