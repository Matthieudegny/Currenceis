type DeviseType = {
  nom: string;
  code: string;
  symbole: string;
  taux: number; //Taux de conversion vers le dollar
};

const dollar: DeviseType = {
  nom: "Dollar",
  code: "Dol",
  symbole: "$",
  taux: 1,
};

const euro: DeviseType = {
  nom: "Euro",
  code: "Eur",
  symbole: "€",
  taux: 1.2,
};

const livre: DeviseType = {
  nom: "Livre",
  code: "Liv",
  symbole: "£",
  taux: 1.39,
};

const yuan: DeviseType = {
  nom: "Yuan",
  code: "Yua",
  symbole: "&yen;",
  taux: 0.15,
};

const devises: DeviseType[] = [dollar, euro, livre, yuan];
console.log(devises);
