const CryptoJS = require("crypto-js");


//The Function Below To Encrypt Text
const req = {

    body: {
        email: 'teddyoweh',
        username: "ted",
        firstname: 'red'
    }
}

function makecode() {
    const encrypt1 = (salt, text) => {
        const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
        const byteHex = (n) => ("0" + Number(n).toString(16)).substr(-2);
        const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);

        return text
            .split("")
            .map(textToChars)
            .map(applySaltToChar)
            .map(byteHex)
            .join("");
    };
    const encrypt = (text) => {
        const passphrase = "U2FsdGVkX1+cJV13zBmYQeuw8mIkhLfPpwZkfkCg+iVYfOglBsKPDDTmexyNlXIT"
        return CryptoJS.AES.encrypt(text, passphrase).toString();
    };
    const numb = Math.floor(Math.random() * 9999999)
    const stuff = encrypt1('U2FsdGVkX1+cJV13zBmYQeuw8mIkhLfPpwZkfkCg', numb.toString())

    const code = encrypt('U2FsdGVkX1+cJV13zBmYQeuw8mIkhLfPpwZkfkCg+iVYfOglBsKPDDTmexyNlXIT' + req.body.email)
    const code1 = encrypt(req.body.email + code)
    const code2 = encrypt(req.body.username + code1)
    const code3 = encrypt(req.body.firstname + code2)
    const maincode = encrypt(req.body.email + stuff)
    return encrypt(maincode)
}
console.log(makecode())