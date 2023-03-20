const secret = document.querySelector("#secret");
const titre = document.querySelector("#titre");
const cacher = document.querySelector("#cacher");
const ose = document.querySelector("#ose");
/**
 *initialisation des 5 variables constantes qui chacune représente le lien d’un bloque html
*/


let instruction = "activé";/**crée une variable activé */

secret.addEventListener("click", () => {
  if(instruction=="activé"){
    secret.classList.toggle(instruction);
    cacher.classList.toggle(instruction);
    ose.classList.toggle(instruction);
    /**si appuie sur l’image (il est possible d’appuyer dessus mais c’est compliqué au vu de sa taille lorsque le mode activé n’est point) le mode activé existe pour les 3 class 
     * et n’existe plus si rappuie
    */
  }
})
titre.addEventListener("click", () => {
  if(instruction=="activé"){
    secret.classList.toggle(instruction);
    cacher.classList.toggle(instruction);
    ose.classList.toggle(instruction);
    /**si appuie sur le titre le mode activé existe pour les 3 class 
     * et n’existe plus si rappuie sur le titre
    */

  }
})
/**
 * fin du script
 */