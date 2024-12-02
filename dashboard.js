document.addEventListener("DOMContentLoaded", () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
  
    if (!isLoggedIn) {
      // If not logged in, redirect to the login page
      window.location.href = "index.html";
    }
  });
  