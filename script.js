'use stict'


let step = 672;
let move = 0;
let time;

function start() {  // Код для разгона с моментальной остановкой
    // debugger;
    time = setInterval(function() {
        fin();
    }, 200);
};

function stop() {  // Моментальная остановка
    // debugger;
    while (time != 0) {
        clearInterval(time);
        time--;
    };
};

// function start() {  // Код для разгона с постепенной остановкой    // debugger;
//     // if(time) return;  // Если надо чтоб при последующих кликах не разгонялся
//     time = setTimeout(function run() {
//         fin();
//         time = setTimeout(run, 200);
//     }, 200);
// };

// function stop() {  // Постепенная остановка
//         clearTimeout(time);
//         // time = 0;
// };


function fin() {
    document.getElementById('man').classList.remove('invers');
    if (step < 0) step = 672;
    if (move > 1300) move = 0;
    step = step - 112;
    move = move + 10;
    document.getElementById('man').style.backgroundPosition = step + 'px';
    document.getElementById('man').style.left = move + 'px';
};

function fim() {
    document.getElementById('man').classList.add('invers');
    if (step < 0) step = 672;
    if (move < -1300) move = 0;
    step = step - 112;
    move = move - 10;
    document.getElementById('man').style.backgroundPosition = step + 'px';
    document.getElementById('man').style.left = move + 'px';

};



document.onkeydown = function(e) {
    

    if (e.keyCode == 39) fin();
    if (e.keyCode == 37) fim();
    return false;

};

