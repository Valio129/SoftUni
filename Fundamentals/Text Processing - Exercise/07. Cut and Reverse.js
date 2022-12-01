function solve (input) {
   const middleIndex = input.length/2 
   let first = input.substring(0,middleIndex)
   .split('')
   .reverse()
   .join('')
   let second = input.substring(middleIndex)
   .split('')
   .reverse()
   .join('')
   console.log(`${first}\n${second}`);
   
}
solve('tluciffiDsIsihTgnizamAoSsIsihT')