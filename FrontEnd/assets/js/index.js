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

async function fetchCategories() {
	try {
		const response = await fetch("http://localhost:5678/api/categories");
		if (!response.ok) {
			alert("Categories is not ok!");
		}
		const categoriesData = await response.json();
		console.log("categoriesData" + JSON.stringify(categoriesData));

		return categoriesData;
	} catch (error) {
		console.error("Error", error);
		alert("An error occurred. Please try again.");
	}
}

async function displayCategories() {
	const categories = await fetchCategories();
	//loop through catergories
	const filters = document.getElementById("filters");

	// create all button
	const allButton = document.createElement("button");
	allButton.textContent = "All";

	allButton.classList.add("filter-button");
	filters.append(allButton);
	// put it on the page
	categories.forEach(function (category) {
		const filterbutton = document.createElement("button");
		//create button
		filterbutton.textContent = category.name;
		filterbutton.classList.add("filter-button");

		//add name
		//append to filters
		filters.append(filterbutton);
	});
}

async function init() {
	const works = await fetchWorksData();
	displayWorksData(works);
	displayCategories();
}

init();
