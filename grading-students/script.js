window.addEventListener('load', () => {
  console.log('Loading Finished!')
  grades = [73, 67, 38, 33]
  console.log(tryRoundGrades(grades))
})

const tryRoundGrades = (grades) => {
  let roundedGrades = []
  let nextMultiple5Rounded = null
  let delta = null
  grades.forEach(grade => {
    if(grade >= 38) {
      nextMultiple5Rounded = Math.ceil(grade/5)*5
      delta = Math.abs(grade - nextMultiple5Rounded)
      
      if(delta < 3)
        roundedGrades = [...roundedGrades, nextMultiple5Rounded]
      else
        roundedGrades = [...roundedGrades, grade]
    } else {
      roundedGrades = [...roundedGrades, grade]
    }
  })
  return roundedGrades
}