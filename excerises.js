// Show factorial and fibonacci as examples. Show non-recursive implementation of fibonacci.

nope//     Write a recursive function that takes one numeric parameter, n, and returns a string with the numbers n down to 0, separated by spaces.

//     Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.

//     Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.

//     Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse. Show implementation with helper function that builds array and a standard implementation.

nope//     Implement a function that flattens a nested array. flatten([ [[[[55]]]], 1, [2] , ["thug life", [[4]]] ]); => [1,2,3,4]

//     Implement a function that will reverse a string recursively. reverse('abcdefg') => 'gfedcba'



//1
function numDown(){
    if(num > 0){
        return num + "" +numDown(--num);
    } else{
        return num;
    }
}
numDown(5);

//2


recursiveMultiplier = (arr,num) => {
    let newArr = [];
    
    subroutine = (arr,num) => {
      if(!arr.length) {
      return newArr; 
    } else {
      newArr.push(num * arr.shift());
      return subroutine(arr,num);
    }  
   }
   
   return subroutine(arr,num);
  }
  recursiveMultiplier();

  //3
   function exponent(base,expo){
    if(expo === 1) {
        return base;
      } else {
        expo--;
        return base * exponent(base,expo);
      }
   }

  exponent(4,6);
  
  //4
  recursiveReverse = (array) => {
    let newArr = [];
    
    subroutine = (arr,num) => {
      if(!arr.length) {
      return newArr;
    } else {
      newArr.push(arr.pop());
      return subroutine(arr);
    }  
   }
   
   return subroutine(array);
       
  }
  
  recursiveReverse([4,2,0]);


  //5 
  function flatten(arry){
      let flat =[];
      for(var a = 0; a < arry.length; a++){
          if(Array.isArray(arry[a])){
              flat = flat.concat(flatten(arry[a]));
          } else{
              flat.push(arry[a]);
          }
      }
      return flat;
  }
flatten([ [[[[55]]]], 1, [2] , ["thug life", [[4]]] ]);

  //6
function reverse(str) {
    if (str.length === 0) {
        return "";
    }

    return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
    
}
reverse('abcdefg')