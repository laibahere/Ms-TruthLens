function toggleForm() {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const formTitle = document.getElementById("form-title");
    const toggleBtn = document.querySelector(".toggle-btn");
  
    loginForm.classList.toggle("active");
    signupForm.classList.toggle("active");
  
    if (loginForm.classList.contains("active")) {
      formTitle.textContent = "Login to Truth Lens";
      toggleBtn.textContent = "Register for Signup";
    } else {
      formTitle.textContent = "Create an Account";
      toggleBtn.textContent = "Switch to Login";
    }
  }
  