const form = document.getElementById('registrationForm');
const modal = document.getElementById('successModal');
const closeBtn = document.querySelector('.close');
const modalData = document.getElementById('modalData');


const nameError = document.getElementById('nameError');
const mobileError = document.getElementById('mobileError');

const mobileInput = document.getElementById('mobile');

mobileInput.addEventListener('keypress', function (e) {
  if (!/[0-9]/.test(e.key)) {
    e.preventDefault();
  }
});

mobileInput.addEventListener('input', function () {
  this.value = this.value.replace(/[^0-9]/g, '');
});

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const regno = document.getElementById('regno').value.trim();
  const institute = document.getElementById('institute').value.trim();
  const mobile = document.getElementById('mobile').value.trim();
  const stream = document.getElementById('stream').value;

  let valid = true;

  if (name.length < 3 || name.length > 100) {
    nameError.textContent = "Name must be 3–100 characters.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  const mobilePattern = /^[6-9][0-9]{9}$/;
  if (!mobilePattern.test(mobile)) {
    mobileError.textContent = "Enter a valid 10-digit Indian mobile number.";
    valid = false;
  } else {
    mobileError.textContent = "";
  }

  if (!valid) return;

  modalData.innerHTML = `
    <strong>Name:</strong> ${name}<br>
    <strong>Reg No:</strong> ${regno}<br>
    <strong>Institute:</strong> ${institute}<br>
    <strong>Mobile:</strong> ${mobile}<br>
    <strong>Stream:</strong> ${stream}
  `;

  modal.style.display = 'flex';
  form.reset();
});

closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => {
  if (e.target === modal) modal.style.display = 'none';
});
