class Balle{ //Une classe sert seulement pour y répertorier des variables
    constructor($html){
        this.$html=$html;
        this.haut=parseInt($("#balle").css("top"));
        this.gauche=parseInt($("#balle").css("left"));
        this.vitesseX=Math.random()*2-1; // Va faire en sorte que la balle bouge aléatoirement en générant un chiffre aléatoire, en X.
        this.vitesseY=Math.random()*2-1; // Va faire en sorte que la balle bouge aléatoirement en générant un chiffre aléatoire, en Y.
        this.largeur=$('#balle').width(); // On récupère la largeur de la balle pour s'en servir plus tard
        this.hauteur=$("#balle").height(); // On récupère la l'hauteur de la balle pour s'en servir plus tard
    }
    majHTML(){ // Créer la fonction "majHTML" dans la class Balle.
        this.$html.css("left",balle.gauche);
        this.$html.css("top",balle.haut);
    }
}

let balle = new Balle($("#balle"));