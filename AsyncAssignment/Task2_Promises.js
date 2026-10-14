// Task 2: Promise Example

console.log("Task 2: Promise Example");

function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve({ id: 1, name: "John" });
      } else {
        reject("Failed to fetch user");
      }
    }, 1000);
  });
}

fetchUser()
  .then((user) => {
    console.log("Promise fulfilled:", user);
  })
  .catch((error) => {
    console.log("Promise rejected:", error);
  });

console.log("This line runs immediately while the Promise is pending.");
