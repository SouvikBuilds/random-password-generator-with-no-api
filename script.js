document.addEventListener("DOMContentLoaded", function () {
    const generatePasswordButton = document.getElementById("generate")
    const copyToClipboardButton = document.getElementById("copy-clipboard")

    const passWordBox = document.getElementById("generated-password")
    let length = 12

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowercase = "abcdefghijklmnopqrstuvwxyz"
    const number = "0123456789"
    const symbol = "!@$%^&*(){}[]:;'<>,./|+-="

    const allChars = upperCase + lowercase + number + symbol
    function generatePassword() {
        let password = ""
        password += upperCase[Math.floor(Math.random() * upperCase.length)]
        password += lowercase[Math.floor(Math.random() * lowercase.length)]
        password += number[Math.floor(Math.random() * number.length)]
        password += upperCase[Math.floor(Math.random() * symbol.length)]

        while (length > password.length) {
            password += allChars[Math.floor(Math.random() * allChars.length)]
        }

        passWordBox.value = password
    }

    function copyToClipboard() {
        passWordBox.select()
        document.execCommand("copy")
    }

    generatePasswordButton.addEventListener("click", generatePassword)
    copyToClipboardButton.addEventListener("click", copyToClipboard)
})