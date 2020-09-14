$(document).ready(function() {

    let select = function () {
        let selectHeader = document.querySelectorAll('.select__header');
        let selectItem = document.querySelectorAll('.select__item');

        selectHeader.forEach(item => {
            item.addEventListener('click', selectToggle);
        });

        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose);
        });

        function selectToggle() {
            this.parentElement.classList.toggle('is-active');
        }

        function selectChoose() {
            let text = this.innerText,
                select = this.closest('.select'),
                currentText = select.querySelector('.select__current');
            currentText.innerText = text;
            select.classList.remove('is-active');

        }

    };


    let container = $(".select__body");
    let item = $(".select__item");
    let header = $(".select__header");
    
    $(document).mouseup(function (e) {
        
        if (container.has(e.target).length === 0){
            container.hide();
        }
        item.click(function() {
            console.log('no');
            container.hide(); 
        });
        header.click(function() {
            container.show();
            console.log('yes'); 
        });
                 
    });

    select();
})


