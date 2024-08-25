function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const amount = event.target.amount.value;
  const desc = event.target.desc.value;
  const category = event.target.category.value;

  const expense = { amount, desc, category };
  // Retrieve existing expense from localStorage or initialize an empty array
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  expenses.push(expense);
  // Store the updated array back into localStorage
  localStorage.setItem("expenses", JSON.stringify(expenses));
  displayExpense();
  form.reset();
}

function displayExpense() {
  const expenseList = document.getElementById("expenseList");
  expenseList.innerHTML = "";
  // Retrieve expense array from localStorage
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
  //iterating throught the expense and creating list
  expenses.forEach((expense) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = "delete";
    li.textContent = `Expense Amount:${expense.amount}, Description:${expense.desc}, category:${expense.category}`;
    btn.addEventListener("click", () => {
      deleteExpense(expense.amount);
      li.remove(); // Remove the list item from the DOM
    });
    expenseList.appendChild(li);
    li.appendChild(btn);
  });
}
function deleteExpense(expenseToDelete) {
  const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

  // Filter out the user object that matches the userToDelete
  const updatedExpenses = expenses.filter(
    (expense) => expense.amount !== expenseToDelete.amount
  );

  // Store the updated array back into localStorage
  localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
}
