/**
 * Build a function that finds the smallest positive number that is evenly
 * divisible by all of the numbers starting from 1 up to the value passed into your function.
 *
 * @param  { Number } ceiling This value will serve as your ceiling.
 * @return { Number }         Lowest Positive Number that is evenly divisible by all numbers
 *                            between 1 and `ceiling`
 */
module.exports = function ( ceiling ) {
  // do work here
  let dividends = [];
  for(let i=0;i<=ceiling; i++){
    dividends.push[i];
    }
  let result = ceiling;
  let counter = 0;
  while(counter<result){
    for(let j=0;j<dividends.length;j++){
      if(result%dividends[j] === 0){
        counter +=1;
      }else{
        counter = 0;
        result += 1;
      }
    }
  }
  return result;
};
