//3. filter(0 메소드를 사용하여 작성 하시오
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word =>word.length>6);
 
//expected output: Array ["exuberant", "destruction", "present"]

console.log(`expected output: Array:["${result}"]`);