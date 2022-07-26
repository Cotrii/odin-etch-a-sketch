let cont = document.querySelector(".cont");

function createDefaultGrid(){

    for (let i = 0; i < 16; i++){
        for (let j = 0; j < 16; j++){
            // console.log("*");

            let tempsqr = document.createElement('div');   
    
            tempsqr.setAttribute("class", "sqr");

            tempsqr.addEventListener("mouseover", function(event) {
                
                event.target.style.backgroundColor = "black";
            }, false )
            
            cont.appendChild(tempsqr);            
        }

    }

}



createDefaultGrid();
