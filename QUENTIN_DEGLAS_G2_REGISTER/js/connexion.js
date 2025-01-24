window.onload = () => {
    const intro = document.getElementById("intro");
};

document.addEventListener("DOMContentLoaded", () => {
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function validateInput(input, condition, validMessage, invalidMessage, messageElement) {
        if (condition(input.value.trim())) {   // trim = enlever les espaces debut et fin
            input.classList.remove("error");
            input.classList.add("valid");
            messageElement.textContent = validMessage;
            messageElement.className = "valid";
            return true;
        } else {
            input.classList.add("error");
            input.classList.remove("valid");
            messageElement.textContent = invalidMessage;
            messageElement.className = "invalid";
            return false;
        }
    }

    const saveUser = (pseudo, email, password) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        if (users.some((user) => user.email === email)) {
            return false;
        }
        users.push({ pseudo, email, password, favoris: [] });
        localStorage.setItem("users", JSON.stringify(users));
        return true;
    };

    const registerUser = () => {
        const pseudoInput = document.getElementById("usernameRegister");
        const emailInput = document.getElementById("mailRegister");
        const passwordInput = document.getElementById("passwordRegister");

        const usernameMessage = document.getElementById("usernameMessage");
        const emailMessage = document.getElementById("emailMessage");
        const passwordMessage = document.getElementById("passwordMessage");

        const isPseudoValid = validateInput(
            pseudoInput,
            (value) => value.length >= 3,
            "Pseudo correct",
            "Le pseudo doit avoir au moins 3 caractères",
            usernameMessage
        );

        const isEmailValid = validateInput(
            emailInput,
            isValidEmail,
            "Adresse email valide",
            "Adresse email invalide",
            emailMessage
        );

        const isPasswordValid = validateInput(
            passwordInput,
            (value) => value.length >= 6,
            "Mot de passe valide",
            "Le mot de passe doit avoir au moins 6 caractères",
            passwordMessage
        );

        if (isPseudoValid && isEmailValid && isPasswordValid) {
            if (saveUser(pseudoInput.value, emailInput.value, passwordInput.value)) {
                usernameMessage.textContent = "Inscription réussie !";
                usernameMessage.className = "valid";
            } else {
                emailMessage.textContent = "L'utilisateur existe déjà.";
                emailMessage.className = "invalid";
            }
        }
    };

    document.getElementById("submitRegisterForm").addEventListener("click", (event) => {
        event.preventDefault();
        registerUser();
    });
});