const transpose = function(matrix) {
  // Put your solution here
  if (matrix.length <= 0){
    return [];
  }
  let output = [];
  for (let x = 0; x < matrix[0].length; x++) {
    output.push([]); // push empty arrays for how many indexes
  }
     
   
 
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      output[j].push(matrix[i][j]); // loop through each array and push the values of your to output
     
       
    }
  }
  return output;
};
 

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  const transposed = transpose(letters);
  let verticalJoin = transposed.map(ls => ls.join(''));

  if (letters.length <= 0 || word <= 0){
    return undefined;
  }

  for (l of verticalJoin) {
    if (l.includes(word))
      return true;
  }
  for (l of horizontalJoin) {
    if (l.includes(word))
      return true;
  }
  return false;
};



module.exports = wordSearch;