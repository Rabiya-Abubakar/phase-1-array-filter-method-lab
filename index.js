// Code your solution here
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// Function to return a driver if the beginning provided letters match
function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}

// Function to access the data structure to check if the name matches
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}
