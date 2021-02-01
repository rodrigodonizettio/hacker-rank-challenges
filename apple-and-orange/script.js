let s = 7 //House X-Axis Start
let t = 11 //House X-Axis End
let a = 5 //Apple X-Axis Root
let b = 15 //Orange X-Axis Root
let m = 3 //#Apples to fall
let n = 2 //#Oranges to fall
let apples = [-2, 2, 1] //Apple Distance between Apple Root X-Axis
let oranges = [5, -6] //Orange Distance between Orange Root X-Axis

window.addEventListener('load', () => {
  console.log('Loading Finished!')

  countApplesAndOranges(s, t, a, b, apples, oranges)
})

const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  let sumApplesInHouseRegion = 0
  let sumOrangesInHouseRegion = 0

  apples.forEach(appleDistFromTree => {
    let applePosition = a + appleDistFromTree
    if((applePosition >= s) && (applePosition <= t))
      sumApplesInHouseRegion++
  })

  oranges.forEach(orangeDistFromTree => {
    let orangePosition = b + orangeDistFromTree
    if((orangePosition >= s) && (orangePosition <= t))
      sumOrangesInHouseRegion++
  })
  console.log(sumApplesInHouseRegion)
  console.log(sumOrangesInHouseRegion)
}
