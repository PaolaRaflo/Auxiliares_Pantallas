function openRegistrarModal() {
    document.getElementById('modal-registrar').style.display = 'flex';
    const modal = document.getElementById('modal-registrar');
    const form = document.getElementById('form-registro');
    
    // Asegurar que el formulario tiene la clase correcta
    if (!form.classList.contains('form-registro')) {
        form.classList.add('form-registro');
    }
    
    modal.style.display = 'flex';
}

function openTopicoModal() {
    document.getElementById('modal-topico').style.display = 'flex';
}

function openSalidaModal() {
    const modal = document.getElementById('modal-salida');

    // Actualizar el contenido del modal con los datos dinámicos
    const fecha = document.getElementById("fecha-registrar").value;
    const horaSalida = document.getElementById("hora-salida").value;
    const aula = document.getElementById("aula").value;
    const apellidos = document.getElementById("apellidos").value;
    const nombre = document.getElementById("nombre").value;
    const numeroApoderado = document.getElementById("numero-apoderado").value;

    // Asegurar que los campos dinámicos se actualicen
    modal.querySelector('[data-dni]').textContent = aula;
    modal.querySelector('[data-fecha]').textContent = fecha;
    modal.querySelector('[data-hora]').textContent = horaSalida;
    modal.querySelector('[data-nombres]').textContent = `${nombre} ${apellidos}`;
    modal.querySelector('[data-celular]').textContent = numeroApoderado;

    modal.style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

let contador = 4;

function registrarPermiso() {
    // Obtener valores del formulario
    const fecha = document.getElementById("fecha-registrar").value;
    const horaSalida = document.getElementById("hora-salida").value;
    const aula = document.getElementById("aula").value;
    const apellidos = document.getElementById("apellidos").value;
    const nombre = document.getElementById("nombre").value;
    const numeroApoderado = document.getElementById("numero-apoderado").value;

    // Validar que los campos no estén vacíos
    if (!fecha || !horaSalida || !aula || !apellidos || !nombre) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    // Crear una nueva fila en la tabla
    const tablaBody = document.getElementById("tabla-body");
    const nuevaFila = document.createElement("tr");
    nuevaFila.innerHTML = `
        <td>${contador++}</td>
        <td>${fecha}</td>
        <td>${horaSalida}</td>
        <td>${aula}</td>
        <td>${apellidos}</td>
        <td>${nombre}</td>
        <td>${numeroApoderado}</td>
        <td class="operaciones">
        <i class="bi bi-file-earmark-text text-warning" onclick="openSalidaModal()" style="cursor: pointer; margin-right: 10px;" title="Autorización de salida"></i>
        <i class="bi bi-clipboard2-heart text-info" onclick="openTopicoModal()" style="cursor: pointer;" title="Ficha de atención"></i>
        <i class="bi bi-pencil-square text-primary" onclick="editarRegistro(this)" style="cursor: pointer; margin-right: 10px;"></i>
        <i class="bi bi-trash-fill text-danger" onclick="eliminarRegistro(this)" style="cursor: pointer;"></i>
        </td>
    `;

    nuevaFila.style.textAlign = "center";
    // Agregar la fila a la tabla
    tablaBody.appendChild(nuevaFila);

    // Cerrar el modal y limpiar el formulario
    document.getElementById("form-registro").reset();
    closeModal("modal-registrar");
}

function editarRegistro(elemento) {
    const fila = elemento.closest("tr");
    const columnas = fila.querySelectorAll("td");

    // Rellenar el formulario con los datos de la fila
    document.getElementById("fecha-registrar").value = columnas[1].textContent;
    document.getElementById("hora-salida").value = columnas[2].textContent;
    document.getElementById("aula").value = columnas[3].textContent;
    document.getElementById("apellidos").value = columnas[4].textContent;
    document.getElementById("nombre").value = columnas[5].textContent;
    document.getElementById("numero-apoderado").value = columnas[6].textContent;

    // Eliminar la fila actual para actualizar después
    fila.remove();

    // Abrir el modal de registro
    openRegistrarModal();
}

function eliminarRegistro(elemento) {
    const fila = elemento.closest("tr");
    fila.style.transition = "opacity 0.3s ease"; // Animación de desvanecimiento
    fila.style.opacity = "0";

    setTimeout(() => {
        fila.remove();
    }, 300); // Espera 300 ms para eliminar
}

function imprimirModal(modalId) {
    const modal = document.getElementById(modalId);

    let printContent = '';

    if (modalId === 'modal-salida') {
        // Capturar valores del formulario de Autorización de Salida
        const dni = document.getElementById("dni").value || "Sin especificar";
        const fecha = document.getElementById("fecha").value || "Sin especificar";
        const hora = document.getElementById("hora").value || "Sin especificar";
        const nombres = document.getElementById("nombres").value || "Sin especificar";
        const dniApoderado = document.getElementById("dni-apoderado").value || "Sin especificar";
        const celularApoderado = document.getElementById("celular-apoderado").value || "Sin especificar";
        const nombreApoderado = document.getElementById("nombre-apoderado").value || "Sin especificar";
        const motivo = document.getElementById("motivo").value || "Sin especificar";

        // Crear contenido para impresión
        printContent = `
            <div style="margin: 0 auto; width: 80%; padding: 20px; font-family: Arial, sans-serif;">
                <h3 style="text-align: center;">AUTORIZACIÓN DE SALIDA</h3>
                <p><strong>DNI:</strong> ${dni}</p>
                <p><strong>Fecha:</strong> ${fecha}</p>
                <p><strong>Hora:</strong> ${hora}</p>
                <p><strong>Nombres:</strong> ${nombres}</p>
                <p><strong>DNI Apoderado:</strong> ${dniApoderado}</p>
                <p><strong>Celular Apoderado:</strong> ${celularApoderado}</p>
                <p><strong>Nombre Apoderado:</strong> ${nombreApoderado}</p>
                <p><strong>Motivo:</strong> ${motivo}</p>
                <div style="text-align: center; margin-top: 50px;">
                    <div style="border-top: 1px solid #000; width: 200px; margin: 0 auto;"></div>
                    <span>FIRMA</span>
                </div>
            </div>
        `;
    } else if (modalId === 'modal-topico') {
        // Capturar valores del formulario de Ficha de Atención
        const fecha = document.getElementById("fecha").value || "Sin especificar";
        const dni = document.getElementById("dni").value || "Sin especificar";
        const alumno = document.getElementById("alumno").value || "Sin especificar";
        const sexo = document.getElementById("sexo").value || "Sin especificar";
        const ciclo = document.getElementById("ciclo").value || "Sin especificar";
        const aula = document.getElementById("aula").value || "Sin especificar";
        const edad = document.getElementById("edad").value || "Sin especificar";
        const direccion = document.getElementById("direccion").value || "Sin especificar";
        const nombreApoderado = document.getElementById("nombre-apoderado").value || "Sin especificar";
        const celular = document.getElementById("celular").value || "Sin especificar";
        const enfermedad = document.getElementById("enfermedad").value || "Sin especificar";

        // Crear contenido para impresión
        printContent = `
            <div style="margin: 0 auto; width: 80%; padding: 20px; font-family: Arial, sans-serif;">
                <h3 style="text-align: center;">FICHA DE ATENCIÓN</h3>
                <p><strong>Fecha:</strong> ${fecha}</p>
                <p><strong>DNI:</strong> ${dni}</p>
                <p><strong>Alumno:</strong> ${alumno}</p>
                <p><strong>Sexo:</strong> ${sexo}</p>
                <p><strong>Ciclo:</strong> ${ciclo}</p>
                <p><strong>Aula:</strong> ${aula}</p>
                <p><strong>Edad:</strong> ${edad}</p>
                <p><strong>Dirección:</strong> ${direccion}</p>
                <p><strong>Nombre del Apoderado:</strong> ${nombreApoderado}</p>
                <p><strong>Número de Celular:</strong> ${celular}</p>
                <p><strong>Padece alguna enfermedad:</strong> ${enfermedad}</p>
                <div style="text-align: center; margin-top: 50px;">
                    <div style="border-top: 1px solid #000; width: 200px; margin: 0 auto;"></div>
                    <span>FIRMA</span>
                </div>
            </div>
        `;
    }

    // Capturar los estilos actuales
    const styles = Array.from(document.styleSheets)
        .map((styleSheet) => {
            try {
                return Array.from(styleSheet.cssRules)
                    .map((rule) => rule.cssText)
                    .join('');
            } catch (e) {
                return ''; // Ignorar errores al acceder a hojas de estilo externas
            }
        })
        .join('');

    // Preparar el contenido para impresión
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <html>
        <head>
            <title>Impresión</title>
            <style>
                ${styles} /* Incluir estilos */
                body { margin: 0; padding: 20px; font-family: Arial, sans-serif; }
            </style>
        </head>
        <body>
            ${printContent}
        </body>
        </html>
    `);

    // Imprimir y cerrar la ventana de impresión
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
}

function openSalidaModal() {
    const modal = document.getElementById('modal-salida');
    modal.style.display = 'flex';

    // Opcional: Limpiar los campos al abrir el modal
    document.getElementById('dni').value = '';
    document.getElementById('fecha').value = '';
    document.getElementById('hora').value = '';
    document.getElementById('nombres').value = '';
    document.getElementById('dni-apoderado').value = '';
    document.getElementById('celular-apoderado').value = '';
    document.getElementById('nombre-apoderado').value = '';
    document.getElementById('motivo').value = '';
}



function openTopicoModal() {
    const modal = document.getElementById('modal-topico');
    modal.style.display = 'flex';

    // Limpiar los campos al abrir el modal (opcional)
    document.getElementById('fecha').value = '';
    document.getElementById('dni').value = '';
    document.getElementById('alumno').value = '';
    document.getElementById('sexo').value = 'Masculino'; // Valor predeterminado
    document.getElementById('ciclo').value = '';
    document.getElementById('aula').value = '';
    document.getElementById('edad').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('nombre-apoderado').value = '';
    document.getElementById('celular').value = '';
    document.getElementById('enfermedad').value = '';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}