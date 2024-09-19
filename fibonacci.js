const readline = require('readline')

const answer = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

answer.question('Insira um número: ', (destinyNumber) => {
  const number = parseInt(destinyNumber, 10)

  function fibonacciSequency(n) {
    let initialNumbers = [0, 1]

    for (let index = 2; index < n; index++) {
      initialNumbers[index] =
        initialNumbers[index - 1] + initialNumbers[index - 2]
    }
    return initialNumbers
  }

  const fibonacciNumbers = fibonacciSequency(number)
  const isInFibonacci = fibonacciNumbers.includes(number)

  console.log(
    'O número digitado foi: ' +
      destinyNumber +
      '\nSequência: ' +
      fibonacciNumbers.join(', ') +
      '\nO número ' +
      (isInFibonacci ? 'está' : 'não está') +
      ' na sequência de Fibonacci.'
  )
  answer.close()
})
