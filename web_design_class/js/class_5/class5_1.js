show_text = document.getElementById('text');
show_text.textContent = "配列nの棒グラフ";

n = [12,34,56,78,90];

total = 0;

for (let i = 0; i < n.length; i++) {
  total = total + n[i];
}

alert(total);

gankin = 1000;
riritu = 0.07;
nensu = 20;

graph = document.getElementById('graph')

for (i=1; i<= nensu; i++) {
  kane = gankin * Math.pow((1+riritu),i);
  barH = kane / 10;
  
  graph.insertAdjacentHTML(
    'beforeend',
    `<img src="./../image/pixel.gif" width="8" height="${barH}">`

  );
}



