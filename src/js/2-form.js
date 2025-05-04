let formData = {
    email: "",
    message: "",
}

///////////////////////////////////////////////////////////

const STOR_KEY = "feedback-form-state";
const form = document.querySelector(".feedback-form");

getInfo()

form.addEventListener("input", handForm);

//////////////////////////////////////////////////////////

function handForm(e) {
    formData[e.target.name] = e.target.value.trim();
    localStorage.setItem(STOR_KEY, JSON.stringify(formData));
}
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (!email || !message) {
        alert("Please fill in all fields");
        return;
    }
    console.log({ email, message });

    localStorage.removeItem(STOR_KEY);
    form.reset();

    formData = {
        email: "",
        message: "",
    };
});
    

function getInfo() {
    const savedData = localStorage.getItem(STOR_KEY);
    if (!savedData) return;

    try {
        formData = JSON.parse(savedData) || {};

        form.elements.email.value = formData.email || "";
        form.elements.message.value = formData.message || "";
    } catch (error) {
        console.log("error");
    }
}
   
