let conteneur = document.querySelector('.conteneur');
let btnAjoutPostIt = document.querySelector("#btnAjoutPostIt");
let tabPostIt = [];

let numPostIt;

function createPostIt(){
    conteneur.innerHTML = "";
    tabPostIt.push(new PostIt(tabPostIt.length, 6, 6, "lightblue", "Ceci est un post-it !", 150, 150));
    for(let i in tabPostIt){
        tabPostIt[i].affiche();
    }
}

// let postIt1 = new PostIt(5, 5, "lightgreen", "Ceci est mon premier post-it", 200, 200);
// let postIt2 = new PostIt(5, 5, "lightblue", "Ceci est mon deuxième post-it, dans celui-ci j'aimerais écrire un de mes projets", 250, 250);

window.addEventListener('load', () => {
    btnAjoutPostIt.addEventListener("click", ()=>{
        createPostIt();
        conteneur.appendChild(btnAjoutPostIt);
    })
    document.addEventListener("mousemove", e=>{
        
    })
});