var tab = function (id, event) {
        var oDiv = document.getElementById(id);
        var oBtn = oDiv.getElementsByTagName("li");
        var oBox = oDiv.getElementsByTagName("dt");
        for (var i = 0; i < oBtn.length; i++) {
                (function (index) {
                        oBtn[i].addEventListener(event, function () {
                                for (var i = 0; i < oBtn.length; i++) {
                                        oBtn[i].className = '';
                                        oBox[i].className = 'tabSide';
                                }
                                this.className = 'active';
                                oBox[index].className = 'active';
                        });
                })(i)
        }
}
window.onload = function () {
        tab("tabMain1", "mouseover");/*click*/
        tab("tabMain2", "mouseover");
        tab("tabMain3", "mouseover");
}



