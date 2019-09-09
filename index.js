'use strict';

// YOU KNOW WHAT TO DO //

// /**
//  * each: Designed to loop over a collection, Array or Object, and applies the 
//  * action Function to each value in the collection.
//  * 
//  * @param {Array or Object} collection: The collection over which to iterate.
//  * @param {Function} action: The function to be applied to each value in the 
//  * collection
//  * 
//  * 
//  * 
//  */
// function each(collection, action) {
//     if(Array.isArray(collection)) {
//         for(var i = 0; i < collection.length; i++) {
//             action(collection[i], i, collection);
//         }
//     } else {
//         for (var key in collection) {
//             action(collection[key], key, collection);
//         }
//     }
// }
// module.exports.each = each;






/**
 * identity: designed to take any value and return that value unchanged
 * 
 * @param {any Value} value: The value to be returned
 * @return {any Datatype} value: value returned unchanged
 * 
 * Usage:
 * 
 *      let myVal = "Joanna"
 *      identity("Joanna"); // returns "Joanna"
 * 
 */
 
function identity(value){
    //takes Value
    //Returns value unchanged.
    return value;
}
module.exports.identity = identity;





/**
 * typeOf: takes any value and returns the type of that value
 * 
 * @param {Any datatype} Value: Value whose type we're determining
 * @return {String}: Datatype of the value
 * 
 * Usage:
 *      
 *      let kateObj = {
            id: 1,
            name: "Kate",
            age: "45"
        }
 *      typeOf(kateObj); // "object"
 * 
 */
 
function typeOf(value) {
    if (Array.isArray(value)) {
        return "array";
    } else if (value === null) {
        return "null";
    } else if (value instanceof Date) {
            return "Date";
    } else {
        return typeof value;
    }
}
module.exports.typeOf = typeOf;







/**
 * first: takes an array and number,
 * if it is not an array, or the number is negative, return empty array
 * if number argument is not given or is not a number, return first element of array
 * else, return first <number> elements of array
 * 
 * @param {Array} Array: The array to return values from
 * @param {Number} Number: The number of array elements to return
 
 * @return {Array} Empty Array: Empty array that is returned if <number> is negative or array argument input is not an array
 * @return {Array} New Array: A new array of elements containing the first <number> elements from input array argument  
 * @return {Any Datatype} First Element of Array: Return if <number> argument is not given or not a number.
 * @return {Array} Array argument input: Return whole <array> input if <number> is greater than the length of the array.
 * 
 * 
 * Usage:
 * 
 *      let myArr = [1,2,3,4,5];
 *      first(myArr, 3);    // [1,2,3]
 *      first(myArr, -4);   // []
 *      first(myArr);       // [1]
 * 
 */
 

function first(array, number) {
    // create variable (empty array) to push array elements
    var newArray = [];
  // use if-else chain
  // if <number> is negative or <array> is not an array, return empty array []
  if(number < 0 || !Array.isArray(array)) {
      return [];
  }  
  // else, if <number> is not a number or not given, return element of array at index 0
  else if (isNaN(number)) {
      return array[0];
  }
  // else, if <number> is greater than the length of the array, return whole array.
  if (number > array.length){
      return array;
  }
  // else, return <number> elements from array
  // create a for loop, loop through array <number> times
  // push each element into new array
  for (var i = 0; i < number; i++) {
      newArray.push(array[i]);
  } return newArray;
}
module.exports.first = first;










/**
 * last: returns last <number> elements of array
 * Returns empty array if <number> is negative or <array> is not an array
 * Returns last index of <array> if <number> is not a number or no <number> argument is given
 * Returns whole array if <number> is greater than array length
 * 
 * @param {Array} Array to return elements from
 * @param {Number} Number of array elements to return
 * 
 * @return {Array} Empty array: Empty array that is returned if <number> is negative or <array> argument is not an array
 * @return {Array} New array: New array of <number> elements starting at end of <array> argument, returned if <number> exists 
 * @return {Any Datatype} Last element of array: Returned if <number> is not a number or not provided
 * @return {Array} Whole array argument: Returned if <number> is greater than <array> length
 * and is less than length of array
 * 
 * Usage:
 * 
 *      let myArr = [1,2,3,4,5];
 *      last(myArr, 3);    // [3,4,5]
 *      last(myArr, -4);   // []
 *      last(myArr);       // [5]
 * 
 */
 
 function last(array, number){
    // declare variable that stores an empty array literal 
    var newArray = [];
  // use if-else chain
  // if <number> is negative or <array> is not an array, return empty array
  if (number < 0 || !Array.isArray(array)) {
      return [];
  }  
  // else, if <number> is not a number or not provided, return last element of array
  else if (isNaN(number)) {
      return array[array.length - 1];
  }
  // else, if <number> is greater than the length of <array> return whole array.
  if (number > array.length){
      return array;
  }
  // else, return <number> elements from back of array
  // create a for loop, loop backwards through array <number> times
  // unshift each element into new array
  else {
  for (var i = array.length - 1; i >= number - 1; i--) {
      // adds each element to front of new array
      newArray.unshift(array[i]);
    }
  } return newArray;
}

