document.addEventListener("DOMContentLoaded", function() {
  const togglePassword = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('myinput');
  const showPasswordCheckbox = document.getElementById('showPassword');
  
  togglePassword.addEventListener('click', function() {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      togglePassword.classList.toggle('fa-eye-slash');
      togglePassword.classList.toggle('fa-eye');
      showPasswordCheckbox.checked = (type === 'text');
  });

  showPasswordCheckbox.addEventListener('change', function() {
      const type = this.checked ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      togglePassword.classList.toggle('fa-eye-slash', type === 'text');
      togglePassword.classList.toggle('fa-eye', type === 'password');
  });
});
