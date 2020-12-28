let resultArea = document.getElementById('result');
let dadImage = document.getElementById('dad-image');
let jokeButton = document.getElementById('joke-button');
const getJoke = async () => {
	let category = getCategory();
	jokeButton.disabled = true;
	if (!category) category = 'Any';
	const url = `https://v2.jokeapi.dev/joke/${category}?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`;
	const response = await fetch(url);
	const data = await response.json();
	if (data.type === 'single') {
		resultArea.innerHTML = `<h3>${data.joke}</h3>`;
		dadImage.style.opacity = '1';
		dadImage.style.left = '0';
		dadImage.style.right = 'auto';
		dadImage.src = 'images/oneline.png';
		jokeButton.disabled = false;
	} else if (data.type === 'twopart') {
		resultArea.innerHTML = `<h3 id="setup" class="my-sm-5">${data.setup}</h3>`;
		dadImage.style.opacity = '1';
		dadImage.style.left = 'auto';
		dadImage.style.right = '0';
		dadImage.src = 'images/setup.png';
		setTimeout(() => {
			resultArea.innerHTML += `<h3 id="delivery" class="my-4">${data.delivery}</h3>`;
			dadImage.src = 'images/delivery.png';
			jokeButton.disabled = false;
		}, 2500);
	}
};

const getCategory = () => {
	const selectedCategory = document.getElementById('category').joke.value;
	console.log(selectedCategory);
	return selectedCategory;
};
