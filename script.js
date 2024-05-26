function yay(id) {
    id.textContent += "!"
}

function bye(id) {
    id.textContent = id.textContent.slice(0, -1);
}

function goproj(id) {
    const h2 = id.parentElement;
    h2.classList.add('hovered');
}

function byeproj(id) {
    const h2 = id.parentElement;
    h2.classList.remove('hovered');
}

function validateForm() {
    let email = document.forms["contact"]["email"].value;
    if (!email.match(/\w\S+@\S+(\.\S+){1,}/)) {
        alert("Please enter a valid email address.")
        return false
    }

    errorElement.textContent = "";
    return true;
}

