/**
 * ==========================================
 * 1. MANIPULATION DE CHAÎNES
 * ==========================================
 */

// A. Inverser une chaîne
function inverserChaine(str) {
  return str.split("").reverse().join("");
}

// B. Compter les caractères
function compterCaracteres(str) {
  return str.length;
}

// C. Mettre la première lettre de chaque mot en majuscule
function capitaliserMots(phrase) {
  return phrase
    .split(" ")
    .map((mot) => mot.charAt(0).toUpperCase() + mot.slice(1))
    .join(" ");
}

/**
 * ==========================================
 * 2. FONCTIONS SUR LES TABLEAUX
 * ==========================================
 */

// A. Trouver le maximum et le minimum
function trouverMax(arr) {
  return Math.max(...arr);
}

function trouverMin(arr) {
  return Math.min(...arr);
}

// B. Somme d'un tableau
function sommeTableau(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

// C. Filtrer un tableau selon une condition
function filtrerTableau(arr, conditionFn) {
  return arr.filter(conditionFn);
}

/**
 * ==========================================
 * 3. FONCTIONS MATHÉMATIQUES
 * ==========================================
 */

// A. Factorielle
function factorielle(n) {
  if (n < 0) return "Indéfini pour les nombres négatifs";
  if (n === 0 || n === 1) return 1;
  let resultat = 1;
  for (let i = 2; i <= n; i++) {
    resultat *= i;
  }
  return resultat;
}

// B. Vérification d'un nombre premier
function estPremier(n) {
  if (n <= 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// C. Suite de Fibonacci
function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}

/**
 * ==========================================
 * TESTS ET AFFICHAGES (CONSOLE .LOG)
 * ==========================================
 */

console.log("--- 1. CHAÎNES DE CARACTÈRES ---");
console.log("Inverser 'bonjour':", inverserChaine("bonjour"));
console.log("Caractères dans 'JavaScript':", compterCaracteres("JavaScript"));
console.log("Capitaliser:", capitaliserMots("bonjour tout le monde"));

console.log("\n--- 2. TABLEAUX ---");
var nombres = [4, 12, 1, 8, 25];
console.log("Tableau source:", nombres);
console.log("Maximum:", trouverMax(nombres));
console.log("Minimum:", trouverMin(nombres));
console.log("Somme:", sommeTableau(nombres));
console.log(
  "Nombres pairs (filtrés):",
  filtrerTableau(nombres, (n) => n % 2 === 0),
);

console.log("\n--- 3. MATHS ---");
console.log("Factorielle de 5 (!5):", factorielle(5));
console.log("Est-ce que 7 est premier ?", estPremier(7));
console.log("Est-ce que 4 est premier ?", estPremier(4));
console.log("Suite de Fibonacci (6 premiers termes):", fibonacci(6));
