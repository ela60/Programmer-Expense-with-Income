
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
});