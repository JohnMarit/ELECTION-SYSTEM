// Function to switch between sections
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      section.classList.remove('active');
    });
  
    // Show the selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.classList.add('active');
    }
  
    // Highlight active menu item
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach((item) => item.classList.remove('active'));
    event.target.classList.add('active');
  }
  
  // Sample functions (to be replaced with actual logic)
  function addVoter() {
    alert('Voter added!');
  }
  
  function searchVoter() {
    alert('Voter searched!');
  }
  
  const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission
  
  const username = loginForm.querySelector("input[type='text']").value;
  const password = loginForm.querySelector("input[type='password']").value;

  if (username === "Admin" && password === "123456789") {
    alert("Login successful!");
    // Redirect to the dashboard or load the dashboard view
    window.location.href = "dashboard.html"; // Example redirect
  } else {
    alert("Invalid username or password. Please try again.");
  }
});


// Logout Functionality
function logout() {
    // Show confirmation dialog
    const confirmed = confirm("Are you sure you want to logout?");
    
    if (confirmed) {
      // Redirect to login page
      window.location.href = "index.html";
    }
  }
  
  

  document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    if (username === "Admin" && password === "1234567890") {
      localStorage.setItem("isLoggedIn", "true"); // Mark user as logged in
      window.location.href = "dashboard.html"; // Redirect to the dashboard
    } else {
      alert("Invalid login credentials!");
    }
  });




  document.getElementById("logoutButton").addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn"); // Remove login state
    alert("You have been logged out.");
    window.location.href = "index.html"; // Redirect to the login page
  });

  

  document.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
  
    if (!isLoggedIn) {
      // If not logged in, redirect to the login page
      window.location.href = "index.html";
    }
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    // Disable caching of this page
    if (!localStorage.getItem("isLoggedIn")) {
      alert("You are not logged in!");
      window.location.href = "index.html";
    }
  
    // Prevent back navigation
    window.onpopstate = () => {
      if (!localStorage.getItem("isLoggedIn")) {
        window.location.href = "index.html";
      }
    };
  });
  
  