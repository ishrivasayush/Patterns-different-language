const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the number of n: ', (n) => {
  // Convert rows to a number
  n = parseInt(n);
  
// Upside pyramid
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    process.stdout.write(' ')
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    process.stdout.write('*')
  }
  console.log();
}

// downside pyramid
for (let i = 1; i <= n - 1; i++) {
  // printing spaces
  for (let j = 0; j < i; j++) {
     process.stdout.write(' ');
  }
  // printing star
  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    process.stdout.write('*');
  }
  console.log();
}
