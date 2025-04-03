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

// edit and login logout variables
const logoutLink = document.getElementById("logout");
const loginLink = document.getElementById("login");
const editBanner = document.querySelector(".edit-banner");
const editButton = document.querySelector(".edit-button");

function checkLoginStatus() {
	// will return true or false
	return sessionStorage.getItem("token") !== null;
}
// is logged in true or false
const isLoggedIn = checkLoginStatus();

//checking if links are there showing and hiding login/logout buttons
if (loginLink && logoutLink) {
	if (isLoggedIn) {
		loginLink.style.display = "none";
		logoutLink.style.display = "inline";
		editBanner.style.display = "block";
		editButton.style.display = "inline";
	} else {
		loginLink.style.display = "inline";
		logoutLink.style.display = "none";
		editBanner.style.display = "none";
		editButton.style.display = "none";
	}
}
//listening for a click then logging user out
logoutLink.addEventListener("click", logoutUser);
//logging user out
function logoutUser() {
	alert("logging out!");
	// ✅ clear sessionStorage.clear();
	sessionStorage.clear();
	// ✅ send user to login.html
	window.location.href = "login.html";
}

async function fetchCatergories() {
	try {
		const reponse = await fetch("http://localhost:5678/api/categories");
		if (!reponse.ok) {
			alert("Categories is not ok!");
		} else {
			const categoriesData = await response.json();
			console.log("categoriesData" + JSON.stringify(data));

			return categoriesData;
		}
	} catch (error) {
		console.error("Error,error");
		alert("An error occurred. Please try again.");
	}
}

async function displayCatergories() {
	const categories = await fetchCatergories(
		"http://localhost:5678/api/categories"
	);
}

async function init() {
	const works = await fetchWorksData();
	displayWorksData(works);
	displayCategories();
}

init();
