const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const firstName = document.querySelector('#firstname').value;
    const lastName = document.querySelector('#lastname').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    if(firstName === ""){
        addError('firstname', 'First Name can not be empty');
    } else {
        removeError('firstname');
    }

    if(lastName === ""){
        addError('lastname', 'Last Name can not be empty');
    } else {
        removeError('lastname');
    }
    
    if(email === ""){
        addError('email', 'Email can not be empty');
    } else if(!validateEmail(email)){
        addError("email", "Email is not valid");
    } else{
        removeError("email");
    }

    if(password === ""){
        addError('password', 'Password can not be empty');
    } else {
        removeError('password');
    }    
});

function addError(field, msg){
    const formControl = document.querySelector('#'+field).parentNode;
    formControl.classList.add('error');
    formControl.querySelector('small').innerText = msg;
}

function removeError(field){
    const formControl = document.querySelector('#'+field).parentNode;
    formControl.classList.remove('error');
    formControl.querySelector('small').innerText = '';
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
