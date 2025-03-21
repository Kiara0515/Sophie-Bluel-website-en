console.log("Hello World");
// http://localhost:5678/api/works

// function fetchWorksData
async function fetchWorksData() {
	// use fetch to get data from http://localhost:5678/api/works
	const response = await fetch("http://localhost:5678/api/works");
	// turn reponse into json
	const works = await response.json();

	// return data
	return works;
}

async function displayWorksData() {
	const works = await fetchWorksData();
	console.log(works);
	const gallery = document.querySelector(".gallery");

	works.forEach(function (work) {
		const figure = document.createElement("figure");

		const image = document.createElement("img");

		image.src = work.imageUrl;

		const figcaption = document.createElement("figcaption");

		figcaption.textContent = work.title;
		figure.append(image, figcaption);
		gallery.append(figure);
	});
}
displayWorksData();
//Check is user is logged in//
//If logged in make edit buttons appear//
//Add button in HTML//
//Add banner in HTML//
//Show and hide button and banner in HTML and CSS//
//Show and hide both if token is in session storage//

function checkIfLoggedIn() {
	const editBanner = document.querySelector(".edit-banner");
	const editButton = document.querySelector(".edit-button");

	if (sessionStorage.getItem("token") !== null) {
		editBanner.style.display = "block";
		editButton.style.display = "inline";
	}
}

checkIfLoggedIn();


// Log user out when they click on the logout link

const logoutLink = document.getElementById("logout");

logoutLink.addEventListener("click", logoutUser);

function logoutUser() {
	alert("logging out!");
	// ✅ clear sessionStorage.clear();
	sessionStorage.clear();
	// ✅ send user to login.html
	window.location.href = "login.html";
}
