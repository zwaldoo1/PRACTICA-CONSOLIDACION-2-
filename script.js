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
 // Obtener el modal
var modal = document.getElementById("myModal");

// Obtener el botón que abre el modal
var btn = document.getElementById("myBtn");

// Obtener el elemento <span> que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el botón, se abre el modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Cuando el usuario hace clic en <span> (x), se cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal, se cierra
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

    // hide the message after 3 seconds
    setTimeout(function() {
      messageContainer.style.display = 'none';
    }, 3000);
  });