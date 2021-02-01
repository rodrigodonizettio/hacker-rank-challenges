let candlesHeight = [3, 2, 1, 3]
let age = candlesHeight.length //One candle for each year old

window.addEventListener('load', () => {
  console.log('Loading Finished!')
  countTallestCandles(candlesHeight)
})

const countTallestCandles = (arr) => {
  let maxValue = Math.max(...arr)
  let countMaxValue = arr.filter(el => {
    return el === maxValue
  })
  console.log(countMaxValue.length)
}