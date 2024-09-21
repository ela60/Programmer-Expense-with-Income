const calculateButton = document.getElementById('calculate').addEventListener('click', function (event) {
    // event.preventDefault(); form ar jonno use only
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);

    console.table({ income, software, courses, internet });


    const totalExpenses = software + courses + internet;

    const balance = income - totalExpenses;

    console.table({ totalExpenses, balance });
   
    const totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.innerText = totalExpenses.toFixed(2);

    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = balance.toFixed(2);

    // show result class and omit hidden cls in js 
    const result = document.getElementById('results');
    result.classList.remove('hidden');
    
    
})