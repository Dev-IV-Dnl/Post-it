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
        let monPostIt = document.createElement('div');
        monPostIt.classList.add("postIt");
        monPostIt.id = "PostIt" + this.num;
        conteneur.appendChild(monPostIt);
        monPostIt.style.marginTop = this.x + "px";
        monPostIt.style.marginLeft = this.y + "px";
        monPostIt.style.width = this.longueur + "px";
        monPostIt.style.height = this.hauteur + "px";
        monPostIt.style.backgroundColor = this.couleur;
        monPostIt.textContent = this.texte;

        let tousLesBoutons = document.createElement('div');
        tousLesBoutons.classList.add("tousLesBoutons");
        monPostIt.appendChild(tousLesBoutons);

        let btnDeplace = document.createElement('button');
        btnDeplace.classList.add("btnDeplace");
        tousLesBoutons.appendChild(btnDeplace);
        btnDeplace.innerHTML = "<i class='fas fa-arrows-alt'></i>";

        let btnAgrandi = document.createElement('button');
        btnAgrandi.classList.add("btnAgrandi");
        tousLesBoutons.appendChild(btnAgrandi);
        btnAgrandi.innerHTML = "<i class='fas fa-expand-alt'></i>";

        let btnEdit = document.createElement('button');
        btnEdit.classList.add("btnEdit");
        tousLesBoutons.appendChild(btnEdit);
        btnEdit.innerHTML = "<i class='fas fa-edit'></i>";

        monPostIt.addEventListener("click",()=> {
            numPostIt = this.num;
            console.log(numPostIt);
        })
    }
}