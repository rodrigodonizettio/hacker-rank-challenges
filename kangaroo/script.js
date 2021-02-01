let kangaroo1Start = 0
let kangaroo1Velocity = 2
let kangaroo2Start = 4
let kangaroo2Velocity = 2
window.addEventListener('load', () => {
  console.log('Loading Finished!')
  console.log(kangaroo(kangaroo1Start, kangaroo1Velocity, kangaroo2Start, kangaroo2Velocity))
})

const kangaroo = (x1, v1, x2, v2) => {
  //This one returns "YES" or "NO" if the both Kangaroos will be at the same position at the same time
  let lastDelta = -2
  let curDelta = -1
  let kangaroo1Pos = x1
  let kangaroo2Pos = x2
  while(lastDelta === -2 || curDelta < lastDelta) {
    lastDelta = Math.abs(kangaroo1Pos - kangaroo2Pos)
    if(lastDelta === 0)
      return 'YES'
    else {
      kangaroo1Pos += v1
      kangaroo2Pos += v2
      curDelta = Math.abs(kangaroo1Pos - kangaroo2Pos)
    }
  }
  return 'NO'
}