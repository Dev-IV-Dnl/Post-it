let conteneur = document.querySelector('.conteneur');
let btnAjoutPostIt = document.querySelector("#btnAjoutPostIt");
let tabPostIt = [];
let numPostIt;
let action = "";
let mousePositionorigineX;
let mousePosX;
let mousePositionorigineY;
let mousePosY;
let longueurInit;
let hauteurInit;
let tabColor = ["lightblue", "lightgreen", "lightpink", "lightyellow"];
function createPostIt(){
    conteneur.innerHTML = "";
    tabPostIt.push(new PostIt(tabPostIt.length, 100, 200, tabColor[Math.floor(Math.random()*4)], "Ceci est un post-it !", 150, 150));
    
    for(let i in tabPostIt){
        tabPostIt[i].affiche();
    }
}

// let postIt1 = new PostIt(5, 5, "lightgreen", "Ceci est mon premier post-it", 200, 200);
// let postIt2 = new PostIt(5, 5, "lightblue", "Ceci est mon deuxième post-it, dans celui-ci j'aimerais écrire un de mes projets", 250, 250);

window.addEventListener('load', () => {
    btnAjoutPostIt.addEventListener("click", ()=>{
            createPostIt();
        })
    document.addEventListener("mousemove", e=>{
        mousePosX=e.clientX;
        mousePosY=e.clientY
        console.log(numPostIt);
        console.log(action);
        if(numPostIt!==undefined && action == "deplace"){
            tabPostIt[numPostIt].deplace(e.clientY-70, e.clientX-75);
            tabPostIt[numPostIt].affiche();
        }
        else if(numPostIt!==undefined && action == "agrandi"){
            tabPostIt[numPostIt].agrandi(e.clientX-mousePositionorigineX+longueurInit, e.clientY-mousePositionorigineY+hauteurInit);
            tabPostIt[numPostIt].affiche();
        }
    })
});