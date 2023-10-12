const form = document.querySelector("#newsletter-signup");
const email = document.querySelector("#email");
const errorMsg = document.querySelector(".error-msg");
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
        showHideSuccessMsg(email.value);
    }
});

dismissBtn.addEventListener("click", () => {
    showHideSuccessMsg();
});

function showHideSuccessMsg(email="") {
    const successMsg = document.querySelector(".success-msg");
    const body = document.querySelector("body")
    const signup = document.querySelector(".signup")
    const footer = document.querySelector("footer");

    successMsg.classList.toggle("hidden");
    body.classList.toggle("success");
    signup.classList.toggle("hidden");
    footer.classList.toggle("hidden");

    if (email !== "") {
        document.querySelector(".email-output")
        .innerHTML = `${email}`
    }
}