// Task 3: Async/Await Example

console.log("Task 3: Async/Await Example");

function fetchStudent() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 101, name: "Alice", marks: 90 });
    }, 1000);
  });
}

async function getStudentDetails() {
  try {
    const student = await fetchStudent();
    console.log("Async/Await result:", student);
  } catch (error) {
    console.log("Error:", error);
  }
}

getStudentDetails();
console.log("This line runs before the async task completes.");
