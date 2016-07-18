//La méthode startsWith() renvoie un booléen indiquant si la chaine de caractères commence par la deuxième chaine de caractères fournie en argument.

var selectElementsStartingWithA = function(array) {
  function startingWithA(element) {
//La méthode charAt() renvoie le caractère à la position spécifiée.
    return element.charAt(0) === "a";
  }
  return array.filter(startingWithA);
}
var selectElementsStartingWithVowel = function(array) {
 var vowel = ["a", "e", "i", "o", "u", "y"];
 function startingWithVowel(element) {
   var firstChar = element.charAt(0);
   //La méthode indexOf() renvoie l'indice de la première occurence de la valeur cherchée au sein de la chaîne courante (à partir de indexDébut). Elle renvoie -1 si la valeur cherchée n'est pas trouvée
   return vowel.indexOf(firstChar) !== -1;
 }

//La méthode filter() crée et retourne un nouveau tableau contenant tous les éléments du tableau d'origine pour lesquels la fonction callback retourne true.
 return array.filter(startingWithVowel);
}

var removeNullElements = function(array) {
  function selectElements(element) {
    return element !== null;
  }
  return array.filter(selectElements);
}

var removeNullAndFalseElements = function(array) {
  function selectElements(element) {
    return element !== null && element !== false;
  }
  return array.filter(selectElements);
}
//La méthode reverse()transpose les éléments d'un tableau : le premier élément devient le dernier et le dernier devient le premier et ainsi de suite.
var reverseWordsInArray = function(array) {
  function reverseWords(element) {
   // La méthode split() permet de diviser une chaîne de caractères à partir d'un séparateur pour fournir un tableau de sous-chaînes.
   // La méthode reverse()transpose les éléments d'un tableau : le premier élément devient le dernier et le dernier devient le premier et ainsi de suite.
   //La méthode join() réunit tous les éléments d'un tableau dans une chaine de caractères.
      return element = element.split('').reverse().join('');
  }
  return array.map(reverseWords);
}
var everyPossiblePair = function(array) {
  var res =[];//on cree un tableau dans lequel on va stocker le resultat
  var copyOfArray = array.slice().reverse(); //on stocke dans une variable une copie du tableau inversé (découpé+inversé)

  for (var student1 of array) { //pour l'entrée 0 du tableau qui est stocké dans la variable student1,
    copyOfArray.pop();//on copie l'entrée à la fin de la copie du tableau
    for (var student2 of copyOfArray) { //pour l'entrée 1 du tableau qui est stocké dans la variable student2
      res.push([student1, student2].sort()); //on ajoute le resultat dans le tableau res avec push
    }
  }
  //La méthode sort() trie les éléments d'un tableau, dans ce même tableau, et renvoie le tableau. Le tri n'est pas forcément stable. Le tri s'effectue par défaut selon les points de code Unicode de la chaine de caractères.
  return res.sort();
};

//La méthode slice() renvoie un objet tableau, contenant une copie superficielle (shallow copy) d'une portion du tableau d'origine.//
var allElementsExceptFirstThree = function(array) {
  return array.slice(3);
}
//La méthode unshift() ajoute un ou plusieurs éléments au début d'un tableau et renvoie la nouvelle longueur du tableau.
var addElementToBeginning = function(array, element) {
  array.unshift(element);
  return array;
}

var sortByLastLetter = function(array) {
  function lastLetter(element1, element2) {
        var letter1 = element1[element1.length-1];
        var letter2 = element2[element2.length-1];

        if (letter1 > letter2) {
            return 1;
        }
        else if (letter1 < letter2) {
            return -1;
        }
        return 0;
    }
  return array.sort(lastLetter);
}

