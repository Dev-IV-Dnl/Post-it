let conteneur = document.querySelector('.conteneur');
let btnAjoutPostIt = document.querySelector("#btnAjoutPostIt");
let tabPostIt = [];
let numPostIt;
let contenuPostIt;
let action = "";
let mousePositionorigineX;
let mousePosX;
let mousePositionorigineY;
let mousePosY;
let longueurInit;
let hauteurInit;
let tabColor = ["lightblue", "lightgreen", "lightpink", "lightyellow"];
function createPostIt() {
    conteneur.innerHTML = "";
    tabPostIt.push(new PostIt(tabPostIt.length, 100, 200, tabColor[Math.floor(Math.random() * 4)], "Click on Edit to write...", 150, 150));

    for (let i in tabPostIt) {
        tabPostIt[i].afficher();
    }
}

// Console debug
setInterval(() => {
    document.querySelector('.debug').innerHTML = "| numpostit = " + numPostIt + "<br>| action = " + action + "<br>| pos souris X = " + mousePosX + "<br>| pos souris Y = " + mousePosY
}, 500);
// Fin console debug

window.addEventListener('load', () => {
    btnAjoutPostIt.addEventListener("click", () => {
        createPostIt();
    })
    document.addEventListener("mousemove", (e) => {
        mousePosX = e.clientX;
        mousePosY = e.clientY;
        console.log(numPostIt);
        console.log(action);
        if (numPostIt !== undefined && action == "deplace") {

            tabPostIt[numPostIt].deplace(e.clientY - tabPostIt[numPostIt].hauteur / 2, e.clientX - tabPostIt[numPostIt].longueur / 2);
            tabPostIt[numPostIt].afficher();

        } else if (numPostIt !== undefined && action == "agrandi") {
            tabPostIt[numPostIt].agrandir(e.clientX - mousePositionorigineX + longueurInit, e.clientY - mousePositionorigineY + hauteurInit);
            tabPostIt[numPostIt].afficher();

        } else if (numPostIt !== undefined && action == "supprime") {
            tabPostIt[numPostIt].supprimer();

        }
    })

    document.addEventListener("keydown", (e) => {
        console.log(e);
        if(numPostIt !== undefined && action == "edit") {
            if (e.key === "Shift" || e.key === "Control") { }
            else if (e.key === "Enter") {
                tabPostIt[numPostIt].edit(tabPostIt[numPostIt].contenu + "<br>")
                tabPostIt[numPostIt].afficher()
            }
            else if (e.key === "Backspace") {
                tabPostIt[numPostIt].edit(tabPostIt[numPostIt].contenu.substr(0, tabPostIt[numPostIt].contenu.length - 1))
                tabPostIt[numPostIt].afficher()
            }
            else {
                tabPostIt[numPostIt].edit(tabPostIt[numPostIt].contenu + e.key)
                tabPostIt[numPostIt].afficher()
            }
        }
    })
});

// function supprimePostIt() {
//     tabPostIt.splice(numPostIt, 1);
// }