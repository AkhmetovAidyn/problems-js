function getStudentsWithNamesAndTopNotes(value) {
  // Your code
  for(let i = 0; i < value.length;i++){
    if(value[i].notes.length == 0){
      value[i].notes = 0;
    }else{let largest = Math.max.apply(Math,value[i].notes)
    value[i].notes = largest;}
    
  }
  
  let str = JSON.stringify(value);
  str = str.replace(/notes/g, 'topNote');
  object = JSON.parse(str);
  return object;
}

console.log(
	getStudentsWithNamesAndTopNotes([
		{name: "John", notes: [3, 5, 4]},
		{name: "Max", notes: [1, 4, 6]},
		{name: "Zygmund", notes: [1, 2, 3]},
	])
)
// [
//   ({ name: "John", topNote: 5 },
//   { name: "Max", topNote: 6 },
//   { name: "Zygmund", topNote: 3 })
// ];


module.exports = getStudentsWithNamesAndTopNotes;
