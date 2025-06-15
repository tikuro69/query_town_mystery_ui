(function() {
    const form = document.getElementById('query-form');
    const input = document.getElementById('query-input');
    const output = document.getElementById('output');

    function printLine(text) {
        const div = document.createElement('div');
        div.textContent = text;
        output.appendChild(div);
        output.scrollTop = output.scrollHeight;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const query = input.value.trim();
        if (!query) return;
        printLine('> ' + query);
        // Simulated response
        printLine('Result: [simulated response for "' + query + '"]');
        input.value = '';
    });
})();
