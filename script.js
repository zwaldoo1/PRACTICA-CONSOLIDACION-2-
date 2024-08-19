// Función para enviar el formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    console.log(`Nombre: ${name}, Email: ${email}, Mensaje: ${message}`);
    // Aquí puedes agregar la lógica para enviar el formulario
});document.querySelector('.float-icon').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
document.getElementById('cv-download').addEventListener('click', function(event) {
    event.preventDefault(); // prevent the link from following its href
    var messageContainer = document.getElementById('message-container');
    messageContainer.textContent = 'Disponible próximamente';
    messageContainer.style.display = 'block';
    
    // hide the message after 3 seconds
    setTimeout(function() {
      messageContainer.style.display = 'none';
    }, 3000);
  });