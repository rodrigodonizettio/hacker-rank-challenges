const bill = [3, 10, 2, 9]
const k = 1
const b = 7

const bonAppetit = (bill, k, b) => {
  let sum = 0
  bill.forEach((v, i) => {
    if(i !== k)
      sum += v
  })

  if(sum/2 === b)
    console.log('Bon Appetit')
  else
    console.log(b - sum/2)
}

bonAppetit(bill, k, b)