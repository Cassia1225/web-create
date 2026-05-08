imageW = 64;
imageH = 48;
function setImageSize(iName,w,h)
{
imageW = imageW + w;
imageH = imageH + h;
document.images[iName].width = imageW;
document.images[iName].height = imageH;
}