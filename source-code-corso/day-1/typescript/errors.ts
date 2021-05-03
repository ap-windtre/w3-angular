(function() {
    const utente = { nome: 'Mario', cognome: 'Rossi', nome: 'Claudio' };

    const ora = Date().getTime();
    
    document.onload = init();
    
    function init() {
        const elemento = document.getElementByID('idElem');
        elemento.innerHTML = 'Test';
    }
})();