var getFirstHalf = function(string) {
  var lengthHalf = 0; // déclarer variable pour stocker la position de la moitié
  if (string.length%2 === 0) { // pour la longueur si le chiffre est pair
    lengthHalf = Math.floor(string.length/2);
  } else if (string.length%2 === 1) { // pour la longueur si le chiffre est impair
    lengthHalf = Math.floor(string.length/2) + 1; // ajouter un pour vraiment prendre en compte la moitié
  }
  return string.substring(0, lengthHalf); // retourne les caractères présents entre le début et la fin de la moitié
}


var makeNegative = function(number) {
  // transformer un nombre en chiffre négatif et qu'il le reste s'il l'était au départ
  // vérifier si le chiffre est négatif
  var verifNumber = Math.sign(number); // renvoie 1 ou -1
  if (verifNumber > 0) {
    return number * -1;
  } else {
    return number; // ne rien faire à number s'il est déjà négatif
  }
}


var numberOfPalindromes = function(array) {
  // créer un 2e tableau, pusher les éléments en reverse et les comparer au tableau initial
  var countPalindromes = 0,
      wordsReverse = array.slice(); // copie du tab Array dans wordsReverse

  function reverseStrings(element) { // fonction pour inverser les lettres
    element = element.split('').reverse().join('');
    return element;
  }
  wordsReverse = wordsReverse.map(reverseStrings); // lettres inversées

  for (var i = 0, c = array.length; i < c; i++) { // parcours et comparaison tableaux
    if (array[i] === wordsReverse[i]) {
      countPalindromes++; // incrémente seulement si les éléments sont identiques
    }
  }
  return countPalindromes;
}

var shortestWord = function(array) {
  function compareLength (element1, element2) { // compare élements du tableau ...
    return element1.length - element2.length;
  }
  var newArray = array.sort(compareLength); // ... et appliquer la méthode sort pour mettre dans l'ordre les mots les plus courts aux plus longs
  return newArray[0]; // afficher le premier élement (mot le + court)
}


var longestWord = function(array) { // compare élements du tableau ...
  function compareLength (element1, element2) {
    return element2.length - element1.length;
  }
  var newArray = array.sort(compareLength); // ... et appliquer la méthode sort pour mettre dans l'ordre les mots les plus longs aux plus courts
  return newArray[0]; // afficher le premier élément (mot le + long)
}

var sumNumbers = function(array) {
  return array.reduce(function(champion, challenger) {
    return champion + challenger;
  });
};


var repeatElements = function(array) {
  return array.concat(array);
}

var stringToNumber = function(string) {
  return parseFloat(string);
}

var calculateAverage = function(array) {
   // La méthode reduce() applique une fonction qui est un « accumulateur » et qui traite chaque valeur d'une liste (de la gauche vers la droite) afin de la réduire à une seule valeur.
  var total = array.reduce(function(a, b) {
      return (a + b);
    });
return total/array.length;
}
//var calculateAverage = function(array) {
  //var element = 0;
    //for (var i = 0, c = array.length; i < c; i++) { // additionner chaque élément du tableau
      //element += array[i];
    //}
  //return element/3; // diviser le total par 3
//}




var getElementsUntilGreaterThanFive = function(array) {
  function test(a) {
        return a > 5;
    }
    x = array.findIndex(test);
    array.splice(x, array.length-x);
    return array;
}

var convertArrayToObject = function(array) {
    var newObject = {};
    for (i = 0; i < array.length; i += 2) {
        newObject[array[i]] = array[i + 1];
    }
    return newObject;
};

var getAllLetters = function(array) {
    return 'Write your method here';
}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    return 'Write your method here';
}

var roundUp = function(number) {
    return 'Write your method here';
}

var formatDateNicely = function(date) {
    return 'Write your method here';
}

var getDomainName = function(string) {
    return 'Write your method here';
}

var titleize = function(string) {
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    return 'Write your method here';
}

var squareRoot = function(number) {
    return 'Write your method here';
}

var factorial = function(number) {
    return 'Write your method here';
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    return 'Write your method here';
}

var letterPosition = function(array) {
    return 'Write your method here';
}
