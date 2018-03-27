	   
var button = document.querySelector('.search-hotel .button-brown');
var modal = document.querySelector('.form-search-hotel');

button.addEventListener('click', function(evt) {
	evt.preventDefault();
	if (modal.classList.contains('form-search-hotel-show')) {
		modal.classList.remove('form-search-hotel-show');
	}
	else {
		modal.classList.add('form-search-hotel-show');
		modal.querySelector('[type = text]').focus();
	} 
});

window.addEventListener('keydown', function(evt) {
	if (evt.keyCode !== 27) return; 
	if (modal.classList.contains('form-search-hotel-show')) {
		evt.preventDefault();
		modal.classList.remove('form-search-hotel-show');
	};
});
