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

//boucle afin de modifier la position de la balle et des raquettes toutes les 10 millisecondes
//les if servent à tester les collisions avec les bordures du terrain, et ainsi de faire rebondir la balle ou la laquette

/**
 * Boucle de jeu, permet d'actualiser le déplacement des raquettes et de la balle
 */
setInterval(function () {
    //appel de fonction des classes correspondant aux objets
    balle.bouger();

    raquetteGauche.bouger();
    raquetteDroite.bouger();
}, 10);


//Ouverture des listeners pour écouter quelles touchent sont utilisées
window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return
    }

    //Les touches sont detectées on va les bouger
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
    //Les touches sont detectées on va les arreter
    if (event.key === "a" || event.key === "q") {
        raquetteGauche.arret();
    }
    if (event.key === "p" || event.key === "m") {
        raquetteDroite.arret();
    }
    event.preventDefault();
}, true);