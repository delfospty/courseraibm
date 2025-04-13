let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
let userRole = "admin";
let accessLevel;

console.log("Authentication status", authenticationStatus);

if (userRole === "admin") {
        accessLevel = "Full access granted";
    } else if (userRole === "manager") {
        accessLevel = "Limited access granted";
    } else {
        accessLevel = "No access granted";
    }

console.log("Access Level:", accessLevel);
