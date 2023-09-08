function isPrimitive(data) {
  if(data === Object(data)){
   return false;
 }else{
   return true;
 }
}

console.log(isPrimitive(new RegExp('^[a-zA-Z0-9]+$', 'g'))); // true

console.log(isPrimitive(null)); // false

console.log(isPrimitive("")); // false


module.exports = isPrimitive;
