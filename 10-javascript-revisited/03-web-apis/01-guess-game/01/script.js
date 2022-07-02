// Challenge 1 - Zgaduj zgadula (do zdobycia: 1 pkt.)
// Napisz grę z wykorzystaniem wiedzy z dzisiejszych zajęć. Celem gry jest wylosowanie tajnej liczby z zakresu od 1 do 10 przez komputer, a następnie pobieranie liczb od użytkownika (za pomocą metody window.prompt()) z tego zakresu.

// Każdy użytkownik ma trzy szanse i na początku każdej "tury" informujemy użytkownika o ilości szans jaką posiada. Po tym jak użytkownik wprowadzi liczbę imitujemy "myślenie" komputera, które powinno dać wrażenie użytkownikowi "sprawdzania liczby przez komputer" i po około dwóch sekundach powinniśmy użytkownika poinformować czy trafił wylosowaną liczbę. Jeśli tak to kończymy grę wyswietlając komunikat o wygranej, jeżeli użytkownik po trzech próbach nie trafił kończymy grę informując o porażce.

// Żeby ułatwić użytkownikowi odgadnięcie liczby wyświetlaj po każdej nieudanej próbie odgadnięcia komunikat, czy liczba którą przekazał jest "za duża" czy "za mała".

// Gra może wyglądać w ten sposób:

// img

// Podpowiedź: Do tego zadania może Ci się przydać rekurencja.

// function guessGame() {
//   const secretNumber = Math.floor(Math.random() * 10) + 1;
//   const maxAttempts = 3;
//   let attempts = 0;
//   let guess;
//   while (attempts < maxAttempts) {
//     guess = window.prompt(`Podaj liczbę z zakresu od 1 do 10`);
//     attempts++;
//     if (guess == secretNumber) {
//       alert(`Gratulacje, zgadłeś!`);
//       break;
//     } else if (guess > secretNumber) {
//       alert(`Liczba jest za duża`);
//     } else {
//       alert(`Liczba jest za mała`);
//     }
//   }
//   if (attempts == maxAttempts) {
//     alert(`Przegrałeś!`);
//   }
// }