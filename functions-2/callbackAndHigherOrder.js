////////// PROBLEM 1 //////////

/*
  Write a function called multiply that takes in three parameters: two numbers and a callback function.  
  Invoke the callback, passing in the product of the two numbers multiplied as the argument. 
*/

// CODE HERE

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

const multiply = (num1,num2,cb) => {
  return cb(num1*num2)
}

// multiply(4, 3, answer => {
//   console.log('The answer is ' + answer) //should console.log 12
// })



////////// PROBLEMS 2 - 6 //////////

// The names array will be used in problems 2 - 6.

// Do not edit the code below.
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan']
// Do not edit the code above.

////////// PROBLEM 2 //////////

/*
  Write a function called first that takes in two parameters, an array and a callback function.
  Then invoke the callback function, passing in the first element in the array as it's argument.
*/

// CODE HERE 

const first = (arr, cb) => {
  cb(arr[0])
}

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

// first(names, firstName => {
//   console.log('The first name in names is ' + firstName)
// })



////////// PROBLEM 3 //////////

/*
  Write a function called last that takes in an array and a callback function. 
  Then invoke the callback, passing in the last element in the array as the argument.
*/

// CODE HERE

const last = (arr,cb) => {
  cb(arr[arr.length -1])
}

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

// last(names, lastName => {
//   console.log('The last name in names is ' + lastName)
// })



////////// PROBLEM 4 //////////

/*
  Write a function called contains that takes in three parameters: an array, a name and a callback.  
  Check if the name exists in the array. 
  If it does, invoke the callback with true as the argument. 
  If the name does not exist, invoke the callback with false as the argument.
*/

// CODE HERE 

const contains = (arr, firstName, cb) => {
  if (arr.includes(firstName)) {
    cb(true)
  } else cb(false)
}

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

// contains(names, 'jeff', result => {
//   if(result === true){
//     console.log("They'ren't in the array")
//   } else {
//     console.log("They'ren't  in the array")
//   }
// })



////////// PROBLEM 5 //////////

/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
  Hint: you can use a nested for loop to do this.
*/

// CODE HERE

const uniq = function(arr, cb) {
  let uniqArr = []
  for (let i=0; i<arr.length; i++) {
    if (!uniqArr.includes(arr[i])) {
      uniqArr.push(arr[i])
    }
  }
  // console.log(uniqArr)
  return cb(uniqArr)
}


/*
  Invoke the uniq function, passing in the names array from above and a callback function.
  The callback function should take in one parameter called uniqArr.
  The callback should print a string that says:
  'The new names array with all the duplicate items removed is [UNIQARRPARAM].'
*/

// CODE HERE

// uniq(names, function(uniqArrParam){
//   // console.log(uniqArrParam)
//   uniqArrGlobal = uniqArrParam
//   console.log('The new names array with all the duplicate items removed is ' + uniqArrParam) // why is it console.logging uniqArrParam without the array brackets?
// })


////////// PROBLEM 6 //////////

/* 
  Write a function called each that takes in an array of names and a callback function. 
  For each name in the array, invoke the callback and pass in the name and the name's index as arguments.
*/

// CODE HERE 

const each = (namesArr, cb) => {
  return namesArr.forEach((person, index) => cb(person))
}

/*
  Invoke the each function, passing in the names array and a callback function.
  The callback function should take in two paremeters, item and index.
  The callback should print a string that says:
  'The item at index [INDEXPARAM] is [ITEMPARAM].'
*/

// CODE HERE

// each(uniqArrGlobal, function(person,index){
//   console.log(`The item at index ${index} is ${person}.`)
// })

////////// PROBLEM 7 //////////

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
*/

// Do not edit the code below.
var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
]
// Do not edit the code above.

// CODE HERE 

const getUserById = (array, id, callback) => {
  array.forEach(user => {
    if (user.id === id) {
      return callback(user)
    } else return 'No user found with that id'
  })
}

// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER

// getUserById(users, '16t', function(user) {
//   console.log(user)
//   // console.log('The user with the id 16t hsa the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address)
// })

// getUserById(users, '16t', user => {
//   console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address) 
// })

////////// CHALLENGE //////////

/*
  You'll be writing a higher order function that returns
  another function. 

  Create a function called addingFactory that takes in
  one parameter (it will be a number).

  addingFactory should return a function that takes in
  one parameter (this will be another number).

  The (inner) function that's being returned should add
  the two parameters together and return the sum.
*/

// CODE HERE

function addingFactory(num1) {
  return function(num2) {
    return num1 + num2
  }
}

/*
  Now that you have addingFactory, you can create other
  functions from it. 

  You're going to invoke addingFactory and save the result
  to a new variable. 

  Create a variable called addTen and set it equal to 
  the invocation of addingFactory passing in the number
  10 as an arguemnt.
*/

// CODE HERE

const addToOne = addingFactory(1)
const addToTen = addingFactory(10)
/*

  Now the inner function is stored in the addTen variable! 

  Call the addTen function passing in another number and
  console log the result.

  Call it a second time, passing in a different number
  to see the different outputs.
*/

// CODE HERE

// console.log(addToTen(5))

/*
  Let's make another function from the addingFactory. 

  This time, pass in your favorite number and name
  the variable addNUMBER with the name of the number
  you chose. 

  Once you create that, you can invoke the function
  to add any number to your favorite number!
*/

// CODE HERE

// console.log(addToOne(3))


///////Remaining come from full-stack academy///////

//// Write a function, partial, that accepts a callback function and another value (let's call it argA) as arguments. partial should return a new function. When invoked, the new function will:

//// Accept its own argument (let's call it argB)
//// Call the callback, passing in argA as the first argument and argB as the second argument
//// Return the value returned by the callback

const partial = (cb, argA) => {
  return function(argB) {
    return cb(argA, argB)
  }
}

function add (a, b) {
  return a + b
};

let sumFive = partial(add, 5);
sumFive(10) // => 15;

// console.log(sumFive(10))

let greaterThan = (a,b) => {
  if (a>=b) {
    return a
  } else {
    return b
  }
}

let greaterThan100 = partial(greaterThan, 100)
// console.log(greaterThan100(99))



//// Write a function, callCount, that returns a new function. The new function should return the number of times its been called. ////

const callCount = () => {
  let count = 0
  return function() {
    count++
    console.log(count)
    return count
  }
}

let newFunction1 = callCount('poopoo');
let newFunction2 = callCount('peepee');

newFunction1(); // => 1
newFunction1(); // => 2

newFunction2(); // => 1
newFunction2(); // => 2
newFunction2(); // => 3


//// Define a function, stringify, that takes a callback function as an argument and returns a new function. When the new function is called, it should invoke the callback function, coerce the value returned into a string, and then return that string. ////

const stringify = (cb) => {
  return function() { // why do we need this line?
    return String(cb())
  }
}

function returnsANumber() {
  return 100;
}

let returnsABoolean = () => Math.random() >=.5 ? true : false

let poopoo = stringify(returnsANumber);
console.log(poopoo()); // => '100'

let peepee = stringify(returnsABoolean)
console.log(peepee())

