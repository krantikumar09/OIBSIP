

var btn = document.getElementById("btn");



btn.addEventListener("click", function() {
    var degree = document.getElementById("degree").value
    var type = document.getElementById("type").value;
    var display = document.getElementById("result");

    if (type == "Celsius") {
        var f = degree * 9/5 + 32;
        if(!Number.isInteger(f)) {
            f = f.toFixed(4);
        }
        display.innerHTML = f + "&#176; F";

        if (display > 38) {
            // sunny
            document.body.style.backgroundImage = "url(./Images/sunny.jpg)";
        }else if (f < 38 && f > 25) {
            // cloud
            document.body.style.backgroundImage = "url(./Images/clouds.jpg)";
        }else {
            // winter
            document.body.style.backgroundImage = "url(./Images/winter.jpg)";
        }
    }

    if (type == "Fahrenheit") {
        var c = (degree - 32) * 5/9;
        if(!Number.isInteger(c)) {
            c = c.toFixed(4);
        }
        display.innerHTML = c + "&#176; C";

        if (result > 38) {
            // sunny
            document.body.style.backgroundImage = "url(./Images/sunny.jpg)";
        }else if (f < 38 && f > 25) {
            // cloud
            document.body.style.backgroundImage = "url(./Images/clouds.jpg)";
        }else {
            // winter
            document.body.style.backgroundImage = "url(./Images/winter.jpg)";
        }
    }
});

