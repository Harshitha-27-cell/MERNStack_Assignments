/*
Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
*/
const temperatures = [32, 35, 28, 40, 38, 30, 42]
r1=temperatures.filter(ele=>ele>35)
console.log("temperatures above ",r1)
r2=temperatures.map(ele=>(ele*9/5)+32)
console.log(r2)
tol=temperatures.reduce((acc,ele)=>acc+ele)
r3=tol/temperatures.length
console.log(r3)
r4=temperatures.find(ele=>ele>40)
console.log(r4)
r5=temperatures.findIndex(ele=>ele===28)     
console.log(r5)


/*
Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"
*/
const courses = ["javascript", "react", "node", "mongodb", "express"];
r6=courses.filter(ele=>ele.length>5)
r7=courses.map(ele=>ele.toUpperCase())
acc=""
r8=courses.reduce((acc,ele)=>acc+"|"+ele)
r9=courses.find(ele=>ele=="react")
r10=courses.findIndex(ele=>ele=="node")
console.log(r6)
console.log(r7)
//console.log(r8)
console.log(r9)
console.log(r10)


/*

Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92
*/
const marks = [78, 92, 35, 88, 40, 67];
r11=marks.filter(ele=>ele>=40)
r12=marks.map(ele=>ele+5)
mx=0
r13=marks.reduce((acc,ele)=>acc>ele?acc:ele)
r14=marks.find(ele=>ele<40)
r15=marks.findIndex(ele=>ele===92)
console.log(r11)
console.log(r12)
console.log(r13)
console.log(r14)
console.log(r15)