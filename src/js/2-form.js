const formData = {
    email: " ",
    message: " ",
}

const STOR_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const formMessage = form.querySelector("textarea");

getInfo()

form.addEventListener('submit', handForm);

function handForm(e) {
    e.preventDefault();
    const form = e.currentTarget;

    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (!email || !message) {
        alert("Fill please all fields");
        return;
    }

    formData.email = email;
    formData.message = message;

    localStorage.setItem(STOR_KEY, JSON.stringify(formData));
    console.log(formData);

    localStorage.removeItem(STOR_KEY);
    form.reset();
}

function handText() {
    formData.message = form.elements.message.value.trim();
    formData.email = form.elements.email.value.trim();

    localStorage.setItem(STOR_KEY, JSON.stringify(formData));
    }
    formMessage.addEventListener("input", handText);



function getInfo() {
    const savedData = localStorage.getItem(STOR_KEY);
    if (!savedData) return;

    try {
        const saveInfo = JSON.parse(savedData);

        form.elements.email.value = saveInfo.email || "";
        formMessage.value = saveInfo.message || ""; 

        formData.email = saveInfo.email || "";
        formData.message = saveInfo.message || "";
    } catch (error) {
        console.log();
    }
}
   
