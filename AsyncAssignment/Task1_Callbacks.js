// Task 1: Callback Example

console.log("Task 1: Callback Example");

function fetchData(callback) {
  setTimeout(() => {
    const data = "User details loaded";
    callback(data);
  }, 1000);
}

fetchData((result) => {
  console.log("Callback result:", result);
});

console.log("This line runs before the callback completes.");
