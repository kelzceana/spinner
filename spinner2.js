
const symbol = "|/-|\-|"
let counter = 100;
for (const char of symbol) {
  setTimeout(() => {
    process.stdout.write(char + '\r');
  }, counter);
  counter += 200
}
