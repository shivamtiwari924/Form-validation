// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.querySelector('form');
//     form.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent the form from submitting by default

//         // Validate email field
//         const emailField = document.getElementById('emailID');
//         if (isValidEmail(emailField.value.trim())) {
//             alert('Please enter a valid email address');
//             return;
//         }

//         // Validate password field
//         const passwordField = document.getElementById('password');
//         if (passwordField.value.length < 8) {
//             alert('Password must be at least 8 characters long');
//             return;
//         }

//         // Validate alpha field
//         const alphaField = document.getElementById('alpha');
//         if (!isValidAlpha(alphaField.value)) {
//             alert('Alpha field must contain only alphabetic characters');
//             return;
//         }

//         // Validate date picker field
//         const datePickerField = document.getElementById('datepicker');
//         if (!isValidDate(datePickerField.value)) {
//             alert('Please select a valid date');
//             return;
//         }

//         // Add validation for other fields as needed...

//         // If all validations pass, you can submit the form
//         alert('Form submitted successfully!');
//         form.reset(); // Clear the form fields
//     });
// });

// function isValidEmail(email) {
//     // Basic email validation using a regular expression
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailPattern.test(email);
// }

// function isValidAlpha(alpha) {
//     // Basic alphabetic characters validation using a regular expression
//     const alphaPattern = /^[a-zA-Z]+$/;
//     return alphaPattern.test(alpha);
// }

// function isValidDate(date) {
//     // Basic date validation
//     return !isNaN(Date.parse(date));
// }




var mailid = document.getElementById("emailid");
var emailvalidmsg = document.getElementById("emailvalidation");


function validateEmail() {
    if (isValidEmail(mailid.value.trim())) {
        emailvalidmsg.innerHTML = "valid"
    }
    else {
        emailvalidmsg.innerHTML = "Invalid";
    }
}

function isValidEmail(mailid) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(mailid);
}

function checkData(){
    validateEmail();
}