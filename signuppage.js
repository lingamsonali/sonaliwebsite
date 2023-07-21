function projectsignup(){
    var Email = document.getElementById("email").value;
    console.log(Email);
    if (!(Email.includes("@") && Email.includes(".com")) || (Email.includes("@") && Email.includes(".in")) || (Email.includes("@") && Email.includes(".edu"))) {
        alert("Please check your mail and try again");
        return false;
    } 
    const phone_no = document.getElementById("p_no").value;
    if (phone_no.length != 10) {
        alert("Phone number can't be more than 10 digits long");
        return false;
    }
}





