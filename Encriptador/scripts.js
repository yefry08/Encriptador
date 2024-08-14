function encryptText() {
    let inputText = document.getElementById('inputText').value;
    let encryptedText = '';
    
    for (let i = 0; i < inputText.length; i++) {
        let char = inputText.charCodeAt(i);
        // Skip uppercase and special characters
        if (char >= 97 && char <= 122) {
            encryptedText += String.fromCharCode((char - 97 + 3) % 26 + 97); // Caesar Cipher
        } else {
            encryptedText += inputText[i];
        }
    }

    document.getElementById('outputText').value = encryptedText;
}

function decryptText() {
    let inputText = document.getElementById('outputText').value;
    let decryptedText = '';
    
    for (let i = 0; i < inputText.length; i++) {
        let char = inputText.charCodeAt(i);
        if (char >= 97 && char <= 122) {
            decryptedText += String.fromCharCode((char - 97 - 3 + 26) % 26 + 97);
        } else {
            decryptedText += inputText[i];
        }
    }

    document.getElementById('inputText').value = decryptedText;
}

function copyText() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand("copy");
    alert("Copied to clipboard!");
}
