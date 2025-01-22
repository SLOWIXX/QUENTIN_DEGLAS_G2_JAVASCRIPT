class Combattant {
  constructor(nom, pointsDeVie, attaque, precision) {
    this.nom = nom;
    this.pointsDeVie = pointsDeVie;
    this.attaque = attaque;
    this.precision = precision;
  }

  attaquer(adversaire) {
    if (Math.random() < this.precision) {
      adversaire.pointsDeVie -= this.attaque;
      console.log(
        `${this.nom} attaque ${adversaire.nom} et inflige ${this.attaque} points de dégâts.`
      );
    } else {
      console.log(`${this.nom} a raté son attaque sur ${adversaire.nom}.`);
    }
  }

  estVivant() {
    return this.pointsDeVie > 0;
  }
}

const combattant1 = new Combattant("Combattant 1", 100, 10, 0.7);
const combattant2 = new Combattant("Combattant 2", 100, 12, 0.6);

while (combattant1.estVivant() && combattant2.estVivant()) {
  combattant1.attaquer(combattant2);
  if (combattant2.estVivant()) {
    combattant2.attaquer(combattant1);
  }
}

if (combattant1.estVivant()) {
  console.log(
    `${combattant1.nom} a gagné le combat avec ${combattant1.pointsDeVie} points de vie restants.`
  );
} else {
  console.log(
    `${combattant2.nom} a gagné le combat avec ${combattant2.pointsDeVie} points de vie restants.`
  );
}
