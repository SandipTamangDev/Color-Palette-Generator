const hlsBtn = document.getElementById('hsl-harmony');

function hslColorGenerator() {
    let H = Number(document.getElementById('hue').value) || Math.random() * 360;
    let S = Number(document.getElementById('saturation').value) || Math.random() * 100;
    let L = Number(document.getElementById('lightness').value) || Math.random() * 100;

    return `hsl(${H}, ${S}%, ${L}%)`;
}

function hslToRgbConverter() {
    const hslString = hslColorGenerator();

    const regex = /hsl\(\s*(\d+(?:\.\d+)?),\s*(\d+(?:\.\d+)?%?),\s*(\d+(?:\.\d+)?%?)\s*\)/;

    const matches = hslString.match(regex);

    if (matches) {
        let h = parseFloat(matches[1], 10)
        let s = parseFloat(matches[2], 10)
        let l = parseFloat(matches[3], 10)

        // console.log(`hue: ${h}, saturation: ${s}%, ligntness: ${l}%`);
    } else {
        console.log('No match found.');
    }
}

function hslToRgb(h, s, l) {
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;

    let r = 0, g = 0, b = 0;

    if (0 <= h && h < 60) {
        r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
        r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
        r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
        r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
        r = x; g = 0; b = c;
    } else if (300 <= h && h <= 360) {
        r = c; g = 0; b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return { r, g, b };
}

console.log(hslToRgb())

function hslColorGiver() {
    const colorBox = document.querySelectorAll('.color-box');
    colorBox.forEach(box => {
        box.addEventListener('click', ()=> {
            box.style.backgroundColor = hslColorGenerator()
            console.log(hslColorGenerator())
            hslToRgbConverter()
        })
        box.style.backgroundColor = hslColorGenerator();
        hslToRgbConverter()
    });
}

function reset() {
    const reset = document.getElementById('reset');

    reset.addEventListener('click', () => {
        document.getElementById('hue').value = '';
        document.getElementById('saturation').value = '';
        document.getElementById('lightness').value = '';
    });
}


hslColorGiver()
reset()

hlsBtn.addEventListener('click', hslColorGiver);