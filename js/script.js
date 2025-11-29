
/*
there are colors from 1 to f and there are total of 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F so what i can do have ONE array with those as elements and in it and randomly choose one and run it six time each getting a color for then show it to the box of the html.

how i should do it
- make an array with the hex codes.
- 

Total Tools Needed (one clean list)
Array literal
.length
Array.from()
.join()
Math.random()
Math.floor()
document.getElementById() / document.querySelector()
.style.backgroundColor
.innerText / .textContent
*/

// colorGenerateBtn.addEventListener('click', () => {
//     for (let i = 1; i <= 6; i++) {
//         const pick = colorCode[Math.floor(Math.random() * colorCode.length)];
//         const div = document.createElement("div");
//         div.textContent = "#";
//         div.textContent = pick;
//         console.log(div);
//     }
// });

// function colorGenerator () {
//         const spanToStoreColor = document.createElement("span");
//     for (let i = 1; i <= 6; i++) {
//         const pickColorFromArray = colorCode[Math.floor(Math.random() * colorCode.length)];
//         for (let i = 1; i <= 1; i++) {
//             const textNode = document.createTextNode(pickColorFromArray);
//             spanToStoreColor.appendChild(textNode);
//         }
//     }
//     const div = document.createElement('div');
//     div.textContent = "#" + spanToStoreColor.textContent;
//     backgroundColor = div.textContent;

//     return backgroundColor;
// }


// const colorBox1 = document.getElementById('color-box1');
// const colorBox2 = document.getElementById('color-box2');
// const colorBox3 = document.getElementById('color-box3');
// const colorBox4 = document.getElementById('color-box4');
// const colorBox5 = document.getElementById('color-box5');


// colorBox1.style.backgroundColor = colorGenerator();

// colorBox2.style.backgroundColor = colorGenerator();

// colorBox3.style.backgroundColor = colorGenerator();

// colorBox4.style.backgroundColor = colorGenerator();

// colorBox5.style.backgroundColor = colorGenerator();

const colorCode = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colorGenerateBtn = document.getElementById('color-generator');
let hexGeneratedColor;
let rgbGeneratedColor;
const colorBox = document.querySelectorAll('.color-box');
const hueUser = document.getElementById('hue');
const popupHls = document.getElementById('popup_article');
const closeBtn = document.getElementById('popup_article_close_button');
const hslSettingBtn = document.getElementById('hls_settings');
let rgb;
hue = 0;

popupHls.classList.remove('show');
popupHls.classList.add('hidden');


hslSettingBtn.addEventListener('click', () => {
    popupHls.classList.add('show');
    popupHls.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
    popupHls.classList.remove('show');
    popupHls.classList.add('hidden');
});

function hexColorGenerator () {
    hexGeneratedColor = "#";
    for (let i = 1; i <= 6; i++) {
        const value = colorCode[Math.floor(Math.random() * colorCode.length )]
        hexGeneratedColor += value;
    }
    return hexGeneratedColor;
}

function rgbColorGenerator () {

    // for (let i = 1; i <= 5; i++ ) {
        const rgbColor = hexColorGenerator();
        const rgbColor2 = rgbColor.replace("#", "");

        const r = parseInt(rgbColor2.slice(0, 2), 16);
        const g = parseInt(rgbColor2.slice(2, 4), 16);
        const b = parseInt(rgbColor2.slice(4, 6), 16);

        rgb = `rgb(${r}, ${g}, ${b})`
    // }
    return rgb;
    // console.log(r, g, b);
    // return hexGeneratedColor.replace("#", "");
}

// function hlsToRgbGenerator() {
//     hueValue = hueUser.textContent;
//     console.log(hueValue);
// }

// console.log(hueValue);
// console.log(rgbColorGenerator());

// const result = hexGeneratedColor;
// console.log(result);




function colorGiver () {
    const colorBox = document.querySelectorAll('.color-box');
    colorBox.forEach(box => {
        box.addEventListener('click', () => {
            box.style.backgroundColor = rgbColorGenerator(); 
        })
        box.style.backgroundColor = rgbColorGenerator(); 
    });
}

colorGiver()
colorGenerateBtn.addEventListener('click', colorGiver);




