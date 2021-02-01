const b = 5 //10
const keyboards = [4] //[3, 1]
const drives = [5] //[5, 2, 8]

const getMoneySpent = (keyboards, drives, b) => {
  let moneySpent = -1
  keyboards.forEach((k, i) => {
    drives.forEach((d, i) => {
      let willSpend = k+d
      if(willSpend <= b && willSpend > moneySpent) {
        moneySpent = willSpend
      }
    })
  })
  return moneySpent
}

console.log(getMoneySpent(keyboards, drives, b))