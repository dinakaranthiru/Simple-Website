// JavaScript code for changing the text when the button is clicked
document.getElementById('changeTextBtn').addEventListener('click', function() {
    var textParagraph = document.querySelector('section p');
    textParagraph.textContent = "The text has been changed!";
});
