let a = [2, 4]
let b = [16, 32, 96]

//////////////////////////////////////

const rows = 100
const cols = b.length
let bFactor = []

const initMultidimensionalArray = () => {
  for(let i=0; i<rows; i++) {
    bFactor.push([])
  }
  
  for(let i=0; i<rows; i++) {
    for(let j=bFactor[i].length; j<cols; j++) {
      // bFactor[i].push(0)
    }
  }
  // console.log(bFactor)
}

initMultidimensionalArray()

//////////////////////////////////////

b.forEach((v, j) => { //j = col
  for(let i=0; i<100; i++) { //i = row
    if(v%(i+1) == 0) {
      bFactor[i].push(1)
    } else bFactor[i].push(0)
  }
})

// console.log(bFactor)


let isBFactor = []
bFactor.forEach(r => {
  isBFactor.push(r.every(c => c === 1))
})

// console.log(isBFactor)

let isABFactor = []
isBFactor.forEach((v, i) => {
  if(v === true) {
    let bFactor = i+1
    if(a.every(v => bFactor%v === 0)) {
      isABFactor.push(bFactor)
    }
  }
})

console.log(`Between Two Sets: ${isABFactor}`)
console.log(`Between Two Sets Amount: ${isABFactor.length}`)