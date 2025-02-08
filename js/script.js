// Toggles between sign-up and login forms
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

// Sign-up function
function submitSignUp() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (name && email && password) {
        var user = {
            name: name,
            email: email,
            password: password
        };

        localStorage.setItem("user", JSON.stringify(user));

        alert("Sign Up Successful!");

        // Reset the form properly
        document.getElementById("signup-form").reset();

        window.location.href = "homepage.html"; 
    } else {
        alert("Please fill in all fields.");
    }
}

// Login function
function submitLogin() {
    var username = document.querySelector('#login-form input[type="text"]').value;
    var password = document.querySelector('#login-form input[type="password"]').value;

    if (!username || !password) {
        alert("Please enter your email and password.");
        return;
    }

    var storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === username && storedUser.password === password) {
        alert("Login Successful!");
        window.location.href = "localplaces.html";
    } else {
        alert("Invalid username or password.");
    }
}

// Continue as guest
function continueAsGuest() {
    window.location.href = "localplaces.html";
}

// Check login status when `account.html` loads
window.onload = function() {
    var storedUser = JSON.parse(localStorage.getItem("user"));
    var welcomeMessage = document.getElementById("welcome-message");

    if (welcomeMessage) {
        welcomeMessage.textContent = storedUser ? `Welcome back, ${storedUser.name}` : "Not signed in";
    }
};

// Toggles the account dropdown menu
function toggleAccountDropdown() {
    var dropdown = document.getElementById("account-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Close dropdown if clicked outside
document.addEventListener("click", function(event) {
    var dropdown = document.getElementById("account-dropdown");
    var accountBtn = document.getElementById("account-button");

    if (dropdown && accountBtn && !dropdown.contains(event.target) && event.target !== accountBtn) {
        dropdown.style.display = "none";
    }
});

// Log out user
function logOut() {
    localStorage.removeItem("user");
    window.location.href = "homepage.html";
}