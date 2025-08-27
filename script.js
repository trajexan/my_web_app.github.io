document.getElementById('helloButton').addEventListener('click', function() {
    alert('Hello World');
});

document.getElementById('textInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.keyCode === 13) {
        const text = this.value.trim();
        if (text) {
            alert(text.toUpperCase());
        }
    }
});