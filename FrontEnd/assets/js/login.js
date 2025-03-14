const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", logUserin);

async function logUserin(event) {
	event.preventDefault();

	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;

	const loginData = {
		email: email,
		password: password,
	};

	try {
		const response = await fetch("http://localhost:5678/api/users/login", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(loginData),
		});

		if (!response.ok) {
			alert("Incorrect email or password");
		} else {
			const data = await response.json();
			console.log("Data: " + JSON.stringify(data));
			window.location.href = "index.html";
		}
	} catch (error) {
		console.error("Error during login:", error);
		alert("An error occurred. Please try again.");
	}
}
