function flashText() {
    textStatus = document.getElementById("myText").style.visibility;

    if (textStatus == "hidden") document.getElementById("myText").style.visibility = "visible";
    else document.getElementById("myText").style.visibility = "hidden";

    setTimeout("flashText()",500)
}

