exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    for (var i = 0 ; i < arr.length ; i ++) {
      if ( arr[i] === item ) {
        return i;
      }
    }
    return -1
  },

  sum : function(arr) {
    var arrSum = 0
    for (var i =0 ; i < arr.length ; i ++) {
      arrSum += arr[i];
    }
    return arrSum;
  },

  remove : function(arr, item) {
    return _.without(arr, item);
    },

  removeWithoutCopy : function(arr, item) {
    var length = arr.length
    for (var i = 0; i < length ; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1)
        i = i - 1
        length = length - 1
      }
    }
    return arr
  },

  append : function(arr, item) {

    arr.push(item)
    return arr
  },

  truncate : function(arr) {
    var lastElement = arr.length - 1;
    arr.splice(lastElement, 1)
    return arr
  },

  prepend : function(arr, item) {
    arr.splice(0,0,item)
    return arr
  },

  curtail : function(arr) {
    arr.splice(0,1)
    return arr
  },

  concat : function(arr1, arr2) {
    var newArr = (arr1.join(" ") + " " + arr2.join(" ")).split(" ")
    return newArr
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count : function(arr, item) {
    var elementCount = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        elementCount ++
      }
    }
    return elementCount
  },

  duplicates : function(arr) {
    var found = {};
    var duplicates = [];

    for (var i = 0; i < arr.length; i++) {
      found[arr[i]] = found[arr[i]] ? found[arr[i]] + 1 : 1;
    }

    for (var item in found) {
      if (found.hasOwnProperty(item) && found[item] > 1) {
        duplicates.push(parseInt(item));
      }
    }
    return duplicates
  },

  square : function(arr) {
    var squares = [];
    for (var i = 0; i < arr.length; i++) {
      squares.push(arr[i] * arr[i])
    }
    return squares
  },

  findAllOccurrences : function(arr, target) {
    var occurrence = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        occurrence.push(i)
      }
    }
    return occurrence
  }
};
