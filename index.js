// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++){
//     // n steps
//      const compliment = target - array[i]
//      for (let j = i + 1; j < array.length; j++) {
//       // n * n steps 
//       if (array[j] === compliment) {
//         return true
//       }

//     }
    
//   }      
//   return false
  
// }

function hasTargetSum(array, target) {
  const seenNumbers = {}

  for(const number of array) {
    // n steps
    const compliment = target - number
    if(compliment in seenNumbers) return true
    seenNumbers[number] = true
  }
  return false

}

/* 
  Write the Big O time complexity of your function here
  Runtime: O(n^2)
  Space: O(n)
*/

/* 
QUADRATIC TIME
....................................................................................................
  Add your pseudocode here
  hasTargetSum([3, 8, 12, 4, 11, 7], 10)
  iterate thro each element of the array
    for each element, identify a compliment that adds up to the target
      iterate thro the rest of the array
        check if any of the remaining numbers is our number
          if so, return true

  if I get to the end of the array without getting any of the numbers,
  return false

CONSTANT TIME
.......................................................................................................
Create an object to keep track of numbers we have already seen
iterate through each number in the array atleast once
  for each element, identify a compliment that adds up to the target
  check if any any key on our object is the compliment
  if so, return true
  otherwise, add the number to our object

if I get to the end of the array without getting any of the numbers,
return false

Runtime: O(n)

*/

/*
  Add written explanation of your solution here
  Make a function hasTargetSum that checks if there are 2 numbers from a given array
  that add up to the provided target
  I should get true if the numbers exist and false if the numbers do
  not exist
  For each number, check if there is a number that adds to the target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>",hasTargetSum([3, 8, 12, 4, 11, 7], 10) );

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
