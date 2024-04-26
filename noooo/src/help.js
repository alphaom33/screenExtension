const debug = document.getElementById('debug');
try {
    const url = document.getElementById('code').getAttribute("url");
    debug.textContent = "lfdkj";

    const canvas = document.getElementById('canvas');
    const context = canvas.getContext("2d");

    canvas.width = 4000;
    canvas.height = 2000;
    canvas.style.width = "2000px";
    canvas.style.height = "1000px";

    const numPixels = [300, 200];

    function getScaleFactor() {
        return canvas.width < canvas.height ? canvas.width / numPixels[0] : canvas.height / numPixels[1];
    }

    context.scale(window.devicePixelRatio * getScaleFactor(), window.devicePixelRatio * getScaleFactor());

    toWrite = "";

    function getScreen() {
        fetch(url)
            .then((res) => res.text())
            .then((text) => {
                toWrite = text;
            });
    }


    setInterval(() => {
        getScreen();
        debug.textContent = toWrite.length + ", " + (numPixels[0] * numPixels[1] * 6);
        if (toWrite.length === numPixels[0] * numPixels[1] * 6) {
            drawFromFile();
        }
    }, 0);

    function drawFromFile() {
        for (let i = 0; i < numPixels[1]; i++) {
            for (let j = 0; j < numPixels[0]; j++) {
                let cursorPos = ((i * numPixels[0]) + j) * 6 + 1;
                const stuff = toWrite.slice(cursorPos, cursorPos + 6);
                context.fillStyle = "#" + stuff;
                context.fillRect(j, i, 1, 1);
            }
        }
    }
} catch (error) {
    debug.textContent = error;
}