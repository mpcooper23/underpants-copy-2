// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below its instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
return value 
}



/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"

I: value
O: type of value in string
C:
E:


*/

_.typeOf = function (value){
        if (typeof value === 'string') {
          return 'string';
        } else if (typeof value === 'number') {
          return 'number';
        } else if (Array.isArray(value)) {
          return 'array';
        } else if (typeof value === 'undefined') {
          return 'undefined';
        } else if (typeof value === 'boolean') {
          return 'boolean';
        } else if (value === null) { // Check for null explicitly
          return 'null';
        } else if (typeof value === 'object') {
          return 'object';
        } else if (typeof value === 'function') {
          return 'function';
        }
    }

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function (arr, num){
    if (!Array.isArray(arr)) {//if <array> is not an array, return []
        return [];
      }
      if (num === undefined || typeof num !== 'number') {//If <number> is not given or not a number, return just the first element in <array>.
        return arr[0];
      }
      if (num < 0) {//Edge case: number is negative
        return [];
      }
      return arr.slice(0, num);//otherwise, return first <num> of items in array
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(arr, num){
if(!Array.isArray(arr)){
    return [];
}
 if (num === undefined || typeof num !== 'number'){
    return arr[arr.length - 1]
}
if(num < 0){
    return []
}
return arr.slice(-num) // slice -num
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function (array, value){
for (let i = 0; i < array.length; i++){
    if (array[i] === value){
        return i; //return the index of the first occurence 
    }
}
    return - 1; //return - 1 if value is not found
}


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value){
for (let i = 0; i < array.length; i++){
    if(array[i] === value){
        return true;
    }
}
return false //place return false outside of loop so that every value is tested
}


/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, func){
if (Array.isArray(collection)){
    for(let i = 0; i < collection.length; i++){
        let result = func(collection[i], i, collection)
    }
}else {
    for(let key in collection){
        let result = func(collection[key], key, collection)
    }
}
}


/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array){
let uniqueArr = [...new Set(array)];
return uniqueArr;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func){
    let trues = []; //create output

for(let i = 0; i < array.length; i++){
let result = func(array[i], i , array);
if(result){
trues.push(array[i])}//push array[i], not result
}
return trues; //return output
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter()
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function (array, func){
let falses = []
  for(let i = 0; i < array.length; i++){
    let result = func(array[i], i, array)
  
  if(!result){
    falses.push(array[i])//push array[i], not "result", which is the function
  }
}
  return falses; 
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func){
  let truthy = [];
  let falsey = [];
  for (let i = 0; i < array.length; i++){
    let result = func(array[i], i, array)
    if(!result){
falsey.push(array[i])
    }else {
truthy.push(array[i])
    }
  }
  return [truthy, falsey];//need to return each output array in its own array
}


/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function (collection, func){
    let output = [];
if(Array.isArray(collection)){//determine if collection is array
for(let i = 0; i < collection.length; i++){
    let result = func(collection[i], i, collection);
    output.push(result)
}
}else{//else, we can assume the collection is an object
for (let key in collection){
    let result = func(collection[key], key, collection);
        output.push(result)
}
}
    return output;
}

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]

I: array of objects, property to add
O: array of value of property for every element in array
C: map
E:
*/

_.pluck = function (array, prop){
return array.map(obj => obj[prop])
}

/** _.every <== like all-strings-pass function
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func) {
  if (Array.isArray(collection)) { // Determine if collection is an array
    if (func === undefined){
    for (let i = 0; i < collection.length; i++) {
      if (!collection[i]) { // Return false if any element does not satisfy the condition
        return false;
      }
    }
    }else{//else it was
for (let i = 0; i < collection.length; i++){
  if(!func(collection[i], i, collection)){
    return false;
  }
}
    }
  } else { // Assume the collection is an object
    if(func === undefined){
    for (let key in collection) {
      let result = func(collection[key], key, collection);
      if (!result) { // Return false if any property does not satisfy the condition
        return false;
      }
    }
  }
  }
  return true; // Return true if all elements/properties satisfy the condition
}


/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func) {
  // If no function is provided, use a default function that checks for truthiness
  func = func || ((value) => value);

  if (Array.isArray(collection)) {
    // Iterate over the array
    for (let i = 0; i < collection.length; i++) {
      // If the function returns true for any element, return true
      if (func(collection[i], i, collection)) {
        return true;
      }
    }
  } else {
    // Assume the collection is an object
    for (let key in collection) {
      // If the function returns true for any property, return true
      if (func(collection[key], key, collection)) {
        return true;
      }
    }
  }
  // If no elements pass the test, return false
  return false;
};

// Example usage:
console.log(_.some([1, 2, 3], (num) => num > 2)); // Output: true
console.log(_.some([1, 2, 3], (num) => num > 3)); // Output: false
console.log(_.some({ a: 1, b: 2, c: 3 }, (value) => value === 2)); // Output: true


/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

_.reduce = function(array, func, seed){
let output; //initialize but don't declare output yet
if(seed === undefined){ //if no seed value
  output = array[0] //use arr[0] as seed
  for(let i = 1; i < array.length; i++){//start index at 1, since seed is array[0]
output = func(output, array[i], i)//reassign output to result of invoking callback func
}}else {
  output = seed; //else there is a seed value
for(let i = 0; i < array.length; i++){
  output = func(output, array[i], i)
}
}
return output;
}

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function (target, ...sources){
// Iterate over each source object
for (let source of sources) {
  // Iterate over each key in the source object
  for (let key in source) {
    // Copy the property to the target object
    if (source.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
}
// Return the updated target object
return target;
}


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}