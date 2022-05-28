# 📦 Zadania - Operacje na strukturach danych

**💡 UWAGA:** W katalogu z pracą domową utwórz katalog `02-data-structures` w którym umieścisz rozwiązanie do poniższych ćwiczeń. Dla każdego ćwiczenia utwórz osobny plik np. `01-challenge.js`, `02-challenge.js` itd. Nie musisz tworzyć plików HTML - uruchamiaj kod z plików `.js` w środowisku *Node.js* (np. `node 01-challenge.js`) i weryfikuj czy twój kod działa poprawnie.

## 🛠 Challenge 1 - Suma, iloczyn, średnia i ekstrema *(do zdobycia: 0.5 pkt.)*

Przygotuj tablicę liczb, a następnie za pomocą pętli:

- Policz i wyświetl sumę liczb użytkownikowi
- Policz i wyświetl średnią liczb użytkownikowi
- Policz i wyświetl iloczyn liczb użytkownikowi
- Policz i wyświetl średnią liczb parzystych użytkownikowi
- Znajdź maksymalną liczbę i wyświetl użytkownikowi
- Znajdź minimalną liczbę i wyświetl użytkownikowi

## 🛠 Challenge 2 - Czy zostanę Junior Developerem? *(do zdobycia: 0.5 pkt.)*

Czy zostanę junior developerem? Trudne pytanie! Napisz funkcję, która pomoże rozwikłać tę zagadkę.

Wiemy, że żeby zostać junior developerem trzeba spełnić 2 warunki jednocześnie:

1. Przerobić odpowiednio dużo zadań (minimum 100)
2. Przepracować w czasie wolnym co najmniej 80h

Tablica `students` zawiera ilość aspirujących developerów, a obiekt `requirements` zawiera opisane wyżej wymagania:

```javascript
const students = [
  { name: "Zbigniew", tasksDone: 150, hoursSpent: 160 },
  { name: "Krystyna", tasksDone: 1, hoursSpent: 1 },
  { name: "Krzysztof", tasksDone: 100, hoursSpent: 80 },
  { name: "Seba", tasksDone: 200, hoursSpent: 40 },
  { name: "Dagmara", tasksDone: 50, hoursSpent: 100 },
];

const requirements = {
  minHoursSpent: 80,
  minTasksDone: 100,
};
```

Napisz funkcję `checkJuniorReq` - powinna ona zwracać string zawierający imiona osób którzy są na dobrej drodze do zostania Juniorem oraz osoby, które trzeba pogonić do pracy. Wynikowy kod może wyglądać następująco:

```javascript
"Mariusz, Alicja - gratulacje! Ciężka praca popłaca! Ewelina, Marek - DO ROBOTY LENIE!";
```

## 🛠 Challenge 3 - Najlepsze stopnie uczniów  *(do zdobycia: 0.5 pkt.)*

Utwórz funkcję `getStudentTopGrades`, która pobiera tablicę obiektów, gdzie każdy obiekt reprezentuje ucznia i jego oceny. Funkcja powinna zwrócić tablicę ich najwyższych ocen - każdy element tablicy powinien reprezentować najwyższą uzyskaną ocenę cząstkową danego studenta. Jeśli uczeń nie ma ocen, to przyjmijmy, że jego najwyższa ocena jest równa 0.

Przykład:

```javascript
getStudentTopGrades([
  {
    id: 1,
    name: "Jacek",
    grades: [5, 3, 4, 2, 5, 5]
  },
  {
    id: 2,
    name: "Ewa",
    grades: [2, 3, 3, 3, 2, 5]
  },
  {
    id: 3,
    name: "Zygmunt",
    grades: [2, 2, 4, 4, 3, 3]
  }
]) // => [5, 5, 4]
```

## 🛠 Challenge 4 - Studenci i grupy studenckie  *(do zdobycia: 0.5 pkt.)*

Utwórz funkcję `getGroupsWithStudents`, która przyjmuje dwa parametry będące tablicami. Tablice będą reprezentować kolejno informacje o grupie studenckiej i informacje o studentach. Funkcja powinna zwrócić jedną tablicę, gdzie grupy studentów zostaną połączone z studentami na podstawie identyfikatorów. 

**UWAGA:** Uczniowie w grupach powinni być uporządkowani w taki sam sposób, w jaki zostały uporządkowane identyfikatory uczniów w ramach grupy studenckiej (według klucza `studentIds`).

Przykład:

```javascript
getGroupsWithStudents([
  { 
    id: 1,
    name: "G1",
    studentIds: [2, 1]
  }
], [
  { 
    id: 1,
    name: "John"
  },
  {
    id: 2,
    name: "Steve"
  }
]) // => [
  //{ 
  //  id: 1,
  //  name: "G1",
  //  students: [
  //    {
  //      id: 2,
  //      name: "Steve"
  //    },
  //    { 
  //      id: 1, 
  //      name: "John"
  //    }
  //  ]
  //}
//]
```

## 🛠 Challenge 5 - Predykaty *(do zdobycia: 0.5 pkt.)*

Zaimplementuj funkcję `usePredicate()`, która jako parametr przyjmie tablicę elementów oraz tzw. predykat. **Predykat to funkcja wykorzystująca zestaw parametrów, która jako odpowiedź zwraca wartość logiczną.** Predykatem będzie funkcja która jako parametr przyjmie jeden element z podanej tablicy i zwróci dla niego wartość logiczną.

Funkcja `usePredicate` powinna zwrócić nową tablicę w której znajdą się tylko elementy spełniające określony przez predykat warunek.

Przykłady:

```javascript
usePredicate([1, 2, 3, 4, 5], element => element > 2) // => [3, 4, 5]
usePredicate(['a', 'b', 'c', 'd', 'e'], element => ['b', 'c'].includes(element)) // => ['b', 'c']
```

