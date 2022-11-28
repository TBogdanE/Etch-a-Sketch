let resetbtn = document.getElementById('resetgamebtn');
let gridsizebtn = document.getElementById('submitgs');
let gridsize = document.getElementById('gridsize');

gridsizebtn.addEventListener('click', () => {
createDiv();
hoverDiv();
});

function createDiv() {
    for(i = 0; i < gridsize.value; i++) {
        for(j = 0; j < gridsize.value; j++) {
            var crtdivs = document.createElement('div');
            crtdivs.setAttribute('id', `i${i}j${j}`);
            crtdivs.style.backgroundColor = 'white';
            crtdivs.style.width = `${50/gridsize.value}em`;
            crtdivs.style.height = `${50/gridsize.value}em`;
            document.getElementById('sketch').appendChild(crtdivs);
        }
    }
}


function hoverDiv() {
    for(i = 0; i < gridsize.value; i++) {
        for(j = 0; j < gridsize.value; j++) {
            let pixels = document.getElementById(`i${i}j${j}`);
            pixels.addEventListener('mousemove', function changeColor() {
                pixels.style.backgroundColor = 'red';
            });
        }
    }
}

resetbtn.addEventListener('click', function resetDrawing() {
    for(i = 0; i < gridsize.value; i++) {
        for(j = 0; j < gridsize.value; j++) {
            let pixelclear = document.getElementById(`i${i}j${j}`);
            pixelclear.style.background = 'white';
        }
    }
});