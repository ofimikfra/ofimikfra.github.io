function yay(id) {
    id.textContent += "!"
}

function bye(id) {
    id.textContent = id.textContent.slice(0, -1);
}

function validateForm() {
    let email = document.forms["contact"]["email"].value;
    if (!email.match(/\w\S+@\S+(\.\S+){1,}/)) {
        document.getElementById("error").textContent = "Please enter a valid email address."
        return false
    }

    errorElement.textContent = "";
    return true;
}
