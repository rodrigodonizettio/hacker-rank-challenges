window.addEventListener('load', () => {
  console.log('Loading Finished!')
  console.log(findUglyStrings('011010101011'))
})

const findUglyStrings = (b) => {
  let countUglyString = 0
  console.log(b)
  let arr = Array.from(b)
  arr.reduce((acc, cur) => {
    acc += cur
    if(acc.length === 3) {
      if(acc === '010') {
        countUglyString++
        acc = ''
      } else {
        acc = acc.substring(1, 3)
      }
    }
    return acc
  }, '')
  return countUglyString
}