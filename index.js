document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (username === "Admin" && password === "123456789") {
      localStorage.setItem("isLoggedIn", "true"); // Mark user as logged in
      window.location.href = "dashboard.html"; // Redirect to the dashboard
    } else {
      alert("Invalid login credentials!");
    }
  });
  