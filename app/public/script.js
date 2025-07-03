document.getElementById('getInfoBtn').addEventListener('click', async () => {
    const apiInfoDiv = document.getElementById('apiInfo');
    apiInfoDiv.textContent = 'Cargando...';
    try {
        const response = await fetch('/api/info');
        const data = await response.json();
        apiInfoDiv.textContent = `API dice: "${data.message}" (Versión: ${data.version}, Entorno: ${data.environment}, Secreto: ${data.secret_status})`;
    } catch (error) {
        console.error('Error al obtener información de la API:', error);
        apiInfoDiv.textContent = 'Error al cargar la información de la API.';
    }
});