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
                
                event.target.style.backgroundColor = "black";
            }, false )
            
            contSqr.appendChild(tempsqr);            
        }

    }

    // sizeBtn.addEventListener("click", setSize());

}


function setSize() {

    homeCont.removeChild(contSqr);

    let size = prompt("Enter a number:");

    console.log(size);

    // row = 1;
    // col = 1;
}

let div = document.createElement('div');
let row = 16;
let col = 16;



createDefaultGrid();
