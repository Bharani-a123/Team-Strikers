document.addEventListener("DOMContentLoaded", function() {
    const signInToggle = document.getElementById("signInToggle");
    const signUpToggle = document.getElementById("signUpToggle");
    const signInForm = document.getElementById("signInForm");
    const signUpForm = document.getElementById("signUpForm");
    const goToSignUp = document.getElementById("goToSignUp");
    const goToSignIn = document.getElementById("goToSignIn");
  
    // Show Sign In form by default
    signInForm.style.display = "block";
    signUpForm.style.display = "none";
    signInToggle.classList.add("active");
  
    // Toggle to Sign In form
    signInToggle.addEventListener("click", function() {
      signInForm.style.display = "block";
      signUpForm.style.display = "none";
      signInToggle.classList.add("active");
      signUpToggle.classList.remove("active");
    });
  
    // Toggle to Sign Up form
    signUpToggle.addEventListener("click", function() {
      signUpForm.style.display = "block";
      signInForm.style.display = "none";
      signUpToggle.classList.add("active");
      signInToggle.classList.remove("active");
    });
  
    // Switch to Sign Up form when clicking the link on Sign In form
    goToSignUp.addEventListener("click", function() {
      signUpForm.style.display = "block";
      signInForm.style.display = "none";
      signUpToggle.classList.add("active");
      signInToggle.classList.remove("active");
    });
  
    // Switch to Sign In form when clicking the link on Sign Up form
    goToSignIn.addEventListener("click", function() {
      signInForm.style.display = "block";
      signUpForm.style.display = "none";
      signInToggle.classList.add("active");
      signUpToggle.classList.remove("active");
    });
  });
  
  