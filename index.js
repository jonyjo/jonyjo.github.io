// Ensure that loginForm is correctly referenced
const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the form from submitting

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Simple authentication logic
  if (username === "admin" && password === "admin") {
    // Redirect to newpage.html if credentials are correct
    window.location.href = "newpage.html";
  } else {
    // Show an alert if the credentials are invalid
    alert("Invalid username or password");
  }
});
