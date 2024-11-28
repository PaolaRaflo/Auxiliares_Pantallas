function validatePasswords() {
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let valid = true;

    if (!passwordPattern.test(newPassword)) {
        Swal.fire({
            icon: 'warning',
            title: 'ADVERTENCIA!',
            text: 'La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, número y un carácter especial.',
            confirmButtonText: 'ACEPTAR',
            confirmButtonColor: '#2e7d32'
        });
        valid = false;
    } else if (newPassword !== confirmPassword) {
        Swal.fire({
            icon: 'warning',
            title: 'ADVERTENCIA!',
            text: 'Las contraseñas no coinciden.',
            confirmButtonText: 'ACEPTAR',
            confirmButtonColor: '#2e7d32'
        });
        valid = false;
    }

    return valid;
}
