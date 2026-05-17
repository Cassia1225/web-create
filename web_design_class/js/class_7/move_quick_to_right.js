x = 0;
function moveImage()
{
x = x + 2;
document.myImage.style.left = x;
setTimeout("moveImage()",100);
}