function check() {
    var x = document.forms["myForm"]["email"].value;
    var y = document.forms["myForm"]["password"].value;
    if (x != "niranjana"||y!="1234") {
        alert("Invalid user name or password");
        return false;
    }
}