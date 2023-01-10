const input = document.getElementById('value');
const view = document.getElementById('view');
//const track = document.getElementById("input")
const views = [ 10, 50, 100, 500, 1 ];

const sliderTrackHandler = () => {
	const value = input.value * 25;
	const color = `linear-gradient(90deg, rgb(164, 243, 235) ${value}%, rgb(236, 240, 251) ${value}% )`;
	input.style.background = color;
	console.log(value);
};

input.oninput = () => {
	console.log(input);
	//const valuee = input.value;
	view.innerHTML = views[input.value];
	//const color = `linear-gradient(90deg, rgb(164, 243, 235)  ${valuee}, rgb(236, 240, 251) 100%- ${value}%);`
	//input.style.background = color;
};

input.oninput();
input.addEventListener('mousemove', sliderTrackHandler);
