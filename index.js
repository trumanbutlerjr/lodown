'use strict';

// YOU KNOW WHAT TO DO //


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



/**
 * identity: Takes in a value and returns it unchanged.
 * 
 * @param {*} value: the value passed into identity.
 * @returns {*}: the value unchanged. 
 */
 function identity(value) {
    return value;
}
module.exports.identity = identity;




/**
 * typeOf: Indicates the type of the passed-in value as a string.
 * 
 * @param {*} value: the value passed into typeOf.
 * @returns {string}: the value type as a string
 */
function typeOf(value) {
    if (Array.isArray(value)) {
        return 'array';
    } else if (value === null) {
        return 'null';
    } else {
        return typeof value;
    }
}
module.exports.typeOf = typeOf;



/**
 * first: prints the first selected elements of an array
 * 
 * @param {Array} array: the array being searched
 * @param {Number} number: the number of selected elements
 * @returns {Array}: an array of the selected elements
 */
 function first(array, number) {
    if (number < 0) {
        return [];
    }
    if (!Array.isArray(array)) {
        return [];
    } else if (!number || NaN) {
        return array[0];
    } else {
        return array.slice(0, Math.abs(number)); 
    }
}
module.exports.first = first;



/**
 * last: prints the last selected elements of an array
 * 
 * @param {Array} array: the array being searched
 * @param {Number} number: the number of selected elements
 * @returns {Array}: an array of the selected elements
 */
function last(array, number) {
    if (number > array.length) {
        return array;
    }
    if (number < 0) {
        return [];
    }
    if (!Array.isArray(array)) {
        return [];
    } else if (!number || NaN) {
        return array[array.length - 1];
    } else {
        return array.slice(array.length - number);
    }
}
module.exports.last = last;



/**
 * indexOf: searches an array to find the index of a given value
 * 
 * @param {Array} arr: the array being searched for its index
 * @param {*} val: the value that we want the index of
 * @returns {Number}: the index of the value passed into the function
 */
function indexOf(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        } 
    }
    return -1;
}
module.exports.indexOf = indexOf;



/**
 * contains: searches an array to determine if a given value exists 
 * 
 * @param {Array} arr: the array being searched 
 * @param {*} val: the value we are searching for
 * @returns {Boolean}: true if the value is present and false if not
 */
function contains(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return true;
        } 
    }
    return false;
}
module.exports.contains = contains;


/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} col: The collection over which to iterate.
 * @param {Function} func: The Function to be applied to each value in the 
 * collection
 */
function each(col, func) {
    if (Array.isArray(col)) {
        for (var i = 0; i < col.length; i++) {
            func(col[i], i, col);
        }
    } else {
        for (var key in col) {
            func(col[key], key, col);
        }
    }
}
module.exports.each = each;




/**
 * unique: searches an array to locate duplicates and prints a new array 
 * with duplicates removed
 * 
 * @param {Array} array: array with possible duplicates
 * @returns {Array}: a new array with duplicates removed
 */
function unique(array) {
    let newArr = [];
    for (var i = 0; i < array.length; i++) {
        // if the value is not there (inidcated by -1), then I can push in that value becuase it's new
        if (indexOf(newArr, array[i]) === -1) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}
module.exports.unique = unique;




/**
 * filter: searches through an array and uses a function that establishes 
 * criteria to keep particular elements and push them into a new array
 * 
 * @param {Array} arr: the array being searched
 * @param {Function} func: the function acting on the array passed in
 * @returns {Array}: an array with the elements that meet criteria
 */
function filter(arr, func) {
    let newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr) === true) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
module.exports.filter = filter;





/**
 * reject: searches through an array and uses a function that establishes 
 * criteria to eliminate particular elements and push them into a new array
 * 
 * @param {Array} arr: the array being searched
 * @param {Function} func: the function acting on the elements
 * @returns {Array}: an array with the elements that meet criteria
 */
function reject(arr, func) {
    let newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr) === false) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
module.exports.reject = reject;



/**
 * partition: searches through an array and applies a function on each element
 * that designates it to one of two newly created arrays inside of a single
 * "parent" array.
 * 
 * @param {Array} arr: the array being searched
 * @param {Function} func: the function acting on the elements
 * @returns {Array}: an array with two subarrays
 */
function partition(arr, func) {
    let subArr1 = [];
    let subArr2 = [];
    for (var i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr) === true) {
            subArr1.push(arr[i]);
        } else if (func(arr[i], i, arr) === false) {
            subArr2.push(arr[i]);
        }
    }
    let newArr = [subArr1, subArr2];
    return newArr;
}
module.exports.partition = partition;



