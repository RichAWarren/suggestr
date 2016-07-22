var loginClick = false;

document.getElementById('login').addEventListener('click', function () {
    if (loginClick === false) {
        document.getElementById('one').style.transform = 'translate(-100px, 0px)';
        document.getElementById('two').style.transform = 'translate(100px, 0px)';
        document.getElementById('three').style.transform = 'translate(0px, 100px)';
        loginClick = true;
    } else {
        document.getElementById('one').style.transform = 'translate(0px, 0px)';
        document.getElementById('two').style.transform = 'translate(0px, 0px)';
        document.getElementById('three').style.transform = 'translate(0px, 0px)';
        loginClick = false;
    }
});

setTimeout(function () {
    document.getElementById('login').className += ' animated swing';
}, 1500);

document.getElementById('one').addEventListener('click', function () {
    document.cookie = 'user=dan';
    location.href = './cards.html';
});

document.getElementById('two').addEventListener('click', function () {
    document.cookie = 'user=harry';
    location.href = './cards.html';
});

document.getElementById('three').addEventListener('click', function () {
    document.cookie = 'user=richard';
    location.href = './cards.html';
});
