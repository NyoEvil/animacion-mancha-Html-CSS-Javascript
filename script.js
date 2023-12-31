let image = [
    'url("img/clr01.png")',
    'url("img/clr02.png")',
    'url("img/clr03.png")',
    'url("img/clr04.png")',
    'url("img/clr05.png")',
    'url("img/clr06.png")',
    'url("img/clr07.png")',
    'url("img/clr08.png")',
    'url("img/clr09.png")',
    'url("img/clr10.png")',
    'url("img/clr11.png")',
    'url("img/clr12.png")',
    'url("img/clr13.png")',
    'url("img/clr14.png")',
    'url("img/clr15.png")',
    'url("img/clr16.png")'
];

let body = document.querySelector('body');

body.onclick = function(e) {
    let x = e.pageX;
    let y = e.pageY;

    let splash = document.createElement('span');
    splash.style.left = `${x}px`;
    splash.style.top = `${y}px`;

    let bg = image[Math.floor(Math.random() * image.length)];
    splash.style.backgroundImage = bg;

    this.appendChild(splash);

    setTimeout(() => {
        splash.remove();
    }, 4000);    
};