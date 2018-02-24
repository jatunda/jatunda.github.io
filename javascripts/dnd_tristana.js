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

$(document).keypress(function(event){
  var c = String.fromCharCode(event.which); 
  
  var tabNames = ['About', 'Character Sheet', 'Emotional Magic', 'General Magic']

  var tabName = null
  if(c == '1' 
    || c == '2'
    || c == '3'
    || c == '4')
  {
    tabName = tabNames[parseInt(c)-1]
  }
  if(tabName != null)
  {
    var tabLinks = document.getElementsByClassName("tablinks");
    for(let tabLink of tabLinks)
    {
        if(tabLink.innerHTML == tabName)
        {
            tabLink.click();
        }
    }
    //openTab();
  }
});
