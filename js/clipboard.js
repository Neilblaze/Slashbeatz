function copyStringToClipboard (str) {
    // Create new element
    var el = document.createElement('input');
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.setAttribute('id', 'url_magic')
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    // Select text inside element
    const input = document.getElementById('url_magic')
    input.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
 }
 
 document.querySelector("#copy").addEventListener("click", function()  {copyStringToClipboard("https://slashz.netlify.app")}); // Endpoint
 
 function url_copied() {
    alert("URL copied to clipboard!");
  }