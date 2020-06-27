console.log("Hello world")

const form = document.querySelector('form');
const loadingElement = document.querySelector('.loading')
const API_URL = 'http://localhost:5000/evaluate';

form.addEventListener ('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const code = formData.get('code');
    if(code !== ""){ 
        fetch(API_URL, {
                method: 'POST',
                body: JSON.stringify({
                    code
                }),
                headers: {
                'content-type': 'application/json'
                }
            }
        )
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(data.result === true){
                document.body.style.background = 'green';
            } else {
                document.body.style.background = 'red';
            }
        });
    } else {
        document.body.style.background = 'white';
    }
})