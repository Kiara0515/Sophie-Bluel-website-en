const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", logUserin);

async function logUserin(event) {
    event.preventDefault();

    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const loginData = {
        "email": email.value,
        "password": password.value
    };

    try {
        const response = await fetch("http://localhost:5678/users/login", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(loginData)
        })