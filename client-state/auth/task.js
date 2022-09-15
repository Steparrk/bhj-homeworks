function welcomeUser(id) {
    const welcome = document.getElementById('welcome');
    welcome.classList.add('welcome_active');
    const userId = document.getElementById('user_id');
    userId.insertAdjacentHTML('afterbegin', `${id}`);

    userId.insertAdjacentHTML('beforeend', '<br><button id="button">Деавторизация</button>');

    const button = document.getElementById('button');

    button.addEventListener('click', () => {
        welcome.classList.remove('welcome_active');
        document.getElementById('signin').classList.add('signin_active');

        button.remove();
        userId.innerHTML = '';

        delete localStorage.id;
    });
}

if (localStorage.length && localStorage.id) {
    document.getElementById('signin').classList.remove('signin_active');
    welcomeUser(localStorage.id);
}else {
    const signin = document.getElementById('signin');
    signin.classList.add('signin_active');
}

document.addEventListener('submit', (e) => {
    const signinForm = document.getElementById('signin__form');
    let formData = new FormData(signinForm);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.send(formData);

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState == xhr.DONE) {
            const parse = JSON.parse(xhr.responseText);
            if (parse.success) {
                signin.classList.remove('signin_active');
                welcomeUser(parse.user_id);        
                localStorage.id = parse.user_id;
            }else {
                alert('Неверный логин/пароль');
            }
        }
    });
    e.preventDefault();
})