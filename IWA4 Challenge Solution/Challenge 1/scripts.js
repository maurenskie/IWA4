const date = 2050 // Use assignment operator instead of equality check
const status = 'student'
let count = 0 // Initialize count variable with let instead of const, and set it to 0

if (date === 2050) { // Use strict equality operator to compare values
	console.log("January", 'New Year’s Day') // Add closing parenthesis
	console.log("March", 'Human Rights Day')
	let month = 'April' // Declare and initialize month variable with let
	console.log(month, 'Family Day') // Use month variable instead of hardcoding month value
	console.log(month, 'Freedom Day')
	count += 4 // Use compound assignment operator to increment count variable

	if (status === "student") { // Use strict equality operator to compare values
	  console.log('June', 'Youth Day')
		count += 1 // Use compound assignment operator to increment count variable
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	month = 'December' // Assign new value to month variable instead of redeclaring it
	console.log(month, 'Day of Reconciliation')
	count += 3 // Use compound assignment operator to increment count variable

	if (status === "parent") { // Use strict equality operator to compare values
	  console.log(month, 'Christmas Day')
		count += 1 // Use compound assignment operator to increment count variable
  }

	console.log(month, 'Day of Goodwill')
	count += 1 // Use compound assignment operator to increment count variable
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)
