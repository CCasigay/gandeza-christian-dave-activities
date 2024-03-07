function register() {
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;

    if (username === "" || name === "" || password === "") {
        document.getElementById("error").innerHTML = "All textboxes are required";
    }
    else {
        document.getElementById("error").innerHTML = "You are now registered, master " + name;
    }
}