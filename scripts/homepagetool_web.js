// Función para actualizar el año del copyright
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.querySelector('footer p');
    copyrightElement.textContent = `© ${currentYear} My Web Project. All rights reserved.`;
}

// Función para mostrar la hora actual
function showCurrentTime() {
    const timeElement = document.createElement('div');
    timeElement.id = 'current-time';
    timeElement.style.position = 'fixed';
    timeElement.style.bottom = '10px';
    timeElement.style.right = '10px';
    timeElement.style.fontSize = '12px';
    document.body.appendChild(timeElement);

    function updateTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        timeElement.textContent = `Hora actual: ${hours}:${minutes}:${seconds}`;
    }

    updateTime();
    setInterval(updateTime, 1000);
}

// Llamar a las funciones después de que la página haya cargado
document.addEventListener('DOMContentLoaded', () => {
    updateCopyrightYear();
    showCurrentTime();
});
