let arr = [5, 4, 3, 2, 1]

window.addEventListener('load', () => {
  console.log('Loading Finished!')
  doMinMaxSum(arr)
})

const doMinMaxSum = (arr) => {
  let minSum = 0
  let maxSum = 0

  arr = arr.sort()
  minSum = arr[0] + arr[1] + arr[2] + arr[3]
  maxSum = arr[1] + arr[2] + arr[3] + arr[4]

  console.log(minSum + ' ' + maxSum)
}