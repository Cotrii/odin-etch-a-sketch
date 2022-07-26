let contSqr = document.querySelector(".cont-sqr");
let sizeBtn = document.querySelector(".resizeBtn");

// contSqr.addEventListener("mouseover", function(event) {
//     event.target.style.backgroundColor = "black";
// }, false )

function createDefaultGrid(){

    console.log("hello");

    for (let i = 0; i < 16; i++){
        for (let j = 0; j < 16; j++){
            let tempsqr = document.createElement('div');   
    
            tempsqr.setAttribute("class", "sqr");

            tempsqr.addEventListener("mouseover", function(event) {
                event.target.style.backgroundColor = "black";
            }, false )
            
            contSqr.appendChild(tempsqr);            
        }

    }

}

function setSize() {

    while (contSqr.firstChild) {
        contSqr.removeChild(contSqr.firstChild);
    }


    let bool = false;
    let size;

    while (!bool){
        size = prompt("Enter a number:");

        let num = parseInt(size);

        if (num <= 100 && num > 0)
            bool = true;
    }

    newGrid(size);
}   

function newGrid(size){

    let temp = "repeat("; //string temp
    temp += (size + ",1fr)");


    if (contSqr instanceof HTMLElement){
        contSqr.style.gridTemplateRows = temp;
        contSqr.style.gridTemplateColumns = temp;
    }

    for (let i = 0; i < size; i++){
        for (let j = 0; j < size; j++){

            let tempsqr = document.createElement('div');   
    
            tempsqr.setAttribute("class", "sqr");
            tempsqr.setAttribute("background-color", "white");
            tempsqr.addEventListener("mouseenter", function(event) {
                event.target.style.backgroundColor = "black";
            }, false )
            
            contSqr.appendChild(tempsqr);  
        }
    }

}



createDefaultGrid();
