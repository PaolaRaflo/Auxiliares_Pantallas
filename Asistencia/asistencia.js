// Para efectos de toggle del sidebar
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

// Botón Guardar: Muestra un mensaje de confirmación y redirige
function guardarAsistencia() {
    Swal.fire({
        icon: 'success', // Ícono de éxito
        title: 'Asistencia Registrada',
        text: 'La asistencia se guardó correctamente.',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#4CAF50', // Color del botón
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = "/Asistencia/asistenciaAux.html"; // Redirige a la página correspondiente
        }
    });
}


// Botón Cancelar: Redirige sin mensaje
function cancelarAsistencia() {
    window.location.href = "/Asistencia/asistenciaAux.html";
}



