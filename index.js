function load() {
    KEY = true;
    var url = document.getElementById("yt_link").value;
    var ID = '';
    url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    if(url[2] !== undefined) {
        ID = url[2].split(/[^0-9a-z_\-]/i);
        ID = ID[0];
    }else {
        ID = url;
    }
    clear()
    const OPEN_LINK = 'https://www.youtube.com/embed/' + String(ID)
    var iframe = document.createElement('iframe');
    iframe.style = "overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px;border:none;";
    iframe.src = OPEN_LINK
    document.body.appendChild(iframe);
}

function clear() {
    document.getElementById('yt_link').remove()
    document.getElementById('1').remove()
    document.getElementById('load_button').remove()
    document.getElementById('2').remove()
    document.getElementById('3').remove()
    document.getElementById('4').remove()
    document.getElementById('5').remove()
    document.getElementById('6').remove()
    document.getElementById('7').remove()
    document.getElementById('8').remove()
    document.getElementById('9').remove()
    document.getElementById('10').remove()
    document.getElementById('11').remove()
    document.getElementById('12').remove()
    document.getElementById('13').remove()
    document.getElementById('Hide-YouTube-Controls-Title-Bar').remove()
}
