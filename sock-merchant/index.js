n = 9
ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

const sockMerchant = (n, ar) => {
  let socks = []
  let sum = 0
  for(let i=0; i<=100; i++)
    socks[i] = 0
  ar.forEach(v => {
    socks[v]++
  })
  socks.forEach(v => {
    sum += Math.floor(v/2)
  })
  return sum
}

console.log(sockMerchant(n, ar))