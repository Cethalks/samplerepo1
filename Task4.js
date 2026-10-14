//Create a simple Test Environment Selection Program
console.log("Test Environment Selection Program");
let browser = "Chrome"; // Variable storing selected browser

console.log("Browser:", browser);

switch (browser) {
    case "Chrome":
        console.log("Running tests on Chrome");
        break;
    case  "Firefox":
        console.log("Running tests on Firefox");
        break;
    case "Edge":
        console.log("Running tests on Edge");
        break;
    case  "Safari":
        console.log("Running tests on Safari");
        break;
    default:
        console.log("Unsupported browser");
}