/**
 * map: creates an array with the results of calling a function on the 
 * elements/values of the passed in collection 
 * 
 * @param {Array or Object} col: the collection being searched
 * @param {Function} func: the function called on the elements/values
 * @returns {Array}: an array of the results using the function
 */
function map(col, func) {
    let newArr = [];
    if (Array.isArray(col)) {
        for (var i = 0; i < col.length; i++) {
            newArr.push(func(col[i], i, col));
        }  
    } else {
        for (var key in col) {
            newArr.push(func(col[key], key, col));
        }
    }
    return newArr;
}
module.exports.map = map;



/**
 * pluck: searches an array to create a list of items with a given property
 * 
 * @param {Array} arr: array being searched
 * @param {Function} func: the property each element will have in common
 * @returns {Array}: contains the list of elements with the shared property
 */
function pluck(arr, prop) {
    // use .map to loop through properties of objects 
    return map(arr, function(element, index, array) {
        // return array of object properties
        return element[prop];
    });
}
module.exports.pluck = pluck;



/**
 * every: determines if all values of a given collection uphold a criteria
 * sought after with a function
 * 
 * @param {Array or Object} col: the collection being searched
 * @param {Function} func: contains criteria used to evaluate the values
 * @returns {Boolean}: true if all values meet criteria and false if one or
 * more do not
 */
function every(col, func) {
    let boolean = true;
    // if ()
    if (func === undefined) {
        if (Array.isArray(col)) {
            for (var i = 0; i < col.length; i++) {
                if (!col[i]) {
                    boolean = false;
                }
            }  
        } else {
            for (var key in col) {
                if (!col[key]) {
                    boolean = false;
                }
            }
        }
    }
    if (typeof func === 'function') {
        if (Array.isArray(col)) {
            for (var i = 0; i < col.length; i++) {
                if (func(col[i], i, col) === false) {
                    boolean = false;
                }
            }  
        } else {
            for (var key in col) {
                if (func(col[key], key, col) === false) {
                    boolean = false;
                }
            }
        }
    }
    return boolean;
}
module.exports.every = every;






/**
 * some: determines if at least one value of a given collection upholds a criteria
 * sought after with a function
 * 
 * @param {Array or Object} col: the collection being searched
 * @param {Function} func: contains criteria used to evaluate the values
 * @returns {Boolean}: true if at least one value meets criteria and false if none
 * do not
 */
function some(col, func) {
    let boolean = false;
    // if ()
    if (func === undefined) {
        if (Array.isArray(col)) {
            for (var i = 0; i < col.length; i++) {
                if (col[i]) {
                    boolean = true;
                }
            }  
        } else {
            for (var key in col) {
                if (!col[key]) {
                    boolean = true;
                }
            }
        }
    }
    if (typeof func === 'function') {
        if (Array.isArray(col)) {
            for (var i = 0; i < col.length; i++) {
                if (func(col[i], i, col) === true) {
                    boolean = true;
                }
            }  
        } else {
            for (var key in col) {
                if (func(col[key], key, col) === true) {
                    boolean = true;
                }
            }
        }
    }
    return boolean;
};
module.exports.some = some;





/**
 * reduce: applies a function on each element of an array, which results
 * in a single output value
 * 
 * @param {Array} arr: the collection iterated through
 * @param {Function} func: the reduction we want to accomplish
 * @param {*} seed: where the reduction begins
 * @returns {*}: the single result from the reduction
 */
function reduce(arr, func, seed) {
    let prev;
    if (seed === undefined) {
        prev = arr[0];
        for (var i = 1; i < arr.length; i++) {
            prev = func(prev, arr[i], i);
        }
    return prev;
    } else {
        prev = seed;
        for (var i = 0; i < arr.length; i++) {
            prev = func(prev, arr[i], i);
        }
    return prev;
    }
}
module.exports.reduce = reduce;





/**
 * extend: combines objects into a single object that merges properties while retaining
 * the properties of the most recent addition
 * 
 * @param {Object} obj: an indefinite amount of objects
 * @returns {Object}: the combination of objects without duplicated properties
 */
function extend(obj) {
    let arr = Array.from(arguments);
    // let newObj = {};
    for (var i = 0; i < arr.length; i++) {
      Object.assign(obj, arr[i]);
    }
      return obj;
}; 
module.exports.extend = extend;