module.exports.last = last;









/**
 * indexOf: returns the index of the first occurrence of <value> in <array>. If <value> is not found in <array>,
 * returns -1.
 * 
 * @param {Array} Array: The collection to check for <value>.
 * @param {Any Datatype} Value: The value to check for in <array>.
 * 
 * @return {Number} Index: First array index where <value> is found.
 * @return {Number} -1: Returned if <value> is not found within array.
 * 
 * Usage:  
 *      let myArr = [1,2,3,4,5];
 *      indexOf(myArr, "some string");  // -1
 *      indexOf(myArr, 4);              // 3
 * 
 */
 
function indexOf(array, value) {
  // loop through array
  for (let i = 0; i < array.length; i++) {
    // if value is found at a given array index, return that index.
    // we want first occurrence of index, so we *return* and escape loop once we find it. 
    if (array[i] === value) {
        return i;
    }
  } 
  // if value is not found, loop exits without doing anything and -1 is returned
  return -1;
} 

module.exports.indexOf = indexOf;









/**
 * contains: Uses a ternary operator to see if <value> exists in <array>, returns true or false
 * 
 * @param {Array} Array: The collection to check for the <value>.
 * @param {Any datatype} Value: The value to check for in <array>.
 * 
 * @return {Boolean} True: Returned if <array> contains <value>.
 * @return {Boolean} False: Returned if <array> does not contain <value>.
 * 
 * Usage:
 *      
 *      let myArr = [true, "hey", "test", 5];
 *      contains(myArr, true);  // true
 *      contains(myArr, "hey"); // true
 *      contains(myArr, 14);    // false    
 * 
 */

function contains(array, value) {
    // create result variable set to 0
    let result = 0;
    // loop through array
    for (let i = 0; i < array.length; i++) {
        // if value is found in array, change result to 1
        array[i] === value ? result++ : result;
    }
    // return evaluation of ternary operator 
    // if result > 0, return true
    return result > 0 ? true : false;
}

module.exports.contains = contains;










/**
 * each: If a given <collection> is an array, uses a for loop to perform a given <action> on the 
 * collection's given value, index, and the collection itself.
 * Else (if given <collection> is an object), uses a for-in loop to perform a given <action> on the
 * collection's given value, key, and the collection itself.
 * 
 * @param {Array or Object} Array or object: The <collection> to perform the <action> on.
 * @param {Function} Function: The <action> to perform on the array or object (<collection>).
 * 
 * @return no return value
 * 
 * Usage:
 *      
 *      let myArr = [1,2,3,4,5]
 *      each(myArr, function(element, index, collection) {
            return element                      
        });                 
        // 1
        // 2
        // 3
        // 4
        // 5
 * 
 */
 
 // takes collection and function as parameters
