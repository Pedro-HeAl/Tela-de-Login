function showPass() {
    const eye = document.getElementById('eye');
    const eyeSlash = document.getElementById('eye-slash');
    const Pass = document.getElementById('pass');

    if (eye.style.display === 'none') {
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        Pass.type = 'text';

    } else {
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        Pass.type = 'password';

    }
};

document.getElementById('bt-login').addEventListener('click', function (e) {
    e.preventDefault()
    alert('Logado');
});
