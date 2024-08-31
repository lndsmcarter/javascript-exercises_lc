const findTheOldest = function(people) {
    const currentYear = (new Date()).getFullYear();

    

    let oldest = people.sort(function(a, b) {
        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
    }) 
    
    return oldest[0]
};

// Do not edit below this line
module.exports = findTheOldest;
