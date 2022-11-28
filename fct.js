let resetbtn = document.querySelector('#resetgamebtn');

function getGridSize() {
    let gridsize = document.getElementById('gridsize');
    console.log(gridsize);
    return gridsize;
}

function createDiv() {
    for(i = 0; i < 16; i++) {
        for(j = 0; j < 16; j++) {
            var crtdivs = document.createElement('div');
            crtdivs.setAttribute('id', `i${i}j${j}`);
            crtdivs.style.backgroundColor = 'white';
            crtdivs.style.width = '3.75em';
            crtdivs.style.height = '3.75em';
            document.getElementById('sketch').appendChild(crtdivs);
        }
    }
}


function hoverDiv() {
    for(i = 0; i < 16; i++) {
        for(j = 0; j < 16; j++) {
            let pixels = document.getElementById(`i${i}j${j}`);
            pixels.addEventListener('mousemove', function changeColor() {
                pixels.style.backgroundColor = 'red';
            });
        }
    }
}

resetbtn.addEventListener ('click', () => {
    for(i = 0; i < 16; i++) {
        for(j = 0; j < 16; j++) {
            const div = document.getElementById(`i${i}j${j}`);
            div.style.background = 'white';
        }
    }
});

getGridSize();
createDiv();
hoverDiv();