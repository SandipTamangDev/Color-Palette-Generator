
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
let generatedColor;
const colorBox = document.querySelectorAll('.color-box');

function colorGenerator () {
    generatedColor = "#";
    for (let i = 1; i <=6; i++) {
        const value = colorCode[Math.floor(Math.random() * colorCode.length )]
        generatedColor += value;
    }
    return generatedColor;
}


function colorGiver () {
    const colorBox = document.querySelectorAll('.color-box');
    colorBox.forEach(box => {
        box.addEventListener('click', () => {
            box.style.backgroundColor = colorGenerator(); 
        })
        box.style.backgroundColor = colorGenerator(); 
        // colorBox.addEventListener('click', colorGenerator)
    });
}



// function colorGiverForOne () {
//     box.style.backgroundColor = colorGenerator()
// }


colorGiver()
colorGenerateBtn.addEventListener('click', colorGiver);
// colorBox.addEventListener('click', colorGiverForOne);




