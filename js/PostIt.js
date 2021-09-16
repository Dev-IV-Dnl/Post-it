class PostIt {
    num;
    x;
    y;
    longueur;
    hauteur;
    couleur;
    contenu;

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

    agrandi(longueur, hauteur) {
        this.longueur = longueur;
        this.hauteur = hauteur;
    }

    edit(contenu) {
        this.contenu = contenu;
    }

    supprime() {
        numPostIt = this.num;
        // let lePostIt = document.getElementById("PostIt" + this.num);
        conteneur.removeChild(lePostIt);
        supprimePostIt();
    }

    affiche() {
        let newElem = false;
        //On essaye d'attraper le postIt par son id
        let monPostIt = document.getElementById("PostIt" + this.num);
        if (monPostIt === null) {
            //si le post it n'existe pas on le crée
            newElem = true;
            monPostIt = document.createElement("div");
            monPostIt.classList.add("postIt");
            monPostIt.id = "PostIt" + this.num;
        }

        monPostIt.style.top = this.x + "px";
        monPostIt.style.left = this.y + "px";
        monPostIt.style.width = this.longueur + "px";
        monPostIt.style.height = this.hauteur + "px";
        monPostIt.style.backgroundColor = this.couleur;
        monPostIt.textContent = this.contenu;

        let tousLesBoutons = document.createElement('div');
        tousLesBoutons.classList.add("tousLesBoutons");
        monPostIt.appendChild(tousLesBoutons);

        // let btnDeplace = document.createElement('button');
        // btnDeplace.classList.add("btnDeplace");
        // tousLesBoutons.appendChild(btnDeplace);
        // btnDeplace.innerHTML = "<i class='fas fa-arrows-alt'></i>";

        let btnEdit = document.createElement("button");
        btnEdit.classList.add("btnSupprime");
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

        // let btnEdit = document.createElement('i')
        // btnEdit.classList.add("fas", "fa-user-edit")
        // btnEdit.addEventListener('click', (e) => {
        //     if (numPostit !== this.num) {
        //         numPostit = this.num
        //         action = "edit"
        //     } else {
        //         numPostit = -1
        //         action = ""
        //     }
        //     e.stopPropagation()
        // })
        // menu.appendChild(btnEdit)

        let btnSupprime = document.createElement('button');
        btnSupprime.classList.add("btnSupprime");
        btnSupprime.innerHTML = "<i class='fas fa-trash'></i>";
        btnSupprime.addEventListener("click", (e) => {
            numPostIt = this.num;
            monPostIt.style.backgroundColor = "red";
            monPostIt.remove();
            delete tabPostIt[numPostIt];
            e.stopPropagation();
        })
        tousLesBoutons.appendChild(btnSupprime);

        let btnAgrandi = document.createElement('button');
        btnAgrandi.classList.add("btnAgrandi");
        tousLesBoutons.appendChild(btnAgrandi);
        btnAgrandi.innerHTML = "<i class='fas fa-expand-alt'></i>";
        btnAgrandi.addEventListener("click", (e) => {
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