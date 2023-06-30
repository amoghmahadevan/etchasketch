function generateGrid(size){
    const bodySelector = document.querySelector('body');
    const con = document.createElement('div');
    con.setAttribute('id', 'container');
    bodySelector.appendChild(con);
    const container = document.querySelector('#container');
    let width = size;
    let rowheight = 600/width;
    let i = 0;
    for(let i = 0; i < width; i++){
        const row = document.createElement('div');
        row.classList.add(`row${i}`);
        row.style.display = "flex";
        row.style.width = "600px";
        row.style.height = `${rowheight}px`;
        container.appendChild(row);
        
        const rowselect = document.querySelector(`.row${i}`);
        
        for(let j = 0; j < width; j++){
            const square = document.createElement('div');
            square.classList.add('square');
            square.style.width = `${rowheight}px`;
            square.style.height = `${rowheight}px`;
            rowselect.appendChild(square);
        }
    }
    if(erasebtn.value == "false"){
        const squareSelector = document.querySelectorAll('.square');
        for(let i = 0; i < squareSelector.length; i++){
            squareSelector[i].addEventListener('mouseover', function(){
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                squareSelector[i].style.backgroundColor = "#" + randomColor;
            });
        }
    }
    else{
        const whiteSelector = document.querySelectorAll('.square');
        for(let i = 0; i < whiteSelector.length; i++){
            whiteSelector[i].addEventListener('mouseover', function(){
                whiteSelector[i].style.backgroundColor = "white";
            });
        }
    }
}

function promptSize(){
    let size;
    do{
     size = parseInt(prompt("Input a size for the grid between 1 and 100: ", 16));
     if(isNaN(size) || size > 100 || size < 1){
        alert("Number must be between 1 and 100");
     }
    }
    while(isNaN(size) || size > 100 || size < 1);
    
    generateGrid(size);
}

function removeGrid(){
    const container = document.querySelector('#container');
    container.remove()
}

function changeGridSize(){
    removeGrid();
    promptSize();
}
const changebtn = document.querySelector('.change');
changebtn.addEventListener('click', changeGridSize);

function changeEraseMode(){
    if(this.value == "false"){
        this.value = "true";
        this.textContent = "Erase: ON";
        this.style.backgroundColor = "red";
        const whiteSelector = document.querySelectorAll('.square');
        for(let i = 0; i < whiteSelector.length; i++){
            whiteSelector[i].addEventListener('mouseover', function(){
                whiteSelector[i].style.backgroundColor = "white";
            });
        }
    }
    else{
        this.value = "false";
        this.textContent = "Erase: OFF";
        this.style.backgroundColor = "white";
        const squareSelector = document.querySelectorAll('.square');
        for(let i = 0; i < squareSelector.length; i++){
            squareSelector[i].addEventListener('mouseover', function(){
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                squareSelector[i].style.backgroundColor = "#" + randomColor;
            });
        }
    }
}

const erasebtn = document.querySelector('.erase');
erasebtn.addEventListener('click', changeEraseMode);
promptSize();