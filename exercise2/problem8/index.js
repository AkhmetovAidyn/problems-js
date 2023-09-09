function isEqual(obj1, obj2) {
  // Your code
  if(Object.keys(obj1).length === 0 && Object.keys(obj2).length === 0){
    return true
  }else if(JSON.stringify(obj1) === JSON.stringify(obj2)){
    return true;
  } else {return Object.is(obj1,obj2);}
}

console.log(
  isEqual(
    {
      name: "Benny",
      phone: "3325558745",
      email: "benny@edabit.com",
    },
    {
      name: "Jason",
      phone: "9853759720",
      email: "jason@edabit.com",
    }
  )
); // false

console.log(
  isEqual(
    {
      name: "Jason",
      phone: "9853759720",
      email: "jason@edabit.com",
    },
    {
      name: "Jason",
      phone: "9853759720",
      email: "jason@edabit.com",
    }
  )
); // true


module.exports = isEqual;
