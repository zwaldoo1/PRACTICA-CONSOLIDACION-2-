// Función para enviar el formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    console.log(`Nombre: ${name}, Email: ${email}, Mensaje: ${message}`);
    // Aquí puedes agregar la lógica para enviar el formulario
});