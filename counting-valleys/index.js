const n = 8

const s = 'UDDDUDUU'


const countingValleys = (n, s) => {
  let altitude = 0
  let flagValley = false
  let countValley = 0
  for(let i=0; i<s.length; i++) { 
    if(s.charAt(i) === 'U')
      altitude++
    else
      altitude--
    
    if(altitude < 0 && flagValley === false) {
      countValley++
      flagValley = true
    }
    if(altitude >= 0 && flagValley === true) {
      flagValley = false
    }
  }
  // console.log(countValley)
  return countValley
}

countingValleys(n, s)