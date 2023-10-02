function validateEmail(email) {
    if (email.indexOf('@') === -1) {
        return false;
    }

    const [localPart, domain] = email.split('@');

    if (localPart.length === 0 || domain.length < 3) {
        return false;
    }

    const domainExtension = domain.split('.');

    if (domainExtension.length < 2 || domainExtension[1] < 2) {
        return false;
    }

    return true;
}


// function validateEmail(email) {
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex.test(email);
// }

module.exports = validateEmail;
