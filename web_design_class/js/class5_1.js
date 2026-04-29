let n = [];

n[0] = 12;
n[1] = 34;
n[2] = 56;
n[3] = 78;
n[4] = 90;

let total = 0;

for (let i = 0; i < n.length; i++) {
  total = total + n[i];
}

alert(total);

let graph = document.getElementById("graph");

for (let i = 0; i < n.length; i++) {
  let barBox = document.createElement("div");
  barBox.className = "bar-box";

  let bar = document.createElement("div");
  bar.className = "bar";
  bar.style.height = n[i] * 2 + "px";

  let value = document.createElement("div");
  value.className = "value";
  value.textContent = n[i];

  barBox.appendChild(bar);
  barBox.appendChild(value);
  graph.appendChild(barBox);
}