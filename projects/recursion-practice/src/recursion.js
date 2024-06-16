// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n, product = 1) {
  //base
  if (n < 0){
    return null

  }
  if (n <= 1){
    return product;
  }

  //recursion
  product *= n;
  return factorial(n - 1, product);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21

//creates a variable sum set to a function taking an array and a default parameter total set to 0
var sum = function(array, total = 0) {
// console.log("*", array, tota)
  //base

  //if the array is empty, return 0
  if (array.length === 0){
    return total;

  }
  //recursion
  //increase total by the value of the 0th index of the array
  total += array[0];
  // console.log(tota, array[0],array.slice(1));
  //return a recursive call of the sum funciton, passing in the shortened array and the current total
  return sum(array.slice(1), total);

};






// // 3. Sum all numbers in an array containing nested arrays.
// // Example: arraySum([1,[2,3],[[4]],5]); // 15

// //assigns arraySum to a function that takes an array and a default counter parameter set to 0
// var arraySum = (array, counter = 0) => {
//   //base

//   //if the array contains no elements, return the coounter
//   if(array.length === 0){
//     return counter
//   }


//   //recursion

//   //check if the 0th element is a number
//   if (typeof array[0] === 'number'){
    
//     //if it is, increment the counter by the value of the element
//     counter += array[0];
//     console.log("counter", counter);

//     //return the invocation of the arraySum function passed the arguments of the sliced remainder of the array and the current counter
//     return arraySum(array.slice(1), counter);

//   }
//   //check if the element at the 0th index is an array
//   if (Array.isArray(array[0])){
    
//     //if it is, return the invocation of array sum with passed arguments
//     return arraySum(array.slice(0), counter);
//   }
  
  

// };

// console.log("***", arraySum([1,[2,3],[[4]],5]));




// 4. Check if a number is even.
var isEven = function(n) {
  //base

  //if the number is 0 it's even and true
  if (n === 0){
    return true;
  }
  //if the number is 1 it's odd and false
  if (n === 1){
    return false
  }
  //if the number is less than zero, flip its negative sign
  if (n < 0){
    n = -n;
  }
  //recursion
  //if the number is larger than 1, return the isEven function called with the number decremented by 2 to maintain its even or oddness and check if it's 0 or 1
  if (n > 1){
    return isEven(n - 2)
  }
};

// console.log(isEven(5))








// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21

//sumBelow is a funciton that takes a number parameter and default total param set to 0
var sumBelow = function(n, tot = 0) {

  //base case
  if (n === 0){
    return tot;
  }

  //recusrsion

  //check if n is negative
  if (n < 0){
    //increment n
    n++
    // console.log("n", n)
    tot = tot + n;
    // console.log("tot", tot);
    return sumBelow(n, tot);

  }
  
  
  ////check if n is positive
  if (n > 0){
    //decrement n
    n--
    //assign tot to equal itself plus the current value of n
    tot = tot + n
    //recursive call of sumBelow with n's current value and tot's current value
    return sumBelow(n, tot);
  }
};

// console.log("sumBelow(-7):  ", sumBelow(-7));





// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]

//range takes two integer inputs as params
var range = (x, y, output = []) => {


    //base case
  if (x === y){
    output.pop();
    return output;
  }


    //recursion
    //check if x is less than y
    if (x < y){
      x++;
      // console.log(x)
      output.push(x);
      // console.log("output", output)
      return range(x, y, output);
    }
    
    if (x > y){
      x--;
      // console.log(x)
      output.push(x);
      // console.log(output)
      return range(x, y, output);
    }

    // return range(x ,y);

  



};













// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {

  //base
  //if the exponent is zero, return 1
  if (exp === 0){
    return 1;
  }


 //recursion
  //if the exponent it negative, return 1 divided the recursive call of the base and the double negative exponent
  if (exp < 0){
    return 1 / exponent(base, -exp);
  }


 //base times the recursively called exponent funciton with arguments oof base and the decremented exp
  return base * exponent(base, exp - 1);



  
 
};

