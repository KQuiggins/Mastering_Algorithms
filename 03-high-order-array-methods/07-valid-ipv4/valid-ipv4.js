const isValidIPv4 = (ip) => {
    const ipArray = ip.split('.');
    if (ipArray.length !== 4) return false;
    return ipArray.every((num) => {
        if (num.length > 1 && num[0] === '0') return false;
        if (num.length > 3) return false;
        if (num < 0 || num > 255) return false;
        return true;
    });
};

module.exports = isValidIPv4;
