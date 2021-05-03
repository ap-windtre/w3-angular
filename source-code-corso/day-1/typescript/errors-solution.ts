(function() {
    const utente = { nome: 'Mario', cognome: 'Rossi' };

    const ora = (new Date()).getTime();
    
    document.onload = init;
    
    function init() {
        const elemento = document.getElementById('idElem');
        elemento.innerHTML = 'Test';
    }
})();