// Funcția pentru a schimba secțiunile de pe pagină
function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.add('hidden');
  });

  const selectedSection = document.getElementById(sectionId);
  selectedSection.classList.remove('hidden');
}

// Funcția pentru a selecta mașina
function selectCar(carModel) {
  // Afișează formularul de rezervare
  const carForm = document.getElementById('carForm');
  carForm.classList.remove('hidden');

  // Actualizează titlul pentru mașina selectată
  const title = document.querySelector('#carForm h3');
  title.textContent = `Rezervă acum o cursă cu ${carModel}`;
}

// Tratează formularul de rezervare
document.getElementById('reservationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const pickupLocation = document.getElementById('pickupLocation').value;
  const destination = document.getElementById('destination').value;
  const pickupDate = document.getElementById('pickupDate').value;
  const pickupTime = document.getElementById('pickupTime').value;
  const returnTime = document.getElementById('returnTime').value;

  alert(`Rezervare făcută cu succes!\nDetalii:\nLocalitate plecare: ${pickupLocation}\nDestinație: ${destination}\nData plecare: ${pickupDate}\nOra plecare: ${pickupTime}\nOra întoarcere: ${returnTime}`);
});

// Funcții pentru logare și înregistrare
function showLoginForm() {
  showSection('login');
}

function showRegistrationForm() {
  showSection('registration');
}

// Funcția pentru a valida emailul și parola
function validateEmail(email) {
  var emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  return emailPattern.test(email);
}

function validatePassword(password) {
  var passwordPattern = /^(?=(?:.*[a-z]){3,})(?=.*[A-Z])(?=(?:.*\d){4,})[A-Za-z\d]+$/;
  return passwordPattern.test(password);
}

// Tratează formularul de logare
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  if (!validateEmail(email)) {
    alert("Email-ul trebuie să fie în formatul ...@gmail.com");
    return;
  }

  if (!validatePassword(password)) {
    alert("Parola trebuie să conțină cel puțin o literă mare, trei litere mici și patru cifre.");
    return;
  }

  alert(`Logare reușită!\nEmail: ${email}\nParolă: ${password}`);
});

// Tratează formularul de înregistrare
document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;
  const confirmPassword = document.getElementById('regConfirmPassword').value;

  if (password !== confirmPassword) {
    alert("Parolele nu coincid!");
    return;
  }

  if (!validateEmail(email)) {
    alert("Email-ul trebuie să fie în formatul ...@gmail.com");
    return;
  }

  if (!validatePassword(password)) {
    alert("Parola trebuie să conțină cel puțin o literă mare, trei litere mici și patru cifre.");
    return;
  }

  alert(`Înregistrare reușită!\nEmail: ${email}\nParolă: ${password}`);
});
