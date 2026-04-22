/********f************
    
    Project 4 Final Project
    Name: Rosie Guillen
    Date: April 18, 2026

*********************/

function validate(e) {
    hideErrors();

    // If ANY errors exist → stop form submission
    if (formHasErrors()) {
        e.preventDefault();
        return false;
    }

    return true;
}

function resetForm(e) {
    if (confirm("Clear Form?")) {
        hideErrors();
        return true;
    }

    e.preventDefault();
    return false;
}

function formHasErrors() {
    let errorFlag = false;

    // Required fields
    let requiredFields = ["fullname", "email", "phone"];

    for (let i = 0; i < requiredFields.length; i++) {
        let field = document.getElementById(requiredFields[i]);

        if (!formFieldHasInput(field)) {
            let error = document.getElementById(requiredFields[i] + "_error");

            if (error) {
                error.style.display = "block";
            }

            if (!errorFlag) {
                field.focus();
                field.select();
            }

            errorFlag = true;
        }
    }


    let emailField = document.getElementById("email");
    let emailValue = emailField.value.trim();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue !== "" && !emailRegex.test(emailValue)) {
        let formatError = document.getElementById("emailformat_error");

        if (formatError) {
            formatError.style.display = "block";
        }

        if (!errorFlag) {
            emailField.focus();
            emailField.select();
        }

        errorFlag = true;
    }

    if (emailValue !== "" && !emailRegex.test(emailValue)) {
        let formatError = document.getElementById("emailformat_error");

        if (formatError) {
            formatError.style.display = "block";
        }

        if (!errorFlag) {
            emailField.focus();
            emailField.select();
        }

        errorFlag = true;
    }

    return errorFlag;
}

function formFieldHasInput(field) {
    return field.value != null && field.value.trim() !== "";
}

function hideErrors() {
    let errors = document.getElementsByClassName("error");

    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}

function load() {
    let form = document.getElementById("contactYou");

    if (form) {
        form.addEventListener("submit", validate);
        form.addEventListener("reset", resetForm);
    }
}

document.addEventListener("DOMContentLoaded", load);