function each(collection, action) {
    // if <collection> is array, use loop to call <function> on elements
    // function takes element, index, and collection as parameters
    if (Array.isArray(collection)) {
        // loop through array
        for (var i = 0; i < collection.length; i++) {
            // for each element, call function
            action(collection[i], i, collection);
        }
    }
    else {
        // else loop through object
            // perform action on each collection value, key, and <collection>
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}

module.exports.each = each;












/**
 * unique: takes an <array>, returns a new array with all duplicates removed using indexOf()
 * 
 * @param {Array} Array: an array (with potential duplicates) to be de-duplicated
 * 
 * @return {Array} Array: a new array that contains only unique instances from inputted <array>
 * 
 * Usage:
 * 
 *      let dupedArray = [1,1,1,2,2,2,3,3,3];
 *      unique(dupedArray);     // [1,2,3]
 * 
 */
 
 // takes an array
function unique(array) {
    // create empty array variable
    let newArray = [];
    // loop through array
    for (let i = 0; i < array.length; i++) {
    // use _.indexOf()-- if it returns -1,  
    // if given array element is not in newArray, push that element to newArray
        if (newArray.indexOf(array[i]) === -1) {
            newArray.push(array[i]);
        }
    } return newArray;
}

 module.exports.unique = unique;
 
 
 
 
 
 
 
 
 
 /**
 * filter: use each() to call a function that performs a task on a <collection>. 
 * Each task operates on a given collection element, that element's index, and the whole collection.
 * 
 * The each() callback function uses the filter() <test> argument to run a given test on the collection,
 * element, and element index.
 * If the test passes for a given element (returns true), add that element to a new array.
 * Return that new array.
 * 
 * @param {Array} Array: an array whose elements will be tested
 * @param {Function} Test: a function that performs a task on the <array> elements
 * 
 * @return {Array} Array: an array of elements that returned true for the <test>. 
 * 
 * Usage:
 *      
 *      let myArr = [1,2,3,4,5,6];
 *      let isEven = function(number) {
            return number % 2 === 0;
        }
        let isOdd = function(number) {
            return number % 2 === 1;
        }
 *      filter(myArr, isEven); // [2,4,6]     
 *      filter(myArr, isOdd); // [1,3,5]
 * 
 */
 
 function filter(array, test) {
    // declare empty array variable []
    var newArray = [];
    // call each on array and test
    each(array, function (element, index, collection) {
    // each is performing "function" on element, index, and collection of array
        if (test(element, index, collection)) {
            newArray.push(element);
        }
    });
    // if the function call on each element returns true, push said array element to new array
    // return newArray
    return newArray;
}

module.exports.filter = filter;










/**
 * reject: use filter() on a given <array> to create an array of elements that don't pass the filter() callback function.
 * return that new array
 * 
 * @param {Array} Array: an array whose elements are passed through a given <test>
 * @param {Function} Test: a test that is passed to the array elements through filter()
 * 
 * @return {Array} Array: Array that is a collection of elements that failed the input test
 * 
 * Usage:
 *  
 *      let myArr = [1,2,3,4,5,6];
 *      let isEven = function(number) {
            return number % 2 === 0;
        }
        let isOdd = function(number) {
            return number % 2 === 1;
        }
 *      reject(myArr, isEven); // [1,3,5]     
 *      reject(myArr, isOdd); // [2,4,6]
 * 
 */

 function reject(array, test) {
    // create new array to store values that fail test
     let newArr = [];
     // call filter with collection and function that takes three params
     filter(array, (element, index, collection) => {
       if (!test(element, index, collection)) {
         newArr.push(element);
       }
     });
     return newArr;
  }
  
  module.exports.reject = reject;
  
  
  
  
  
  
  
  
  
  /**
   * partition: takes an array and a function. uses filter() to create a new array of elements that pass the function, 
   * and uses reject() to create another array of elements that fail the function
   * returns those arrays as new elements in a third array that is returned from the partition function
   * 
   * @param {Array} Array: original array whose elements are tested with the function parameter
   * @param {Function} Func: a test function that is used on all array elements
   * 
   * @return {Array} Array: an array that contains two arrays: one that is returned from the filter() call,
   * and one that is returned from the reject() call
   * 
   * Usage:
   * 
   *        let myArr = [1,2,3,4,5,6]
   *        let isEven = function(number) {
            return number % 2 === 0;
            }
            partition(myArr, isEven); // [[2,4,6],[1,3,5]]
   * 
   */
   
function partition(array, func) {
    // use _.filter() and _.reject() to create two new arrays,
    // declare final array
    let partition = [];
    // declare filterArray
    let filterArray = [];
    // use filter() to push elements that pass the function param into filterArray
    filter(array, (element, index, collection) => {
        if (func(element, index, collection)) {
            filterArray.push(element);
        } 
    })
    // declare rejectArray;
    let rejectArray = [];
    // use reject() to push elements that fail the function param into rejectArray 
    reject(array, (element, index, collection) => {
        if (!func(element, index, collection)) {
            rejectArray.push(element);
        }
    })
    // add new arrays to partition array and return partition array     
    partition.push(filterArray, rejectArray);
    return partition;
}

module.exports.partition = partition;








/**
 * map: calls a <function> for each element in a <collection>, adds the return value of each function call
 * into a new array, returns that array.
 * 
 * @param {Array or Object} Collection: a collection of elements to be iterated over with a function
 * @param {Function} Function: a function to perform over the elements of a collection
 * 
 * @return {Array} Array: a new array with elements from input array modified by function
 * 
 * Usage:
 *  
 *      let myArr = [1,2,3,4,5]
 *      map(myArr, function(item) {
            return item * 2;
        });                  
        // [2,4,6,8,10]
 * 
 */
 
function map(collection, func) {
    // create empty array to store returned values
    let newArr = [];
    // use _.each to perform func on collections
    each(collection, function(element, index, collection) {
        // push result of function call into newArr
        newArr.push(func(element, index, collection));
    });
    // return new array
    return newArr;
}

module.exports.map = map;










/**
 * pluck: iterates through an <array> of objects, and for a given <property>, returns an array with the value of <property>
 * for each <array> object.
 * 
 * @param: {Array} Array: an array of objects to iterate through
 * @param: {String} Property: a property to search for in each array object
 * 
 * @return: {Array} Array: an array containing the values of the given property in each object of the array
 * 
 * Usage:
 * 
 *      let myArr = [
            {
                id: 1,
                name: 'Julie',
                age: 14
            },
            {
                id: 2,
                name: 'JP',
                age: 25
            },
            {
                id: 3,
                name: 'Ofer',
                age: 31
            }
        ]
        pluck(myArr, 'name');     // ['Julie','JP','Ofer']  
 */
 
 function pluck(array, property) {
    // return the call of _.map on the array arg and a callback(property)
   return  map(array, (element, index, collection) => {
        // map() returns an array
        // return the result of calling function on the property of each element in the collection
       return element[property];
    });
}

module.exports.pluck = pluck;










/**
 * every: takes a collection and function. 
 * if the function parameter is undefined, if any element of collecton is falsey, return false. otherwise,
 * if all collection elements are truthy, return true.
 * else, call the function on every element of the given collection. if any element passed through the function
 * returns false, return false. otherwise, if all elements return true, return true.
 * 
 * @param {Array or Object} Collection: a collection to iterate through with the given function
 * @param {Function} Function: a function/test to run on given collection elements
 * 
 * @param {Boolean} True: returned if there are no falsey elements in collection or no false returns from function
 * @param {Boolean} False: returned if there are any falsey elements in collection or false returns from function
 * 
 * Usage:
 *      
 *      myArr = [1,2,3,4,5,6];
 *      every(myArr, function(number) {
            return number % 2 === 0;
        })                              // false
        every(myArr, function(item) {
            return typeof item === "number"
        })                              // true
 * 
 */
 
 function every(collection, funct) {
    // call function on every element of collection
    // if collection is array, use (element, index, collection) parameters
    // if collection is object, use (value, key, collection) parameters
    // use each to test if collection is array or object
    // create flag variable result, which will be returned
    let result = true;
    // if funct parameter is undefined
    if (funct === undefined) {
        // use each to loop through collections
        each(collection, function(element, index, collection) {
            // if any element, index, or collection are falsey, change result to false
            if (!element) {
                result = false;
            }
        });
    }
    // else use each to run test function on collection
       else {
        each(collection, function(element, index, collection) {
        // if return value of calling function on every element is true, return true
        // if return value of calling function on even one element is false, return false
            if (!funct(element, index, collection)) {
                result = false;
            }
        });
       }
    return result;
}

module.exports.every = every;









/**
 * some: takes a collection and function. 
 * if the function parameter is undefined, if any element of collecton is truthy, return true. otherwise,
 * if all collection elements are falsey, return false.
 * else, call the function on every element of the given collection. if any element passed through the function
 * returns true, return true. otherwise, if all elements return false, return false.
 * 
 * @param {Array or Object} Collection: a collection to iterate through with the given function
 * @param {Function} Function: a function/test to run on given collection elements
 * 
 * @param {Boolean} True: returned if there are any truthy elements in collection or any true returns from function
 * @param {BOolean} False: returned if there are no truthy elements in collection or no true returns from function
 * 
 * Usage:
 *      
 *      myArr = [1,2,3,4,5,6];
 *      some(myArr, function(number) {
            return number % 2 === 0;
        })                              // true
        some(myArr, function(item) {
            return typeof item === "string"
        })                              // false
 * 
 */

function some(collection, funct) {
    // call function for every element of collection
    // if collection is array, use parameters (element, index, collection)
    // if collection is object use parameters (value, key, collection)
    // return value of calling function is true for at least one element, return true
    // if return value is false for all elements, return false
    // if function is not provided, return true if at least one element is truthy, otherwise return false
    let result = false;
    // if funct parameter is undefined
    if (funct === undefined) {
        // use each to loop through collections
        each(collection, function(element, index, collection) {
            // if any element, index, or collection are truthy, change result to true
            if (element) {
                return true;
            }
        });
    }
    // else use each to run test function on collection
       else {
        each(collection, function(element, index, collection) {
        // if return value of calling function on every element is false, do nothing
        // if return value of calling function on even one element is true, change result to true
            if (funct(element, index, collection)) {
                result = true;
            }
        });
       }
    return result;
}

module.exports.some = some;










/**
 * reduce: iterates through an array with a function. if seed is not provided, use first index of array as seed 
 * and continue to next element, using function with seed/previous value and next array element. use return value of function
 * as next seed/previous value.
 * 
 * if seed is provided, use seed as previous value, run function through array as above.
 * 
 * return final value of function as return result.
 * 
 * @param {Array} Array: an array of elements to iterate through with function
 * @param {Function} Function: a function to perform on array elements (and seed)
 * @param {Any datatype} Seed: an optional starting value to use with first array element when function is first called
 * 
 * @return {Any datatype} Previous: The result of running a function on a starting parameter, the first array element, 
 * then the next array element with the return result, etc.
 * 
 * Usage:
 * 
 *      // using reduce to sum a total of numbers
 *      let myArr = [1,2,3,4,5];
 *      myArr.reduce(function(sum, number) {
 *          return sum + number;
 *      },0);
 *      // 15
 * 
 *      // using reduce to flatten an array of subarrays
 *      let myArr = [[1,2],[3,4],[5,6]]
 *      myArr.reduce(function(flattenedArray, subarray) {
            return flattenedArray.concat(subArray);
        }, [])
        // [1,2,3,4,5,6]
        
 */
 
 
 function reduce(array, funct, seed) {
    // call function for every element in collection with argument: (previous result, element, index)
    // loop through array, call funct on each element, previous result, and index
    var previous = array[0];
    if (seed === undefined) {
        seed = array[0];
        for (let i = 1; i < array.length; i++) {
            previous = funct(previous, array[i], i);
        } 
    } else {
        for (let i = 0; i < array.length; i++) {
            if (i === 0) {
            previous = funct(seed, array[i], i);
            } else
            previous = funct(previous, array[i], i);
        } 
    }
    // use return value of funct = previous result
    // after last iteration, return the return value of final function call
    return previous;
}

module.exports.reduce = reduce;











/**
 * extend: takes an undefined number of objects and turns them into an array (rest parameter).
 * loop through array of objects and copy key-value pairs from following objects to first object.
 * return first object.
 * 
 * @param {Array} Array: array of objects formed from all objects put into parameters
 * 
 * @return {Object} Object: an object with copies of all key-value pairs from all objects put into parameters
 * 
 * Usage: 
 * 
 *      let obj1 = {
            a: 1,
            b: 'Angela'
        };
        let obj2 = {
            c: 2,
            d: 'Matt'
        };
        let obj3 = {
            e: 3,
            f: 'Ofer'
        }
        extend(obj1, obj2, obj); // { a: 1, b: 'Angela', c: 2, d: 'Matt', e: 3, f: 'Ofer' }
 *
 */

function extend(...objects) {
    // copy properties from object2 to object1. if there are more parameters, continue to pass those
    // into object1 in order
    // loop through array starting at index 1
    for (let i = 1; i < objects.length; i++) {
        // copy each object to objects[0] if properties do not exist in objects[0]
        var firstObj = objects[0];
        var currentObj = objects[i];
        // for each key in object, add key and value to firstObj
        for (var key in currentObj) {
            firstObj[key] = currentObj[key];
        }
    }
    
   return objects[0];
}

module.exports.extend = extend;