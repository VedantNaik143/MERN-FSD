// Button interaction

function showMessage() {
    alert("Hello! Thanks for visiting my portfolio.");
}

// Contact form interaction

function submitForm(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("form-message").textContent =
        `Thank you, ${name}! Your message has been submitted.`;

    document.querySelector("form").reset();
}