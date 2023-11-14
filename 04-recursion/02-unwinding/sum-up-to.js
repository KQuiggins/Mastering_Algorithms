function sumUpTo(n) {
    if (n <= 1) {
        return Math.max(0, n);
    };
    return n + sumUpTo(n - 1);
}

module.exports = sumUpTo;