const hlsBtn = document.getElementById('hsl-harmony');

function hslColorGenerator() {
    let h = Number(document.getElementById('hue').value) || Math.random() * 360;
    let s = Number(document.getElementById('saturation').value) || Math.random() * 100;
    let l = Number(document.getElementById('lightness').value) || Math.random() * 100;

    return `hsl(${h}, ${s}%, ${l}%)`;
}

// function hslToRgbConverter() {
//     c = (1 - |2l - 1|) * s
// }

function hslColorGiver() {
    const colorBox = document.querySelectorAll('.color-box');
    colorBox.forEach(box => {
        box.addEventListener('click', ()=> {
            box.style.backgroundColor = hslColorGenerator()
            // console.log(hslColorGenerator())
        })
        box.style.backgroundColor = hslColorGenerator();
        console.log(hslColorGenerator())
    });
}

console.log(hslColorGenerator())

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



// const colorBox = document.querySelectorAll('.color-box');
// const hueUser = document.getElementById('hue');
// function rgbColorGiver() {
//     const colorBox = document.querySelectorAll('.color-box');
//     colorBox.forEach(box => {
//         box.addEventListener('click', () => {
//             box.style.backgroundColor = rgbColorGenerator();
//         });
//         box.style.backgroundColor = rgbColorGenerator() 
//     });
// }

// function showPopup ()  {
//     const hslSettingBtn = document.getElementById('hls_settings');
//     const popupHls = document.getElementById('popup_article');
//     hslSettingBtn.addEventListener('click', () => {
//         popupHls.classList.toggle('active');
//     });
// }


// const addHslBtn = document.getElementById('add-hsl');

// const trueRandomBtn = document.getElementById('true-random');

// rgbColorGiver()

// trueRandomBtn.addEventListener('click', rgbColorGiver);

// function hexColorGenerator() {
//     const colorCode = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//     hexGeneratedColor = "#";
//     for (let i = 1; i <= 6; i++) {
//         const value = colorCode[Math.floor(Math.random() * colorCode.length )]
//         hexGeneratedColor += value;
//     }
//     return hexGeneratedColor;
// }

// function rgbColorGenerator() {
//     let rgb;
//     const rgbColor = hexColorGenerator();
//     const rgbColor2 = rgbColor.replace("#", "");

//     const r = parseInt(rgbColor2.slice(0, 2), 16);
//     const g = parseInt(rgbColor2.slice(2, 4), 16);
//     const b = parseInt(rgbColor2.slice(4, 6), 16);

//     rgb = `rgb(${r}, ${g}, ${b})`;
//     return rgb;
// }