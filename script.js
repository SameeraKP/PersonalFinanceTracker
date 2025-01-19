document.addEventListener('DOMContentLoaded', () => {
    let income = 0;
    let expense = 0;
    let goalAmount = 0;
    let goalProgress = 0;

    const incomeInput = document.getElementById('income');
    const expenseInput = document.getElementById('expense');
    const categoryInput = document.getElementById('category');
    const balanceSummary = document.getElementById('balance-summary');
    const incomeSummary = document.getElementById('income-summary');
    const expenseSummary = document.getElementById('expense-summary');
    const goalForm = document.getElementById('savings-form');
    const goalInput = document.getElementById('goal');
    const goalAmountInput = document.getElementById('goal-amount');
    const goalNameSummary = document.getElementById('goal-name');
    const goalAmountSummary = document.getElementById('goal-amount-summary');
    const goalProgressSummary = document.getElementById('goal-progress');

    // Handle form submission for income and expenses
    document.getElementById('finance-form').addEventListener('submit', (e) => {
        e.preventDefault();

        const newIncome = parseFloat(incomeInput.value) || 0;
        const newExpense = parseFloat(expenseInput.value) || 0;

        income += newIncome;
        expense += newExpense;

        // Update the balance summary
        const balance = income - expense;

        incomeSummary.textContent = income.toFixed(2);
        expenseSummary.textContent = expense.toFixed(2);
        balanceSummary.textContent = balance.toFixed(2);

        // Reset inputs
        incomeInput.value = '';
        expenseInput.value = '';
    });

    // Handle form submission for savings goal
    goalForm.addEventListener('submit', (e) => {
        e.preventDefault();

        goalAmount = parseFloat(goalAmountInput.value) || 0;
        goalProgress = 0;  // Reset progress on new goal.

        goalNameSummary.textContent = goalInput.value || 'None';
        goalAmountSummary.textContent = goalAmount.toFixed(2);
        goalProgressSummary.textContent = goalProgress.toFixed(2);

        goalInput.value = '';
        goalAmountInput.value = '';
    });

    // Function to simulate adding savings progress
    setInterval(() => {
        if (goalAmount > 0 && goalProgress < goalAmount) {
            goalProgress += 10;  // Simulating progress (you can update based on your actual progress)
            goalProgressSummary.textContent = goalProgress.toFixed(2);
        }
    }, 1000);
});
