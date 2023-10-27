var a = 0;
var id = setInterval(anim, 500);

function anim() {
    a = a + 10;
    if (a == 200) {
        clearInterval(id);

    } else {
        var target = document.getElementById("test");
        target.style.width = a + 'px';
    }
}