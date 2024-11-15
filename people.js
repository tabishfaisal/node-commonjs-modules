const names = require('./names');
const hobbies = require('./hobbies');

function creatPeople(){
    const person =  names('tabish', 'faisal');
    const personHobby = hobbies('reading','singing','swiming');

    return {
        firstName : person.firstName,
        lastName : person.lastName,
        hobbies : personHobby.hobbies,
    }
}
module.exports = creatPeople;