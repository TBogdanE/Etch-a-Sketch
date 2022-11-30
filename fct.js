let resetbtn = document.getElementById('resetgamebtn');
let gridsizebtn = document.getElementById('submitgs');
let gridsize = document.getElementById('gridsize');
let startbtn = document.getElementById('startbtn');
let updatedGS = 0;

updateGridSize();
function updateGridSize() {
    //gridsizebtn.addEventListener('click', () => {
    updatedGS = gridsize.value;
    //console.log(updatedGS);
    return updatedGS;
    }
//)};

startbtn.addEventListener('click', function startGame() {
    updateGridSize();
    console.log(updatedGS);
    createDiv(updatedGS);
    hoverDiv(updatedGS);
});

/*gridsizebtn.addEventListener('click', function updateGridSize() {
    let updatedGS = gridsize.value;
    console.log(updatedGS);
    let a = () => {
        for(i = 0; i < updatedGS; i++) {
            for(j = 0; j < updatedGS; j++) {
                let pixelclear = document.getElementById(`i${i}j${j}`);
                pixelclear.style.backgroundColor = 'white';
            }
    }
    createDiv(updatedGS);
    hoverDiv(updatedGS);
}
}
);

/*gridsizebtn.addEventListener('click', () => {
createDiv();
hoverDiv();
console.log(gridsize.value);
}); */

function createDiv(e) {
    for(i = 0; i < e; i++) {
        for(j = 0; j < e; j++) {
            var crtdivs = document.createElement('div');
            crtdivs.setAttribute('id', `i${i}j${j}`);
            crtdivs.style.backgroundColor = 'white';
            crtdivs.style.width = `${50/e}em`;
            crtdivs.style.height = `${50/e}em`;
            document.getElementById('sketch').appendChild(crtdivs);
        }
    }
}


function hoverDiv(e) {
    for(i = 0; i < e; i++) {
        for(j = 0; j < e; j++) {
            let pixels = document.getElementById(`i${i}j${j}`);
            pixels.addEventListener('mousemove', function changeColor() {
                pixels.style.backgroundColor = 'red';
            });
        }
    }
}

resetbtn.addEventListener('click', function resetDrawing() {
    console.log('Cleared!');
    for(i = 0; i < updatedGS; i++) {
        for(j = 0; j < updatedGS; j++) {
            let pixelclear = document.getElementById(`i${i}j${j}`);
            pixelclear.style.background = 'white';
        }
    }
    createDiv();
});