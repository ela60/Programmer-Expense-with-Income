const calculateButton = document.getElementById('calculate').addEventListener('click', function (event) {
    event.preventDefault();
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);

    console.table({ income, software, courses, internet });
   
    
    
})