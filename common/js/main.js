$(function () {
    window.onload = () => {
        if (window.innerWidth < 1440)
            document.documentElement.style.fontSize = window.innerWidth / 1440 + 'px';
        else document.documentElement.style.fontSize = '1px';
    }
    window.onresize = () => {
        if (window.innerWidth < 1440)
            document.documentElement.style.fontSize = window.innerWidth / 1440 + 'px';
        else document.documentElement.style.fontSize = '1px';
    }
    $('img').on('dragstart', function (event) {
        event.preventDefault();
    });
    $('img').on('contextmenu', function (event) {
        event.preventDefault();
    });
})
