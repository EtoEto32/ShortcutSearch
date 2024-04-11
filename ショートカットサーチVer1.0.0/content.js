document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.code === 'KeyF') {
        const selectedText = window.getSelection().toString();
        if (selectedText) {
            window.open(`https://www.google.com/search?q=${encodeURIComponent(selectedText)}`, '_blank');
        }
    }
});
