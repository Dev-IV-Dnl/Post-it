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

//json parse et json stringify


// Console debug
setInterval(() => {
    document.querySelector('.debug').innerHTML = "| numpostit = " + numPostIt + "<br>| action = " + action + "<br>| pos souris X = " + mousePosX + "<br>| pos souris Y = " + mousePosY
}, 500);
// Fin console debug

let tabColor = ["lightblue", "lightgreen", "lightpink", "lightyellow", "lightseagreen", "lightgrey", "lightsalmon", "lightskyblue", "lightcoral"];
function createPostIt() {
    conteneur.innerHTML = "";
    tabPostIt.push(new PostIt(tabPostIt.length, 100, 200, tabColor[Math.floor(Math.random() * 9)], "Post-it : ", 150, 150));
    for (let i in tabPostIt) {
        tabPostIt[i].afficher();
    }

}

//Début fonctions pour les cookies

//Création d'un cookie
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

// fin fonctions pour les cookies

//Je crée une fonction cookie qui transforme mon tableau en cookie donc en chaine de caractère et je l'intègre dans une variable de mon choix
function cookie() {
    let mesPostItStringify = JSON.stringify({ tabPostIt });
    console.log(mesPostItStringify);
    createCookie("mesPostit", mesPostItStringify, 365);
}

window.addEventListener('load', () => {
    let lectureMesPostItStringify = readCookie("mesPostit");
    //Je frabrique une nouvelle variable qui permet de retransformer mon cookie précédemment créée en tableau de nouveau afin de pouvoir afficher grâce à ce nouveau tableau.
    let jsonParseMesPostIt = JSON.parse(lectureMesPostItStringify);
    if (jsonParseMesPostIt !== null) {
        for (let i in jsonParseMesPostIt.tabPostIt) {
           // console.log(jsonParseMesPostIt.tabPostIt);
            if(jsonParseMesPostIt.tabPostIt[i]!== null) {
                tabPostIt.push(new PostIt(i, jsonParseMesPostIt.tabPostIt[i].x, jsonParseMesPostIt.tabPostIt[i].y, jsonParseMesPostIt.tabPostIt[i].couleur, jsonParseMesPostIt.tabPostIt[i].contenu, jsonParseMesPostIt.tabPostIt[i].longueur, jsonParseMesPostIt.tabPostIt[i].hauteur));
                tabPostIt[tabPostIt.length-1].afficher();
            }
        }
    }

    setInterval(cookie, 1000);
    btnAjoutPostIt.addEventListener("click", () => {
        createPostIt();
    })
    document.addEventListener("mousemove", (e) => {
        mousePosX = e.clientX;
        mousePosY = e.clientY;
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

    //les commandes qui suivent définissent les évènement du clavier pour le mode édition
    document.addEventListener("keydown", (e) => {
        // console.log(e);
        if (numPostIt !== undefined && action == "edit") {
            if (e.key === "Shift" || e.key === "Control") { }
            else if (e.key === "Enter") {
                tabPostIt[numPostIt].edit(tabPostIt[numPostIt].contenu + "<br>");
                tabPostIt[numPostIt].afficher();
            }
            else if (e.key === "Backspace") {
                tabPostIt[numPostIt].edit(tabPostIt[numPostIt].contenu.substr(0, tabPostIt[numPostIt].contenu.length - 1));
                tabPostIt[numPostIt].afficher();
            }
            else {
                tabPostIt[numPostIt].edit(tabPostIt[numPostIt].contenu + e.key);
                tabPostIt[numPostIt].afficher();
            }
        }
    })

    // La commande qui suit permet de cliquez n'importe où pour sortir du mode édition et ne pas être obligé de recliquer sur ce bouton.
    document.addEventListener('click', () => {
        numPostit = "";
        action = "";
    })


});

