x = 0;
y = 100;

function moveImg() {
    cross = document.radioForm.rd[0].checked;
    main = document.radioForm.rd[1].checked;

    if (cross == true){
        y = y + 2;
    }
    if (main == true) {
        x = x + 2;
    }

    document.images["img"].style.left = x + 'px';
    document.images["img"].style.top = y + 'px';

    setTimeout('moveImg()',100);


}