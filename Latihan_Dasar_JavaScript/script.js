var s = '';

for (let i = 1; i <= 5; i++) {
     for (let x = 5; x >= i; x--) {
        s += ' ';
     }
     for (let x = 1; x <= i *2-1; x++) {
        s += '*';
     }
     s += '\n';
}

console.log(s);