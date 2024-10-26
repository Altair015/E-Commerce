console.log(document.getElementById("loginSubmit"))

// LoginAuthentication
function authEntication() {
    let email = document.getElementById("emailId");
    let pass = document.getElementById("passId");

    if (email.value === "admin@admin.com" && pass.value === "123456") {
        alert("Login successful");
        window.location.reload()
    }
    else {
        alert("Incorrect email or password")
        window.location.reload()
    }
}

let submitElement = document.getElementById("loginSubmit");

submitElement.addEventListener("click", authEntication);