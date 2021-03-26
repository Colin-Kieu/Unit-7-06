let age = 15
let guess = 0
// set our varibles to the values that are wanted

while (guess !== age) {
  // the while loop
  guess = prompt('Guess my age')
  if (guess = age) {
    alert('Congratulations you got it right!')
  } else if (guess < age) {
    alert('You guessed too small, refresh to try again!')
  } else if (guess > age) {
    alert('You guessed too big, refresh to try again!')
  // for when the answers are given, the alert will respond with the message
  }
}
