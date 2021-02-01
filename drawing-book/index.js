const n = 9
const p = 1


const pageCount = (n, p) => {
  let count = 0
  if(n === p)
  return count
  
  let modifier = 0
  if(n%2 === 0)
    modifier = 1
  else
    modifier = 2
  
  if(n/2 >= p)
    for(let i=1; i<p; i=i+2) {
      console.log(`0-I: ${i} for C: ${count}`)
      count++
    }
  else
    for(let i=n-modifier; i>=p; i=i-2) {
      console.log(`1-I: ${i} for C: ${count}`)
      count++
    }

  return count
}

console.log(pageCount(n, p))