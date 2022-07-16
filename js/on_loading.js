function onReady(callback) {
    var intervalID = window.setInterval(checkReady, 1000);

    function checkReady() {
        if (document.getElementById('last_item') !== undefined) {
            window.clearInterval(intervalID);
            callback.call(this);
        }
    }
}

function show(id, value, all) {
    var element = document.getElementById(id);
    element.style.display = value ? 'block' : 'none';
}

onReady(function () {
    show('page', true, false);
    show('loading', false, true);
});