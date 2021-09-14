class PostIt {
    num;
    x;
    y;
    longueur;
    hauteur;
    couleur;
    texte;

    constructor(num, x, y, couleur, texte, longueur = 150, hauteur = 150) {
        this.num = num;
        this.x = x;
        this.y = y;
        this.couleur = couleur;
        this.texte = texte;
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

    edit(texte) {
        this.texte = texte;
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

        // let monPostIt = document.createElement('div');
        // monPostIt.classList.add("postIt");
        // monPostIt.id = "PostIt" + this.num;

        monPostIt.style.top = this.x + "px";
        monPostIt.style.left = this.y + "px";
        monPostIt.style.width = this.longueur + "px";
        monPostIt.style.height = this.hauteur + "px";
        monPostIt.style.backgroundColor = this.couleur;
        monPostIt.textContent = this.texte;

        let tousLesBoutons = document.createElement('div');
        tousLesBoutons.classList.add("tousLesBoutons");
        monPostIt.appendChild(tousLesBoutons);

        // let btnDeplace = document.createElement('button');
        // btnDeplace.classList.add("btnDeplace");
        // tousLesBoutons.appendChild(btnDeplace);
        // btnDeplace.innerHTML = "<i class='fas fa-arrows-alt'></i>";

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
            }
            e.stopPropagation();
        })

        let btnEdit = document.createElement('button');
        btnEdit.classList.add("btnEdit");
        tousLesBoutons.appendChild(btnEdit);
        btnEdit.innerHTML = "<i class='fas fa-edit'></i>";

        let btnSupprime = document.createElement('button');
        btnSupprime.classList.add("btnEdit");
        tousLesBoutons.appendChild(btnSupprime);
        btnSupprime.innerHTML = "<i class='fas fa-trash'></i>";

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