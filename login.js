document.getElementById("btn-submit").addEventListener("click", function (event) {
  event.preventDefault();
  // setup email
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  // setup password
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  if (email === "rimon200717@gmail.com" && password === "Rimon12345") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid Information");
  }
});
