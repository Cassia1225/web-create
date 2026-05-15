function calc()
{
n1 = document.calcForm.number1.value;
n2 = document.calcForm.number2.value;
n1 = eval(n1);
n2 = eval(n2);
selectNo = document.calcForm.calcType.selectedIndex;

if (selectNo == 0) n = n1 + n2;
if (selectNo == 1) n = n1 - n2;
if (selectNo == 2) n = n1 * n2;
if (selectNo == 3) n = n1 / n2;
document.calcForm.result.value = n;
}