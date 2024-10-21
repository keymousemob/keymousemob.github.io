var get_value = function (key) {//得到?后参数的确切值
    var url = document.URL;
    if (/\?/.test(url)) {
        url = url.replace(/.*?\?/, '').replace(/\#.*/, '').split('&');
        for (let x in url) {
            if (/\=/.test(url[x])) {
                let value = url[x].split('=');
                if (value[0] == key) {
                    return value[1];
                    break;
                }
            }
        }
    }
};
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
