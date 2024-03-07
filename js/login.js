function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var real_username = "Cian18";
    var real_password = "gandeza";

    if(username === "" || password === "") {
        document.getElementById("error").innerHTML = "All textboxes are required";
    }
    else {
        if(username === real_username && password === real_password) {
            document.getElementById("error").innerHTML = "Welcome," + username;
        }
        else {
            document.getElementById("error").innerHTML = "Invalid username or password";
        }


    }

}
function forgot() {
    alert("You cliked forgot password!")
}