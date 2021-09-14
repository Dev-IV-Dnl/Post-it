let conteneur = document.querySelector('.conteneur');
let btnAjoutPostIt = document.querySelector("#btnAjoutPostIt");
let tabPostIt = [];
let action = "";
let numPostIt;
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
    document.body.addEventListener("mousemove", e=>{
        console.log(numPostIt);
        console.log(action);
        if(numPostIt!==undefined && action == "deplace"){
            tabPostIt[numPostIt].deplace(e.clientY-90, e.clientX-75);
            tabPostIt[numPostIt].affiche();
        }
        else if(numPostIt!==undefined && action == "agrandi"){
            tabPostIt[numPostIt].agrandi(e.clientX, e.clientY);
            tabPostIt[numPostIt].affiche();
        }
    })
});