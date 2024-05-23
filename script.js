function yay(id) {
    id.textContent += " !"
}

function bye(id) {
    id.textContent = id.textContent.slice(0, -2);
}
