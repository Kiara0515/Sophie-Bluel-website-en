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
		debugger;
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
