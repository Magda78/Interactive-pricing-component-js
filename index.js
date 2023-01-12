const input = document.getElementById('value');
const view = document.getElementById('view');
const cost = document.getElementById('price');
const toggleButton = document.querySelector('.main__content__billing__ofandon');
const toggleSwitch = document.querySelector('.main__content__billing__ofandon__circle');
const views = [
	{
		view: '10K pageviews',
		price: 8.0
	},
	{
		view: '50K pageviews',
		price: 10.0
	},
	{
		view: '100K pageviews',
		price: 16.0
	},
	{
		view: '500K pageviews',
		price: 24.0
	},
	{
		view: '1M pageviews',
		price: 36.0
	}
];

const sliderTrackHandler = () => {
	const value = input.value * 25;
	const color = `linear-gradient(90deg, rgb(164, 243, 235) ${value}%, rgb(236, 240, 251) ${value}% )`;
	input.style.background = color;
};

input.oninput = () => {
	if (toggleSwitch.classList.contains('main__content__billing__ofandon__circle__toggle')) {
		toggleSwitch.classList.add('main__content__billing__ofandon__circle');
		toggleSwitch.classList.remove('main__content__billing__ofandon__circle__toggle');
	}
	view.innerHTML = views[input.value].view.toUpperCase();
	cost.innerHTML = views[input.value].price.toFixed(2);
};

toggleHandler = () => {
	if (toggleSwitch.classList.contains('main__content__billing__ofandon__circle')) {
		toggleSwitch.classList.remove('main__content__billing__ofandon__circle');
		toggleSwitch.classList.add('main__content__billing__ofandon__circle__toggle');
		cost.innerHTML = (views[input.value].price * 25 / 100).toFixed(2);
	} else {
		toggleSwitch.classList.add('main__content__billing__ofandon__circle');
		toggleSwitch.classList.remove('main__content__billing__ofandon__circle__toggle');
        cost.innerHTML = views[input.value].price.toFixed(2);
	}
};

input.oninput();
input.addEventListener('mousemove', sliderTrackHandler);
toggleButton.addEventListener('click', toggleHandler);
