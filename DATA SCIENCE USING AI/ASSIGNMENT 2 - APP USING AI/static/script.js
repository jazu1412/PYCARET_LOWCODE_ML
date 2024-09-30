document.addEventListener('DOMContentLoaded', function() {
    const expenseForm = document.getElementById('expenseForm');
    const expenseList = document.getElementById('expenseList');
    const showChartBtn = document.getElementById('showChartBtn');
    const ctx = document.getElementById('expenseChart').getContext('2d');
    let chart;

    expenseForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('expenseName').value;
        const amount = document.getElementById('expenseAmount').value;
        const type = document.getElementById('expenseType').value;

        fetch('/add_expense', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `name=${encodeURIComponent(name)}&amount=${encodeURIComponent(amount)}&type=${encodeURIComponent(type)}`
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                expenseForm.reset();
                updateExpenseList();
            }
        });
    });

    function updateExpenseList() {
        fetch('/get_expenses')
        .then(response => response.json())
        .then(expenses => {
            expenseList.innerHTML = '';
            expenses.forEach(expense => {
                const expenseElement = document.createElement('p');
                expenseElement.innerHTML = `
                    <strong>${expense.name}</strong>: $${expense.amount.toFixed(2)}
                    <br>
                    <small>${expense.type} - ${expense.date}</small>
                `;
                expenseList.appendChild(expenseElement);
            });
        });
    }

    showChartBtn.addEventListener('click', function() {
        fetch('/get_expenses')
        .then(response => response.json())
        .then(expenses => {
            const expenseTypes = {};
            expenses.forEach(expense => {
                if (expenseTypes[expense.type]) {
                    expenseTypes[expense.type] += expense.amount;
                } else {
                    expenseTypes[expense.type] = expense.amount;
                }
            });

            const labels = Object.keys(expenseTypes);
            const data = Object.values(expenseTypes);

            if (chart) {
                chart.destroy();
            }

            chart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: labels,
                    datasets: [{
                        data: data,
                        backgroundColor: [
                            '#4CAF50', '#2196F3', '#FFC107', '#E91E63', '#9C27B0',
                            '#00BCD4', '#FF5722', '#795548', '#607D8B', '#3F51B5'
                        ],
                    }]
                },
                options: {
                    responsive: true,
                    title: {
                        display: true,
                        text: 'Expense Distribution by Type',
                        fontColor: '#e0e0e0'
                    },
                    legend: {
                        labels: {
                            fontColor: '#e0e0e0'
                        }
                    }
                }
            });
        });
    });

    // Initial update of expense list
    updateExpenseList();
});