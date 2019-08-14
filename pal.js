function palindrome(str) {
  // Good luck!
  let arr = str.toLowerCase().match(/[a-z0-9]/g);
  let begin = "";
  let end = "";

  while(arr.length > 1){

    begin = arr.shift();
    end = arr.pop();

    if(begin !== end){
      return "The string '" + str + "' is not a palindrome.";
    }

  }

  return "The string '" + str + "' is a palindrome."
}

console.log(palindrome("eye"));
