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

    // // let size = prompt("Enter a number:");

    // // console.log(size);

    // // row = 1;
    // // col = 1;

    newGrid();

    // homeCont.appendChild(div);


}

function newGrid(){

    console.log("hello");
    let count = 0;

    for (let i = 0; i < 5; i++){
        for (let j = 0; j < 5; j++){
            // console.log("*");

            let tempsqr = document.createElement('div');   
    
            tempsqr.setAttribute("class", "sqr");

            tempsqr.setAttribute("background-color", "white");

            tempsqr.addEventListener("mouseenter", function(event) {
                
                event.target.style.backgroundColor = "red";
            }, false )
            
            div.appendChild(tempsqr);  
            
            count++;
        }

        console.log("count is" + count);

    }

    // sizeBtn.addEventListener("click", setSize());

}



createDefaultGrid();
