const findTheOldest = function(people) {
    people.sort((a,b) => {
        if (a.yearOfDeath === undefined) {
            return (2025 - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth);
        }

        else if (b.yearOfDeath === undefined) {
            return (a.yearOfDeath - a.yearOfBirth) - (2025 - b.yearOfBirth);
        }

        else {
            return (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth);
        }
    });

    return people[people.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
