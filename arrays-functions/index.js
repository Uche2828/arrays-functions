// Question 1
 /*What are the differences between mutating array methods and non-mutation array methods in
 JavaScript. List 5 array methods that fall under each of them.
 1.Mutating array methods modify the original array, while non-mutating methods return a  new 
 array without modifying the original.
 2.Mutating methods change the original data structure, which can have unintended consequences,
  while non-mutating methods allow you to create a new array with the desired changes 
  while preserving the original data structure.
  Mutating array methods:
1. push() - adds one or more elements to the end of an array.
2. pop() - removes the last element of an array.
3. splice() - changes the content of an array by removing or replacing existing elements and/or adding new elements.
4. sort() - sorts the elements of an array in place.
5. reverse() - reverses the order of the elements of an array in place.

Non-mutating array methods:
1. concat() - merges two or more arrays and returns a new array without modifying the original.
2. slice() - returns a portion of an array as a new array without modifying the original.
3. map() - creates a new array with the results of calling a provided function on every element in the original array.
4. filter() - creates a new array with all elements that pass the test implemented by the provided function.
5. reduce() - applies a function to each element of an array and reduces the array to a single value, 
which is returned without modifying the original array.*/

// Question 2
/*Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 
1. Add ‘Kotlin’ to the end of the array
2. Add ‘Java’ after ‘Ruby’
3. Remove the first item in the array
4. Add ’Scala’ and ‘Swift’ to the beginning of the array
5. Replace ‘PHP’ with ‘Go’ and ‘Rust’*/

let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];
console.log(languages)
//1
languages.push('Kotlin');
console.log(languages);
//2
languages.splice(3, 0, 'Java');
console.log(languages);
//3
languages.splice(0,1,);
console.log(languages);
//4
 languages.unshift('Scala', 'Swift');
console.log(languages);
//5
languages.splice(3,3,'Go','Rust');
console.log(languages);

//Question 3.What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit( fruit ) {
    			fruit[2] = "orange";
    			return fruit;
		}
    console.log(fruit);
    [ 'apple', 'mango', 'banana' ]
    /*Question 3.Write a function that accepts an array of numbers as an argument. 
    Return the maximum value in the array.
e.g., max([4, 5, 10, -2]) // maximum value is 10*/

function max() {
  let array = [4, 5, 10, -2]; 
  let max= array[0]
  for (let i = 0; i < array.length; i++) {
    if (max > array[i]) {
      max = array[i]; 
    }
  }
  
  return max;
}
console.log(max);


