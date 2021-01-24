function messageLightMode (enable) {
	const btnLight = document.querySelector('.message-toggle-light');
	const btnDark = document.querySelector('.message-toggle-dark');
	const stylesheet = document.querySelector('#stylesheet-dark');

	if (!stylesheet || !btnLight || !btnDark) return;

	btnLight.classList.toggle('hidden', enable);	// hide btnLight when it's light
	btnDark.classList.toggle('hidden', !enable);	// hide btnDark when it's not light

	if (enable) stylesheet.setAttribute('disabled', 'true');
	else stylesheet.removeAttribute('disabled');

	window.localStorage.setItem('message-light-mode', enable);
}

window.addEventListener('DOMContentLoaded', () => {
	if (!document.querySelector('#message-content')) return;
	const enable = window.localStorage.getItem('message-light-mode');
	requestAnimationFrame(() => messageLightMode(enable === 'true'));
});
