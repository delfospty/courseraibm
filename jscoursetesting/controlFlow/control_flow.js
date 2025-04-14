let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? true : false;
let userRole = "Enrolled Member"; // Example user role
let accessLevel;
let isLoggedIn = true;

console.log("Authentication Status:", authenticationStatus);

if (userRole === "Employee") {
        accessLevel = "Full access granted";
    } else if (userRole === "Enrolled Member") {
        accessLevel = "Dietary services access granted";
    } 
    else if (userRole === "Subscriber") {
        accessLevel = "Partial access to Dietary services";
    } 
        else {
        accessLevel = "No access granted";
    }

//console.log("Access Level:", accessLevel);

switch (userRole) {
    case "Employee":
        accessLevel = "Full access granted";
        break;
    case "Enrolled Member":
        accessLevel = "Dietary services access granted";
        break;
    case "Subscriber":
        accessLevel = "Partial access to Dietary services";
        break;
    default:
        accessLevel = "No access granted";
}


console.log("Access Level:", accessLevel);
