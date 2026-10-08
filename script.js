function showMessage() {
    const message = document.getElementById("message");

    message.classList.add("show");

    setTimeout(() => {
        message.classList.remove("show");
    }, 2500);
}