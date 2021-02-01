window.addEventListener('load', () => {
  console.log('Window Loaded!')
  let array = buildArray()
  console.log(array)
  let diagonalAbsDifference = diagonalDifference(array)
  console.log(diagonalAbsDifference)
})

const buildArray = () => {
  let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  return array
}

const diagonalDifference = (arr) => {
  let sumRightDiagonal = 0
  let sumLeftDiagonal = 0
  let arrLength = arr.length
  for(let i=0; i<arrLength; i++) {
    sumRightDiagonal += arr[i][i]
    sumLeftDiagonal += arr[arrLength-1-i][i]
  }
  console.log(Math.abs(sumRightDiagonal - sumLeftDiagonal))
}