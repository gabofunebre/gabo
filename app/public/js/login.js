function loginAsGuest() {
  document.getElementById('userField').value = 'guest';
  document.getElementById('loginForm').submit();
}

function showAdminPassword() {
  document.getElementById('userField').value = 'Gabriel';
  document.getElementById('passwordGroup').classList.remove('d-none');
  document.getElementById('submitBtn').classList.remove('d-none');
}
