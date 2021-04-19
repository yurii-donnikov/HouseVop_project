const [main_bottom_name, main_bottom_number, main_bottom_button] = ['main_bottom_name', 'main_bottom_number', 'main_bottom_button'].map((id) => document.getElementById(id))

function formSend() {
    main_bottom_button.onclick = function(event) {
        if (main_bottom_number.value.length > 4) {
            fetch('http://localhost:3000/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: main_bottom_name.value,
                    numberTel: main_bottom_number.value
                })
            }).then((response) => console.log(response.status))
            main_bottom_name.value = '';
            main_bottom_number.value = '+7';
        }
    };
}
formSend()