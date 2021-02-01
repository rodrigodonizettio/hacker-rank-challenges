window.addEventListener('load', () => {
  console.log('Loading Finished!')
  printStair(3)
  
})

const printStair = (n) => {
  let res = ''
  for(let i=0; i<n; i++) {
    for(let j=1; j<=n; j++) {
      if(j < n-i)
        res += ' '
      else
        res += '#'
    }
    res += '\n'
  }
  console.log(res)
}