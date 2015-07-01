exports = (typeof window === 'undefined') ? global : window;
// I got this from the answer sheet. still a little fuzzy
exports.countAnswers =  {
  count : function (start, end) {
    var timeout;
    function doIt () {
      console.log(start++);

      if (start <= end) {
        timeout = setTimeout(doIt, 100);
      }
    }

    doIt();

    return {
      cancel : function () {
        timeout && clearTimeout(timeout);
      }
    };
  }
};
