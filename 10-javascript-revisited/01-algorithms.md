# ♟ Zadania algorytmiczne

**💡 UWAGA:** W katalogu z pracą domową utwórz katalog `01-algorithms` w którym umieścisz rozwiązanie do poniższych ćwiczeń. Dla każdego ćwiczenia utwórz osobny plik np. `01-challenge.js`, `02-challenge.js` itd. Nie musisz tworzyć plików HTML - uruchamiaj kod z plików `.js` w środowisku *Node.js* (np. `node 01-challenge.js`) i weryfikuj czy twój kod działa poprawnie.

## 🛠 Challenge 1 - Odwróć ciąg znaków *(do zdobycia: 0.5 pkt.)*

Przygotuj funkcję `reverseText` która przyjme w parametrze ciąg znaków i zwróci nowy ciąg znaków, który powstał w wyniku odwrócenia przekazanego argumentu. Dla uproszczenia przekazuj w argumencie pojedyncze słowo.

Ponadto, w ramach funkcji `reverseText` zweryfikuj, że przekazany argument jest typem *String* - jeśli nie jest to wyrzuć wyjątek.

Przykłady:

```javascript
reverseText("infoShare"); // => erahSofni
reverseText("iSA"); // => ASi
```

## 🛠 Challenge 2 - Walidator hasła *(do zdobycia: 0.5 pkt.)*

Twoim zadaniem będzie przygotowanie własnej funkcji-walidatora o nazwie `isPasswordCorrect` która sprawdzi czy:

- hasło ma przynajmniej 6 znaków
- zawiera przynajmniej jeden znak specjalny
- zawiera przynajmniej jedną liczbę

Funkcja powinna zwracać `true` dla poprawnego hasła i `false` dla hasła które nie spełnia wymagań.

Przykłady:

```javascript
isPasswordCorrect("infoShare"); // false
isPasswordCorrect("qwerty123"); // false
isPasswordCorrect("qwerty123!"); // true
```

## 🛠 Challenge 3 - Numer telefonu *(do zdobycia: 0.5 pkt.)*

Napisz funkcję `createPhoneNumber`, która przyjmie tablicę 10 liczb całkowitych (od 0 do 9), a następnie zwróci ciąg znaków reprezentujący te liczby w postaci numeru telefonu.

Przykład:

```javascript
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => "(123) 456-7890"
```

## 🛠 Challenge 4 - Przeplatanie cyfr *(do zdobycia: 0.5 pkt.)*

Zaimplementuj funkcję `interlace()`, która przyjmie dwa parametry będące liczbami i wykona na nich "przeplatanie", czyli używając kolejnych cyfr z parametrów funkcja `interlace` zwróci *string*, w ramach którego kolejne cyfry będą występować po sobie. Zwróć uwagę, że jeżeli jedna liczba będzie zawierać większą ilość cyfr, to ostatnie cyfry dłuższej liczby powinny znajdować się na końcu.

Przykłady:

```javascript
interlace(111, 999); // => '191919'
interlace(1234, 567); // => '1526374'
interlace(12, 5555); // => '152555'
```

## 🛠 Challenge 5 - Policz słowa *(do zdobycia: 0.5 pkt.)*

Napisz funkcję `countWordOccurrences`, która przyjmie ciąg znaków i zwróci obiekt, który będzie reprezentował ilość wystąpień każdego słowa w przekazanym *stringu*. 

Przykład:

```javascript
countWordOccurrences('JavaScript byl dla mnie skomplikowany a teraz JavaScript jest znacznie prostszy'); // => { javascript: 2, byl: 1, dla: 1, mnie: 1, skomplikowany: 1, a: 1, teraz: 1, jest: 1, znacznie: 1, prostszy: 1  }
```

## 🛠 Challenge 6 - Translator emoji *(do zdobycia: 0.5 pkt.)*

Zaimplementuj funkcję `emojiTranslator()`, która przyjmie parametr będący *stringiem*, a następnie funkcja ta powinna zwrócić zmodyfikowany ciąg znaków na wejściu, gdzie wybrane słowa będą zastąpione odpowiednim *emoji*. Zastąp wszystkie słowa parametru zgodnie z mapowaniem z obiektu `emojiMappings`:

```javascript
const emojiMappings = {
  frontend: '💻'
  close: '❌',
  infoShare: '🎓',
  ':D': '😀',
  ':)': '🙂',
  ':O': '😲',
  ':(': '🙁'
};
```

Przykłady:

```javascript
emojiTranslator('Jestem developerem! :frontend'); // => 'Jestem developerem! 💻'
emojiTranslator('Wyłącz komputer. :close'); // => 'Wyłącz komputer. ❌'
emojiTranslator('Kolejna dawka wiedzy! :infoShare'); // => 'Kolejna dawka wiedzy. 🎓'
emojiTranslator('Spróbuj wyłączyć i włączyć. :D Działa? :)'); // => 'Spróbuj wyłączyć i włączyć. 😀 Działa? 🙂'
emojiTranslator('Produkcja leży. :O Czy to moje zmiany? :('); // => 'Produkcja leży. 😲 Czy to moje zmiany? 🙁'
```

## 🛠 Challenge 7 - Hashtag Finder *(do zdobycia: 0.5 pkt.)*

Zaimplementuj funkcję `tagFinder` której zadaniem będzie wyszukiwanie hashtagów w zdaniu. Funkcja przyjmie jeden parametr będący ciągiem znaków i powinna zwrócić tablicę hashtagów.

Przykłady:

