class Balle {
    /**
     * @param $html
     */
    constructor($html) {
        this.$element = $html;
        /**
         * @type {number}
         */
        this.hauteur = $html.height();
        /**
         * @type {number}
         */
        this.largeur = $html.width();
        /**
         * @type {number}
         */
        this.gauche = parseInt($html.css("left"));
        /**
         * @type {number}
         */
        this.haut = parseInt($html.css("top"));
        /**
         * @type {number}
         */
        this.vitesseX = 2;
        /**
         * @type {number}
         */
        this.vitesseY = 0.5;
        /**
         * @type {number}
         */
        this.angle = Math.random() * 2 * Math.PI;
    }

    /**
     * Le get permet d'otenir une valeur
     * @returns {number}
     */
    get bas() {
        return this.haut + this.hauteur;
    }

    /**
     * Le set permet d'initialiser une valeur
     * @param value
     */
    set bas(value) {
        this.haut = value - this.hauteur;
    }

    /**
     * Le get permet d'otenir une valeur
     * @returns {number}
     */
    get droite() {
        return this.gauche + this.largeur;
    }

    /**
     * Le set permet d'initialiser une valeur
     * @param value
     */
    set droite(value) {
        this.gauche = value - this.largeur;
    }

    bouger() {
        this.gauche += Math.cos(this.angle) * this.vitesseX;
        this.haut += Math.sin(this.angle) * this.vitesseY;

        this.rebonds();
        this.majHTML();
    }

    rebonds() {
        //droite
        if ((this.droite) > terrain.largeur) {
            terrain.tiltDroite();
            this.droite = terrain.largeur;
            this.vitesseX *= -1;
            this.recentrer();
        }
        //gauche
        if (this.gauche < 0) {
            terrain.tiltGauche();
            this.gauche = 0;
            this.vitesseX *= -1;
            this.recentrer();
        }
        //bas
        if (this.bas > terrain.hauteur) {
            terrain.tiltBas();
            this.bas = terrain.hauteur;
            this.vitesseY *= -1;
        }
        //haut
        if (this.haut < 0) {
            terrain.tiltHaut();
            this.haut = 0;
            this.vitesseY *= -1;
        }
        //Rebonds sur les raquettes
        //Gauche
        if(this.gauche < raquetteGauche.droite){ //si la balle dépasse à gauche de la raquette gauche
            if(this.bas > raquetteGauche.haut){ //et si la balle est plus basse que le haut de la raquette
                if(this.haut < raquetteGauche.bas){ // et si la balle est plus haute que le bas de la raquette
                    this.vitesseX *= -1;
                }
            }
        }
        //Droite
        if(this.droite > raquetteDroite.gauche){ //si la balle dépasse à droite la raquette droite
            if(this.bas > raquetteDroite.haut){ //et si la balle est plus basse que le haut de la raquette
                if(this.haut < raquetteDroite.bas){ // et si la balle est plus haute que le bas de la raquette
                    this.vitesseX *= -1;
                }
            }
        }
    }

    recentrer() {
        this.gauche = terrain.largeur / 2 - this.largeur / 2;
        this.haut = terrain.hauteur / 2 - this.hauteur / 2;
    }

    majHTML() {
        this.$element.css("left", balle.gauche);
        this.$element.css("top", balle.haut);
    }
}