let scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]
// let scores = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]

let worst = -1
let best = -1
let worstCount = 0
let bestCount = 0

scores.forEach(v => {
  if(worst === -1 && best === -1) {
    worst = v
    best = v
  } else {
    if(v > best) {
      best = v
      bestCount++
    } else if(v < worst) {
      worst = v
      worstCount++
    }
  }
})

console.log(`Best Count: ${bestCount}`)
console.log(`Worst Count: ${worstCount}`)