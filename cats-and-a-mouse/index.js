const q = 2 //queries
const x = 1 //Cat A position
const y = 3 //Cat B position
const z = 2 //Mouse C position

const catAndMouse = (x, y, z) => {
  let catADist = Math.abs(z-x)
  let catBDist = Math.abs(z-y)
  if(catADist === catBDist)
    return 'Mouse C'
  else if(catADist < catBDist)
    return 'Cat A'
  else
    return 'Cat B'
}

console.log(catAndMouse(x, y, z))