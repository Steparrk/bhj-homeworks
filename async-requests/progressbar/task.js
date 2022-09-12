const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {

	let formData = new FormData(form);
	let request = new XMLHttpRequest();
	request.addEventListener('readystatechange', function(){
		request.upload.onprogress = function(event) {
		progress.value = event.loaded / event.total;
		}
	});
	request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
	request.send(formData);
	e.preventDefault();
});