// let resoolt = exponent(5, 2);
// console.log("RESOOLT!   ", resoolt);






// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false


var powerOfTwo = function(n) {

  //base
  //checks if n is 1 or 2 and returns true
  if (n === 2 || n === 1){
    return true;
  }
  if (n === 0){
    return false;
  }
  //recursion
  //checks if n is even
  if (n % 2 === 0){
    //calls powerOfTwo with n divided by 2
    return powerOfTwo(n / 2);
  }
  //returns false if no conditions are met
  return false;


};

// console.log("POWER OF 2TWO:    ", powerOfTwo(0));




// 9. Write a function that accepts a string a reverses it.

//reverse is initialized as a function with string input paramterers and a default output set to an empty array
var reverse = function(string, output = []) {

  //base case
  //if the string is an emmty string, return output array joined together as a string
  if (string.length === 0){
    return output.join("");
  }

  //recursion
  //unshift the 0th character of the string into the output array
  output.unshift(string[0]);

  //recursively invoke reverse with the sliced down remainder of the string and the moidified output array as arguments
  return reverse(string.slice(1), output);



};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //lowercase and remove spaces
  string = string.toLowerCase().split(" ").join('');
  //base case
  if (string.length === 1){
    return true;
    

  }
  //recursion
 
  if (string[0] === string[string.length - 1]){
    // console.log(`string: ${string} \n string[string.length -1]:  ${string[string.length -1]} \n string.slice(1, string.lenghth -1): ${string[string.length -1]}`);
    return palindrome(string.slice(1, string.length -1));
  }
  return false
}

  // console.log("*****", palindrome('race caR'));







   //use reverse to reverse the string and check if the resulting strings are equal
  // if(reverse(string.toLowerCase()).split(" ").join("") === string.toLowerCase().split(" ").join("")){
  //   return true;
  // } else {
  //   return false;
  // }






// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
// ATTENTION DO NOT LEAVE COMMENTS IN THIS FUNCTION. The test is looking for any ('/').


//2 * 4
// 2 + 2 + 2 + 2
//4 + 4

var multiply = function(x, y, output = 0) {

  
  if (y === 0){
    return output;
  }
  if (y < 0){
    output -= x;
    y++;
    return multiply(x, y, output);
  }

  if (y > 0){
    output += x;
    y--;
    return multiply(x, y, output);
  }
  



};

// console.log("*****", multiply(-275, -502));







// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};





// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {

  //base case
  if (str1[0] !== str2[0]){
    return false;
  }
  if (str1.length === 0 && str2.length === 0){
    return true;
  }

  //recursion
  
  if (str1[0] === str2[0]){
    return compareStr(str1.slice(1), str2.slice(1));
  }


};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str, arr = []){

  //base case
  //check if string is empty
  if (str.length === 0){
    //return the array
    return arr;
  }




  //recursion
  //push the string initial index into the array
  arr.push(str[0])
  //recursively call
  return createArray(str.slice(1), arr);



};

// 17. Reverse the order of an array
var reverseArr = function (array, output = []) {


  //base case
  if (array.length === 0){
    return output;
  }

  //recursion

  output.unshift(array[0]);
  return reverseArr(array.slice(1), output)

};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length, output = []) {


  //base case
  if (length === 0){
    return output;
  }

  //recursion
  output.push(value);
  return buildList(value, length - 1, output);

};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value, output = 0) {

  //base case
  if (array.length === 0){
    return output;
  }


  //recursion
  if (array[0] === value){
    output++;
  }
  return countOccurrence(array.slice(1), value, output);




};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback, output = []) {

  //base case
  if (array.length === 0){
    return output;
  }

  //recursion

  output.push(callback(array[0]));
  return rMap(array.slice(1), callback, output);




};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2


