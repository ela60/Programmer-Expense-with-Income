// back to assistant button or tab
assistentTab.addEventListener('click', function () {

    historyTab.classList.remove
        ('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    historyTab.classList.add('text-gray-600');
    assistentTab.classList.add(
        'text-white', 'bg-gradient-to-r', 'from-blue-500',
        'to-purple-600'
    );
    assistentTab.classList.remove('text-gray-600');

    //  Back expense form hidden
    document.getElementById('expense-form').classList.remove('hidden');
    
    // remove history hidden
    document.getElementById('history-section').classList.add('hidden');

});