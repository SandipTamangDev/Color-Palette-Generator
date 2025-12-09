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

        console.log(`hue: ${h}, saturation: ${s}%, ligntness: ${l}%`);
    } else {
        console.log('No match found.');
    }
}

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