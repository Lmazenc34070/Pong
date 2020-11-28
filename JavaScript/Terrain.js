class Terrain {
    constructor($html) {
        this.$element = $html;
        /**
         * @type {number}
         */
        this.largeur = $html.width();
        /**
         * @type {number}
         */
        this.hauteur = $html.height();
    }
    tiltHaut() {
        //ajouter une classe
        this.$element.addClass("tiltHaut");
        let buffer = this;

        setTimeout(
            function () {
                //retirer une classe
                buffer.$element.removeClass("tiltHaut");
            }, 200
        );
    }

    tiltBas() {
        //ajouter une classe
        this.$element.addClass("tiltBas");
        let buffer = this;

        setTimeout(
            function () {
                //retirer une classe
                buffer.$element.removeClass("tiltBas");
            }, 200
        );
    }

    tiltDroite() {
        //ajouter une classe
        this.$element.addClass("tiltDroite");
        let buffer = this;

        setTimeout(
            function () {
                //retirer une classe
                buffer.$element.removeClass("tiltDroite");
            }, 200
        );
    }

    tiltGauche() {
        //ajouter une classe
        this.$element.addClass("tiltGauche");
        let buffer = this;

        setTimeout(
            function () {
                //retirer une classe
                buffer.$element.removeClass("tiltGauche");
            }, 200
        );
    }
}