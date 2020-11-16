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