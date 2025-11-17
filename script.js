// --- Modo Oscuro/Claro ---
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Cargar el tema guardado en localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode') {
        themeToggleBtn.textContent = '☀️';
    }
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️';
        localStorage.setItem('theme', 'dark-mode'); // Guardar preferencia
    } else {
        themeToggleBtn.textContent = '🌙';
        localStorage.setItem('theme', 'light'); // Guardar preferencia
    }
});

// --- Manejo del Formulario de Contacto ---
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que la página se recargue

    // En una aplicación real, aquí enviarías los datos a un servidor.
    // Por ahora, solo mostraremos un mensaje de éxito.
    alert('¡Gracias por tu mensaje! Te contactaré pronto.');
    contactForm.reset(); // Limpia el formulario
});