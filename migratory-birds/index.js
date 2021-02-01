let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]

let birdSightings = []
for(let i=0; i<5; i++) {
  birdSightings[i] = 0
}

arr.forEach(v => {
  birdSightings[v-1]++
})

console.log(`Most common is Bird# ${birdSightings.indexOf(Math.max(...birdSightings)) + 1}`)