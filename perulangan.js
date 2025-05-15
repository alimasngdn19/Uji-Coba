var s = '';
var n = 5 * 2;

for(i = 1; i <= n; i += 2) {

    for(k = n; k >= i; k -= 2) {
        s += ' ';
    }

    for(j = 1; j <= i; j++) {
        s += '*';
    }

    s += '\n';
}

console.log(s);