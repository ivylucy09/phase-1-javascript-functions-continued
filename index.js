// code your solution here
// Define the saturdayFun function with a default parameter
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Test cases
  console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
  console.log(saturdayFun("bathe my dog")); // "This Saturday, I want to bathe my dog!"
  // define mondayWork function expression
 // const mondayWork = function(activity = "go to the office") {
   // return `This Monday I will ${"activity"}.`;
  //};
  //console.log(mondayWork());
  //console.log(mondayWork("work from home"));


// Define the mondayWork function using a function expression with a default parameter
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// Test cases
console.log(mondayWork()); // "This Monday, I will go to the office."
console.log(mondayWork("work from home")); // "This Monday, I will work from home."

// Define the wrapAdjective function
function wrapAdjective(wrapper = "*") {
    return function(adjective = "special") {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    };
  }
  
  // Test cases
  const wrapWithStars = wrapAdjective('*');
  console.log(wrapWithStars('a hard worker')); // "You are *a hard worker*!"
  
  const wrapWithBars = wrapAdjective('||');
  console.log(wrapWithBars('a dedicated programmer')); // "You are ||a dedicated programmer||!"
  
  // Testing default behavior
  console.log(wrapAdjective()()); // "You are *special*!"
  