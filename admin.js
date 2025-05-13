
function generateKey() {
  const keyName = document.getElementById('keyName').value;
  const expiry = document.getElementById('expiry').value;
  // Firebase key generation logic here
  alert(`Generated key: ${keyName} expiring on ${expiry}`);
}
