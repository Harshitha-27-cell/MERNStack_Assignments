/*
ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"
*/
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];
r16=cart.filter(ele=>ele.inStock)
r17=cart.map(ele=>({name:ele.name,totalPrice:ele.price*ele.quantity}))
r18=cart.reduce((acc,ele)=>acc+(ele.price*ele.quantity),0)
r19=cart.find(ele=>ele.name=="Mouse")
r20=cart.findIndex(ele=>ele.name=="Keyboard")
console.log(r16)
console.log(r17)
console.log(r18)
console.log(r19)
console.log(r20)


/*
ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"
*/
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];
r21=students.filter(ele=>ele.marks>=40)
console.log(r21)
students.map(ele=>{
    if(ele.marks>=90)
    {
        ele.grade='A'
    
    }
    else if(ele.marks<90 && ele.marks>=75)
    {
        ele.grade='B'
    }
    else if(ele.marks<75 && ele.marks>=60)
    {
        ele.grade='C'
    }
    else
        ele.grade='D'
})
sumOfMarks=students.reduce((acc,ele)=>(acc+ele.marks),0)
r23=sumOfMarks/students.length
r24=students.find(ele=>ele.marks===92)
r25=students.findIndex(ele=>ele.name=='Kiran')
console.log(students) //r22
console.log(r23)
console.log(r24)
console.log(r25)


/*
ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"
*/
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
console.log(employees.filter(ele=>ele.department==="IT"))
employees.map(ele=>{ele.netSalary=ele.salary+(10*ele.salary/100)})
console.log(employees)
console.log(employees.reduce((acc,ele)=>(acc+ele.salary),0))
console.log(employees.find(ele=>ele.salary===30000))
console.log(employees.findIndex(ele=>ele.name==="Neha"))


/*
ASSIGNMENT 4: 
------------
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"
*/

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];
console.log(movies.filter(ele => ele.genre==="Sci-Fi"));
//console.log(movies.map(ele => `${ele.title} (${ele.rating})`));
console.log(movies.reduce((acc, ele) => acc + ele.rating, 0) / movies.length);
console.log(movies.find(ele => ele.title === "Joker"));
console.log(movies.findIndex(ele => ele.title === "Avengers"));


/*
ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000
*/
const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

console.log(transactions.filter(ele => ele.type === "credit"));
console.log(transactions.map(ele => ele.amount));
console.log(
  transactions.reduce(
    (acc, ele) => ele.type === "credit" ? acc + ele.amount : acc - ele.amount,
    0
  )
);
console.log(transactions.find(ele => ele.type === "debit"));
console.log(transactions.findIndex(ele => ele.amount === 10000));3