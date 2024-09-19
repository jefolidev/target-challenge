const readline = require('readline')

const answer = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

answer.question('Insira uma frase: ', (sentence) => {
  function howMuchLettersAHandler(sentence) {
    let quantity = 0

    for (let i = 0; i <= sentence.length - 1; i++) {
      if (sentence[i].toLowerCase() === 'a') {
        quantity += 1
      }
    }

    return quantity
  }

  const count = howMuchLettersAHandler(sentence)

  if (count === 1) {
    console.log('A frase inserida possui apenas ' + count + ' "a".')
  } else if (count > 1) {
    console.log('A frase inserida possui ' + count + ' letra "a".')
  } else {
    console.log('A frase não possui letras "a".')
  }
  answer.close()
})
