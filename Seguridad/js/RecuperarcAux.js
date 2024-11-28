function validateEmail() {
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        Swal.fire({
            icon: 'success',
            title: 'Se ha enviado un enlace de restablecimiento',
            confirmButtonText: 'Aceptar',
            confirmButtonColor: '#2e7d32'
        }).then(() => {
            window.location.href = '/Seguridad/ValidarcAux.html';
        });
        return false;
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'ADVERTENCIA!',
            text: 'Por favor, ingrese un correo electrónico válido',
            confirmButtonText: 'ACEPTAR',
            confirmButtonColor: '#2e7d32'
        });
        return false;
    }
}
