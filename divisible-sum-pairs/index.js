let ar = [1, 3, 2, 6, 1, 2]
let k = 3

let pairs = 0
ar.forEach((v, i) => {
  for(let j=i+1; j<ar.length; j++) {
    if((v + ar[j]) % k === 0) {
      pairs++
    }
  }
})
console.log(pairs)