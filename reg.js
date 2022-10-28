let userName = document.querySelector("#name")
let email = document.querySelector("#email")
let emailError = document.querySelector("#email-error")
let usernameError = document.querySelector("#username-error")

email.addEventListener("input", function(e) {
    console.log(e.target.value)
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var inValue = e.target.value;
    var valid = pattern.test(inValue);

    if(valid) {
        emailError.style.display = 'block'
    } else {
        emailError.style.display = 'none'
    }
})

UserName.addEventListener("input", function(e) {
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var inValue = e.target.value;
    var valid = pattern.test(inValue);

    if(valid) {
        usernameError.style.display = 'block'
    } else {
        usernameError.style.display = 'none'
    }
})