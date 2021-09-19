class PostIt {
    num;
    x;
    y;
    couleur;
    contenu;
    longueur;
    hauteur;

    constructor(num, x, y, couleur, contenu, longueur = 150, hauteur = 150) {
        this.num = num;
        this.x = x;
        this.y = y;
        this.couleur = couleur;
        this.contenu = contenu;
        this.longueur = longueur;
        this.hauteur = hauteur;
    }

    deplace(x, y) {
        this.x = x;
        this.y = y;
    }

    agrandir(longueur, hauteur) {
        this.longueur = longueur;
        this.hauteur = hauteur;
    }

    edit(contenu) {
        this.contenu = contenu;
    }

    supprimer() {
        numPostIt = this.num;
        // let lePostIt = document.getElementById("PostIt" + this.num);
        conteneur.removeChild(lePostIt);
        supprimerPostIt();
    }

    afficher() {
        let newElem = false;
        //On essaye d'attraper le postIt par son id
        let monPostIt = document.getElementById("PostIt" + this.num);
        if (monPostIt === null) {
            //si le post it n'existe pas on le crée
            newElem = true;
            monPostIt = document.createElement("div");
            monPostIt.classList.add("postIt");
            monPostIt.title = "Cliquez pour déplacer...";
            monPostIt.id = "PostIt" + this.num;
        }

        monPostIt.style.top = this.y + "px";
        monPostIt.style.left = this.x + "px";
        monPostIt.style.width = this.longueur + "px";
        monPostIt.style.height = this.hauteur + "px";
        monPostIt.style.backgroundColor = this.couleur;
        monPostIt.textContent = this.contenu;

        let tousLesBoutons = document.createElement('div');
        tousLesBoutons.classList.add("tousLesBoutons");
        monPostIt.appendChild(tousLesBoutons);


        //Gestion du bouton EDIT :
        let btnEdit = document.createElement("button");
        btnEdit.classList.add("btnSupprimer");
        btnEdit.title = "Editer ce Post-it...";
        btnEdit.innerHTML = "<i class='fas fa-edit'></i>"
        btnEdit.addEventListener("click", (e) => {
            if (numPostIt === this.num) {
                numPostIt = undefined;
                action = "";
            } else {
                numPostIt = this.num;
                action = "edit";
            }
            e.stopPropagation();
        })
        tousLesBoutons.appendChild(btnEdit);


        //Gestion du bouton Supprime :
        let btnSupprimer = document.createElement('button');
        btnSupprimer.classList.add("btnSupprimer");
        btnSupprimer.title = "Supprimer ce Post-it...";
        btnSupprimer.innerHTML = "<i class='fas fa-trash'></i>";
        btnSupprimer.addEventListener("click", (e) => {
            numPostIt = this.num;
            monPostIt.style.backgroundColor = "red";
            monPostIt.remove();
            delete tabPostIt[numPostIt];
            e.stopPropagation();
        })
        tousLesBoutons.appendChild(btnSupprimer);


        //Gestion du bouton Agrandir :
        let btnAgrandir = document.createElement('button');
        btnAgrandir.classList.add("btnAgrandi");
        btnAgrandir.title = "Agrandir ce Post-it...";
        tousLesBoutons.appendChild(btnAgrandir);
        btnAgrandir.innerHTML = "<i class='fas fa-expand-alt'></i>";
        btnAgrandir.addEventListener("click", (e) => {
            if (numPostIt === this.num) {
                numPostIt = undefined;
                action = "";
            } else {
                numPostIt = this.num;
                action = "agrandi";
                mousePositionorigineX = mousePosX;
                mousePositionorigineY = mousePosY;
                longueurInit = this.longueur;
                hauteurInit = this.hauteur;
            }
            e.stopPropagation();
        })

        if (newElem) {
            //si le post it n'existe pas on l'ajoute au document HTML
            conteneur.appendChild(monPostIt);
            monPostIt.addEventListener("click", (e) => {
                if (numPostIt === this.num) {
                    numPostIt = undefined;
                    action = "";
                } else {
                    numPostIt = this.num;
                    action = "deplace";
                }
                e.stopPropagation();
            })
        }
    }
}