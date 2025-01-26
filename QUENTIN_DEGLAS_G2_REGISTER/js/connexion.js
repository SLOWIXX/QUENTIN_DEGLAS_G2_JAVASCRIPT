document.addEventListener("DOMContentLoaded", () => {
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 
    }

    function validateInput(input, condition, validMessage, invalidMessage, messageElement) {
        if (condition(input.value.trim())) { 
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
            console.log("Inscription réussie !");
        }
    };

    document.getElementById("submitRegisterForm").addEventListener("click", (event) => {
        event.preventDefault();
        registerUser();
    });
});
