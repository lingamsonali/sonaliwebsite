function projectlogin() {
    var Enter_id=document.getElementById("Enter_id").value;
    var Pass_word=document.getElementById("Pass_word").value;
    if (Enter_id=="vivek" && Pass_word=="12345678"){
        alert("Login successful")
    }
    else {
        alert("Invalid username or password!")
    }
}