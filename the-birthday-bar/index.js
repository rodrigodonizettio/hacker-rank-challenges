let s = [1, 2, 1, 3, 2]
let d = 3
let m = 2

// let s = [1, 1, 1, 1, 1, 1]
// let d = 3
// let m = 2

// let s = [4]
// let d = 4
// let m = 1

let tempS = []
let barCount = 0

let isValid = s.every(v => {
  return v >= 0 && v < 5
})
if(isValid) {
  s.forEach((v, i) => {
    if(tempS.length < m) {
      tempS.push(v)
    }
    if(tempS.length === m) {
      let sum = tempS.reduce((acc, cur) => {
        return acc + cur
      })
      if(sum === d) {
        barCount++
      }
      tempS.shift()
    }
  })
}
console.log(`Ron's Bar Count: ${barCount}`)