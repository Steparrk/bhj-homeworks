const editor = document.getElementById('editor');

editor.value = localStorage.getItem('textUser');

function saveText() {
	localStorage.textUser = document.getElementById('editor').value;
}

editor.addEventListener('change', saveText);