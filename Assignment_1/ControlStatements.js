/*
 HANDS-ON 1: Smart Login Status Engine
----------------------------------------

Initial data:
    let isLoggedIn = true;
    let isProfileComplete = false;

Tasks:
   1. If user is not logged in → show "Please login"
   2. If logged in but profile incomplete → show "Complete your profile"
   3. If logged in and profile complete → show "Welcome back!"
   4. Store the result in message
   5. Print the message
*/
isLoggedIn=true
isProfileComplete=false
if(isLoggedIn)
{
    if(isProfileComplete)
    {
        msg="Welcome back!"
    }
    else{
        msg="Complete your profile"
    }
}
else{
    msg="Please login"
}
console.log(msg)


/*
HANDS-ON 2: Course Price Tag Labeler
------------------------------------
Initial data:
     let price = 1299;

Tasks:
   1. If price < 500 → "Budget Course"
   2. If price between 500–1000 → "Standard Course"
   3. If price > 1000 → "Premium Course"
   4. Store label in courseTag
   5. Print the label
*/

price=3000
if(price<500)
{
    courseTag="Budget Course"
}
else if(price>=500 && price<=1000)
{
    courseTag="Standard Course"
}   
else
{
    courseTag="Premium Course"
}
console.log(courseTag)


/*
HANDS-ON 3: Enrollment Eligibility Checker
------------------------------------------
Initial data:
    let hasPaid = true;
    let hasCompletedBasics = false;

Tasks:
   1. If both conditions are true → "Enroll Now"
   2. Otherwise → "Complete Requirements"
   3. Use ternary operator
   4. Store result in enrollMessage
   5. Print message
*/
let hasPaid = true;
let hasCompletedBasics = false;
enrollMessage=(hasPaid && hasCompletedBasics)? "Enroll Now":"Complete REquirements"
console.log(enrollMessage)