// toggles between sign up and login
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

// function for sign up submission
function submitSignUp() {
    // Get the values from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // makes sure fields are not empty
    if (name && email && password) {
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);

        // Store data in localStorage (you can modify this to store it properly)
        var user = {
            name: name,
            email: email,
            password: password
        };
        localStorage.setItem("user", JSON.stringify(user));

        // Inform the user that sign-up was successful
        alert("Sign Up Successful!");

        // Reset the form - not working
        // document.getElementById('signup-form').reset();

        window.location.href = "homepage.html"; // Redirect to local places filters page
    } else {
        alert("Please fill in all fields.");
    }
}

// function for login submission
function submitLogin() {
    // Get the values from the form
    var username = document.querySelector('#login-form input[type="text"]').value;
    var password = document.querySelector('#login-form input[type="password"]').value;

    // Retrieve user data from localStorage
    var storedUser = JSON.parse(localStorage.getItem("user"));

    // Validate login
    if (storedUser && storedUser.email === username && storedUser.password === password) {
        // Successful login
        alert("Login Successful!");
        window.location.href = "localplaces.html"; // Redirect to local places filters page
    } else {
        alert("Invalid username or password.");
    }
}

// function to continue as a guest
function continueAsGuest() {
    window.location.href = "localplaces.html";
}

window.onload = function() {
    // Check if the user is already stored in localStorage
    var storedUser = JSON.parse(localStorage.getItem("user"));
    
    if (storedUser) {
        // welcomes back user only in console tho
        console.log("Welcome back, " + storedUser.name);
        window.location.href = "localplaces.html"; // Redirect to localplaces
    }
};

// toggles the visibility of the Account dropdown menu
function toggleAccountDropdown() {
    var dropdown = document.getElementById("account-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Log out the user (remove from localStorage)
function logOut() {
    // Clear the user data from localStorage
    localStorage.removeItem("user");

    // redirect to the homepage 
    window.location.href = "homepage.html";
}