function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm_password').value;

    // Basic password matching validation
    if (password !== confirm_password) {
        alert("Passwords do not match");
        return;
    }

    // You can add more validation logic as needed

    // If all validation passes, you can submit the form
    document.getElementById('accountForm').submit();
}
