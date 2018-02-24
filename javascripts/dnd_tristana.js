function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    // hide all tabcontent
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // make all tablinks inactive
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // display our tab, and tablink
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}


