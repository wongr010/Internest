
window.onclick = function(e) {
    var name = e.srcElement.className;

    
    var namelist= document.getElementsByClassName(name);
    alert(namelist[0]);
    document.getElementsByClassName(name)[0].className += " selected";
}