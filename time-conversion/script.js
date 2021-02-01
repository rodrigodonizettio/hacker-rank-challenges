let time12 = '12:00:00AM'

window.addEventListener('load', () => {
  console.log('Loading Finished!')
  console.log(timeConvert(time12))
})

const timeConvert = (s) => {
  let arr = s.split(":")
  let ampm = arr[2].substring(2, 4)
  arr[2] = arr[2].substring(0, 2)
  arr = [...arr, ampm]
  console.log(`arr: ${arr}`)

  if(ampm === 'PM' && arr[0] < 12)
    arr[0] = parseInt(arr[0]) + 12
  else if(ampm === 'AM' && arr[0] === '12')
    arr[0] = parseInt(arr[0]) - 12
  
  if(String(arr[0]).length === 1)
    arr[0] = '0' + arr[0]
  
  if(String(arr[1]).length === 1)
    arr[1] = '0' + arr[1]

  if(String(arr[2]).length === 1)
    arr[2] = '0' + arr[2]

  return arr[0] + ':' + arr[1] + ':' + arr[2]
}