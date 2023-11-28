function fun1() {
    var email = document.getElementById("email");
    mail = email.value.trim();
    var firstAtPosiotion = mail.indexOf("@",4);
    var lastAtPosition = mail.lastIndexOf("@");
    var dotPosition = mail.lastIndexOf(".");
    var userEntry = document.getElementById("password");
    var password = userEntry.value.trim();

    if (firstAtPosiotion = !lastAtPosition) {
        alert("Not same indexes");
    }
    if (firstAtPosiotion <= 3) {
        // alert("digits of email company not valid");
        alert("first name less than 4");
    }
    if (lastAtPosition <= 2) {
        alert("Your name is less than 3 characters");   //befor@
    }
    if (email.length - dotPosition <= 2) {

        alert("digits of email type not valid")
    }
    if (dotPosition <= 2) {
        alert("dotPosition not valid")
    }
    if (password.length < 8) {
        alert("  this password less than 8 characters please try again ");
    }
    else {
        alert(" congratulation processing is successfully --!!");
    }
}



