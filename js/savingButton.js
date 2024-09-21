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