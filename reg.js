let userName = document.querySelector("#name")
let email = document.querySelector("#email")
let emailError = document.querySelector("#email-error")
let usernameError = document.querySelector("#username-error")

email.addEventListener("input", function(e) {
    console.log(e.target.value)
    let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let inValue = e.target.value;
    console.log(pattern.test(inValue))

    let valid = pattern.test(inValue);

    if(valid) {
        emailError.style.display = 'none'
    } else {
        emailError.style.display = 'block'
    }
})

UserName.addEventListener("input", function(e) {
    let pattern = /^[A-Z]/;
    let inValue = e.target.value;

    console.log(pattern.test(inValue))

    let valid = pattern.test(inValue);

    

    if(valid) {
        usernameError.style.display = 'none'
    } else {
        usernameError.style.display = 'block'
    }
})