/* Functions for subviews of syntax.html */
function copy_text(id){
    // Get the text field
    var copyText = document.getElementById(id);

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}

function change_btn_text(button) {
    // Store the original text of the button
    var originalText = button.innerText;
    
    // Change the button text to "Copied"
    button.innerHTML = "Copied";
    
    // Set a timeout to change the text back to the original after 2 seconds (2000 milliseconds)
    setTimeout(function() {
        button.innerHTML = originalText;
    }, 1200);
}
