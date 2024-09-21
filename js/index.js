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

// calculate-savings button

document.getElementById('calculate-savings').addEventListener('click', function () {

    const savingPercentace = parseFloat(document.getElementById('savings').value);

    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);
    
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const savingAmount = (savingPercentace * balance) / 100;

    // remainig balance show
    const remainingBalance = balance - savingAmount;
    
    // saving amount a dekhate chassi
    const savingElement = document.getElementById('savings-amount');
    savingElement.innerText = savingAmount.toFixed(2);

    // remaining balance dekte chassi
    const remainingElement = document.getElementById('remaining-balance');
    remainingElement.innerText = remainingBalance.toFixed(2);
   
});

// history tab funcunality 
     const historyTab = document.getElementById('history-tab');
    const assistentTab = document.getElementById('assistant-tab');
     
     historyTab.addEventListener('click', function () {
    historyTab.classList.add
             ('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
         historyTab.classList.remove('text-gray-600');
         assistentTab.classList.remove(
             'text-white', 'bg-gradient-to-r', 'from-blue-500',
             'to-purple-600'
         );
         assistentTab.classList.add('text-gray-600');

         //  remove expense form hidden
         document.getElementById('expense-form').classList.add('hidden');

         const historyRemove = document.getElementById('history-section');
         historyRemove.classList.remove('hidden');
})