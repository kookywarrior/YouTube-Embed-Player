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
    window.open('https://www.youtube.com/embed/' + String(ID), '_top');
}