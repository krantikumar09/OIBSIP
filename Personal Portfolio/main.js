let menu = document.querySelector('.nav_menu');
let nav = document.querySelector('nav');

nav.style.top = "-260px"

menu.onclick = function() {
    if (nav.style.top == "-260px") {
        nav.style.top = "90px";
    }else {
        nav.style.top = "-260px";
    }
}

// header

let header = document.querySelector("header");

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
})



// contact validation

// var name_error = document.querySelector('.name-error');
// var email_error = document.querySelector('.email-error');
// var msg_error = document.querySelector('.msg-error');

// function validateName() {
//     var name = document.getElementById("name").value;

//     if (name.length == 0) {
//         name_error.innerHTML = "Please enter name";
//         return false;
//     }

//     if (!name.match(/^[A-Za-z]{1,20}\s[A-Za-z]{1,30}$/)) {
//         name_error.innerHTML = "Please enter full name";
//         return false;
//     }

//     name_error.innerHTML = "";
//     return true;

// }

// function validateEmail() {
//     var email = document.getElementById("email").value;
//     const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;


//     if (email.lenth == 0) {
//         email_error.innerHTML = "Please enter email";
//         return false;
//     }

//     if (!email.match(emailPattern)) {
//         email_error.innerHTML = "Invalid email";
//         return false;
//     }
//     email_error.innerHTML = "";
//     return true;
// }

// function validateMsg() {
//     var msg = document.getElementById("msg").value;
//     var required = 30;
//     var left = required - msg.length;

//     if (left > 0) {
//         msg_error.innerHTML = left + " more characters required.";
//         return false;
//     }

//     msg_error.innerHTML = "";
//     return true;
// }



// function validateForm() {
//     if (!validateName() || !validateEmail() || !validateMsg()) {
//         window.alert("Please fill the form.");
//         return false;
//     }
// }


function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "krantikumar3446@gmail.com",
        Password : "4E945071E4495EDDC30C43DE6A2C8187CBCF",
        To : 'krantikumar3446@gmail.com',
        From : document.getElementById("email").value,
        Subject : "For enquiry",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Message: " + document.getElementById("msg").value
    }).then(
      message => alert(message)
    );
}