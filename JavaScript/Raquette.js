class Raquette{
    constructor($html){
        this.$html=$html;
        this.haut=parseInt($("#raquette1").css("top"));      
        this.hauteur=parseInt($("#raquette1").css("height"));
        this.hauteur=parseInt($("#raquette2").css("height"));
        this.haut=parseInt($("#raquette2").css("top"));
        this.vitesse=1;
    }

    monte(){
        this.vitesse=1;
    }

    descend(){
        this.vitesse=1;
    }

    get bas(){
        return this.haut+this.hauteur;
    }

    Fraquette(){ // Créer la fonction "Fraquette" dans la classe raquette.
        this.$html.css("top",raquette1.haut);
        this.$html.css("top",raquette2.haut);
    }

}

let raquette1 = new Raquette($("#raquette1")); //Création d'une raquette au sein de la classe "Raquette"
let raquette2 = new Raquette($("#raquette2")); //Création d'une raquette au sein de la classe "Raquette"
