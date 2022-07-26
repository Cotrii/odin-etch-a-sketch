let contSqr = document.querySelector(".cont-sqr");

let sizeBtn = document.querySelector(".size");

let homeCont = document.querySelector(".container");

function createDefaultGrid(){

    console.log("hello");

    for (let i = 0; i < 16; i++){
        for (let j = 0; j < 16; j++){
            // console.log("*");

            let tempsqr = document.createElement('div');   
    
            tempsqr.setAttribute("class", "sqr");

            tempsqr.addEventListener("mouseover", function(event) {
                
                event.target.style.backgroundColor = "red";
            }, false )
            
            contSqr.appendChild(tempsqr);            
        }

    }

    // sizeBtn.addEventListener("click", setSize());

}

let div = contSqr;
let row = 5;
let col = 5;

function setSize() {

    while (contSqr.firstChild) {
        contSqr.removeChild(contSqr.firstChild);
    }

    // homeCont.removeChild(contSqr);

    let size = prompt("Enter a number:");

    // // console.log(size);

    // // row = 1;
    // // col = 1;

    newGrid(size);

    // homeCont.appendChild(div);


}

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function newGrid(size){

    

    contSqr.style.gridTemplateRows = "repeat(6, 1fr)";
    contSqr.style.gridTemplateColumns = "repeat(6, 1fr)";


    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){
            // console.log("*");

            let tempsqr = document.createElement('div');   
    
            tempsqr.setAttribute("class", "sqr");

            tempsqr.setAttribute("background-color", "white");

            tempsqr.addEventListener("mouseenter", function(event) {
                
                event.target.style.backgroundColor = "black";
            }, false )
            
            div.appendChild(tempsqr);  
        
        }

    }

    // sizeBtn.addEventListener("click", setSize());

}



createDefaultGrid();
