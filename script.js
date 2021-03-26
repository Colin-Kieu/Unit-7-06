let age = 15
let guess = 0

while (guess != age) {
  guess = prompt('Guess my age')
  if (guess == age) {
  alert('Congratulations you got it right!')
} else if (guess < age) {
  alert('You guessed too small, refresh to try again!')
} else if (guess > age) {
  alert('You guessed too big, refresh to try again!')
}
}
