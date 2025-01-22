document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('dark-mode-toggle');  
    toggleButton.addEventListener('click', () => { 
        document.body.classList.toggle('dark-mode');      
        if (document.body.classList.contains('dark-mode')) {
            console.log('Mode sombre activé');
        } else {
            console.log('Mode sombre désactivé');
        }
    });   
    if (!document.body.classList.contains('dark-mode')) {
        
        document.body.classList.add('light-mode');
    }
});