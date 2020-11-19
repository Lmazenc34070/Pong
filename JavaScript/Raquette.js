class Raquette {
    constructor($element) {

        this.$element = $element;
        /**
         *
         * @type {number}
         */
        this.hauteur = $element.height();
        /**
         *
         * @type {number}
         */
        this.largeur = $element.width();
        /**
         *
         * @type {number}
         */
        this.gauche = parseInt($element.css("left"));
        /**
         *
         * @type {number}
         */
        this.haut = parseInt($element.css("top"));
        /**
         *
         * @type {number}
         */
        this.direction = 0;
        /**
         *
         * @type {number}
         */
        this.vitesse = 3;
    }

    /**
     *
     * @returns {number}
     */
    get bas() {
        return this.haut + this.hauteur;
    }

    /**
     *
     * @param value
     */
    set bas(value) {
        this.haut = value - this.hauteur;
    }

    /**
     *
     * @returns {number}
     */
    get droite() {
        return this.gauche + this.largeur;
    }

    /**
     *
     * @param value
     */
    set droite(value) {
        this.gauche = value - this.largeur;
    }

    bouger() {
        this.haut += this.vitesse * this.direction;
        this.limite();
        this.majHTML();
    }

    monter() {
        this.direction = -1;
    }

    descendre() {
        this.direction = 1;
    }

    arret() {
        this.direction = 0;
    }

    majHTML() {
        this.$element.css("top", this.haut);
    }

    limite() {
        if (this.bas > terrain.hauteur) {
            this.bas = terrain.hauteur;
            this.arret();
        }
        if (this.haut < 0) {
            this.haut = 0;
            this.arret();
        }
    }
}