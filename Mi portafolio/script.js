
// Manejar el envío del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Aquí podrías agregar código para enviar el formulario, por ejemplo usando Fetch API
    console.log('Nombre:', name);
    console.log('Correo Electrónico:', email);
    console.log('Mensaje:', message);

    // Mostrar un mensaje de éxito
    alert('Gracias por tu mensaje, ' + name + '! Te respondere pronto');
});
