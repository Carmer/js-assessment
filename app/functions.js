exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(null, arr)
  },

  speak : function(fn, obj) {
    return fn.call(obj)

  },

  functionFunction : function(str) {
    return function(arg) {
      return str + ", " + arg
    }

  },

  makeClosures : function(arr, fn) {
    var answers = [];

    var makeFunction = function(input) {
      return function() {
        return fn(input);
      };
    };

    for (var i = 0; i < arr.length; i++) {
      answers.push(makeFunction(arr[i]));
    }
    return answers;
  },

  partial : function(fn, str1, str2) {
    return function(str3) {
      return fn.call(null, str1, str2, str3)
    };
  },

  useArguments : function() {
    var retVal = 0;

    for (var i = 0; i < arguments.length; i++) {
      retVal += arguments[i]
    }
    return retVal
  },

  callIt : function(fn) {
    const args = Array.prototype.slice.call(arguments, 1, arguments.length)
    fn.apply(null, args);
  },

  partialUsingArguments : function(fn) {
    const args = Array.prototype.slice.call(arguments, 1, arguments.length)
    return function() {
      const moreArgs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, moreArgs);
    }

  },

  curryIt : function(fn) {

  }
};
