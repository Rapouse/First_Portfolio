// Toggle Icon Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Scroll Sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    // Sticky Header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // Remove Toggle
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Validate Form
function validate() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    var nameError = document.getElementById('name-error');
    var emailError = document.getElementById('email-error');
    var messageError = document.getElementById('message-error');

    var full = true; // Se verdadeiro todos os campos foram preenchidos 

    if (name === '') {
        nameError.textContent = 'Por favor, digite seu nome.';
        nameError.style.display = 'block';
        full = false; // Se falso pelo menos um campo não foi preenchido 
    } else {
        nameError.style.display = 'none';
    }

    if (email === '') {
        emailError.textContent = 'Por favor, digite seu e-mail.';
        emailError.style.display = 'block';
        full = false;
    } else if (!validateEmail(email)) {
        emailError.textContent = 'Por favor, digite um e-mail válido.';
        emailError.style.display = 'block';
        full = false;
    } else {
        emailError.style.display = 'none';
    }

    if (message === '') {
        messageError.textContent = 'Por favor, digite sua mensagem.';
        messageError.style.display = 'block';
        full = false;
    } else {
        messageError.style.display = 'none';
    }

    // Keypress 
    document.getElementById('name').addEventListener('input', function () {
        nameError.style.display = 'none';
    });

    document.getElementById('email').addEventListener('input', function () {
        emailError.style.display = 'none';

    });

    document.getElementById('message').addEventListener('input', function () {
        messageError.style.display = 'none';
    });

    if (full) {
        // Gravar os cookies codificados
        document.cookie = `name=${encodeURIComponent(name)}`;
        document.cookie = `email=${encodeURIComponent(email)}`;
        document.cookie = `message=${encodeURIComponent(message)}`;
    
        // Enviar o formulário validado
        return true;
      }
    
      // Se algum campo não foi preenchido corretamente, não enviar o formulário
      return false;
    

}

// Validate Regular Expression
function validateEmail(email) {
    var regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}
