module.exports = {
  first: function ( array, n ) {
    var result;

    if (arguments.length === 1) {
      result = array[0];
    }else{
      result = array.slice(0,n);
    }

    return result;
  }
};