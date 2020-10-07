const form = document.querySelector('.form-quizz');
let tableauResultats = [];
const reponses = ['c','a','b','a','c'];
const emojis = ['✔️','✨','👀','😭','👎'];

const titreResultat = document.querySelector('.resultats h2');
const noteResultat = document.querySelector('.note');
const aideResultat = document.querySelector('.aide');
const toutesLesQuestions = document.querySelectorAll('.question-block');

let verifTableau = [];


// DECLENCHE EVENEMENT SUBMIT
form.addEventListener('submit', (e) => {
    e.preventDefault(); // NE PAS ACTUALISER LA PAGE
    // console.log(document.querySelector('input[name="q1"]:checked').value);

    for(i = 1; i < 6; i++) {
        tableauResultats.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    // console.log(tableauResultats); // VOIR CE QUE L'ON RECUPERE
    verifFunc(tableauResultats);
    tableauResultats = []; // REMETTRE LE TABLEAU A VIDE
})


// VERIFICATION DU RESULTAT RECUPERE PAR RAPPORT AU REPONSE
function verifFunc(tabResultats) {

    for(let i = 0; i < 5; i++){

        if(tabResultats[i] === reponses[i]) {
            verifTableau.push(true);
        } else {
            verifTableau.push(false);
        }

    }

    // console.log(verifTableau);
    afficherResultats(verifTableau);
    couleursFonction(verifTableau);
    verifTableau = [];
}



function afficherResultats(tabCheck) {

    const nbDeFautes = tabCheck.filter(element => element !== true).length; // Créer un nouveau tableau avec les élement false
    // console.log(nbDeFautes);

    switch(nbDeFautes) {

        case 0:
            titreResultat.innerText = `${emojis[0]} Bravo, c'est un sans faute ! ✔️`; // templates string
            aideResultat.innerText = ''
            noteResultat.innerText = '5/5'
            break;
        case 1:
            titreResultat.innerText = `✨ Vous y êtes presque ! ✨`
            aideResultat.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !'
            noteResultat.innerText = '4/5'
            break;
        case 2:
            titreResultat.innerText = `✨ Encore un effort ... 👀`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '3/5'
            break;
        case 3:
            titreResultat.innerText = `👀 Il reste quelques erreurs. 😭`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '2/5'
            break;
        case 4:
            titreResultat.innerText = `😭 Peux mieux faire ! 😭`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '1/5'
            break;
        case 5:
            titreResultat.innerText = `👎 Peux mieux faire ! 👎`
            aideResultat.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !'
            noteResultat.innerText = '0/5'
        break;

        default:
            'Wops, cas innatendu.';

    }

}


// DEFINIR COULEUR EN FONCTION DES REPONSES
function couleursFonction(tabValBool) {

    for(let i = 0; i < tabValBool.length; i++){

        if(tabValBool[i] === true){
            toutesLesQuestions[i].style.background = 'lightgreen';
        } else {
            toutesLesQuestions[i].style.background = '#ffb8b8';
            toutesLesQuestions[i].classList.add('echec');

            setTimeout(() => {
                toutesLesQuestions[i].classList.remove('echec');
            }, 500)
        }
        
    }

}


// REMETTRE LES COULEURS DE BASE QUAND ON REVALIDE UNE REPONSE
toutesLesQuestions.forEach(item => {
    item.addEventListener('click', () => {
        item.style.background = "white";
    })
})