//a funciton with two default params, an array and a number
var nthFibo = function(n, fibSeq = [0, 1], fibNum = 2) {

  //base case
  //if negative, return null
  if(n < 0){
    return null;
  }
  //if we have at least n indexes, return the value at the input index
  if (n <= fibSeq.length - 1){
    return fibSeq[n];
  }

  //recursion
//set fibNum to equal the sum of the previous two indexes
  fibNum = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2]
  //push value into the sequence
  fibSeq.push(fibNum)

    //call recursively with the desired index, new sequence and new number
  return nthFibo(n, fibSeq, fibNum);




};

// console.log("*****", nthFibo(5));





// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']            
var capitalizeWords = function(words, output = []) {

  //base case
  if (words.length === 0){
    return output;
  }



  //recursion

  output.push(words[0].toUpperCase());
  return capitalizeWords(words.slice(1), output)


};









// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(words, output = []) {

  //base case
  if (words.length === 0){
    return output;
  }


  //recursion
  output.push(words[0][0].toUpperCase() + words[0].slice(1));
  return capitalizeFirst(words.slice(1), output);



};











// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};






// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {

  //base case
  //if string is empty, return the obj as-is
  if (str.length === 0){
    return obj;
  }

  //recursion
  //if a value at the property name of the letter exists
  if (obj[str[0]]){
    //increment the value
    obj[str[0]]++;
  }
  //if it does not exist
  if (!obj[str[0]]){
    //give it a value
    obj[str[0]] = 1
  }
//recusively call letterTally with the new sliced string and updated obj
  return letterTally(str.slice(1), obj);




};


// console.log(letterTally('potato'));








// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list, output = []) {


  //base case
  if (list.length === 0){
    return output;
  }



  //resursion
  //check if list item is already in output
  if (list[0] !== output[output.length - 1]){
    //push list item to output
    output.push(list[0]);
    // console.log("OUTPUT:   ", output);
  }

  return compress(list.slice(1), output);

};


// console.log("********     ", compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]));







// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};










// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array, output =[]) {


  //base case
  if (array.length === 0){
    return output;
  }
   




  //recursion

  //check if the last element in output is not 0 OR if the current array element is not 0
  if (output[output.length - 1] !== 0 || array[0] !== 0){
    output.push(array[0]);
  }
  return minimizeZeroes(array.slice(1), output);

};







// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array, output = []) {


  //base case
  //if array is empty, return output
  if(array.length === 0){
    return output;
  }

  //recursion

  //check if the array element is positive AND if the output position is even
  if (array[0] > 0 && output.length % 2 === 0 || output.length === undefined){
    output.push(array[0]);
    //check if positive AND odd
  } else if (array[0] > 0 && output.length % 2 !== 0){
    output.push(-array[0]);
    //check if negative AND even
  } else if (array[0] < 0 && output.length % 2 === 0 || output.length === undefined){
    output.push(-array[0]);
  } else { //if negative and odd
    output.push(array[0]);
  }



  //recursively call alternateSign with arguments of the sliced array remainder and the updated output array
  return alternateSign(array.slice(1), output);

};






// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"



var numToText = function(str, output = '') {

  let numWords = {
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine"
  }
  
  let numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

  //base case
  if (str.length === 0){
    console.log("BASE TYPEOF: ", typeof output);
    return output;
  }


  //recursion
  //check if the current string element is a typeof number
  if (!numArr.includes(str[0])){

   
    output += str[0];
    console.log("typeof output:  ", typeof output)
   



  } else {
     // console.log("number!")
     output += numWords[str[0]];
     console.log("typeof output:  ", typeof output)
    
  }


  
  // console.log("OUTPUT:   ", output);
  console.log(typeof output);
  //recursive call with sliced string and modified output
  return numToText(str.slice(1), output);
  



};



console.log(numToText("I have 5 dogs and 6 ponies"))














// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};





























//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
