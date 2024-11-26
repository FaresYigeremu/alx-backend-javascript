// 1-stdin.js
// Display the welcome message
console.log("Welcome to Holberton School, what is your name?");

// Set up stdin (standard input) to receive user input
process.stdin.setEncoding('utf8');

// Listen for user input
process.stdin.on('data', (data) => {
  const input = data.trim(); // Remove any extra spaces or newlines
  console.log(`Your name is: ${input}`);

  // End the program
  process.stdin.end();
});

// Handle the end of input
process.stdin.on('end', () => {
  console.log("This important software is now closing");
});

