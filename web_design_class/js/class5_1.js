box = new Array();
box[0] = 12;
box[1] = 34;
box[2] = 56;
box[3] = 78;
box[4] = 90;

for (i = 0; i < 5; i++) {
    sum += box[i];
}

alert("合計："+sum);

gankin = 1000;
riritsu = 0.07;
nensu = 20;
for (i=1; i<= nensu; i++) 
{
    kane = gankin * Math.pow((1+riritsu),i);
    barH = kane/10;
    document.write('<img src="./../image/pixel.gif" width="8" height="`+barH+`">');


}