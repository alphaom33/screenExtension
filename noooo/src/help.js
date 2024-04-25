// const counter = document.getElementById('lines-of-code-counter');
const debug = document.getElementById('debug');
const url = document.getElementById('code').getAttribute("url");
debug.textContent = "lfdkj";

const canvas = document.getElementById('canvas');
const context = canvas.getContext("2d");
toWrite = "";

function getScreen() {
    fetch(url)
    .then((res) => res.text())
    .then((text) => {
        toWrite = text;
    });
}

setInterval(() => {
    debug.textContent = "djkf";
    // getScreen();
    // if (toWrite !== "") {
    //     for (let i = 0; i < 300; i++) {
    //         for (let j = 0; j < 200; j++) {
    //             debug.textContent = "3842";
    //             context.fillStyle = `rgb(255, 255, 255)`;
    //             context.fillRect(i, j, 1, 1);
    //         }
    //     }
    // }
}, 0);

// setInterval(() => {
//     debug.textContent = "laskdfj";
//     if (toWrite !== "") {
//         for (let i = 0; i < 300; i++) {
//             for (let k = 0; j < 200; i++) {
//                 context.fillRect(i, j, 1, 1);
//             }
//         }
//     }
// }, 0);


// let count = 0;
// setInterval(() => {
//     counter.textContent = count++;
// }, 100);

// Handle the message inside the webview
// window.addEventListener('message', event => {

//     const message = event.data; // The JSON data our extension sent

//     switch (message.command) {
//         case 'refactor':
//             count = Math.ceil(count * 0.5);
//             counter.textContent = count;
//             break;
//     }
// });