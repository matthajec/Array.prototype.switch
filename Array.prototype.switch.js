console.log(` 
To use Array.prototype.switch simply call it just how you would call any other array prototype function.

Example: 
  exampleArr = ['first','second']
  exampleArr.switch(0, 1)
'exampleArr' would now be equal to ['second', 'first']

The array 'arr' is provided with each element being the value of its index.
`)

const arr = []
for (let i = 0; i < 25; i++) { // creates an array
  arr.push(i)
}

Array.prototype.switch = function switchIndexes(firstIndex, secondIndex) {
  let firstIndexValue = this[firstIndex] // get the value of the first index
  this[firstIndex] = this[secondIndex] // set the first index to the value of the second index
  this[secondIndex] = firstIndexValue // set the second index to the saved value of the first index (firstIndexValue)
}