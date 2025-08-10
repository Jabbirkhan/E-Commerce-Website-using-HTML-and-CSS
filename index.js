// Navbar js start
var listitem = document.getElementById('listitems');
listitem.style.maxHeight = '0px';

function menutoggle(){
    if(listitem.style.maxHeight == '0px'){
        listitem.style.maxHeight = '200px';
    }
    else{
        listitem.style.maxHeight = '0px';
    }
}
// Navbar js end 

// Account js start
var regform = document.getElementById("regform");
var loginform = document.getElementById("loginform");
var regbtn = document.getElementById("reg-btn");
var loginbtn = document.getElementById("login-btn");


function registration(){
    regform.style.transform = "translateX(0px)"
    loginform.style.transform = "translateX(0px)"
    regbtn.style.borderBottom = '1px solid blue'
    loginbtn.style.borderBottom = 'none'
}
function login(){
    regform.style.transform = "translateX(400px)"
    loginform.style.transform = "translateX(400px)"
    regbtn.style.borderBottom = 'none'
    loginbtn.style.borderBottom = '1px solid blue'
}

// Registration js start
var regform = document.getElementById('regform');
var username = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('password');
var password2 = document.getElementById('password2');

regform.addEventListener('submit', e =>{
    e.preventDefault();
    validateInput();
});


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const setSuccess = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validateInput = () => {
    const nameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(nameValue === ''){
        setError(username, 'User name is required');
    }
    else if(nameValue.length < 4 ){
        setError(username, 'User name is shorter than 4 character');
    }
    else{
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email, 'Email is required');
    }
    else{
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password, 'Password is required');
    }
    else{
        setSuccess(password);
    }

    if(password2Value === ''){
        setError(password2, 'Write your password again');
    }
    else if(password2Value !== passwordValue){
        setError(password2, 'Password is not matching');
    }
    else{
        setSuccess(password2);
    }
};
// Registration js end

// login js start
var logform = document.getElementById('loginform');
var logemail = document.getElementById('logemail');
var logpassword = document.getElementById('logpassword');
var logpassword2 = document.getElementById('logpassword2');

logform.addEventListener('submit', e =>{
    e.preventDefault();

    validateLogInput();
});


const setlogError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.logerror');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
const setlogSuccess = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.logerror');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validateLogInput = () => {
    const logemailValue = logemail.value.trim();
    const logpasswordValue = logpassword.value.trim();
    const logpassword2Value = logpassword2.value.trim();


    if(logemailValue === ''){
        setlogError(logemail, 'Email is required');
    }
    else{
        setlogSuccess(logemail);
    }

    if(logpasswordValue === ''){
        setlogError(logpassword, 'Password is required');
    }
    else{
        setlogSuccess(logpassword);
    }

    if(logpassword2Value === ''){
        setlogError(logpassword2, 'Write your password again');
    }
    else if(logpassword2Value !== logpasswordValue){
        setlogError(logpassword2, 'Password is not matching');
    }
    else{
        setlogSuccess(logpassword2);
    }
};
// login js end
// Account js end


