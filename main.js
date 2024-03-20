function copyToClipboard() { // Copying email to clipboard
    navigator.clipboard.writeText("cole_davis@brown.edu")

    var tooltip = document.getElementsByClassName("tooltiptext");
    for (i=0; i < tooltip.length; i++)
        tooltip[i].innerHTML = "Copied!";
}