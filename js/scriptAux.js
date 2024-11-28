
// Función de validación de inicio de sesión
function validateLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        Swal.fire({
            icon: 'warning',
            title: 'ADVERTENCIA!',
            text: 'Por favor, rellene todos los campos.',
            confirmButtonText: 'ACEPTAR',
            confirmButtonColor: '#4CAF50'
        });
        return false;
    }

    const correctUsername = 'AUXILIAR';
    const correctPassword = '123456';

    if (username === correctUsername && password === correctPassword) {
        sessionStorage.setItem('isAuthenticated', 'true');

        Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#4CAF50'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '/menuAux.html';
            }
        });
        return false;
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'ADVERTENCIA!',
            text: 'Usuario y/o Contraseña incorrecta',
            confirmButtonText: 'ACEPTAR',
            confirmButtonColor: '#4CAF50'
        });
        return false;
    }
}

// Función para verificar si el usuario está autenticado
function checkAuthentication() {
    const isAuthenticated = sessionStorage.getItem('isAuthenticated');
    const currentPath = window.location.pathname;

    // Redirige a index.html si no está autenticado y no está en la página de inicio de sesión
    if (!isAuthenticated && !currentPath.endsWith('/index.html') && !currentPath.endsWith('/index.html')) {
        window.location.href = '/index.html';
    }
}

// Función para cerrar sesión
function logout() {
    sessionStorage.removeItem('isAuthenticated');
    window.location.href = '/index.html';
}

// Llama a checkAuthentication en cada página cargada, excepto en index.html
if (!window.location.pathname.endsWith('/index.html') && !window.location.pathname.endsWith('/index.html')) {
    window.onload = checkAuthentication;
}



function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');
    const toggleButton = document.querySelector('.btn-toggle-sidebar');

    sidebar.classList.toggle('hidden');
    if (sidebar.classList.contains('hidden')) {
        toggleButton.style.left = '10px';
    } else {
        toggleButton.style.left = '210px';
    }
}

// Detectar el cambio de tamaño de la ventana
window.addEventListener('resize', () => {
    const sidebar = document.querySelector('.sidebar');
    if (window.innerWidth <= 768) {
        sidebar.classList.add('hidden');
    } else {
        sidebar.classList.remove('hidden');
    }
});

// Asignar evento al botón
document.getElementById("toggleSidebarBtn").addEventListener("click", toggleSidebar);
