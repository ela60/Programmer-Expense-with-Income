    const calculateButton = document.getElementById('calculate').addEventListener('click', function () {
    // event.preventDefault(); form ar jonno use only
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);

    // validation
    if (income <= 0 || isNaN(income)) {
        document.getElementById('income-error').classList.remove('hidden');
        return;
    }
    if (software <= 0 || isNaN(software)) {
        document.getElementById('software-error').classList.remove('hidden');
        return;
    }
    if (courses <= 0 || isNaN(courses)) {
        document.getElementById('courses-error').classList.remove('hidden');
        return;
    }
    if (internet <= 0 || isNaN(internet)) {
        document.getElementById('internet-error').classList.remove('hidden');
        return;
    }

    console.table({ income, software, courses, internet });


    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    // validation
    if (totalExpenses > income) {
        document.getElementById('logic-error').classList.remove('hidden');
        return;
    }

    console.table({ totalExpenses, balance });
   
    const totalExpensesElement = document.getElementById('total-expenses');
    totalExpensesElement.innerText = totalExpenses.toFixed(2);

    const balanceElement = document.getElementById('balance');
    balanceElement.innerText = balance.toFixed(2);

    // show result class and omit hidden cls in js 
    const result = document.getElementById('results');
    result.classList.remove('hidden');
    
    const historyItem = document.createElement('div');
    historyItem.className = "bg-white p-3 rounded-md border-l-2 border-indigo-500";

    historyItem.innerHTML = `
    <p class="text-xs text-gray-800 font-bold">${new Date().toLocaleDateString()}</p>
    <p class="text-xs text-gray-800 font-bold">Income:${income.toFixed(2)}</p>
    <p class="text-xs text-gray-800 font-bold">Expenxes:${totalExpenses.toFixed(2)}</p>
    <p class="text-xs text-gray-800 font-bold">Balance:${balance.toFixed(2)}</p>

    `
    
    const historyContainer = document.getElementById('history-list');
    // insertBefor 2 ta value create kore (ki insert korbo and kothai insert korbo)
    historyContainer.insertBefore(historyItem,historyContainer.firstChild)
});


// live validation for income input
document.getElementById('income').addEventListener('input', function () {
    const inputValue = (document.getElementById('income').value);
    
    console.log(inputValue);

    if (isNaN(inputValue) || inputValue <= 0) {
        document.getElementById('income-error').classList.remove('hidden');
        return;
    }
    
});

