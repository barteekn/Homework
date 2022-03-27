# Zadanie 6 - JS - operacje na kolekcjach

## Treść zadania
### Zadanie 1
1. Zadeklaruj w skrypcie tablicę zawierającą tablice obiektów ze studentami w postaci (min 5 studentów):
```js
const students = [
   {
      id: 1,
      pesel: '123456789',
      name: "Jacek Kowalski",
      notes: [5, 3, 4, 2, 5, 5]
   },
   {
      id: 2,
      pesel: '234567890',
      name: "Ewa Nowak",
      notes: [2, 3, 3, 3, 2, 5]
   },
   {
      id: 3,
      pesel: '345678901',
      name: "Zygmunt Lewandowski",
      notes: [2, 2, 4, 4, 3, 3]
   }
];
```

2. Utwórz funkcje: `getMaxNote` oraz `getMinNote`, przyjmującą argumenty: `TABLICA_STUDENTÓW`, `PESEL_STUDENTA` oraz `FUNKCJĘ CALLBACK` np.
   ```js
   const exampleFunction = (studentsArray, studnetId, cb) => {
      ...
      return cb();
   }
   ```

Rolą funkcji jest znajdowanie najmniejszej oraz największej oceny dla zadanego studenta.

3. Utwórz funkcję `displayInfo`, która będzie przekazywana do dowolnej funkcji, jako parametr `callback` oraz będzie wyświetlała na konsoli napis: `Max note for student Ewa Nowak is 5` / `Min note for student Ewa Nowak is 2`.
4. Uruchom funkcje: `getMaxNote` oraz `getMinNote` przekazując odpowiednie parametry oraz metodę `displayInfo` jako funkcję callback.


### Zadanie 2
1. Dla tablicy studentów, utworzonej w Zadaniu 1, utwórz funkcję: `displayStudents()`, która wyświetli na konsoli listę studentów w postaci: `Student Ewa Nowak, Pesel: 234567890`.
2. Wyświetlona lista studentów powinna być posortowana alfabetycznie rosnąco względem nazwiska studenta, np.
```js
Jacek Kowalski
Zygmunt Lewandowski
Ewa Nowak
```

## Założenia
1. Funkcję mogą być uruchamiane w konsoli przeglądarki.
2. Zadanie będzie testowane poprzez ręczne uruchomienie każdej funkcji.
3. Nazwy funkcji, pola obiektów, nazwy zmiennych i stałych powinny być zapisane po angielsku.
4. Wykorzystaj jak najwięcej metod znajdujących się w prototypie `String` (splice, slice...) oraz `Array` (sort, find, filter...)

## Punktacja
Łącznie możesz uzyskać 10pkt:
1. Zadanie 1 - 6pkt
2. Zadanie 2 - 4pkt

## Termin
Nienegocjowalnym terminem oddania zadania jest 20.02.2022, godzina 23:59.
