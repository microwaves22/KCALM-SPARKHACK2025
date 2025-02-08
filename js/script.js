// Toggling between login and sign up forms
function toggleForm() {
    var loginForm = document.getElementById('login-form');
    var signupForm = document.getElementById('signup-form');
    
    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        signupForm.style.display = "block";
    }
}

// Handle the Sign Up form submission
function submitSignUp() {
    // Get the values from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Basic validation (ensure fields aren't empty)
    if (name && email && password) {
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);

        //  use data for further processing or smth.
        alert("Sign Up Successful!");

        // Reset the form fields
        document.getElementById('signup-form').reset();
    } else {
        alert("Please fill in all fields.");
    }
}

function continueAsGuest() {
    window.location.href = "filterpage.html";
}
