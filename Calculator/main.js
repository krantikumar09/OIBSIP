let string = "";
var buttons = document.querySelectorAll('.button');
var display = document.getElementById("display");

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            display.value = string;
        }else if (e.target.innerHTML == "C") {
            string = ""
            display.value = string;
        }else if (e.target.innerHTML == "DE") {
            string = string.slice(0, -1)
            display.value = string; 
        }else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            display.value = string;
        }
    })
})