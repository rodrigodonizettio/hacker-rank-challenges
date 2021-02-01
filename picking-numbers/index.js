const a = [4, 6, 5, 3, 3, 1]
// const a = [1, 2, 2, 3, 1, 2]
// const a = [1, 2, 2, 2, 2, 3, 3]

const pickingNumbers = (a) => {
  let aSorted = a.sort()
  let firstIndex = 0
  let firstValue = aSorted[firstIndex]
  let curSize = 0
  let longestSize = 0
  let flagFirst = true
  while(firstIndex < aSorted.length) {
    console.log('FirstIndex: ' + firstIndex)
    for(let i=firstIndex; i<aSorted.length; i++) {
      let delta = Math.abs(firstValue - aSorted[i+1])
      if(delta <= 1) {
        if(flagFirst) {
          flagFirst = false
          curSize++
        }
        curSize++
      } else {
        flagFirst = true
        firstIndex++
        firstValue = aSorted[firstIndex]
        console.log('Cur Lon: ' + curSize)
        if(curSize > longestSize)
          longestSize = curSize
        curSize = 0
        break;
      }
    }
  }
  return longestSize
}

console.log(pickingNumbers(a))