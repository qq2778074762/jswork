let xs = new Date().getMinutes();
let time = new Date().getTime() +60 * 1000 * (60-xs);
let d = h = m = s = 0;
let id = setInterval(test,1000);
function test() {
    let nowtime = new Date();
    let hhh = parseInt((time - nowtime.getTime()) / 1000);
    if (hhh > 0 ) {
        d = parseInt(hhh / 86400);
        h = parseInt((hhh / 3600) % 24);
        m = parseInt((hhh / 60) % 60);
        s = parseInt(hhh % 60);

        d = d < 10 ? '0' + d : d;
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
    } else {
        clearInterval(id);
        d = h = m = s = '00';
    }
    document.getElementById('d').innerHTML = d + '天';
    document.getElementById('h').innerHTML = h + '时';
    document.getElementById('m').innerHTML = m + '分';
    document.getElementById('s').innerHTML = s + '秒';

}