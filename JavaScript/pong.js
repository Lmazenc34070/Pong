class Terrain{
    constructor($html){ //constructor permet d'attribuer des valeurs à ce qu'il y a dans les paranthèses
        this.$html=$html; //$ désigne un élément JQuerie 
        // $element 
        this.largeur=$("#terrain").width(); // fait appel à l'élement css width de l'id terrain du css grâce au $
        this.hauteur=$("#terrain").height(); // on récupère/importe la valeur de la hauteur du terrain depuis le css
    }
}


let terrain=new Terrain($("#terrain")); //déclare la variable terrain prenant la valeur de la class Terrain ci-dessus à laquelle on associe les valeurs de la l'id terrain de la fiche css
console.log(terrain); //affiche les valeurs de la variable terrain dans la console du navigateur web

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

class Raquette1{
    constructor($html){
        this.$html=$html;
        this.haut=parseInt($("#raquette1").css("top"));      
        this.hauteur=parseInt($("#raquette1").css("height"));
        this.vitesse=1;
    }
    Fraquette1(){ // Créer la fonction "majHTML" dans la class raquette1.
        this.$html.css("top",raquette1.haut);
    }

}

class Raquette2{
    constructor($html){
        this.$html=$html;
        this.hauteur=parseInt($("#raquette2").css("height"));
        this.haut=parseInt($("#raquette2").css("top"));
        this.vitesse=1;
    }
    Fraquette2(){
        this.$html.css("top",raquette2.haut);
    }
}

let raquette1 = new Raquette1($("#raquette1")); //Création d'une raquette au sein de la classe "Raquette1"
let raquette2 = new Raquette2($("#raquette2")); //Création d'une raquette au sein de la classe "raquette2"

setInterval(function(){
    balle.gauche=balle.gauche+balle.vitesseX; //Si la balle sort pars la gauche
    balle.haut=balle.haut+balle.vitesseY; //Donne un mouvement à la balle vers le bas en fonction de la vitesse
    
    //On enlève balle.largeur afin de faire rebondire la balle convenablement sur la droite du terrain.
    if(balle.gauche>terrain.largeur-balle.largeur){ //Si la balle sort pars la droite
        balle.gauche=terrain.largeur-balle.largeur; 
        balle.vitesseX=balle.vitesseX*-1;
    }

    if(balle.gauche<0){ //Si la balle sort pars la gauche.
        balle.gauche=0;
        balle.vitesseX=balle.vitesseX*-1;
    }

    //On enlève balle.largeur afin de faire rebondire la balle convenablement sur le bas du terrain
    if(balle.haut>terrain.hauteur-balle.hauteur){ //Si la balle sort pars le bas.
        balle.haut=terrain.hauteur-balle.hauteur;
        balle.vitesseY=balle.vitesseY*-1;
    }

    if(balle.haut<0){ //Si la balle sort pars le haut.
        balle.haut=0;
        balle.vitesseY=balle.vitesseY*-1;
    }

    //Donne un mouvement aux raquettes en fonction de la vitesse.
    raquette1.haut=raquette1.haut+raquette1.vitesse;
    raquette2.haut=raquette2.haut+raquette2.vitesse;

    if(raquette1.haut>terrain.hauteur-raquette1.hauteur){ //Si la raquette de gauche sort par le bas.
        raquette1.haut=terrain.hauteur-raquette1.hauteur; // Utilisation de la haueteur de la raquette afin que le rebond soit pris en compte au premier contact
        raquette1.vitesse=raquette1.vitesse*-1;
    }

    if(raquette1.haut<0){
        raquette1.haut=0;
        raquette1.vitesse=raquette1.vitesse*-1;
    }

    if(raquette2.haut>terrain.hauteur-2*raquette2.hauteur){
        raquette2.haut=terrain.hauteur-2*raquette2.hauteur;// Utilisation de la haueteur de la raquette afin que le rebond soit pris en compte au premier contact
        raquette2.vitesse=raquette2.vitesse*-1;
    }

    if(raquette2.haut<0-raquette2.hauteur){
        raquette2.haut=0-raquette2.hauteur;
        raquette2.vitesse=raquette2.vitesse*-1;
    }
    
    balle.majHTML();
    raquette1.Fraquette1();
    raquette2.Fraquette2();

}, 10);