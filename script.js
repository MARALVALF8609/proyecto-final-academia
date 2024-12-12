function saveData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function loadData(key) {
    return JSON.parse(localStorage.getItem(key));
}

document.getElementById('signupFormStep1')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();

    if (!fullName || !email || !phoneNumber) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    saveData('userData', { fullName, email, phoneNumber });

    alert('Signup successful! Redirecting to login.');
    window.location.href = 'login.html';
});

document.getElementById('signupFormStep2')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    if (!password || !confirmPassword) {
        alert('Por favor, completa ambos campos de contraseña.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
    }

    const userData = loadData('userData');
    userData.password = password;
    saveData('userData', userData);

    alert('Signup Step 2 complete! Redirecting to home.');
    window.location.href = 'home.html';
});

document.getElementById('nextBtn')?.addEventListener('click', function () {
    const phoneNumber = document.getElementById('phoneNumber').value.trim();

    if (!phoneNumber) {
        alert('Por favor, ingresa un número de teléfono.');
        return;
    }

    saveData('userData', { phoneNumber });

    window.location.href = 'home.html';
});

if (document.getElementById('phoneNumberDisplay')) {
    const userData = loadData('userData');
    if (userData) {
        document.getElementById('fullNameDisplay').textContent = userData.fullName;
        document.getElementById('emailDisplay').textContent = userData.email;
        document.getElementById('phoneNumberDisplay').textContent = userData.phoneNumber;
    } else {
        alert('No user data found. Redirecting to signup.');
        window.location.href = 'index.html';
    }
}

document.getElementById('logoutButton')?.addEventListener('click', function () {
    localStorage.removeItem('userData');
    window.location.href = 'login.html';
});

if (window.matchMedia("(max-width: 639px)").matches) {
    document.querySelector('.logo img').setAttribute('style','margin-left: 0;')
} 

document.getElementById('backToHome')?.addEventListener('click', function () {
    

    window.location.href = 'home.html';
});
