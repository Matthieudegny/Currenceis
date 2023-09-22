"use strict";
const dollar = {
    nom: "Dollar",
    code: "Dol",
    symbole: "$",
    taux: 1,
};
const euro = {
    nom: "Euro",
    code: "Eur",
    symbole: "€",
    taux: 1.2,
};
const livre = {
    nom: "Livre",
    code: "Liv",
    symbole: "£",
    taux: 1.39,
};
const yuan = {
    nom: "Yuan",
    code: "Yua",
    symbole: "&yen;",
    taux: 0.15,
};
const devises = [dollar, euro, livre, yuan];
const getDevise = (codeDevise, in_devises) => {
    for (let devise of in_devises) {
        if (codeDevise === devise.code) {
            return devise;
        }
    }
    return null;
};
const calculResultat = (in_montant, in_deviseInitValeur, in_deviseFinaleValeur) => {
    let deviseInitObjet = getDevise(in_deviseInitValeur, devises);
    let deviseFinaleObjet = getDevise(in_deviseFinaleValeur, devises);
    let deviseInit;
    if (deviseInitObjet)
        deviseInit = deviseInitObjet;
    else
        throw { message: "La devise initiale n'est pas correcte" };
    let deviseFinale;
    if (deviseFinaleObjet)
        deviseFinale = deviseFinaleObjet;
    else
        throw { message: "La devise finale n'est pas correcte" };
    return (montant * deviseInit.taux) / deviseFinale.taux;
};
const afficherResultat = () => {
    console.log("afficherResultat");
    divResultat.innerText = "Résultat : " + calculResultat(montant, deviseInitValeur, deviseFinaleValeur);
};
const genererListeOptionDevise = (in_devises) => {
    let listeDeviseTxt = "";
    for (let devise of in_devises) {
        listeDeviseTxt += `<option value="${devise.code}">${devise.nom} - (${devise.symbole})</option>`;
    }
    return listeDeviseTxt;
};
// ! === certifié non null
const deviseInitSelect = document.querySelector("#devise-initiale");
deviseInitSelect.innerHTML = genererListeOptionDevise(devises);
let deviseInitValeur = deviseInitSelect.value;
deviseInitSelect.addEventListener("change", () => {
    deviseInitValeur = deviseInitSelect.value;
    afficherResultat();
    console.log("Valeur devise initiale : " + deviseInitValeur);
});
const deviseFinaleSelect = document.querySelector("#devise-finale");
deviseFinaleSelect.innerHTML = genererListeOptionDevise(devises);
let deviseFinaleValeur = deviseFinaleSelect.value;
deviseFinaleSelect.addEventListener("change", () => {
    deviseFinaleValeur = deviseFinaleSelect.value;
    afficherResultat();
});
let montant;
const montantInput = document.querySelector("#montant");
montantInput.addEventListener("keyup", () => {
    montant = +montantInput.value;
    afficherResultat();
});
let divResultat = document.querySelector("#resultat");
