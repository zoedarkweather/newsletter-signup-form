const form = document.querySelector("#newsletter-signup");
const email = document.querySelector("#email");
const errorMsg = document.querySelector(".error-msg");
const successMsg = document.querySelector(".success-msg")
const emailOutput = document.querySelector(".email-output")
const dismissBtn = document.querySelector("#dismiss-btn")

email.addEventListener("focus", () => {
    email.classList.remove("error");
    errorMsg.textContent = "";
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!email.validity.valid) {
        email.classList.add("error");
        errorMsg.textContent = "Valid email required";
    } else {
        if (email !== "") {
            emailOutput.innerHTML = `${email.value}`
        }
        successMsg.showModal();
    }
});

dismissBtn.addEventListener("click", () => {
    successMsg.close();
});