 // importin names...//
const createNames = require('./names');
const names = createNames('tabish','ghouri');
console.log(names);

// importing and pringting emails ...//
const getEmails = require('./emails');
const user = getEmails('tabish.faisaltn@gmail.com', 12);
console.log(user)

// importing and printing employees info//
 const employees = require('./employes');
 const employee = employees('tabish','faisal','tabish.faisaltn@gmail.com',10);
 console.log(employee);

 // trying to print a photo//
 const getPhoto = require('./getPhoto');
 const img = getPhoto('https://example.com/my-photo.jpg');
 console.log(img);
 
 