## 🛠 Challenge 6 - Płaska tablica *(do zdobycia: 0.5 pkt.)*

Przygotuj funkcję `flat` która przyjmie jeden parametr będący tablicą, która może zawierać zagnieżdżone tablice. Funkcja powinna zwrócić "płaską" (jednowymiarową) tablicę. Jeżeli w tablicy przekazanej na wejściu znajdują się wartości `null`, `undefined` lub powtórzone wartości to zadbaj o to, aby w wyjściowej tablicy te wartości nie wystąpiły.

Przykład:

```javascript
flat([1, [2, 3, undefined, 4, 2], [1, 'Dominik', null, 5], 3, ['Dominik', 6]]) // => [1, 2, 3, 4, 'Dominik', 5, 6]
```

## 🛠 Challenge 7 - Policz czas zajęć *(do zdobycia: 0.5 pkt.)*

Przygotuj funkcję `getModulesDuration`, która przyjmie tablicę obiektów, gdzie każdy obiekt będzie reprezentował czas trwania konkretnego modułu na kursie frontendowym. Funkcja `getModulesDuration` zwróci string który przedstawi czas trwania modułów HTML, CSS, JS na kursie:

```js
const course = [
  {
    id: 1,
    name: '[HTML] Narzędzia i podstawy składni',
    length: '03:00:00'
  },
  {
    id: 2,
    name: '[HTML] Semantyka i dostępność',
    length: '01:02:33'
  },
  {
    id: 3,
    name: '[CSS] Kaskada i precyzyjność selektorów',
    length: '02:30:00'
  },
  {
    id: 4,
    name: '[CSS] Box model i position',
    length: '01:00:12'
  },
  {
    id: 5,
    name: '[CSS] Flexbox',
    length: '01:11:33'
  },
    {
    id: 6,
    name: '[JS] Zmienne, stałe, funkcje, scope',
    length: '01:09:43'
  },
  {
    id: 7,
    name: '[JS] Wyrażenia i instrukcje warunkowe',
    length: '02:37:20'
  },
  {
    id: 8,
    name: '[JS] Funkcje wyższego rzędu i domknięcia',
    length: '01:30:42'
  },
  {
    id: 9,
    name: '[JS] Fetch API',
    length: '01:14:48'
  },
]
```

Funkcja `getModulesDuration` powinna zwrócić następujący ciąg znaków:

```
"Kurs Frontend trwa x godzin, y minut i z sekund.
Moduł HTML: ... godzin ... minut
Moduł CSS: ... godzin ... minut
Moduł JavaScript: ... godzin ... minut
```

## 🛠 Challenge 8 - Dodawanie tablic *(do zdobycia: 0.5 pkt.)*

Napisz funkcję `addArrays` która przyjmie dwa parametry będące tablicami liczb. Funkcja ta powinna zwracać liczbę będącą sumą elementów tablic.

Przykład:

```javascript
addArrays([1,2], [1,2]); // => 6
```

## 🛠 Challenge 9 - Recenzje filmowe *(do zdobycia: 0.5 pkt.)*

Napisz funkcję `organizeMovieReviews` która przyjmie dwa parametry:

- tablicę obiektów, gdzie każdy obiekt reprezentuje recenzję filmu
- tablicę `id` które reprezentują recenzje filmowe, które sam napisałeś

Funkcja `organizeMovieReviews` powinna zwracać obiekt który jasno określi które recenzję napisałeś Ty, a które recenzje pochodzą od innych recenzentów.

Przykład:

```javascript
organizeMovieReviews(
  [
    {
      id: 1,
      title: 'Avatar',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, corrupti',
    },
    {
      id: 2,
      title: 'Batman',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, corrupti',
    },
    {
      id: 3,
      title: 'Uncharted',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, corrupti',
    },
    {
      id: 4,
      title: 'The Godfather',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, corrupti',
    },
    {
      id: 5,
      title: 'Aquaman',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, corrupti',
    },
  ],
  [1, 3, 4],
)
// Funkcja powinna zwrócić:
{
  myReviews: [
    {
      id: 1,
      title: 'Avatar',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, corrupti'
    },
    {
      id: 3,
      title: 'Uncharted',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, corrupti'
    },
    {
      id: 4,
      title: 'The Godfather',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, corrupti'
    }
  ],
  otherReviews: [
    {
      id: 2,
      title: 'Batman',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, corrupti'
    },
    {
      id: 5,
      title: 'Aquaman',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, corrupti'
    }
  ]
}
```

## 🛠 Challenge 10 - Jak masz na imię złoczyńco?! *(do zdobycia: 0.5 pkt.)*

Napisz funkcję `getVillainName`, która jako parametr przyjmie obiekt daty i zwróci imię i nazwisko złego alter ego!!!👿

Skorzystaj z poniższego słownika:

```javascript
// Miesiąc -> Imię
January -> "The Evil"
February -> "The Vile"
March -> "The Cruel"
April -> "The Trashy"
May -> "The Despicable"
June -> "The Embarrassing"
July -> "The Disreputable"
August -> "The Atrocious"
September -> "The Twirling"
October -> "The Orange"
November -> "The Terrifying"
December -> "The Awkward"

// Ostatnia cyfra dnia miesiąca -> Nazwisko
0 -> "Mustache"
1 -> "Pickle"
2 -> "Hood Ornament"
3 -> "Raisin"
4 -> "Recycling Bin"
5 -> "Potato"
6 -> "Tomato"
7 -> "House Cat"
8 -> "Teaspoon"
9 -> "Laundry Basket"
```

Przykłady:

```javascript
getVillainName(new Date("May 3")); // => "The Despicable Raisin"
getVillainName(new Date("November 30")); // => "The Terrifying Mustache"
```

