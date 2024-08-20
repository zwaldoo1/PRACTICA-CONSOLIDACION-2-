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
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // hide the message after 3 seconds
    setTimeout(function() {
      messageContainer.style.display = 'none';
    }, 3000);
  });
  // Desplazamiento suave
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animaciones en el desplazamiento
const elements = document.querySelectorAll('.animate-on-scroll');

const options = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

elements.forEach(element => {
    observer.observe(element);
});

// Galería de imágenes
document.querySelectorAll('.project-card img').forEach(img => {
    img.addEventListener('click', function() {
        const modal = document.getElementById('modal');
        const modalImg = document.getElementById('modalImg');
        modal.style.display = "block";
        modalImg.src = this.src;

        modal.querySelector('.close').onclick = function() {
            modal.style.display = "none";
        };
    });
});

// Validación en tiempo real del formulario
document.getElementById('contactForm').addEventListener('input', function() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');

    if (name.value.length < 3) {
        name.setCustomValidity("El nombre debe tener al menos 3 caracteres.");
    } else {
        name.setCustomValidity("");
    }

    if (!/\S+@\S+\.\S+/.test(email.value)) {
        email.setCustomValidity("Por favor, ingresa un email válido.");
    } else {
        email.setCustomValidity("");
    }
});

// Notificaciones emergentes
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Te responderemos pronto.');
});

// Temporizador o cuenta regresiva
function startCountdown(duration) {
    let timer = duration, seconds;
    const countdownElement = document.getElementById('countdown');

    const interval = setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;

        countdownElement.textContent = seconds;

        if (--timer < 0) {
            clearInterval(interval);
            countdownElement.textContent = "¡Tiempo terminado!";
        }
    }, 1000);
}

startCountdown(60);

// Efecto parallax
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const background = document.querySelector('#about');
    background.style.backgroundPositionY = `${scrolled * 0.5}px`;
});
