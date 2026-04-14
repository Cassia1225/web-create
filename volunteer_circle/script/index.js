// ギャラリー画像クリックで拡大表示
document.querySelectorAll('.gallery-grid img').forEach(function(img) {
    img.addEventListener('click', function() {
        var overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:1000;cursor:pointer;';
        var bigImg = document.createElement('img');
        bigImg.src = img.src;
        bigImg.style.cssText = 'max-width:90vw;max-height:90vh;border-radius:8px;';
        overlay.appendChild(bigImg);
        overlay.addEventListener('click', function() { overlay.remove(); });
        document.body.appendChild(overlay);
    });
});
