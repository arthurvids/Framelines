function popup(idPopup) {
    var divFond = document.getElementById('fondPopup');
    var el = document.getElementById(idPopup);
    el.style.display = 'block';
    divFond.style.display = 'block';
}

function fermePopup() {
    document.getElementById('fondPopup').style.display = 'none';
    var popups = document.querySelectorAll(".popup")
    for(var popup of popups){
        popup.style.display = 'none';
        var player = popup.querySelector(".player > iframe")
        if (player) {
            player.contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*')
        }
    }
}