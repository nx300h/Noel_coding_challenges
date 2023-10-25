// code an array of 10 element of type string (for example 10 students)

let students = ["John", "Leon", "Adam", "Bushka","Anthony","Lionard", "Fatima", "Noora", "Noel", "Bryan"]


// write a for loop that iterates through each element and prints each elelement

for (let i = 0; i < students.length;i++) {
    console.log(students[i])
}

//  write an infinite for loop

for (;;){
    console.log("hello")
}

//  convert the if/else/if to switch statement


// implement forEach function that prints all elements of the array below

students.forEach(
   function (value,index) {
      console.log("the element is " + value + " and its index is " + index)
   } 
)

// name few functions that come with arrays, that allow you to interate through the elements

students.forEach()
// students.map()
// students.filter()
// students.reduce()