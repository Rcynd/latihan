function cetakAngka(n) {
    // base Case
    if (n == 0) {
        return
    }
    // selesai base Case
    console.log(n);
    return  cetakAngka(n-1)
}

function faktorial(n) {
    if (n == 0) {
        return 1;
    }
    return n * faktorial(n-1);
}
console.log(faktorial(5));
cetakAngka(10);