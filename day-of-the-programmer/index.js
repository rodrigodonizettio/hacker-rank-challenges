let correction = 0

const jan = 31
let feb = 0
const mar = 31
const apr = 30
const may = 31
const jun = 30
const jul = 31
const aug = 31

const dayOfProgrammer = (year) => {
  const dayOfTheProgrammer = 256

  if(year < 1918) {
    if((year % 4) == 0)
      feb = 29
    else 
      feb = 28
  } else if(year === 1918) {
    feb = 28
    correction = -13
  } else {
    if(((year % 400) == 0) || ((year % 4) === 0) && ((year % 100) !== 0))
      feb = 29
    else 
      feb = 28
  }

  const daysSum = jan + feb + mar + apr + may + jun + jul + aug + correction
  const septemberDay = dayOfTheProgrammer - daysSum
  
  return `${septemberDay}.09.${year}`
}

console.log(dayOfProgrammer(2016))
