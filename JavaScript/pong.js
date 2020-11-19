//Création de plusieurs objets
/**
 * @type {Terrain}
 */
let terrain = new Terrain($("#terrain"));
/**
 * @type {Balle}
 */
let balle = new Balle($("#balle"));
/**
 * @type {Raquette}
 */
let raquetteGauche = new Raquette($("#gauche"));
/**
 * @type {Raquette}
 */
let raquetteDroite = new Raquette($("#droite"));

/**
 * Boucle de jeu, permet d'actualiser le déplacement des raquettes et de la balle
 */
setInterval(function () {
    //Utilisation des fonctions présentes dans leurs classes respectives
    balle.bouger();

    raquetteGauche.bouger();
    raquetteDroite.bouger();
}, 10);


//Permet d'identifier sur quelle touche du clavier se passe l'appuie
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return
    }

    //Les touches bougent avec les appuies sur les touches respectives
    if (event.key === "a") {
        raquetteGauche.monter();
    }
    if (event.key === "q") {
        raquetteGauche.descendre();
    }
    if (event.key === "p") {
        raquetteDroite.monter();
    }
    if (event.key === "m") {
        raquetteDroite.descendre();
    }
    event.preventDefault();
}, true);


window.addEventListener("keyup", function (event) {
    if (event.defaultPrevented) {
        return
    }
    //Quand on relache les touches, les raquettes ne bougent plus
    if (event.key === "a" || event.key === "q") {
        raquetteGauche.arret();
    }
    if (event.key === "p" || event.key === "m") {
        raquetteDroite.arret();
    }
    event.preventDefault();
}, true);