```js
tagFinder('Jestem w trakcie nauki #js #javascript'); // => ['js', 'javascript']
tagFinder('Nowa #focia na #instagram #yolo #polishgirl #couplegoals #kebs #hashtagtomojezycie'); // => ['focia', 'instagram', 'yolo', 'polishgirl', 'couplegoals', 'kebs', 'hashtagtomojezycie']
```

## 🛠 Challenge 8 - Konwertuj na *camelCase* *(do zdobycia: 0.5 pkt.)*

Zaimplementuj funkcję `toCamelCase` która przyjmie *string*, który będzie ciągiem znaków, gdzie każde słowa będą oddzielone albo myślnikiem (`-`) albo znakiem podkreślenia (`_`). Funkcja `toCamelCase` powinna konwertować otrzymany w parametrze ciag znaków i modyfikować go tak, aby był napisany *camelCase*.

Dodatkowo zwracany ciąg znaków powinien być pisany wielkimi literami tylko wtedy, gdy oryginalne słowo było pisane wielkimi literami.

Przykłady:

```javascript
toCamelCase('java_script'); // => javaScript
toCamelCase('Java-Script'); // => JavaScript
toCamelCase('asp_Net_Core'); // => aspNetCore
```

## 🛠 Challenge 9 - Szyfr Cezara *(do zdobycia: 0.5 pkt.)*

> **Szyfr Cezara** (zwany też **szyfrem przesuwającym**, **kodem Cezara** lub **przesunięciem Cezariańskim**) – jedna z najprostszych technik [szyfrowania](https://pl.wikipedia.org/wiki/Szyfr). Jest to rodzaj [szyfru podstawieniowego](https://pl.wikipedia.org/wiki/Szyfr_podstawieniowy), w którym każda litera [tekstu jawnego](https://pl.wikipedia.org/wiki/Tekst_jawny) (niezaszyfrowanego) zastępowana jest inną, oddaloną od niej o stałą liczbę pozycji w alfabecie, literą ([szyfr monoalfabetyczny](https://pl.wikipedia.org/wiki/Szyfr_monoalfabetyczny)), przy czym kierunek zamiany musi być zachowany. Nie rozróżnia się przy tym liter dużych i małych. Nazwa szyfru pochodzi od [Juliusza Cezara](https://pl.wikipedia.org/wiki/Gajusz_Juliusz_Cezar), który prawdopodobnie używał tej techniki do komunikacji ze swymi przyjaciółmi.
>
> [Algorytm](https://pl.wikipedia.org/wiki/Algorytm) szyfrowania zastosowany w kodzie Cezara bywa fragmentem bardziej złożonych systemów szyfrowania, takich jak [szyfr Vigenère’a](https://pl.wikipedia.org/wiki/Szyfr_Vigenère’a). Współcześnie szyfru Cezara używa się z przesunięciem 13 ([ROT13](https://pl.wikipedia.org/wiki/ROT13)), będącego prostym i szybkim sposobem na ukrycie treści. Obecnie szyfr Cezara, jak każda technika podmieniająca pojedyncze litery alfabetu na inne, nie oferuje żadnego bezpieczeństwa komunikacji.
>
> **ŹRÓDŁO:** *Wikipedia*

Twoim zadaniem będzie napisanie funkcji `caesarCipher` której zadaniem będzie zaszyfrowanie wiadomosci z wykorzystaniem przesunięcia ROT13. Funkcja `caesarCipher` jako parametr ma przyjmować ciąg znaków, a następnie zwracać zaszyfrowany ciąg znaków, przesunięty o 13 liter (bez uwzględnienia polskich znaków alfabetu). 

Dodatkowe wymagania:

- Funkcja `caesarCipher` powinna obsługiwać zarówno wielkie jak i małe litery.
- Jeżeli w ciągu znaków występują liczby - zostaw je bez zmian.
- Funkcja `caesarCipher` powinna zgłaszać błąd, kiedy przekazany argument nie jest ciągiem znaków lub ciąg znaków jest pusty.

Przykłady:

```javascript
caesarCipher('infoShare'); // => 'vasbFuner'
caesarCipher('Nauka JavaScriptu daje efekty'); // => 'Anhxn WninFpevcgh qnwr rsrxgl'
```

## 🛠 Challenge 10 - Współczynnik dwumianowy *(do zdobycia: 0.5 pkt.)*

Być może znasz pojęcie kombinacji: na przykład, jeśli weźmiesz 5 kart z talii 52 kart, tak jak w pokerze, możesz mieć pewną liczbę  różnych kombinacji (w tym przypadku dokładnie 2 598 960).

W matematyce liczba `k` kombinacji, które można uzyskać, biorąc ze zbioru  `n` elementów, jest nazywana współczynnikiem dwumianowym `n` i `k`, czy bardziej popularny sposób odczytu - ***n nad k***.

Wzór na jego obliczenie jest stosunkowo prosty: 

![img](./assets/binominal-coefficient-1.svg)

dla: ![img](./assets/binominal-coefficient-2.svg)

gdzie `!` oznacza oczywiście operator silnii.

Twoim zadaniem będzie utworzenie funkcji `binominalCoefficient` (współczynnik dwumianowy) która przyjmuje `n` i `k` i zwraca wartość współczynnika dwumianowego.

Przykłady:

```javascript
binominalCoefficient(1,1); // => 1
binominalCoefficient(10,2); // => 45
binominalCoefficient(10,5); // => 252
binominalCoefficient(52,5); // => 2598960
```

**Uwaga:** Jeżeli `k` będzie większe od `n` funkcja `binominalCoefficient` powinna zwrócić zero.



