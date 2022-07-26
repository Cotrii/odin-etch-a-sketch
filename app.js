

function createDefaultGrid(){

    let tempsqr = document.createElement('div');   
    
    tempsqr.setAttribute("class", "sqr");

    let cont = document.querySelector(".cont");


    for (let i = 0; i < 16; i++){
        for (let j = 0; j < 16; j++){
            // console.log("*");

            let tempsqr = document.createElement('div');   
    
            tempsqr.setAttribute("class", "sqr");

            cont.appendChild(tempsqr);            
        }
        console.log("\n");
    }
}

function permHover(){

    if ()
}

createDefaultGrid();