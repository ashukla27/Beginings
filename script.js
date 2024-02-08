// Simulate login and signup actions (Replace this with your actual authentication logic)

document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    // Add your authentication logic here
    // Example: Check if the username and password are valid
    if (username === "user" && password === "password") {
        alert("Login successful!");
    } else {
        alert("Login failed. Please check your credentials.");
    }
});

document.getElementById("signup-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;
    // Add your signup logic here
    // Example: Create a new user account with the provided username and password
    alert("Account created successfully!");
    document.getElementById("new-username").value = "";
    document.getElementById("new-password").value = "";
});
