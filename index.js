const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Simple authentication logic
  if (username === "admin" && password === "admin) {
    window.open("newpage.html", "_self");
  } else {
    alert("Invalid username or password");
  }
});
