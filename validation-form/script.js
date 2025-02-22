var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        nameError.classList.remove('success');
        nameError.classList.add('error');
        return false;
    }
    if(!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)){
        nameError.innerHTML = 'Write full name';
        nameError.classList.remove('success');
        nameError.classList.add('error');
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-circle-check"></i>';
    nameError.classList.remove('error');
    nameError.classList.add('success');
    return true;
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0) {
        phoneError.innerHTML = 'Phone no. is required';
        phoneError.classList.remove('success');
        phoneError.classList.add('error');
        return false;
    }
    if(phone.length !== 10) {
        phoneError.innerHTML = 'Phone no. should be 10 digits';
        phoneError.classList.remove('success');
        phoneError.classList.add('error');
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits allowed';
        phoneError.classList.remove('success');
        phoneError.classList.add('error');
        return false;
    }
    phoneError.innerHTML = '<i class="fas fa-circle-check"></i>';
    phoneError.classList.remove('error');
    phoneError.classList.add('success');
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact-email').value;

    if(email.length == 0) {
        emailError.innerHTML = 'Email is required';
        emailError.classList.remove('success');
        emailError.classList.add('error');
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)){
        emailError.innerHTML = 'Email invalid';
        emailError.classList.remove('success');
        emailError.classList.add('error');
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-circle-check"></i>';
    emailError.classList.remove('error');
    emailError.classList.add('success');
    return true;
}

function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if(left > 0){
        messageError.innerHTML = left + ' more characters required';
        messageError.classList.remove('success');
        messageError.classList.add('error');
        return false;
    }

    messageError.innerHTML = '<i class="fas fa-circle-check"></i>';
    messageError.classList.remove('error');
    messageError.classList.add('success');
    return true;
}

function validateForm(event){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        event.preventDefault();
        return false;
    }
    return true;
}
