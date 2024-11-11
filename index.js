const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Simple authentication logic
  if (username === "admin" && password === "admin") {
    // Redirect to newpage.html or handle successful login
    window.location.href = "newpage.html";
  } else {
    alert("Invalid username or password");
  }
});
